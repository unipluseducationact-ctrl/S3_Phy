import { rad } from './rayMath.js';

export function createReflectionLab(t) {
  const wrap = document.createElement('div');
  wrap.innerHTML = `
    <canvas class="lab-canvas" width="900" height="480" aria-label="${t('tools.reflection.title')}"></canvas>
    <div class="controls">
      <div class="control">
        <label>${t('tools.reflection.angle')}</label>
        <input type="range" min="5" max="85" value="35" data-i />
        <input type="number" min="5" max="85" value="35" data-i-num />
      </div>
    </div>
  `;

  const canvas = wrap.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  const range = wrap.querySelector('[data-i]');
  const num = wrap.querySelector('[data-i-num]');

  function sync(fromRange) {
    const v = clampNum(fromRange ? range.value : num.value);
    range.value = String(v);
    num.value = String(v);
    draw(v);
  }

  function clampNum(v) {
    const n = Number(v);
    if (Number.isNaN(n)) return 35;
    return Math.max(5, Math.min(85, n));
  }

  range.addEventListener('input', () => sync(true));
  num.addEventListener('change', () => sync(false));

  function draw(angleDeg) {
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#0b0f14';
    ctx.fillRect(0, 0, w, h);

    const cy = h * 0.55;
    const mirrorX = w * 0.45;
    const len = 320;

    // mirror line (plane vertical)
    ctx.strokeStyle = '#9aa8b8';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(mirrorX, cy - len / 2);
    ctx.lineTo(mirrorX, cy + len / 2);
    ctx.stroke();

    ctx.fillStyle = '#cbd5e1';
    ctx.font = '14px system-ui';
    ctx.fillText('Mirror', mirrorX + 8, cy - len / 2 + 16);

    const i = rad(angleDeg);
    const rayLen = 220;
    const x0 = mirrorX - rayLen * Math.cos(i);
    const y0 = cy - rayLen * Math.sin(i);

    // incident
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(mirrorX, cy);
    ctx.stroke();

    // reflected (angle of reflection = angle of incidence)
    const x1 = mirrorX + rayLen * Math.cos(i);
    const y1 = cy - rayLen * Math.sin(i);
    ctx.strokeStyle = '#6ee7b7';
    ctx.beginPath();
    ctx.moveTo(mirrorX, cy);
    ctx.lineTo(x1, y1);
    ctx.stroke();

    // normal (horizontal for vertical mirror)
    ctx.setLineDash([6, 6]);
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(mirrorX - 120, cy);
    ctx.lineTo(mirrorX + 120, cy);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = '#e8eef5';
    ctx.font = '16px system-ui';
    ctx.fillText(`i = r = ${angleDeg.toFixed(0)} deg`, 16, 28);
  }

  sync(true);
  return wrap;
}
