import { rad, deg, snellRefractedAngle, criticalAngle } from './rayMath.js';

export function createTirLab(t) {
  const wrap = document.createElement('div');
  wrap.innerHTML = `
    <canvas class="lab-canvas" width="900" height="480"></canvas>
    <div class="controls">
      <div class="control">
        <label>${t('tools.tir.n1')}</label>
        <input type="range" min="1.1" max="2.5" step="0.01" value="1.50" data-n1 />
        <input type="number" min="1.1" max="2.5" step="0.01" value="1.50" data-n1n />
      </div>
      <div class="control">
        <label>${t('tools.tir.n2')}</label>
        <input type="range" min="1" max="1.49" step="0.01" value="1.00" data-n2 />
        <input type="number" min="1" max="1.49" step="0.01" value="1.00" data-n2n />
      </div>
      <div class="control">
        <label>${t('tools.tir.angle')}</label>
        <input type="range" min="5" max="89" value="45" data-ang />
        <input type="number" min="5" max="89" value="45" data-angn />
      </div>
    </div>
    <p class="lead" data-status style="margin-top:8px;color:#9aa8b8;font-size:0.95rem"></p>
  `;

  const canvas = wrap.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  const status = wrap.querySelector('[data-status]');

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

  const getN1 = bindDual('[data-n1]', '[data-n1n]', 1.1, 2.5);
  const getN2 = bindDual('[data-n2]', '[data-n2n]', 1, 1.49);
  bindDual('[data-ang]', '[data-angn]', 5, 89);

  function draw() {
    const n1 = getN1();
    const n2 = Number(wrap.querySelector('[data-n2]').value);
    const iDeg = Number(wrap.querySelector('[data-ang]').value);
    const i1 = rad(iDeg);
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#0b0f14';
    ctx.fillRect(0, 0, w, h);

    const cy = h * 0.55;
    const bx = w * 0.48;

    ctx.fillStyle = '#1e293b';
    ctx.fillRect(0, 40, bx, h - 80);
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(bx, 40, w - bx, h - 80);

    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(bx, 40);
    ctx.lineTo(bx, h - 40);
    ctx.stroke();

    ctx.fillStyle = '#94a3b8';
    ctx.font = '13px system-ui';
    ctx.fillText(`dense n = ${n1.toFixed(2)} (left)`, 16, 64);
    ctx.fillText(`rare n = ${n2.toFixed(2)} (right)`, bx + 12, 64);

    const ic = criticalAngle(n1, n2);
    const icDeg = ic == null ? null : deg(ic);

    const L = 260;
    const x0 = bx - L * Math.cos(i1);
    const y0 = cy - L * Math.sin(i1);

    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(bx, cy);
    ctx.stroke();

    ctx.setLineDash([5, 5]);
    ctx.strokeStyle = '#64748b';
    ctx.beginPath();
    ctx.moveTo(bx - 160, cy);
    ctx.lineTo(bx + 220, cy);
    ctx.stroke();
    ctx.setLineDash([]);

    const t2 = snellRefractedAngle(n1, i1, n2);
    if (t2 == null) {
      // TIR: reflect in dense medium (i = r)
      const Lr = 260;
      const xr = bx - Lr * Math.cos(i1);
      const yr = cy - Lr * Math.sin(i1);
      ctx.strokeStyle = '#a78bfa';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(bx, cy);
      ctx.lineTo(xr, yr);
      ctx.stroke();
      status.textContent = `${t('tools.tir.critical')}: ${icDeg == null ? '—' : `${icDeg.toFixed(1)} deg`} 뿯½ ${t('tools.tir.state')}: ${t('tools.tir.full')}`;
    } else {
      const L2 = 300;
      const x1 = bx + L2 * Math.cos(t2);
      const y1 = cy - L2 * Math.sin(t2);
      ctx.strokeStyle = '#6ee7b7';
      ctx.beginPath();
      ctx.moveTo(bx, cy);
      ctx.lineTo(x1, y1);
      ctx.stroke();
      status.textContent = `${t('tools.tir.critical')}: ${icDeg == null ? '—' : `${icDeg.toFixed(1)} deg`} 뿯½ ${t('tools.tir.state')}: ${t('tools.tir.partial')} 뿯½ r = ${deg(t2).toFixed(1)} deg`;
    }

    ctx.fillStyle = '#e8eef5';
    ctx.font = '15px system-ui';
    ctx.fillText(`i = ${iDeg.toFixed(1)} deg (in dense medium)`, 16, 28);
  }

  draw();
  return wrap;
}
