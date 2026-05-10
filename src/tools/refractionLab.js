import { rad, deg, snellRefractedAngle } from './rayMath.js';

export function createRefractionLab(t) {
  const wrap = document.createElement('div');
  wrap.innerHTML = `
    <canvas class="lab-canvas" width="900" height="480"></canvas>
    <div class="controls">
      <div class="control">
        <label>${t('tools.refraction.n1')}</label>
        <input type="range" min="1" max="2.5" step="0.01" value="1.00" data-n1 />
        <input type="number" min="1" max="2.5" step="0.01" value="1.00" data-n1n />
      </div>
      <div class="control">
        <label>${t('tools.refraction.n2')}</label>
        <input type="range" min="1" max="2.5" step="0.01" value="1.50" data-n2 />
        <input type="number" min="1" max="2.5" step="0.01" value="1.50" data-n2n />
      </div>
      <div class="control">
        <label>${t('tools.refraction.angle')}</label>
        <input type="range" min="5" max="80" value="40" data-ang />
        <input type="number" min="5" max="80" value="40" data-angn />
      </div>
    </div>
  `;

  const canvas = wrap.querySelector('canvas');
  const ctx = canvas.getContext('2d');

  const bindDual = (rSel, nSel, lo, hi, onInput) => {
    const r = wrap.querySelector(rSel);
    const n = wrap.querySelector(nSel);
    const apply = (fromR) => {
      let v = fromR ? Number(r.value) : Number(n.value);
      if (Number.isNaN(v)) v = lo;
      v = Math.max(lo, Math.min(hi, v));
      r.value = String(v);
      n.value = String(v);
      onInput();
    };
    r.addEventListener('input', () => apply(true));
    n.addEventListener('change', () => apply(false));
    return () => Number(wrap.querySelector(rSel).value);
  };

  const getN1 = bindDual('[data-n1]', '[data-n1n]', 1, 2.5, draw);
  const getN2 = bindDual('[data-n2]', '[data-n2n]', 1, 2.5, draw);
  bindDual('[data-ang]', '[data-angn]', 5, 80, draw);

  function draw() {
    const n1 = getN1();
    const n2 = getN2();
    const iDeg = Number(wrap.querySelector('[data-ang]').value);
    const i = rad(iDeg);
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#0b0f14';
    ctx.fillRect(0, 0, w, h);

    const cy = h * 0.55;
    const bx = w * 0.48;

    // boundary vertical
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(bx, 40);
    ctx.lineTo(bx, h - 40);
    ctx.stroke();

    ctx.fillStyle = '#1e293b';
    ctx.fillRect(0, 40, bx, h - 80);
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(bx, 40, w - bx, h - 80);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '13px system-ui';
    ctx.fillText(`n1 = ${n1.toFixed(2)}`, 16, 64);
    ctx.fillText(`n2 = ${n2.toFixed(2)}`, bx + 12, 64);

    // incident from left, upper half
    const L = 260;
    const x0 = bx - L * Math.cos(i);
    const y0 = cy - L * Math.sin(i);

    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(bx, cy);
    ctx.stroke();

    // normal horizontal
    ctx.setLineDash([5, 5]);
    ctx.strokeStyle = '#64748b';
    ctx.beginPath();
    ctx.moveTo(bx - 140, cy);
    ctx.lineTo(bx + 220, cy);
    ctx.stroke();
    ctx.setLineDash([]);

    const t2 = snellRefractedAngle(n1, i, n2);
    if (t2 == null) {
      ctx.fillStyle = '#f87171';
      ctx.fillText('TIR from this side is not physical for n1 <= n2 here', 16, 28);
    } else {
      const L2 = 280;
      const x1 = bx + L2 * Math.cos(t2);
      const y1 = cy - L2 * Math.sin(t2);
      ctx.strokeStyle = '#6ee7b7';
      ctx.beginPath();
      ctx.moveTo(bx, cy);
      ctx.lineTo(x1, y1);
      ctx.stroke();

      ctx.fillStyle = '#e8eef5';
      ctx.font = '15px system-ui';
      ctx.fillText(`i = ${iDeg.toFixed(1)} deg, r = ${deg(t2).toFixed(1)} deg`, 16, 28);
    }
  }

  draw();
  return wrap;
}
