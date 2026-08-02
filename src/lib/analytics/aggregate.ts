import type { AnalyticsEvent, DailyPoint, DashboardStats, StatsRange } from './types';
import { detectDevice, parseTrafficSource } from './device';

function startOfDay(d: Date) {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}

function rangeBounds(range: StatsRange, now = new Date()) {
  const to = now;
  let from: Date;
  let compareFrom: Date;
  let compareTo: Date;

  if (range === 'today') {
    from = startOfDay(now);
    const yesterday = new Date(from);
    yesterday.setDate(yesterday.getDate() - 1);
    compareFrom = yesterday;
    compareTo = new Date(from.getTime() - 1);
  } else if (range === '7d') {
    from = new Date(now);
    from.setDate(from.getDate() - 6);
    from = startOfDay(from);
    compareFrom = new Date(from);
    compareFrom.setDate(compareFrom.getDate() - 7);
    compareTo = new Date(from.getTime() - 1);
  } else if (range === '30d') {
    from = new Date(now);
    from.setDate(from.getDate() - 29);
    from = startOfDay(from);
    compareFrom = new Date(from);
    compareFrom.setDate(compareFrom.getDate() - 30);
    compareTo = new Date(from.getTime() - 1);
  } else {
    from = new Date(0);
    compareFrom = new Date(0);
    compareTo = new Date(0);
  }

  return { from, to, compareFrom, compareTo };
}

function inRange(ts: string, from: Date, to: Date) {
  const t = new Date(ts).getTime();
  return t >= from.getTime() && t <= to.getTime();
}

function filterEvents(events: AnalyticsEvent[], from: Date, to: Date) {
  return events.filter(e => inRange(e.ts, from, to));
}

function uniqueVisitors(events: AnalyticsEvent[]) {
  return new Set(events.map(e => e.visitorId).filter(Boolean)).size;
}

function uniqueSessions(events: AnalyticsEvent[]) {
  return new Set(events.map(e => e.sessionId).filter(Boolean)).size;
}

function formatDayLabel(d: Date) {
  return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
}

function buildDaily(events: AnalyticsEvent[], from: Date, to: Date): DailyPoint[] {
  const days: DailyPoint[] = [];
  const cursor = startOfDay(from);
  const end = startOfDay(to);

  while (cursor <= end) {
    const next = new Date(cursor);
    next.setDate(next.getDate() + 1);
    const dayEvents = events.filter(e => {
      const t = new Date(e.ts).getTime();
      return t >= cursor.getTime() && t < next.getTime();
    });

    const pageViews = dayEvents.filter(e => e.type === 'page_view').length;
    const visitors = uniqueVisitors(dayEvents);
    const leads = dayEvents.filter(e => e.type === 'Lead').length;
    const orders = dayEvents.filter(e => e.type === 'Purchase').length;
    const revenue = dayEvents
      .filter(e => e.type === 'Purchase')
      .reduce((s, e) => s + (e.value || 0), 0);

    days.push({
      date: cursor.toISOString().slice(0, 10),
      label: formatDayLabel(cursor),
      visitors,
      pageViews,
      leads,
      orders,
      revenue,
    });

    cursor.setDate(cursor.getDate() + 1);
  }

  return days;
}

