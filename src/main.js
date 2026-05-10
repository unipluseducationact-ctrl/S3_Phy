import './style.css';
import { initI18n, t } from './i18n.js';
import { mountApp } from './app.js';
import { SPLASH_PHRASES } from './splashPhrases.js';

initI18n();

const SPLASH_KEY = 's3phy_splash_seen';

function logoSrc() {
  return `${import.meta.env.BASE_URL}images/uniplus-logo.png`;
}

function createSplash() {
  const splash = document.createElement('div');
  splash.id = 'splash';
  splash.className = 'splash';
  splash.setAttribute('role', 'dialog');
  splash.setAttribute('aria-modal', 'true');
  splash.setAttribute('aria-label', 'Uni+');
  splash.innerHTML = `
    <div class="splash-danmaku" id="splashDanmaku" aria-hidden="true"></div>
    <div class="splash-stage">
      <div class="splash-logo-wrap" id="splashLogoWrap">
        <img class="splash-logo-img" src="${logoSrc()}" alt="Uni+ logo" decoding="async" width="520" height="120" />
      </div>
      <div class="splash-uni-title" aria-hidden="true">Uni+</div>
      <div class="splash-start-wrap" id="splashStartWrap">
        <button type="button" class="splash-start-btn" id="splashStart">${t('splash.start')}</button>
      </div>
    </div>
  `;
  return splash;
}

function startDanmaku(splashEl, danmakuField) {
  const pool = [...SPLASH_PHRASES.en, ...SPLASH_PHRASES.zhHant];

  const spawn = () => {
    if (!splashEl.parentElement) return;
    const item = document.createElement('div');
    item.className = 'splash-danmaku-item';
    item.textContent = pool[Math.floor(Math.random() * pool.length)];

    const top = Math.random() * 85 + 5;
    const size = Math.random() * 0.8 + 0.9;
    const duration = Math.random() * 12 + 10;

    item.style.top = `${top}%`;
    item.style.fontSize = `${size}rem`;
    item.style.animationDuration = `${duration}s`;

    danmakuField.appendChild(item);
    item.addEventListener('animationend', () => item.remove());

    window.setTimeout(spawn, 1500 + Math.random() * 1000);
  };

  for (let i = 0; i < 4; i += 1) window.setTimeout(spawn, i * 1000);
}

function wireSplashAnimations(splash) {
  const logoWrap = splash.querySelector('#splashLogoWrap');
  const danmaku = splash.querySelector('#splashDanmaku');
  const startWrap = splash.querySelector('#splashStartWrap');

  window.setTimeout(() => logoWrap?.classList.add('splash-logo-wrap--in'), 800);
  window.setTimeout(() => {
    danmaku?.classList.add('splash-danmaku--visible');
    startWrap?.classList.add('splash-start-wrap--in');
    if (danmaku) startDanmaku(splash, danmaku);
  }, 1600);
}

function startApp() {
  const root = document.getElementById('app');
  if (root) mountApp(root);
}

function trySplashThenApp() {
  let skip = false;
  try {
    skip = sessionStorage.getItem(SPLASH_KEY) === '1';
  } catch {
    /* ignore */
  }
  if (skip) {
    startApp();
    return;
  }
  const splash = createSplash();
  document.body.insertBefore(splash, document.body.firstChild);
  wireSplashAnimations(splash);

  const btn = splash.querySelector('#splashStart');
  const finish = () => {
    splash.remove();
    startApp();
  };
  btn.addEventListener('click', () => {
    try {
      sessionStorage.setItem(SPLASH_KEY, '1');
    } catch {
      /* ignore */
    }
    splash.classList.add('splash--hide');
    splash.addEventListener('transitionend', finish, { once: true });
    window.setTimeout(finish, 480);
  });
}

trySplashThenApp();
