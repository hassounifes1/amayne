export type AnalyticsEventType =
  | 'page_view'
  | 'ViewContent'
  | 'InitiateCheckout'
  | 'AddToCart'
  | 'Lead'
  | 'Purchase';

export interface AnalyticsEvent {
  id: string;
  type: AnalyticsEventType;
  ts: string;
  visitorId?: string;
  sessionId?: string;
  path?: string;
  referrer?: string;
  userAgent?: string;
  device?: 'mobile' | 'desktop' | 'tablet' | 'unknown';
  orderId?: string;
  value?: number;
  currency?: string;
  name?: string;
  phone?: string;
  city?: string;
  productSlug?: string;
  productName?: string;
  quantity?: number;
  items?: Array<{
    slug: string;
    name: string;
    quantity: number;
    price: number;
  }>;
}

export interface AnalyticsStore {
  events: AnalyticsEvent[];
  updatedAt: string;
}

export type StatsRange = 'today' | '7d' | '30d' | 'all';

export interface DailyPoint {
  date: string;
  label: string;
  visitors: number;
  pageViews: number;
  leads: number;
  orders: number;
  revenue: number;
}

export interface DashboardStats {
  range: StatsRange;
  from: string;
  to: string;
  meta: {
    totalEvents: number;
    updatedAt: string;
    generatedAt: string;
  };
  kpis: {
    visitors: number;
    sessions: number;
    pageViews: number;
    productViews: number;
    addToCart: number;
    checkouts: number;
    leads: number;
    orders: number;
    revenue: number;
    avgOrderValue: number;
    conversionRate: number;
    leadRate: number;
    cartToOrderRate: number;
  };
  compare: {
    visitors: number;
    orders: number;
    revenue: number;
  };
  daily: DailyPoint[];
  topProducts: Array<{ slug: string; name: string; views: number; orders: number; revenue: number }>;
  topCities: Array<{ city: string; orders: number; revenue: number }>;
  topPages: Array<{ path: string; views: number }>;
  trafficSources: Array<{ source: string; visits: number }>;
  devices: Array<{ device: string; count: number; pct: number }>;
  recentOrders: Array<{
    orderId: string;
    ts: string;
    name?: string;
    phone?: string;
    city?: string;
    value: number;
    items?: AnalyticsEvent['items'];
  }>;
  recentLeads: Array<{
    orderId: string;
    ts: string;
    name?: string;
    phone?: string;
    city?: string;
    value: number;
  }>;
}
