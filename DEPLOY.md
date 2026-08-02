# Déploiement EasyPanel — AMAYNO

## Checklist (obligatoire)

1. **Projet** → `amayno` → service **`bakanadamayno`**
2. **Source Git**
   - URL: `https://github.com/hassounifes1/bakandamayno`
   - Branche: `main`
   - Build: **Dockerfile** (racine `/`)
3. **Port HTTP**: `3000` (pas 80)
4. **Environment** (minimum):
   ```
   ADMIN_DASHBOARD_PASSWORD=ton_mot_de_passe_8_caracteres
   ANALYTICS_DATA_DIR=/app/data
   ```
5. **Deploy** → attendre **Running** (2–5 min)
6. **Test**: `https://TON-DOMAINE/api/health` → doit retourner `{"ok":true}`
7. **Dashboard**: `https://TON-DOMAINE/admin`

## Si "Service is not reachable"

- Deployments → **Logs** → copier l'erreur
- Erreur fréquente: `Dockerfile: no such file` → mauvais repo (utiliser `bakandamayno`)
- Container crash → vérifier port **3000** et logs runtime
- Domaine → DNS A record vers `76.13.44.104`

## Redeploy

```bash
node scripts/deploy.mjs
```
