/**
 * Resolve a public/ asset path for GitHub Pages (with or without /dist/ in the URL).
 * @param {string} relPath e.g. "./flashcards/reflection/01-en-front.webp"
 */
export function assetUrl(relPath) {
  const clean = String(relPath).replace(/^\.\//, '');
  let base = import.meta.env.BASE_URL || './';
  if (!base.endsWith('/')) base += '/';

  const pagePath = window.location.pathname;
  const pageDir = pagePath.endsWith('/')
    ? pagePath
    : pagePath.endsWith('/dist')
      ? `${pagePath}/`
      : pagePath.replace(/\/[^/]*$/, '/') || '/';

  return new URL(`${base}${clean}`, `${window.location.origin}${pageDir}`).href;
}
