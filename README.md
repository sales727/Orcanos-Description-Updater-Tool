# Orcanos Bulk Updater — Client Distribution

Standalone, unauthenticated copy of the "Description Mass Update" tool from the
Orcanos Automation Portal, for distributing directly to a client. No login —
each user supplies their own Orcanos account name and API key in the form.

It calls the same backend as the portal (`/api/bulk-updater/*` on the
existing Railway service) — no separate backend deploy needed.

## Local development

```
npm install
npm run dev
```

Runs on `http://localhost:3000`. Requires `NEXT_PUBLIC_API_URL` (see
`.env.example`) — copy it to `.env.local` if not already present.

## Deploying

1. Push this repo to GitHub and import it into a new Vercel project.
2. Set the `NEXT_PUBLIC_API_URL` environment variable in Vercel to the
   Railway backend URL (currently `https://orcanos-portal-production.up.railway.app`).
3. **Important:** add this Vercel deployment's domain to the `ALLOWED_ORIGINS`
   environment variable on the Railway backend (`Orcanos-Portal` project),
   comma-separated alongside the existing portal domain, then redeploy the
   backend so CORS allows requests from this new domain.

## Security note

This deployment has no authentication gate. It's safe to distribute because
the backend doesn't hold any embedded Orcanos credentials — every request
must include a valid `account_name` + `api_key` supplied by whoever is using
the form, and Orcanos's own API enforces access from there.
