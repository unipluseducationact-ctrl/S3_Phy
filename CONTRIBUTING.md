# Contributing to S3_Phy

Thank you for helping improve the HKDSE S3 Physics learning hub.

## Local setup

```bash
git clone https://github.com/unipluseducationact-ctrl/S3_Phy.git
cd S3_Phy
npm install
npm run dev
```

Open **http://localhost:5173/** (Vite dev server with hot reload).

## Where to edit

| Area | Path | Purpose |
| --- | --- | --- |
| **Labs** | `labs/` | Interactive lab source packages; each folder has a `manifest.json` that defines build/sync into `public/` |
| **Quizzes** | `quizzes/` | Embedded quiz apps (same manifest-driven pipeline) |
| **Worksheets** | `worksheets/` | Worksheet apps and print/export flows |
| **Flashcards** | `content/flashcards/` | Deck JSON in `content/flashcards/data/`; images in `public/flashcards/` |
| **Hub app** | `src/` | Strand routing, hub shell, i18n, lab embeds, flashcard study UI |

Do **not** edit generated copies under `public/` or `dist/` directly — change the source package and rebuild.

## Build commands

```bash
# Sync labs/, quizzes/, worksheets/ → public/ (reads each manifest.json)
npm run build:content

# Full production build: build:content + Vite bundle → dist/
npm run build

# Preview the production build locally
npm run preview
```

### Regenerating flashcard decks (maintainers)

```bash
npm run export:heat-flashcards
npm run export:light-flashcards
npm run export:optics-definitions-flashcards
```

These write JSON to `content/flashcards/data/`.

## Pull request checklist

- [ ] Changes are made in the correct source folder (`labs/`, `quizzes/`, `worksheets/`, `content/flashcards/`, or `src/`), not hand-edited copies in `public/` or `dist/`
- [ ] `npm run build:content` succeeds if you touched labs, quizzes, or worksheets
- [ ] `npm run dev` loads and the affected strand/section works (labs, quiz, worksheet, flashcards, notes)
- [ ] `npm run build` succeeds when hub or flashcard imports changed
- [ ] Bilingual strings updated in both `src/locales/en.js` and `src/locales/zhHant.js` when UI text changed
- [ ] PR description explains what changed and how to test it