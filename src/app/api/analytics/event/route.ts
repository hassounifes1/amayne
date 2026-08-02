import { NextRequest, NextResponse } from 'next/server';
import { detectDevice } from '@/lib/analytics/device';
import { appendEvent, createEventId } from '@/lib/analytics/store';
import type { AnalyticsEventType } from '@/lib/analytics/types';

const ALLOWED: AnalyticsEventType[] = [
  'page_view',
  'ViewContent',
  'InitiateCheckout',
  'AddToCart',
];

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  if (!body || typeof body !== 'object') {
    return NextResponse.json({ ok: false, error: 'invalid_body' }, { status: 400 });
  }

  const data = body as Record<string, unknown>;
  const type = String(data.type || '') as AnalyticsEventType;
  if (!ALLOWED.includes(type)) {
    return NextResponse.json({ ok: false, error: 'invalid_type' }, { status: 400 });
  }

  const userAgent = request.headers.get('user-agent') || undefined;
  const referrer =
    (data.referrer ? String(data.referrer).slice(0, 500) : undefined) ||
    request.headers.get('referer') ||
    undefined;

  await appendEvent({
    id: createEventId(),
    type,
    ts: new Date().toISOString(),
    visitorId: data.visitorId ? String(data.visitorId).slice(0, 64) : undefined,
    sessionId: data.sessionId ? String(data.sessionId).slice(0, 64) : undefined,
    path: data.path ? String(data.path).slice(0, 300) : undefined,
    referrer,
    userAgent,
    device: detectDevice(userAgent),
    orderId: data.orderId ? String(data.orderId).slice(0, 80) : undefined,
    value: data.value != null ? Number(data.value) : undefined,
    currency: data.currency ? String(data.currency).slice(0, 8) : 'MAD',
    productSlug: data.productSlug ? String(data.productSlug).slice(0, 80) : undefined,
    productName: data.productName ? String(data.productName).slice(0, 160) : undefined,
    quantity: data.quantity != null ? Number(data.quantity) : undefined,
    items: Array.isArray(data.items)
      ? data.items.slice(0, 20).map(item => {
          const row = item as Record<string, unknown>;
          return {
            slug: String(row.slug || ''),
            name: String(row.name || ''),
            quantity: Number(row.quantity) || 1,
            price: Number(row.price) || 0,
          };
        })
      : undefined,
  });

  return NextResponse.json({ ok: true });
}
