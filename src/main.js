import './style.css';
import { initI18n, t } from './i18n.js';
import { mountApp } from './app.js';

initI18n();

const SPLASH_KEY = 's3phy_splash_seen';

function createSplash() {
  const splash = document.createElement('div');
  splash.id = 'splash';
  splash.className = 'splash';
  splash.setAttribute('role', 'dialog');
  splash.setAttribute('aria-modal', 'true');
  splash.setAttribute('aria-label', 'Uni+');
  splash.innerHTML = `
    <div class="splash-formulas" aria-hidden="true">
      <span style="top:8%;left:5%;transform:rotate(-11deg)">v = fλ</span>
      <span style="top:16%;right:8%;transform:rotate(7deg)">E = hf</span>
      <span style="top:40%;left:3%;transform:rotate(5deg)">n₁ sin θ₁ = n₂ sin θ₂</span>
      <span style="top:26%;left:36%;transform:rotate(-5deg)">c = fλ</span>
      <span style="bottom:20%;right:5%;transform:rotate(-9deg)">TIR</span>
      <span style="bottom:14%;left:14%;transform:rotate(12deg)">λ / c</span>
      <span style="top:58%;right:20%;transform:rotate(4deg)">v = fλ</span>
      <span style="bottom:36%;left:40%;transform:rotate(-7deg)">E = hf</span>
    </div>
    <div class="splash-inner">
      <div class="splash-brand-mark">
        <span class="splash-brand-uni">Uni</span>
        <span class="splash-brand-edu">${t('splash.unitEducation')}</span>
      </div>
      <h1 class="splash-title">Uni+</h1>
      <button type="button" class="btn-splash-start" id="splashStart">${t('splash.start')}</button>
    </div>
  `;
  return splash;
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
