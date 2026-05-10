import { getLang } from '../i18n.js';

const bands = [
  { id: 'gamma', minHz: 1e19, maxHz: 1e22, color: '#7c3aed' },
  { id: 'xray', minHz: 1e16, maxHz: 1e19, color: '#6366f1' },
  { id: 'uv', minHz: 7.5e14, maxHz: 1e16, color: '#3b82f6' },
  { id: 'visible', minHz: 4e14, maxHz: 7.5e14, color: '#22c55e' },
  { id: 'ir', minHz: 3e11, maxHz: 4e14, color: '#f97316' },
  { id: 'micro', minHz: 1e8, maxHz: 3e11, color: '#eab308' },
  { id: 'radio', minHz: 1e4, maxHz: 1e8, color: '#a855f7' },
];

function log10(x) {
  return Math.log(x) / Math.LN10;
}

export function createEmLab(t) {
  const wrap = document.createElement('div');
  wrap.innerHTML = `
    <canvas class="lab-canvas" width="900" height="220"></canvas>
    <p class="lead" style="margin-top:8px">${t('tools.em.pick')}</p>
    <div data-detail class="card" style="margin-top:10px"></div>
  `;

  const canvas = wrap.querySelector('canvas');
  const detail = wrap.querySelector('[data-detail]');
  const ctx = canvas.getContext('2d');

  const minL = log10(1e4);
  const maxL = log10(1e22);

  function bandLabel(id) {
    const map = {
      gamma: { en: 'Gamma rays', zh: '\u4f3d\u7463\u5c04\u7dda' },
      xray: { en: 'X-rays', zh: 'X \u5c04\u7dda' },
      uv: { en: 'Ultraviolet', zh: '\u7d2b\u5916\u7dda' },
      visible: { en: 'Visible light', zh: '\u53ef\u898b\u5149' },
      ir: { en: 'Infrared', zh: '\u7d05\u5916\u7dda' },
      micro: { en: 'Microwaves', zh: '\u5fae\u6ce2' },
      radio: { en: 'Radio waves', zh: '\u7121\u7dda\u96fb' },
    };
    const useZh = getLang() === 'zh-Hant';
    const row = map[id];
    if (!row) return id;
    return useZh ? row.zh : row.en;
  }

  function describe(id) {
    const en = {
      gamma: 'Highest energy; used in medicine and astronomy.',
      xray: 'Penetrates soft tissue; used in imaging.',
      uv: 'Ionising at high doses; causes sunburn.',
      visible: 'Detected by human eyes; ROYGBIV colours.',
      ir: 'Heat radiation; remote controls and fibre optics.',
      micro: 'Used in communications and heating food.',
      radio: 'Longest wavelengths for broadcast and radar.',
    };
    const zh = {
      gamma: '\u9ad8\u80fd\u91cf\uff1b\u91ab\u5b78\u8207\u5929\u6587\u61c9\u7528\u3002',
      xray: '\u7a7f\u900f\u8edf\u7d44\u7e54\uff1b\u7528\u65bc\u986f\u50cf\u3002',
      uv: '\u9ad8\u529f\u7387\u6642\u6709\u96fb\u96e2\u6548\u61c9\uff1b\u66ec\u50b7\u3002',
      visible: '\u4eba\u773c\u53ef\u898b\uff1b\u7d05\u6a59\u9ec3\u7da0\u85cd\u975b\u7d2b\u3002',
      ir: '\u71b1\u8f3b\u5c04\uff1b\u9060\u63a7\u8207\u5149\u7e96\u901a\u8a0a\u3002',
      micro: '\u901a\u8a0a\u8207\u5fae\u6ce2\u7210\u52a0\u71b1\u3002',
      radio: '\u6700\u9577\u6ce2\u9577\uff1b\u5ee3\u64ad\u8207\u96f7\u9054\u3002',
    };
    const useZh = getLang() === 'zh-Hant';
    return useZh ? zh[id] : en[id];
  }

  function draw() {
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#0b0f14';
    ctx.fillRect(0, 0, w, h);

    const pad = 24;
    const barY = h * 0.45;
    const barH = 36;

    bands.forEach((b, i) => {
      const x0 = pad + ((log10(b.minHz) - minL) / (maxL - minL)) * (w - pad * 2);
      const x1 = pad + ((log10(b.maxHz) - minL) / (maxL - minL)) * (w - pad * 2);
      ctx.fillStyle = b.color;
      ctx.fillRect(x0, barY, Math.max(6, x1 - x0), barH);
    });

    ctx.fillStyle = '#cbd5e1';
    ctx.font = '13px system-ui';
    ctx.fillText('10^4 Hz', pad, barY + barH + 26);
    ctx.fillText('10^22 Hz', w - pad - 60, barY + barH + 26);
  }

  canvas.addEventListener('click', (ev) => {
    const rect = canvas.getBoundingClientRect();
    const x = ((ev.clientX - rect.left) / rect.width) * canvas.width;
    const pad = 24;
    const frac = (x - pad) / (canvas.width - pad * 2);
    const hz = 10 ** (minL + frac * (maxL - minL));
    const hit = bands.find((b) => hz >= b.minHz && hz <= b.maxHz);
    if (!hit) return;
    detail.innerHTML = `<h3 style="margin:0 0 6px">${bandLabel(hit.id)}</h3><p style="margin:0;color:#9aa8b8">${describe(hit.id)}</p>`;
  });

  draw();
  return wrap;
}
