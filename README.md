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

Dans EasyPanel → App → **Port: 3000** · Source: GitHub `hassounifes1/amayne` · Build: Dockerfile.

Si « Service is not reachable » : Deployments → View Logs (build ou crash au démarrage).

## Produits
12 saveurs d'amlou — du classique berbère au premium pistache.

Made in Morocco 🇲🇦
