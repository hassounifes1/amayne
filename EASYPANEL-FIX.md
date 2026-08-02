# EasyPanel — FIX "Service is not reachable"

## Le problème
EasyPanel affiche cette page quand le **container ne tourne pas**.
Ce n'est PAS un bug du dashboard — l'app entière n'est pas déployée.

## ÉTAPE 1 — Vérifier Source Git (CRITIQUE)

EasyPanel → **Projects** → **amayno** → **bakanadamayno** → **Source**

| Champ | Valeur EXACTE |
|-------|---------------|
| Repository | `https://github.com/hassounifes1/bakandamayno` |
| Branch | `main` |
| Build method | **Dockerfile** |

❌ Si le repo est vide ou un autre repo → build fail `Dockerfile: no such file`

Clique **Save** puis **Deploy** (bouton vert).

## ÉTAPE 2 — Lire les Logs

**Deployments** → dernier deploy → **View Logs**

✅ **Succès** = tu vois:
```
transferring dockerfile: 1.1kB   (PAS 2B!)
Successfully built
```

❌ **Échec** = copie l'erreur et envoie-la moi.

## ÉTAPE 3 — Port

**Settings** → **Port** = **`3000`** (obligatoire)

## ÉTAPE 4 — Environment

```
ADMIN_DASHBOARD_PASSWORD=Amayno2026!
HOSTNAME=0.0.0.0
PORT=3000
ANALYTICS_DATA_DIR=/app/data
```

## ÉTAPE 5 — Domain

**Domains** → copie le **Preview Domain** (ex: `xxx.76.13.44.104.sslip.io`)

Test:
1. `https://PREVIEW-DOMAIN/api/health` → `{"ok":true}`
2. `https://PREVIEW-DOMAIN/admin` → login

## Option B — Docker Image (si build fail sur VPS)

1. GitHub → repo → **Settings** → **Actions** → **General**
2. Workflow permissions → **Read and write permissions** → Save
3. Attendre Actions vert ✓
4. EasyPanel Source → **Docker Image**:
   ```
   ghcr.io/hassounifes1/bakandamayno:latest
   ```
5. Port `3000` → Deploy

## amayno.ma
DNS pas encore configuré. Utilise le Preview Domain d'EasyPanel pour tester.
