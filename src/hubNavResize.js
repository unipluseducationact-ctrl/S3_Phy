import { syncHubScale } from './hubScale.js';

const SAFETY_GAP = 16;

/** @param {HTMLElement | null} headerEl */
export function initHubNavResize(headerEl) {
  if (!headerEl) {
    return { check() {}, cleanup() {} };
  }

  const nav = headerEl.querySelector('.main-nav');
  let timer = 0;

  function measureNeeded(hideBrandText) {
    const brand = headerEl.querySelector('.site-header__brand');
    const actions = headerEl.querySelector('.site-header__actions');
    const logo = brand?.querySelector('.brand-logo-wrap');
    const brandText = brand?.querySelector('.brand-text-block');

    let brandW = brand?.offsetWidth ?? 0;
    if (hideBrandText && brandText) {
      brandW = (logo?.offsetWidth ?? 0) + 10;
    }

    const navW = nav?.scrollWidth ?? 0;
    const actionsW = actions?.offsetWidth ?? 0;
    return brandW + navW + actionsW + SAFETY_GAP * 3;
  }

  function checkNavCollision() {
    syncHubScale();
    headerEl.classList.remove('nav-hide-brand-text', 'nav-compact-pills');
    void headerEl.offsetWidth;

    const headerW = headerEl.clientWidth;
    let needed = measureNeeded(false);

    if (needed > headerW) {
      headerEl.classList.add('nav-hide-brand-text');
      void headerEl.offsetWidth;
      needed = measureNeeded(true);
    }

    if (needed > headerW || (nav && nav.scrollWidth > nav.clientWidth + 2)) {
      headerEl.classList.add('nav-compact-pills');
    }
  }

  function schedule() {
    window.clearTimeout(timer);
    timer = window.setTimeout(checkNavCollision, 60);
  }

  checkNavCollision();
  window.addEventListener('resize', schedule);

  let ro;
  if (typeof ResizeObserver !== 'undefined') {
    ro = new ResizeObserver(schedule);
    ro.observe(headerEl);
    if (nav) ro.observe(nav);
  }

  return {
    check: checkNavCollision,
    cleanup() {
      window.clearTimeout(timer);
      window.removeEventListener('resize', schedule);
      ro?.disconnect();
      headerEl.classList.remove('nav-hide-brand-text', 'nav-compact-pills');
    },
  };
}
