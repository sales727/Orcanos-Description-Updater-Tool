# Orcanos Bulk Updater — Client Distribution

Standalone, unauthenticated copy of the "Description Mass Update" tool, for
distributing directly to a client. No login, no backend — each user supplies
their own Orcanos account name and API key in the form, and the app calls
`https://app.orcanos.com/<account>/...` directly from the browser.

## Local development

```
npm install
npm run dev
```

Runs on `http://localhost:5173`. In dev, requests are proxied through Vite
(`/orcanos-proxy` → `https://app.orcanos.com`) to avoid local CORS issues —
see `vite.config.js`. In production, the app calls Orcanos directly.

## Deploying

Push to GitHub and import into Vercel as a **Vite** project (build command
`npm run build`, output directory `dist`). No environment variables and no
backend service required — this app is fully static and talks to Orcanos
directly from the browser.

## Security note

This deployment has no authentication gate and no backend of its own. It's
safe to distribute because it holds no embedded Orcanos credentials — every
request includes a valid `account_name` + `api_key` supplied by whoever is
using the form, and Orcanos's own API enforces access from there.
