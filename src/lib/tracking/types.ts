export type TrackingEventName = 'Lead' | 'Purchase' | 'InitiateCheckout' | 'ViewContent';

export interface LeadPayload {
  eventName: TrackingEventName;
  eventId: string;
  orderId: string;
  value: number;
  currency?: string;
  name?: string;
  phone?: string;
  city?: string;
  productSlug?: string;
  productName?: string;
  quantity?: number;
  sourceUrl?: string;
  items?: Array<{
    slug: string;
    name: string;
    quantity: number;
    price: number;
  }>;
}
