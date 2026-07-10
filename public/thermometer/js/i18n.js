/** Standalone i18n — flat locale keys for t(key). */
export let currentLang = 'zh';

export function hubLangToLocal(hubLang) {
  if (hubLang === 'zh-Hant' || hubLang === 'zh') return 'zh';
  return 'en';
}

export function initLangFromUrl() {
  const lang = new URLSearchParams(location.search).get('lang');
  if (lang) currentLang = hubLangToLocal(lang);
}

export function setLang(lang) {
  currentLang = lang === 'en' ? 'en' : 'zh';
  document.documentElement.lang = currentLang === 'zh' ? 'zh-HK' : 'en';
  return currentLang;
}

export function getLang() {
  return currentLang;
}

const STRINGS = {
  en: {
  'tools.thermometerLab.title': "Thermometry & Calibration Lab",
  'tools.thermometerLab.subtitle': "Interactive study companion for liquid-in-glass, platinum resistance, and thermistor thermometers.",
  'tools.thermometerLab.liquid.title': "Liquid-in-Glass Thermometer",
  'tools.thermometerLab.liquid.subtitle': "Explore the effects of bulb volume, capillary bore, and liquid type on sensitivity and response time.",
  'tools.thermometerLab.resistance.title': "Platinum Resistance Thermometer",
  'tools.thermometerLab.resistance.subtitle': "Investigate how platinum resistance varies linearly with temperature and solve calibration problems.",
  'tools.thermometerLab.thermistor.title': "Negative Temperature Coefficient Thermistor",
  'tools.thermometerLab.thermistor.subtitle': "Study the non-linear resistance-temperature relationship of negative temperature coefficient thermistors and live beta calculations.",
  'tools.thermometerLab.thermistor.liveBetaLabel': "Live negative temperature coefficient beta calculation",
  'tools.thermometerLab.thermistor.meterLabelLine1': "NEGATIVE TEMPERATURE",
  'tools.thermometerLab.thermistor.meterLabelLine2': "COEFFICIENT THERMISTOR",
  'tools.thermometerLab.labels.show': "Show Structure Labels",
  'tools.thermometerLab.labels.hide': "Hide Structure Labels",
  'tools.thermometerLab.labels.thinWall': "Thin glass wall (fast heat transfer)",
  'tools.thermometerLab.labels.largeBulb': "Large bulb (contains more liquid, increases sensitivity)",
  'tools.thermometerLab.labels.narrowBore': "Narrow capillary bore (liquid rises higher, increases sensitivity)",
  'tools.thermometerLab.labels.meniscus': "Meniscus (reading point)",
  'tools.thermometerLab.labels.platinumCoil': "Platinum coil (resistance increases linearly with temp)",
  'tools.thermometerLab.labels.metalSheath': "Metal sheath (protects & conducts heat quickly)",
  'tools.thermometerLab.labels.semiconductorBead': "Semiconductor bead (resistance decreases exponentially with temp)",
  'tools.thermometerLab.labels.leads': "Connecting leads",
  'tools.thermometerLab.faulty.dualScale': "Dual-Scale Comparison Diagram",
  'tools.thermometerLab.faulty.trueScale': "True Scale (°C)",
  'tools.thermometerLab.faulty.faultyScale': "Faulty Scale (°C)",
  'tools.thermometerLab.paramSettings': "Parameter settings",
  'tools.floatingControls.dragHint': "Drag to move",
  'tools.floatingControls.showParams': "Show parameters",
  'tools.floatingControls.hideParams': "Hide parameters",
  'tools.thermometerLab.faultySolver': "Faulty thermometer solver",
  'tools.thermometerLab.resistanceSolver': "Resistance-to-temperature solver",
  'tools.faultyCalibration.title': "Faulty Scale Calibration",
  'tools.faultyCalibration.subtitle': "Set ice and steam readings on a faulty scale, then solve for true temperature T or faulty reading C.",
  'tools.faultyCalibration.formulaTitle': "Faulty scale calibration",
  'tools.faultyCalibration.intro': "Set faulty readings at ice (0°C) and steam (100°C), then solve for T or C.",
  'tools.faultyCalibration.liveLabel': "Live worked solution",
  'tools.faultyCalibration.iceReading': "Ice reading C<sub>f</sub> (true 0°C)",
  'tools.faultyCalibration.steamReading': "Steam reading C<sub>u</sub> (true 100°C)",
  'tools.faultyCalibration.interval': "Proportional interval (C<sub>u</sub> − C<sub>f</sub>)",
  'tools.faultyCalibration.findTrueTemp': "Find True Temp (T)",
  'tools.faultyCalibration.findFaultyReading': "Find Faulty Reading (C)",
  'tools.faultyCalibration.faultyReadingC': "Faulty reading C",
  'tools.faultyCalibration.trueTempT': "True temperature T",
  'tools.faultyCalibration.invalidInterval': "C_u must differ from C_f (interval cannot be zero)."
  },
  zh: {
  'tools.thermometerLab.title': "溫度計與校準實驗室",
  'tools.thermometerLab.subtitle': "液體玻璃、鈐電阻及熱敏電阻溫度計的互動學習伴侶。",
  'tools.thermometerLab.liquid.title': "液體玻璃溫度計",
  'tools.thermometerLab.liquid.subtitle': "探索玻璃泡容積、毛細管內外徑和液體種類對靉敏度及反應時間的影響。",
  'tools.thermometerLab.resistance.title': "鈐電阻溫度計",
  'tools.thermometerLab.resistance.subtitle': "研究鈐電阻如何隨溫度呈線性變化，並解決溫度校準問題。",
  'tools.thermometerLab.thermistor.title': "負溫度係數熱敏電阻溫度計",
  'tools.thermometerLab.thermistor.subtitle': "學習負溫度係數熱敏電阻的非線性電阻-溫度關係，並進行實時 Beta 計算。",
  'tools.thermometerLab.thermistor.liveBetaLabel': "即時負溫度係數 Beta 計算",
  'tools.thermometerLab.thermistor.meterLabelLine1': "負溫度係數",
  'tools.thermometerLab.thermistor.meterLabelLine2': "熱敏電阻",
  'tools.thermometerLab.labels.show': "顯示結構標註",
  'tools.thermometerLab.labels.hide': "隱藏結構標註",
  'tools.thermometerLab.labels.thinWall': "薄玻璃壁 (快速傳熱)",
  'tools.thermometerLab.labels.largeBulb': "大玻璃泡 (容納更多液體，提高靉敏度)",
  'tools.thermometerLab.labels.narrowBore': "細毛細管 (液柱升得更高，提高靉敏度)",
  'tools.thermometerLab.labels.meniscus': "彎月面 (讀數位置)",
  'tools.thermometerLab.labels.platinumCoil': "鈐絲線圈 (電阻隨溫度線性增加)",
  'tools.thermometerLab.labels.metalSheath': "金屬保護套 (保護並快速導熱)",
  'tools.thermometerLab.labels.semiconductorBead': "半導體小珠 (電阻隨溫度指數級減少)",
  'tools.thermometerLab.labels.leads': "連接導線",
  'tools.thermometerLab.faulty.dualScale': "雙刻度對比示意圖",
  'tools.thermometerLab.faulty.trueScale': "標準溫標 (°C)",
  'tools.thermometerLab.faulty.faultyScale': "偏差溫標 (°C)",
  'tools.thermometerLab.paramSettings': "參數設定",
  'tools.floatingControls.dragHint': "拖曳以移動",
  'tools.floatingControls.showParams': "顯示參數",
  'tools.floatingControls.hideParams': "隱藏參數",
  'tools.thermometerLab.faultySolver': "故障溫度計求解器",
  'tools.thermometerLab.resistanceSolver': "電阻求溫度求解器",
  'tools.faultyCalibration.title': "偏差溫標校準",
  'tools.faultyCalibration.subtitle': "設定冰點與水蒸點的偏差讀數，求解真實溫度 T 或偏差讀數 C。",
  'tools.faultyCalibration.formulaTitle': "偏差溫標校準",
  'tools.faultyCalibration.intro': "設定冰點（0°C）與水蒸點（100°C）的偏差讀數，然後求解 T 或 C。",
  'tools.faultyCalibration.liveLabel': "即時計算過程",
  'tools.faultyCalibration.iceReading': "冰點讀數 C<sub>f</sub>（真實 0°C）",
  'tools.faultyCalibration.steamReading': "水蒸點讀數 C<sub>u</sub>（真實 100°C）",
  'tools.faultyCalibration.interval': "比例區間（C<sub>u</sub> − C<sub>f</sub>）",
  'tools.faultyCalibration.findTrueTemp': "求真實溫度（T）",
  'tools.faultyCalibration.findFaultyReading': "求偏差讀數（C）",
  'tools.faultyCalibration.faultyReadingC': "偏差讀數 C",
  'tools.faultyCalibration.trueTempT': "真實溫度 T",
  'tools.faultyCalibration.invalidInterval': "C<sub>u</sub> 與 C<sub>f</sub> 不可相同（區間不可為零）。"
  },
};

export function createT(lang = currentLang) {
  const map = STRINGS[lang === 'en' ? 'en' : 'zh'] || STRINGS.zh;
  return (key) => map[key] ?? key;
}