export function aggregateStats(events: AnalyticsEvent[], range: StatsRange): DashboardStats {
  const { from, to, compareFrom, compareTo } = rangeBounds(range);
  const current = filterEvents(events, from, to);
  const previous = range === 'all' ? [] : filterEvents(events, compareFrom, compareTo);

  const pageViews = current.filter(e => e.type === 'page_view').length;
  const productViews = current.filter(e => e.type === 'ViewContent').length;
  const addToCart = current.filter(e => e.type === 'AddToCart').length;
  const checkouts = current.filter(e => e.type === 'InitiateCheckout').length;
  const leads = current.filter(e => e.type === 'Lead').length;
  const orders = current.filter(e => e.type === 'Purchase').length;
  const revenue = current
    .filter(e => e.type === 'Purchase')
    .reduce((s, e) => s + (e.value || 0), 0);

  const visitors = uniqueVisitors(current);
  const sessions = uniqueSessions(current);
  const prevVisitors = uniqueVisitors(previous);
  const prevOrders = previous.filter(e => e.type === 'Purchase').length;
  const prevRevenue = previous
    .filter(e => e.type === 'Purchase')
    .reduce((s, e) => s + (e.value || 0), 0);

  const productMap = new Map<string, { slug: string; name: string; views: number; orders: number; revenue: number }>();
  for (const e of current) {
    if (!e.productSlug) continue;
    const row = productMap.get(e.productSlug) || {
      slug: e.productSlug,
      name: e.productName || e.productSlug,
      views: 0,
      orders: 0,
      revenue: 0,
    };
    if (e.type === 'ViewContent') row.views += 1;
    if (e.type === 'Purchase') {
      row.orders += 1;
      row.revenue += e.value || 0;
    }
    productMap.set(e.productSlug, row);
  }

  const cityMap = new Map<string, { city: string; orders: number; revenue: number }>();
  for (const e of current.filter(x => x.type === 'Purchase' && x.city)) {
    const city = e.city!;
    const row = cityMap.get(city) || { city, orders: 0, revenue: 0 };
    row.orders += 1;
    row.revenue += e.value || 0;
    cityMap.set(city, row);
  }

  const pageMap = new Map<string, number>();
  for (const e of current.filter(x => x.type === 'page_view' && x.path)) {
    pageMap.set(e.path!, (pageMap.get(e.path!) || 0) + 1);
  }

  const sourceMap = new Map<string, number>();
  for (const e of current.filter(x => x.type === 'page_view')) {
    const src = parseTrafficSource(e.referrer);
    sourceMap.set(src, (sourceMap.get(src) || 0) + 1);
  }

  const deviceCounts = { mobile: 0, desktop: 0, tablet: 0, unknown: 0 };
  for (const e of current.filter(x => x.type === 'page_view')) {
    const d = e.device || detectDevice(e.userAgent);
    deviceCounts[d] += 1;
  }
  const deviceTotal = Object.values(deviceCounts).reduce((a, b) => a + b, 0) || 1;

  const purchaseEvents = current
    .filter(e => e.type === 'Purchase')
    .sort((a, b) => new Date(b.ts).getTime() - new Date(a.ts).getTime())
    .slice(0, 50);

  const leadEvents = current
    .filter(e => e.type === 'Lead')
    .sort((a, b) => new Date(b.ts).getTime() - new Date(a.ts).getTime())
    .slice(0, 50);

  return {
    range,
    from: from.toISOString(),
    to: to.toISOString(),
    meta: {
      totalEvents: events.length,
      updatedAt: events[events.length - 1]?.ts || new Date(0).toISOString(),
      generatedAt: new Date().toISOString(),
    },
    kpis: {
      visitors,
      sessions,
      pageViews,
      productViews,
      addToCart,
      checkouts,
      leads,
      orders,
      revenue,
      avgOrderValue: orders > 0 ? Math.round(revenue / orders) : 0,
      conversionRate: visitors > 0 ? Math.round((orders / visitors) * 1000) / 10 : 0,
      leadRate: visitors > 0 ? Math.round((leads / visitors) * 1000) / 10 : 0,
      cartToOrderRate: leads > 0 ? Math.round((orders / leads) * 1000) / 10 : 0,
    },
    compare: {
      visitors: prevVisitors,
      orders: prevOrders,
      revenue: prevRevenue,
    },
    daily: buildDaily(current, from, to),
    topProducts: Array.from(productMap.values()).sort((a, b) => b.revenue - a.revenue || b.views - a.views).slice(0, 10),
    topCities: Array.from(cityMap.values()).sort((a, b) => b.orders - a.orders).slice(0, 10),
    topPages: Array.from(pageMap.entries())
      .map(([path, views]) => ({ path, views }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 10),
    trafficSources: Array.from(sourceMap.entries())
      .map(([source, visits]) => ({ source, visits }))
      .sort((a, b) => b.visits - a.visits)
      .slice(0, 8),
    devices: (['mobile', 'desktop', 'tablet', 'unknown'] as const)
      .map(device => ({
        device,
        count: deviceCounts[device],
        pct: Math.round((deviceCounts[device] / deviceTotal) * 1000) / 10,
      }))
      .filter(d => d.count > 0),
    recentOrders: purchaseEvents.map(e => ({
      orderId: e.orderId || '',
      ts: e.ts,
      name: e.name,
      phone: e.phone,
      city: e.city,
      value: e.value || 0,
      items: e.items,
    })),
    recentLeads: leadEvents.map(e => ({
      orderId: e.orderId || '',
      ts: e.ts,
      name: e.name,
      phone: e.phone,
      city: e.city,
      value: e.value || 0,
    })),
  };
}
