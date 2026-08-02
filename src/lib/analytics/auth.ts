import { createHmac, timingSafeEqual } from 'crypto';
import { cookies } from 'next/headers';

const COOKIE_NAME = 'amayno_admin_session';
const SESSION_VERSION = 'v1';

function getAdminPassword() {
  return process.env.ADMIN_DASHBOARD_PASSWORD?.trim() || '';
}

export function isAdminConfigured() {
  return getAdminPassword().length >= 8;
}

export function createAdminSessionToken() {
  const password = getAdminPassword();
  return createHmac('sha256', password).update(SESSION_VERSION).digest('hex');
}

export function verifyAdminSessionToken(token: string) {
  const expected = createAdminSessionToken();
  if (!token || token.length !== expected.length) return false;
  try {
    return timingSafeEqual(Buffer.from(token), Buffer.from(expected));
  } catch {
    return false;
  }
}

export function verifyAdminPassword(password: string) {
  const expected = getAdminPassword();
  if (!expected || password.length !== expected.length) return false;
  try {
    return timingSafeEqual(Buffer.from(password), Buffer.from(expected));
  } catch {
    return false;
  }
}

export async function isAdminAuthenticated() {
  if (!isAdminConfigured()) return false;
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  return Boolean(token && verifyAdminSessionToken(token));
}

export { COOKIE_NAME };
