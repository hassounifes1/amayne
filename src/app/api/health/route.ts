import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    ok: true,
    service: 'amayno-store',
    ts: new Date().toISOString(),
  });
}
