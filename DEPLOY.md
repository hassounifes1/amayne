# Déploiement EasyPanel — AMAYNO

## Option A — Docker Image (RECOMMANDÉ, plus fiable)

Le VPS n'a pas assez de RAM pour builder Next.js. GitHub Actions build l'image automatiquement.

1. Attendre que GitHub Actions finisse (repo → **Actions** → vert ✓)
2. EasyPanel → **amayno** → **bakanadamayno** → **Source**
3. Changer de **Git** vers **Docker Image**
4. Image:
   ```
   ghcr.io/hassounifes1/bakandamayno:latest
   ```
5. **Port HTTP**: `3000`
6. **Environment**:
   ```
   ADMIN_DASHBOARD_PASSWORD=ton_mot_de_passe_8_caracteres
   ANALYTICS_DATA_DIR=/app/data
   HOSTNAME=0.0.0.0
   PORT=3000
   ```
7. **Deploy** → attendre **Running**
8. **Domains** → copier Preview Domain → tester `/api/health` puis `/admin`

## Option B — Git + Dockerfile

| Champ | Valeur |
|-------|--------|
| Repository | `https://github.com/hassounifes1/bakandamayno` |
| Branch | `main` |
| Build | Dockerfile |
| Port | `3000` |

⚠️ Si build fail (RAM), utiliser Option A.

## Vérification

- `https://TON-DOMAINE/api/health` → `{"ok":true}`
- `https://TON-DOMAINE/admin` → login dashboard
- Store: `https://TON-DOMAINE/`

## DNS amayno.ma

A record → `76.13.44.104` (puis ajouter domaine f EasyPanel → Domains)

## Redeploy webhook

```bash
node scripts/deploy.mjs
```
