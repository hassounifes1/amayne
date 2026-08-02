import { createHash } from 'crypto';
import { serverTrackingConfig } from '@/lib/tracking/config';
import type { LeadPayload } from '@/lib/tracking/types';

function sha256(value: string) {
  return createHash('sha256').update(value.trim().toLowerCase()).digest('hex');
}

function normalizePhone(phone: string) {
  const digits = phone.replace(/\D/g, '');
  if (digits.startsWith('212')) return digits;
  if (digits.startsWith('0')) return `212${digits.slice(1)}`;
  return digits;
}

function hashUserData(payload: LeadPayload) {
  const userData: Record<string, string[]> = {};

  if (payload.phone) {
    userData.ph = [sha256(normalizePhone(payload.phone))];
  }

  if (payload.name) {
    const first = payload.name.trim().split(/\s+/)[0];
    if (first) userData.fn = [sha256(first)];
  }

  if (payload.city) {
    userData.ct = [sha256(payload.city.replace(/\s+/g, ''))];
  }

  return userData;
}

async function sendMetaCapi(payload: LeadPayload) {
  const { metaCapiToken, metaPixelId } = serverTrackingConfig;
  if (!metaCapiToken || !metaPixelId) return { ok: false, skipped: true };

  const body = {
    data: [
      {
        event_name: payload.eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: payload.eventId,
        action_source: 'website',
        event_source_url: payload.sourceUrl,
        user_data: hashUserData(payload),
        custom_data: {
          currency: payload.currency || 'MAD',
          value: payload.value,
          order_id: payload.orderId,
          content_name: payload.productName,
          content_ids: payload.productSlug ? [payload.productSlug] : undefined,
        },
      },
    ],
    access_token: metaCapiToken,
  };

  const res = await fetch(`https://graph.facebook.com/v21.0/${metaPixelId}/events`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  const json = await res.json().catch(() => ({}));
  return { ok: res.ok, status: res.status, json };
}

async function sendLeadWebhook(payload: LeadPayload) {
  const { leadWebhookUrl, leadWebhookSecret } = serverTrackingConfig;
  if (!leadWebhookUrl) return { ok: false, skipped: true };

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'User-Agent': 'AMAYNO-Store/1.0',
  };
  if (leadWebhookSecret) {
    headers['X-Webhook-Secret'] = leadWebhookSecret;
  }

  const res = await fetch(leadWebhookUrl, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      source: 'amayno-store',
      ...payload,
      sentAt: new Date().toISOString(),
    }),
  });

  return { ok: res.ok, status: res.status };
}

export async function dispatchLeadServerSide(payload: LeadPayload) {
  const [meta, webhook] = await Promise.all([
    sendMetaCapi(payload),
    sendLeadWebhook(payload),
  ]);

  return { meta, webhook };
}
