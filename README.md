# AMAYNO — Brand Store Amlou Maroc 2026

L'amlou authentique du Souss, livré chez toi partout au Maroc.

## Stack
- Next.js 14 (App Router)
- TypeScript + Tailwind CSS
- DTC avec paiement à la livraison (COD)

## Développement
```bash
npm install
npm run dev
```

## Déploiement EasyPanel

L'app Docker écoute sur le **port 3000** (`HOSTNAME=0.0.0.0`).

```bash
npm run deploy
# ou
curl -X POST http://76.13.44.104:3000/api/deploy/1aa318f758120af5103cb26115d21794eb7571e6846379ed -H "Content-Type: application/json" -d "{}"
```

Dans EasyPanel → App → **Port: 3000** · Source: GitHub `hassounifes1/amayne` · branche `main` · Build: **Dockerfile**.

> **Important:** le repo doit contenir `Dockerfile`, `package.json`, `src/`. Si le build dit `Dockerfile: no such file`, la source GitHub est incorrecte (repo vide).

Si « Service is not reachable » : Deployments → View Logs (build ou crash au démarrage).

### Webhooks deploy

| Service EasyPanel | Commande |
|-------------------|----------|
| bakanadamayno | `node scripts/deploy.mjs` |
| amayne (ancien) | `node scripts/deploy.mjs --service amayne` |

## Tracking (Meta Pixel + Google + Webhook)

Copie `.env.example` vers Easypanel → Environment :

| Variable | Où la trouver |
|----------|----------------|
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Events Manager → Pixel |
| `META_CAPI_ACCESS_TOKEN` | Meta → Conversions API token |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics → G-XXXX |
| `NEXT_PUBLIC_GOOGLE_ADS_ID` | Google Ads → AW-XXXX (optionnel) |
| `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL` | Google Ads conversion tag |
| `NEXT_PUBLIC_GTM_ID` | Tag Manager GTM-XXXX (optionnel) |
| `LEAD_WEBHOOK_URL` | Make / Zapier / n8n webhook URL |

Événements envoyés :
- **ViewContent** — page produit
- **Lead** — formulaire COD soumis (+ CAPI + webhook)
- **Purchase** — page confirmation (+ CAPI + webhook)

## Produits
12 saveurs d'amlou — du classique berbère au premium pistache.

Made in Morocco 🇲🇦
