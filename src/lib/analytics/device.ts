export function detectDevice(userAgent?: string): 'mobile' | 'desktop' | 'tablet' | 'unknown' {
  if (!userAgent) return 'unknown';
  const ua = userAgent.toLowerCase();
  if (/ipad|tablet|playbook|silk/.test(ua)) return 'tablet';
  if (/mobile|iphone|ipod|android|blackberry|iemobile|opera mini/.test(ua)) return 'mobile';
  if (/windows|macintosh|linux|cros/.test(ua)) return 'desktop';
  return 'unknown';
}

export function parseTrafficSource(referrer?: string): string {
  if (!referrer) return 'Direct';
  try {
    const url = new URL(referrer);
    const host = url.hostname.replace(/^www\./, '');
    if (host.includes('facebook') || host.includes('instagram') || host.includes('fb.')) return 'Meta (FB/IG)';
    if (host.includes('google')) return 'Google';
    if (host.includes('tiktok')) return 'TikTok';
    if (host.includes('whatsapp')) return 'WhatsApp';
    if (host.includes('youtube')) return 'YouTube';
    return host;
  } catch {
    return 'Direct';
  }
}
