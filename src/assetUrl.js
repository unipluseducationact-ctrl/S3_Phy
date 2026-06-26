/**
 * Resolve a public/ asset path for GitHub Pages (with or without /dist/ in the URL).
 * @param {string} relPath e.g. "./flashcards/reflection/01-en-front.webp"
 */
export function assetUrl(relPath) {
  const clean = String(relPath).replace(/^\.\//, '');
  const origin = window.location.origin;
  const path = window.location.pathname;

  const distMatch = path.match(/^(.*\/dist)\/?/);
  if (distMatch) {
    return `${origin}${distMatch[1]}/${clean}`;
  }

  let base = import.meta.env.BASE_URL || './';
  if (!base.endsWith('/')) base += '/';
  const pageDir = path.endsWith('/')
    ? path
    : path.replace(/\/[^/]*$/, '/') || '/';

  return new URL(`${base}${clean}`, `${origin}${pageDir}`).href;
}
