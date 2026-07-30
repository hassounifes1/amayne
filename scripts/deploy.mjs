/**
 * Trigger Easypanel git redeploy for AMAYNO store.
 *
 * Usage:
 *   node scripts/deploy.mjs
 */
import { spawnSync } from 'child_process';

const webhook =
  'http://76.13.44.104:3000/api/deploy/1aa318f758120af5103cb26115d21794eb7571e6846379ed';

const result = spawnSync(
  'curl',
  ['-sS', '-X', 'POST', webhook, '-H', 'Content-Type: application/json', '-d', '{}'],
  { encoding: 'utf8' },
);

const body = (result.stdout || '').trim();
if (body) console.log(body);
if (result.stderr) console.error(result.stderr);

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

console.log('\nEasypanel redeploy triggered. Check Deployments → Logs in the panel.');
console.log('App port must be 3000. Domain DNS must point to 76.13.44.104 for amayno.ma.');
