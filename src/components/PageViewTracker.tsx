'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { trackAnalyticsEvent } from '@/lib/analytics/client';

export default function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastPath = useRef('');

  useEffect(() => {
    if (!pathname || pathname.startsWith('/admin')) return;

    const qs = searchParams?.toString();
    const path = qs ? `${pathname}?${qs}` : pathname;
    if (path === lastPath.current) return;
    lastPath.current = path;

    void trackAnalyticsEvent({
      type: 'page_view',
      path,
    });
  }, [pathname, searchParams]);

  return null;
}
