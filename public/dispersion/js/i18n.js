/** Standalone i18n — flat locale keys for t(key). */
export let currentLang = 'zh';
const STORAGE_KEY = 's3phy.dispersion.lang';

export function hubLangToLocal(hubLang) {
  if (hubLang === 'zh-Hant' || hubLang === 'zh') return 'zh';
  return 'en';
}

export function initLangFromUrl() {
  const lang = new URLSearchParams(location.search).get('lang');
  if (lang) {
    currentLang = hubLangToLocal(lang);
  } else {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'en' || stored === 'zh') {
        currentLang = stored;
      }
    } catch (e) {
      // ignore
    }
  }
}

export function setLang(lang) {
  currentLang = lang === 'en' ? 'en' : 'zh';
  try {
    localStorage.setItem(STORAGE_KEY, currentLang);
  } catch (e) {
    // ignore
  }
  document.documentElement.lang = currentLang === 'zh' ? 'zh-HK' : 'en';
  return currentLang;
}

export function getLang() {
  return currentLang;
}

const STRINGS = {
  en: {
    'tools.dispersion.title': 'Dispersion of Light — Prism',
    'tools.dispersion.subtitle': 'Simulate white light separating into a rainbow spectrum through twice refraction inside a glass prism.',
    'tools.dispersion.sourceHeight': 'Light Source Height',
    'tools.dispersion.sourceAngle': 'Light Angle',
    'tools.dispersion.apexAngle': 'Apex Angle (A)',
    'tools.dispersion.baseN': 'Base Refractive Index n₀',
    'tools.dispersion.dispStrength': 'Dispersion Strength B',
    'tools.dispersion.sourceMode': 'Source Mode',
    'tools.dispersion.mode.white': 'White Light (15 Rays)',
    'tools.dispersion.mode.mono': 'Monochromatic',
    'tools.dispersion.monoColor': 'Wavelength / Color',
    'tools.dispersion.presets': 'Prism Material',
    'tools.dispersion.material.crown': 'Crown Glass (n₀=1.50, B=0.015)',
    'tools.dispersion.material.flint': 'Flint Glass (n₀=1.62, B=0.035)',
    'tools.dispersion.material.diamond': 'Diamond (n₀=2.41, B=0.055)',
    'tools.dispersion.material.custom': 'Custom',
    'tools.dispersion.reset': 'Reset',
    'tools.dispersion.canvas.whiteSource': 'White Source',
    'tools.dispersion.canvas.monoSource': 'Monochromatic',
    'tools.dispersion.canvas.prism': 'Triangular Prism',
    'tools.dispersion.canvas.spectrum': 'Dispersion Spectrum',
    'tools.dispersion.canvas.tir': 'Total Internal Reflection (TIR)',
    'tools.dispersion.hideControls': 'Hide Controls',
    'tools.dispersion.showControls': 'Show Controls',
    'tools.dispersion.canvas.normal': 'Normal',
    'tools.dispersion.canvas.refracted': 'Refracted',
    'tools.dispersion.canvas.incident': 'Incident',
  },
  zh: {
    'tools.dispersion.title': '光的色散 — 三稜鏡',
    'tools.dispersion.subtitle': '模擬白光穿過玻璃三稜鏡時，因兩次折射及不同波長折射率之差異而色散成七彩光譜。',
    'tools.dispersion.sourceHeight': '光源高度',
    'tools.dispersion.sourceAngle': '光源角度',
    'tools.dispersion.apexAngle': '稜鏡頂角 (A)',
    'tools.dispersion.baseN': '基礎折射率 n₀',
    'tools.dispersion.dispStrength': '色散強度 B',
    'tools.dispersion.sourceMode': '光源模式',
    'tools.dispersion.mode.white': '白光 (15條漸變光線)',
    'tools.dispersion.mode.mono': '單色光 (單一顏色)',
    'tools.dispersion.monoColor': '波長 / 顏色',
    'tools.dispersion.presets': '三稜鏡材質',
    'tools.dispersion.material.crown': '皇冠玻璃 (n₀=1.50, B=0.015)',
    'tools.dispersion.material.flint': '火石玻璃 (n₀=1.62, B=0.035)',
    'tools.dispersion.material.diamond': '鑽石 (n₀=2.41, B=0.055)',
    'tools.dispersion.material.custom': '自訂材質',
    'tools.dispersion.reset': '重設',
    'tools.dispersion.canvas.whiteSource': '白光源',
    'tools.dispersion.canvas.monoSource': '單色光源',
    'tools.dispersion.canvas.prism': '三角三稜鏡',
    'tools.dispersion.canvas.spectrum': '七彩漸變色散光譜',
    'tools.dispersion.canvas.tir': '發生全內反射 (TIR)',
    'tools.dispersion.hideControls': '收合控制台',
    'tools.dispersion.showControls': '展開控制台',
    'tools.dispersion.canvas.normal': '法線',
    'tools.dispersion.canvas.refracted': '折射',
    'tools.dispersion.canvas.incident': '入射',
  },
};

export function createT(lang = currentLang) {
  const map = STRINGS[lang === 'en' ? 'en' : 'zh'] || STRINGS.zh;
  return (key) => map[key] ?? key;
}
