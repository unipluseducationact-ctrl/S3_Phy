# S3_PHY — Uni+ HKDSE Physics Hub

Static learning site for HKDSE Physics (light and waves): reflection, refraction, total internal reflection, convex and concave lenses, and electromagnetic waves. UI strings in **English** and **Traditional Chinese**.

## Local development

```bash
npm install
npm run dev
```

Open **http://localhost:5173/** (Vite dev uses `base: /`).

Build for production:

```bash
npm run build
npm run preview
```

After a build, preview uses the same URLs as GitHub Pages: open **http://localhost:4173/S3_PHY/** (trailing slash optional once `base` is set for build).

## GitHub Pages (fix blank white page)

The live site must serve the **Vite build** (`dist/`), not the repo-root `index.html` (that file only loads `/src/main.js` for local dev and will not run on Pages).

Choose **one** of these:

### Option A — GitHub Actions (recommended)

1. Repo **Settings → Pages → Build and deployment**
2. **Source**: **GitHub Actions** (not “Deploy from a branch”).

The workflow `.github/workflows/deploy-pages.yml` builds and publishes `dist/`. The production `base` is `/S3_PHY/` so assets load as `/S3_PHY/assets/...`.

### Option B — Deploy from branch

1. **Settings → Pages → Source**: **Deploy from a branch**
2. Branch **main**, folder **`/dist`** (not `/ (root)`).

This repository includes a committed `dist/` output so Pages can serve the built site from that folder without relying on Actions.

## Live URL

`https://unipluseducationact-ctrl.github.io/S3_PHY/`

## Adding PDF notes

Place files under `public/notes/` (see `public/notes/README.txt`). The app checks each URL and hides broken embeds if a file is missing.

## Tech

- [Vite](https://vitejs.dev/) with `base: '/S3_PHY/'` for production builds and `/` for local dev
- Vanilla JavaScript modules (physics-only content)