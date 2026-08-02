/** Public tracking IDs (safe for client). Set in Easypanel env / .env.local */

export const trackingConfig = {
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim() || '',
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || '',
  googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID?.trim() || '',
  googleAdsConversionLabel: process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL?.trim() || '',
  gtmId: process.env.NEXT_PUBLIC_GTM_ID?.trim() || '',
};

export const serverTrackingConfig = {
  metaCapiToken: process.env.META_CAPI_ACCESS_TOKEN?.trim() || '',
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim() || '',
  leadWebhookUrl: process.env.LEAD_WEBHOOK_URL?.trim() || '',
  leadWebhookSecret: process.env.LEAD_WEBHOOK_SECRET?.trim() || '',
};

export function isClientTrackingEnabled() {
  const { metaPixelId, gaMeasurementId, gtmId } = trackingConfig;
  return Boolean(metaPixelId || gaMeasurementId || gtmId);
}

export function isServerTrackingEnabled() {
  const { metaCapiToken, metaPixelId, leadWebhookUrl } = serverTrackingConfig;
  return Boolean((metaCapiToken && metaPixelId) || leadWebhookUrl);
}
