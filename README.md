# Orbit Portfolio

A **TanStack Start (React)** portfolio (React app) deployed on **Cloudflare Workers** using Wrangler.


## Project structure
- `wrangler.jsonc` – Cloudflare Worker configuration (entrypoint)
- `src/server.ts` – Worker `fetch()` entry wrapper
- `src/start.ts` – TanStack Start bootstrap
- `src/router.tsx` + `src/routeTree.gen.ts` – routing
- `public/` – static assets (PDF/JPEG, etc.)
- `src/assets/` – bundled assets (images, avatar, etc.)

## Local development
```bash
npm ci
npm run dev
```

## Build
```bash
npm run build
```

## Local preview
```bash
npm run preview
```

## Deploy to Cloudflare Workers
1) Login (once per machine/account)
```bash
wrangler login
```

2) Deploy
```bash
wrangler deploy
```

### What Wrangler uses
Wrangler is configured via `wrangler.jsonc`:
- `main`: `src/server.ts`
- `compatibility_date`: `2025-09-24`
- `compatibility_flags`: `nodejs_compat`

## Notes
- The Contact section uses `mailto:` and `tel:` links (no backend/API secrets required).
- If you change routing/components, keep the TanStack Router generated file (`src/routeTree.gen.ts`) untouched (it is generated).

