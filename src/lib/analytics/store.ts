import { promises as fs } from 'fs';
import path from 'path';
import type { AnalyticsEvent, AnalyticsStore } from './types';

const MAX_EVENTS = 50_000;
const RETENTION_DAYS = 90;

function getDataDir() {
  return process.env.ANALYTICS_DATA_DIR?.trim() || path.join(process.cwd(), 'data');
}

function getDataFile() {
  return path.join(getDataDir(), 'analytics.json');
}

let writeQueue: Promise<void> = Promise.resolve();

async function ensureStore(): Promise<AnalyticsStore> {
  const dir = getDataDir();
  const file = getDataFile();
  await fs.mkdir(dir, { recursive: true });
  try {
    const raw = await fs.readFile(file, 'utf8');
    const parsed = JSON.parse(raw) as AnalyticsStore;
    if (parsed && Array.isArray(parsed.events)) return parsed;
  } catch {
    /* create new */
  }
  const empty: AnalyticsStore = { events: [], updatedAt: new Date().toISOString() };
  await fs.writeFile(file, JSON.stringify(empty), 'utf8');
  return empty;
}

function trimEvents(events: AnalyticsEvent[]): AnalyticsEvent[] {
  const cutoff = Date.now() - RETENTION_DAYS * 24 * 60 * 60 * 1000;
  const filtered = events.filter(e => new Date(e.ts).getTime() >= cutoff);
  if (filtered.length > MAX_EVENTS) {
    return filtered.slice(filtered.length - MAX_EVENTS);
  }
  return filtered;
}

export async function readEvents(): Promise<AnalyticsEvent[]> {
  const store = await ensureStore();
  return store.events;
}

export async function appendEvent(event: AnalyticsEvent): Promise<void> {
  writeQueue = writeQueue.then(async () => {
    const store = await ensureStore();
    store.events = trimEvents([...store.events, event]);
    store.updatedAt = new Date().toISOString();
    await fs.writeFile(getDataFile(), JSON.stringify(store), 'utf8');
  });
  await writeQueue;
}

export function createEventId() {
  return `evt-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;
}

export async function recordFromLeadPayload(payload: {
  eventName: string;
  orderId: string;
  value: number;
  currency?: string;
  name?: string;
  phone?: string;
  city?: string;
  productSlug?: string;
  productName?: string;
  quantity?: number;
  items?: AnalyticsEvent['items'];
  visitorId?: string;
  sessionId?: string;
  path?: string;
  referrer?: string;
  userAgent?: string;
}) {
  const allowed = ['Lead', 'Purchase', 'InitiateCheckout', 'ViewContent'];
  if (!allowed.includes(payload.eventName)) return;

  await appendEvent({
    id: createEventId(),
    type: payload.eventName as AnalyticsEvent['type'],
    ts: new Date().toISOString(),
    visitorId: payload.visitorId,
    sessionId: payload.sessionId,
    path: payload.path,
    referrer: payload.referrer,
    userAgent: payload.userAgent,
    orderId: payload.orderId,
    value: payload.value,
    currency: payload.currency || 'MAD',
    name: payload.name,
    phone: payload.phone,
    city: payload.city,
    productSlug: payload.productSlug,
    productName: payload.productName,
    quantity: payload.quantity,
    items: payload.items,
  });
}
