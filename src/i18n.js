import { en } from './locales/en.js';
import { zhHant } from './locales/zhHant.js';

const STORAGE_KEY = 's3phy.lang';

const bundles = {
  en,
  'zh-Hant': zhHant,
};

/** @type {keyof typeof bundles} */
let current = 'en';

function readStored() {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v === 'zh-Hant' || v === 'en') return v;
  } catch {
    /* ignore */
  }
  return 'en';
}

export function initI18n() {
  current = readStored();
}

/** @param {keyof typeof bundles} lang */
export function setLang(lang) {
  if (!bundles[lang]) return;
  current = lang;
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* ignore */
  }
  document.documentElement.lang = lang === 'zh-Hant' ? 'zh-Hant' : 'en';
  window.dispatchEvent(new CustomEvent('s3phy:lang'));
}

export function getLang() {
  return current;
}

/** @param {string} key */
export function t(key) {
  const table = bundles[current] || en;
  if (Object.prototype.hasOwnProperty.call(table, key)) return table[key];
  if (Object.prototype.hasOwnProperty.call(en, key)) return en[key];
  return key;
}
