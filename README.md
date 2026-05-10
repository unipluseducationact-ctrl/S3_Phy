# S3_PHY — Uni+ HKDSE Physics Hub

Static learning site for HKDSE Physics (light and waves): reflection, refraction, total internal reflection, convex and concave lenses, and electromagnetic waves. UI strings in **English** and **Traditional Chinese**.

## Local development

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## GitHub Pages

After pushing to `main`, enable **Pages** in the repository settings: set **Source** to **GitHub Actions**.

The site is published at:

`https://unipluseducationact-ctrl.github.io/S3_PHY/`

## Adding PDF notes

Place files under `public/notes/` (see `public/notes/README.txt`). The app checks each URL and hides broken embeds if a file is missing.

## Tech

- [Vite](https://vitejs.dev/) with `base: './'` for project-site hosting
- Vanilla JavaScript modules (no chemistry content from other repos)
