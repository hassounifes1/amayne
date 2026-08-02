import { NextRequest, NextResponse } from 'next/server';
import { dispatchLeadServerSide } from '@/lib/tracking/server';
import { isServerTrackingEnabled } from '@/lib/tracking/config';
import type { LeadPayload, TrackingEventName } from '@/lib/tracking/types';

const ALLOWED_EVENTS: TrackingEventName[] = ['Lead', 'Purchase', 'InitiateCheckout', 'ViewContent'];

function sanitizePayload(body: unknown): LeadPayload | null {
  if (!body || typeof body !== 'object') return null;
  const data = body as Record<string, unknown>;

  const eventName = data.eventName as TrackingEventName;
  if (!ALLOWED_EVENTS.includes(eventName)) return null;

  const eventId = String(data.eventId || '').trim();
  const orderId = String(data.orderId || '').trim();
  if (!eventId || !orderId) return null;

  const value = Number(data.value);
  if (!Number.isFinite(value) || value < 0) return null;

  return {
    eventName,
    eventId,
    orderId,
    value,
    currency: String(data.currency || 'MAD'),
    name: data.name ? String(data.name).slice(0, 120) : undefined,
    phone: data.phone ? String(data.phone).slice(0, 32) : undefined,
    city: data.city ? String(data.city).slice(0, 80) : undefined,
    productSlug: data.productSlug ? String(data.productSlug).slice(0, 80) : undefined,
    productName: data.productName ? String(data.productName).slice(0, 160) : undefined,
    quantity: data.quantity ? Number(data.quantity) : undefined,
    sourceUrl: data.sourceUrl ? String(data.sourceUrl).slice(0, 500) : undefined,
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
  };
}

export async function POST(request: NextRequest) {
  if (!isServerTrackingEnabled()) {
    return NextResponse.json({ ok: true, skipped: true, reason: 'tracking_not_configured' });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  const payload = sanitizePayload(body);
  if (!payload) {
    return NextResponse.json({ ok: false, error: 'invalid_payload' }, { status: 400 });
  }

  if (!payload.sourceUrl) {
    payload.sourceUrl = request.headers.get('referer') || undefined;
  }

  const result = await dispatchLeadServerSide(payload);
  return NextResponse.json({ ok: true, result });
}
