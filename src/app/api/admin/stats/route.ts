import { NextRequest, NextResponse } from 'next/server';
import { aggregateStats } from '@/lib/analytics/aggregate';
import { isAdminAuthenticated } from '@/lib/analytics/auth';
import { readEvents } from '@/lib/analytics/store';
import type { StatsRange } from '@/lib/analytics/types';

const RANGES: StatsRange[] = ['today', '7d', '30d', 'all'];

export async function GET(request: NextRequest) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ ok: false, error: 'unauthorized' }, { status: 401 });
  }

  const rangeParam = request.nextUrl.searchParams.get('range') || '7d';
  const range = RANGES.includes(rangeParam as StatsRange) ? (rangeParam as StatsRange) : '7d';

  const events = await readEvents();
  const stats = aggregateStats(events, range);

  return NextResponse.json({ ok: true, stats });
}
