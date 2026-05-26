# S3_PHY — Uni+ HKDSE Physics Hub

Static learning site for HKDSE S3 Physics with two strands:

- **Optics** — light and waves: reflection, refraction, total internal reflection, convex and concave lenses, and electromagnetic waves (interactive labs, worksheets, flashcards).
- **Heat** — temperature and thermal physics (hub shell in place; content coming soon).

After the entry splash, choose a strand, then use the same hub navigation (Topics, Notes, Tools, Worksheets, Flashcards, Summary). UI strings in **English** and **Traditional Chinese**.

Deep links: `#/optics` and `#/heat`.

## Local development

```bash
npm install
npm run dev
```

Open **http://localhost:5173/** (Vite dev).

```bash
npm run build
npm run preview
```

Preview serves the production build (open the URL Vite prints, usually **http://localhost:4173/**).

## GitHub Pages — why the page was blank

GitHub was serving the **repository root** `index.html`, which only loads `/src/main.js` for Vite dev. That file is not bundled for the static host, so the app stayed empty.

**Fixes in this repo:**

1. **`dist/` is committed** with the production build. In Pages settings you can use **Deploy from a branch** → **main** → folder **`/dist`** so `https://unipluseducationact-ctrl.github.io/S3_PHY/` serves the built site.
2. **Root `index.html`** includes a tiny script (stripped from the built `dist/index.html`) that redirects `*.github.io` visitors from `/S3_PHY/` to **`/S3_PHY/dist/`** until you point Pages at `/dist` or Actions.
3. **`base: './'`** so `./assets/...` works under `/S3_PHY/dist/` as well as when `/dist` contents are mapped to the site root.

**Option A — GitHub Actions (recommended):** Settings → Pages → **Source: GitHub Actions**. The workflow publishes to the **`gh-pages`** branch; set Pages to **Deploy from branch** → **`gh-pages`** → **`/ (root)`** after the first successful run.

**Option B — Branch + `/dist` on `main`:** Settings → Pages → **Deploy from a branch** → Branch **`main`**, folder **`/dist`**. Uses the committed `dist/` folder (no Actions artifact upload). Site URL: `…/S3_Phy/dist/#/optics`.

**Note:** If Actions fails with `upload-pages-artifact` / codeload errors, use Option B for an immediate deploy, or rely on the updated workflow that pushes to `gh-pages` via `peaceiris/actions-gh-pages`.

## Live URL

`https://unipluseducationact-ctrl.github.io/S3_PHY/`

(If you still see a blank page, open `https://unipluseducationact-ctrl.github.io/S3_PHY/dist/` once, or switch Pages to the `/dist` folder as above.)

## Adding PDF notes

Place files under `public/notes/` (see `public/notes/README.txt`).

## Tech

- [Vite](https://vitejs.dev/) with `base: './'`
- Vanilla JavaScript (physics-only)