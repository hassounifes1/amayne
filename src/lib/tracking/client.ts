'use client';

import { trackingConfig } from '@/lib/tracking/config';
import type { LeadPayload, TrackingEventName } from '@/lib/tracking/types';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

function hasFbq() {
  return typeof window !== 'undefined' && typeof window.fbq === 'function';
}

function hasGtag() {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
}

function metaEvent(eventName: TrackingEventName, payload: LeadPayload) {
  if (!hasFbq()) return;

  const customData: Record<string, unknown> = {
    currency: payload.currency || 'MAD',
    value: payload.value,
    content_name: payload.productName,
    content_ids: payload.productSlug ? [payload.productSlug] : undefined,
    content_type: 'product',
    num_items: payload.quantity || 1,
  };

  window.fbq!('track', eventName, customData, { eventID: payload.eventId });
}

function googleEvent(eventName: TrackingEventName, payload: LeadPayload) {
  if (!hasGtag()) return;

  const base = {
    currency: payload.currency || 'MAD',
    value: payload.value,
    transaction_id: payload.orderId,
  };

  if (eventName === 'ViewContent') {
    window.gtag!('event', 'view_item', {
      ...base,
      items: payload.productSlug
        ? [{ item_id: payload.productSlug, item_name: payload.productName, price: payload.value, quantity: payload.quantity || 1 }]
        : undefined,
    });
    return;
  }

  if (eventName === 'InitiateCheckout') {
    window.gtag!('event', 'begin_checkout', base);
    return;
  }

  if (eventName === 'Lead') {
    window.gtag!('event', 'generate_lead', base);
  }

  if (eventName === 'Purchase') {
    window.gtag!('event', 'purchase', {
      ...base,
      items: payload.items?.map(item => ({
        item_id: item.slug,
        item_name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
    });
  }

  const { googleAdsId, googleAdsConversionLabel } = trackingConfig;
  if (googleAdsId && googleAdsConversionLabel && (eventName === 'Lead' || eventName === 'Purchase')) {
    window.gtag!('event', 'conversion', {
      send_to: `${googleAdsId}/${googleAdsConversionLabel}`,
      value: payload.value,
      currency: payload.currency || 'MAD',
      transaction_id: payload.orderId,
    });
  }
}

/** Fire browser pixel / gtag events. */
export function trackClientEvent(payload: LeadPayload) {
  metaEvent(payload.eventName, payload);
  googleEvent(payload.eventName, payload);
}

/** Browser + server (CAPI / webhook) for leads & purchases. */
export async function trackLead(payload: LeadPayload) {
  trackClientEvent(payload);

  try {
    await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true,
    });
  } catch {
    // Never block checkout if tracking fails.
  }
}

export function createEventId() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `amy-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

export function markTracked(key: string) {
  try {
    sessionStorage.setItem(key, '1');
  } catch {
    /* ignore */
  }
}

export function wasTracked(key: string) {
  try {
    return sessionStorage.getItem(key) === '1';
  } catch {
    return false;
  }
}
