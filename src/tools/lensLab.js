import { rad } from './rayMath.js';

/** @param {(key: string) => string} t @param {{ defaultKind?: 'convex' | 'concave' }} [opts] */
export function createLensLab(t, opts = {}) {
  const wrap = document.createElement('div');
  wrap.innerHTML = `
    <canvas class="lab-canvas" width="900" height="480"></canvas>
    <div class="controls">
      <div class="control">
        <label>${t('tools.lens.type')}</label>
        <select data-lens>
          <option value="convex">${t('tools.lens.convex')}</option>
          <option value="concave">${t('tools.lens.concave')}</option>
        </select>
      </div>
      <div class="control">
        <label>${t('tools.lens.u')}</label>
        <input type="range" min="120" max="420" value="260" data-u />
        <input type="number" min="120" max="420" value="260" data-un />
      </div>
      <div class="control">
        <label>${t('tools.lens.f')}</label>
        <input type="range" min="60" max="200" value="120" data-f />
        <input type="number" min="60" max="200" value="120" data-fn />
      </div>
      <div class="control">
        <label>${t('tools.lens.h')}</label>
        <input type="range" min="20" max="90" value="50" data-h />
        <input type="number" min="20" max="90" value="50" data-hn />
      </div>
    </div>
    <p class="lead" style="margin-top:10px;color:#9aa8b8;font-size:0.92rem">${t('tools.lens.note')}</p>
  `;

  const canvas = wrap.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  const lensSel = wrap.querySelector('[data-lens]');
  if (opts.defaultKind === 'convex' || opts.defaultKind === 'concave') {
    lensSel.value = opts.defaultKind;
  }

  const bindDual = (rSel, nSel, lo, hi) => {
    const r = wrap.querySelector(rSel);
    const n = wrap.querySelector(nSel);
    const apply = (fromR) => {
      let v = fromR ? Number(r.value) : Number(n.value);
      if (Number.isNaN(v)) v = lo;
      v = Math.max(lo, Math.min(hi, v));
      r.value = String(v);
      n.value = String(v);
      draw();
    };
    r.addEventListener('input', () => apply(true));
    n.addEventListener('change', () => apply(false));
    return () => Number(wrap.querySelector(rSel).value);
  };

  const getU = bindDual('[data-u]', '[data-un]', 120, 420);
  const getF = bindDual('[data-f]', '[data-fn]', 60, 200);
  const getH = bindDual('[data-h]', '[data-hn]', 20, 90);
  lensSel.addEventListener('change', draw);

  function line(ctx2, x0, y0, x1, y1, color, width = 2, dash = []) {
    ctx2.setLineDash(dash);
    ctx2.strokeStyle = color;
    ctx2.lineWidth = width;
    ctx2.beginPath();
    ctx2.moveTo(x0, y0);
    ctx2.lineTo(x1, y1);
    ctx2.stroke();
    ctx2.setLineDash([]);
  }

  function draw() {
    const kind = lensSel.value;
    const u = getU();
    const fMag = getF();
    const hObj = getH();
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#0b0f14';
    ctx.fillRect(0, 0, w, h);

    const cx = w * 0.52;
    const cy = h * 0.55;
    const f = kind === 'convex' ? fMag : -fMag;

    // optical axis
    line(ctx, 40, cy, w - 40, cy, '#334155', 1);

    // lens
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 4;
    ctx.beginPath();
    if (kind === 'convex') {
      ctx.moveTo(cx, cy - 140);
      ctx.quadraticCurveTo(cx - 18, cy, cx, cy + 140);
      ctx.quadraticCurveTo(cx + 18, cy, cx, cy - 140);
    } else {
      ctx.moveTo(cx - 18, cy - 140);
      ctx.quadraticCurveTo(cx, cy, cx - 18, cy + 140);
      ctx.moveTo(cx + 18, cy - 140);
      ctx.quadraticCurveTo(cx, cy, cx + 18, cy + 140);
    }
    ctx.stroke();

    const objX = cx - u;
    const tipX = objX;
    const tipY = cy - hObj;

    // object arrow
    line(ctx, objX, cy, tipX, tipY, '#fbbf24', 3);
    ctx.fillStyle = '#fbbf24';
    ctx.beginPath();
    ctx.moveTo(tipX, tipY);
    ctx.lineTo(tipX - 6, tipY + 12);
    ctx.lineTo(tipX + 6, tipY + 12);
    ctx.closePath();
    ctx.fill();

    const F1 = { x: cx - Math.abs(f), y: cy };
    const F2 = { x: cx + Math.abs(f), y: cy };

    // focal points markers
    ctx.fillStyle = '#64748b';
    for (const p of [F1, F2]) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
      ctx.fill();
    }

    if (kind === 'convex') {
      // P-ray: parallel to axis from tip -> toward focal on right
      const hitX = cx;
      const hitY = tipY;
      line(ctx, tipX, tipY, hitX, hitY, '#fbbf24', 2, [4, 4]);
      line(ctx, hitX, hitY, F2.x + 220, F2.y, '#6ee7b7', 2);

      // C-ray through optical center
      const slope = (tipY - cy) / (tipX - cx);
      const xFar = w - 60;
      const yFar = cy + slope * (xFar - cx);
      line(ctx, tipX, tipY, xFar, yFar, '#93c5fd', 2);

      // F-ray: toward left focal from tip -> emerges parallel (qualitative)
      line(ctx, tipX, tipY, F1.x, F1.y, '#fca5a5', 2, [3, 6]);
      line(ctx, F1.x, F1.y, w - 80, tipY, '#fca5a5', 2);
    } else {
      // concave: parallel from tip diverges as if from left focus
      const hitX = cx;
      const hitY = tipY;
      line(ctx, tipX, tipY, hitX, hitY, '#fbbf24', 2, [4, 4]);
      const virt = F1;
      line(ctx, hitX, hitY, virt.x - 200, cy - rad(8) * 40, '#6ee7b7', 2);

      line(ctx, tipX, tipY, w - 100, cy + 30, '#93c5fd', 2, [3, 5]);
    }

    ctx.fillStyle = '#e8eef5';
    ctx.font = '14px system-ui';
    ctx.fillText(`u = ${u.toFixed(0)} px, |f| = ${fMag.toFixed(0)} px, lens = ${kind}`, 16, 28);
  }

  draw();
  return wrap;
}
