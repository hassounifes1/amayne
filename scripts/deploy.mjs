/**
 * Trigger Easypanel git redeploy for AMAYNO store.
 *
 * Usage:
 *   node scripts/deploy.mjs
 *   node scripts/deploy.mjs --service bakanadamayno
 */
import { spawnSync } from 'child_process';

const webhooks = {
  amayne:
    'http://76.13.44.104:3000/api/deploy/1aa318f758120af5103cb26115d21794eb7571e6846379ed',
  bakanadamayno:
    'http://76.13.44.104:3000/api/deploy/4aff8ce4f62e2fe721eee40044a3c3eb45d4607acf5d5cb3',
};

const service = process.argv.includes('--service')
  ? process.argv[process.argv.indexOf('--service') + 1]
  : 'bakanadamayno';

const webhook = webhooks[service] || webhooks.bakanadamayno;

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

console.log(`\nEasypanel redeploy triggered (${service}).`);
console.log('Source: https://github.com/hassounifes1/bakandamayno branch main');
console.log('App port: 3000 · Build: Dockerfile · Health: /api/health');
console.log('Dashboard: https://YOUR-DOMAIN/admin (set ADMIN_DASHBOARD_PASSWORD in env)');
