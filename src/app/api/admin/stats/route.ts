import { NextRequest, NextResponse } from 'next/server';
import { aggregateStats } from '@/lib/analytics/aggregate';
import { isAdminAuthenticated, isAdminConfigured } from '@/lib/analytics/auth';
import { readStore } from '@/lib/analytics/store';
import type { StatsRange } from '@/lib/analytics/types';

const RANGES: StatsRange[] = ['today', '7d', '30d', 'all'];

export async function GET(request: NextRequest) {
  if (!isAdminConfigured()) {
    return NextResponse.json(
      { ok: false, error: 'admin_not_configured' },
      { status: 503 },
    );
  }

  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ ok: false, error: 'unauthorized' }, { status: 401 });
  }

  const rangeParam = request.nextUrl.searchParams.get('range') || '7d';
  const range = RANGES.includes(rangeParam as StatsRange) ? (rangeParam as StatsRange) : '7d';

  const store = await readStore();
  const stats = aggregateStats(store.events, range);
  stats.meta = {
    totalEvents: store.events.length,
    updatedAt: store.updatedAt,
    generatedAt: new Date().toISOString(),
  };

  return NextResponse.json({ ok: true, stats });
}
