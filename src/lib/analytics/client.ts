'use client';

const VISITOR_KEY = 'amayno_vid';
const SESSION_KEY = 'amayno_sid';

export function getVisitorId() {
  if (typeof window === 'undefined') return '';
  try {
    let id = localStorage.getItem(VISITOR_KEY);
    if (!id) {
      id = `v-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
      localStorage.setItem(VISITOR_KEY, id);
    }
    return id;
  } catch {
    return '';
  }
}

export function getSessionId() {
  if (typeof window === 'undefined') return '';
  try {
    let id = sessionStorage.getItem(SESSION_KEY);
    if (!id) {
      id = `s-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
      sessionStorage.setItem(SESSION_KEY, id);
    }
    return id;
  } catch {
    return '';
  }
}

export function analyticsHeaders(): Record<string, string> {
  const headers: Record<string, string> = {};
  const visitorId = getVisitorId();
  const sessionId = getSessionId();
  if (visitorId) headers['X-Amayno-Visitor'] = visitorId;
  if (sessionId) headers['X-Amayno-Session'] = sessionId;
  return headers;
}

export async function trackAnalyticsEvent(payload: Record<string, unknown>) {
  try {
    await fetch('/api/analytics/event', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...analyticsHeaders() },
      body: JSON.stringify({
        visitorId: getVisitorId(),
        sessionId: getSessionId(),
        referrer: typeof document !== 'undefined' ? document.referrer : undefined,
        ...payload,
      }),
      keepalive: true,
    });
  } catch {
    /* never block UX */
  }
}
