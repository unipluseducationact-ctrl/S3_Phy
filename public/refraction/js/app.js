/** Interactive refraction lab — Snell's law, media, light speed. */

const MEDIA = {
  air: { id: 'air', n: 1.0 },
  water: { id: 'water', n: 1.33 },
  glass: { id: 'glass', n: 1.5 },
};

const C_VACUUM = 3.0; // × 10⁸ m s⁻¹

/**
 * @param {(key: string) => string} t
 */
export function initRefractionLab(root, t) {
  const wrap = document.createElement('div');
  wrap.className = 'reflab';
  wrap.innerHTML = `
    <div class="reflab-head">
      <h2 class="reflab-title">${t('tools.refraction.title')}</h2>
      <div class="reflab-sub">${t('tools.refraction.subtitle')}</div>
    </div>
    <div class="reflab-dash">
      <div class="reflab-viz">
        <button type="button" class="reflab-toggle-btn" data-toggle-controls>
          <span class="reflab-toggle-icon">➡️</span>
          <span class="reflab-toggle-text">${t('tools.refraction.hideControls')}</span>
        </button>
        <canvas class="reflab-canvas" width="720" height="440" aria-label="${t('tools.refraction.title')}"></canvas>
      </div>

      <div class="reflab-controls">
        <!-- Column 1: Incident Medium -->
        <div class="reflab-control-col">
          <div class="reflab-medium-block">
            <div class="reflab-label">${t('tools.refraction.n1')}</div>
            <div class="reflab-chips" data-side="1">
              ${mediumChips('1')}
            </div>
            <div style="margin-top: 8px; margin-bottom: 8px; display: flex; gap: 8px; align-items: center;">
              <input type="range" data-n1-slider min="1.00" max="2.00" step="0.01" value="1.00" style="flex: 1; accent-color: #ffea00; margin: 0;" />
              <input type="number" data-n1-input min="1.00" max="2.00" step="0.01" value="1.00" style="width: 60px; background: #161a29; border: 1px solid var(--reflab-border); color: #fff; border-radius: 6px; padding: 4px; font-size: 0.85rem; text-align: center; font-weight: bold;" />
            </div>
            <div class="reflab-readout">
              <span>${t('tools.refraction.nLabel')}₁ = <strong data-n="1">1.00</strong></span>
              <span>${t('tools.refraction.speedLabel')}₁ = <strong data-v="1">3.00</strong> ${t('tools.refraction.speedUnit')}</span>
            </div>
          </div>
        </div>

        <!-- Column 2: Refracted Medium -->
        <div class="reflab-control-col">
          <div class="reflab-medium-block">
            <div class="reflab-label">${t('tools.refraction.n2')}</div>
            <div class="reflab-chips" data-side="2">
              ${mediumChips('2')}
            </div>
            <div style="margin-top: 8px; margin-bottom: 8px; display: flex; gap: 8px; align-items: center;">
              <input type="range" data-n2-slider min="1.00" max="2.00" step="0.01" value="1.33" style="flex: 1; accent-color: var(--reflab-cyan); margin: 0;" />
              <input type="number" data-n2-input min="1.00" max="2.00" step="0.01" value="1.33" style="width: 60px; background: #161a29; border: 1px solid var(--reflab-border); color: #fff; border-radius: 6px; padding: 4px; font-size: 0.85rem; text-align: center; font-weight: bold;" />
            </div>
            <div class="reflab-readout">
              <span>${t('tools.refraction.nLabel')}₂ = <strong data-n="2">1.33</strong></span>
              <span>${t('tools.refraction.speedLabel')}₂ = <strong data-v="2">2.26</strong> ${t('tools.refraction.speedUnit')}</span>
            </div>
          </div>
        </div>

        <!-- Column 3: Angles, Formula & Reset -->
        <div class="reflab-control-col">
          <div class="reflab-cg">
            <div class="reflab-lr">
              <span>${t('tools.refraction.angleI')}</span>
              <span class="reflab-badge" data-disp="theta1">40.0°</span>
            </div>
            <div style="display: flex; gap: 8px; align-items: center;">
              <input type="range" data-theta1 min="0" max="89" step="0.5" value="40" style="flex: 1; margin: 0;" />
              <input type="number" data-theta1-input min="0" max="89" step="0.1" value="40" style="width: 60px; background: #161a29; border: 1px solid var(--reflab-border); color: #fff; border-radius: 6px; padding: 4px; font-size: 0.85rem; text-align: center; font-weight: bold;" />
            </div>
          </div>
          <div class="reflab-cg">
            <div class="reflab-lr">
              <span>${t('tools.refraction.angleR')}</span>
              <span class="reflab-badge" data-disp="theta2">29.0°</span>
            </div>
            <div style="display: flex; gap: 8px; align-items: center;">
              <input type="range" data-theta2 min="0" max="89" step="0.5" value="29" style="flex: 1; margin: 0;" />
              <input type="number" data-theta2-input min="0" max="89" step="0.1" value="29" style="width: 60px; background: #161a29; border: 1px solid var(--reflab-border); color: #fff; border-radius: 6px; padding: 4px; font-size: 0.85rem; text-align: center; font-weight: bold;" />
            </div>
          </div>
          <div class="reflab-formula">${t('tools.refraction.snell')}</div>
          <div class="reflab-stats">
            <div class="reflab-sr" data-critical-row hidden>
              <span class="reflab-sl">${t('tools.refraction.critical')}</span>
              <span class="reflab-sv" data-critical>—</span>
            </div>
          </div>
          <div class="reflab-tir" data-tir hidden>${t('tools.refraction.tir')}</div>
          <button type="button" class="reflab-reset" data-reset>${t('tools.refraction.reset')}</button>
        </div>
      </div>

      <div class="reflab-viz-particle">
        <div style="font-weight: bold; font-size: 0.95rem; color: #22d3ee; margin-bottom: 8px; text-align: center; display: flex; align-items: center; justify-content: center; gap: 6px;">
          <span>🔬</span> ${t('tools.refraction.particleModel.title')}
        </div>
        <canvas class="reflab-particle-canvas" width="720" height="280" aria-label="Microscopic Particle Model"></canvas>
      </div>
    </div>
  `;

  function mediumChips(side) {
    return ['air', 'water', 'glass']
      .map(
        (id) => `
      <button type="button" class="reflab-chip" data-medium="${id}" data-for="${side}">
        ${t(`tools.refraction.medium.${id}`)}
      </button>`,
      )
      .join('');
  }

  const canvas = /** @type {HTMLCanvasElement} */ (wrap.querySelector('.reflab-canvas'));
  const ctx = /** @type {CanvasRenderingContext2D} */ (canvas.getContext('2d'));
  const particleCanvas = /** @type {HTMLCanvasElement} */ (wrap.querySelector('.reflab-particle-canvas'));
  const ctxP = /** @type {CanvasRenderingContext2D} */ (particleCanvas.getContext('2d'));
  const slider1 = /** @type {HTMLInputElement} */ (wrap.querySelector('[data-theta1]'));
  const slider2 = /** @type {HTMLInputElement} */ (wrap.querySelector('[data-theta2]'));
  const n1Slider = /** @type {HTMLInputElement} */ (wrap.querySelector('[data-n1-slider]'));
  const n2Slider = /** @type {HTMLInputElement} */ (wrap.querySelector('[data-n2-slider]'));
  const n1Input = /** @type {HTMLInputElement} */ (wrap.querySelector('[data-n1-input]'));
  const n2Input = /** @type {HTMLInputElement} */ (wrap.querySelector('[data-n2-input]'));
  const theta1Input = /** @type {HTMLInputElement} */ (wrap.querySelector('[data-theta1-input]'));
  const theta2Input = /** @type {HTMLInputElement} */ (wrap.querySelector('[data-theta2-input]'));
  const disp1 = wrap.querySelector('[data-disp="theta1"]');
  const disp2 = wrap.querySelector('[data-disp="theta2"]');
  const n1El = wrap.querySelector('[data-n="1"]');
  const n2El = wrap.querySelector('[data-n="2"]');
  const v1El = wrap.querySelector('[data-v="1"]');
  const v2El = wrap.querySelector('[data-v="2"]');
  const tirEl = wrap.querySelector('[data-tir]');
  const critRow = wrap.querySelector('[data-critical-row]');
  const critEl = wrap.querySelector('[data-critical]');
  const formulaEl = wrap.querySelector('.reflab-formula');

  let n1Val = 1.00;
  let n2Val = 1.33;
  let theta1Deg = 40;
  let isTir = false;
  let isCollapsed = false;
  let animTime = 0;

  function n1() {
    return n1Val;
  }
  function n2() {
    return n2Val;
  }

  function getActiveMedium(n) {
    if (Math.abs(n - 1.0) < 0.005) return 'air';
    if (Math.abs(n - 1.33) < 0.005) return 'water';
    if (Math.abs(n - 1.5) < 0.005) return 'glass';
    return null;
  }

  function formatN(n) {
    return n.toFixed(2);
  }

  function formatV(n) {
    return (C_VACUUM / n).toFixed(2);
  }

  function toRad(deg) {
    return (deg * Math.PI) / 180;
  }

  function toDeg(rad) {
    return (rad * 180) / Math.PI;
  }

  function criticalDeg() {
    if (n1() <= n2()) return null;
    const s = n2() / n1();
    if (s >= 1) return null;
    return toDeg(Math.asin(s));
  }

  /** @returns {{ tir: boolean, theta2: number | null }} */
  function solveFromTheta1(t1) {
    const s2 = (n1() / n2()) * Math.sin(toRad(t1));
    if (s2 > 1 + 1e-9) return { tir: true, theta2: null };
    if (s2 < -1) return { tir: true, theta2: null };
    return { tir: false, theta2: toDeg(Math.asin(Math.min(1, Math.max(-1, s2)))) };
  }

  /** @returns {{ tir: boolean, theta1: number | null }} */
  function solveFromTheta2(t2) {
    const s1 = (n2() / n1()) * Math.sin(toRad(t2));
    if (s1 > 1 + 1e-9) return { tir: true, theta1: null };
    return { tir: false, theta1: toDeg(Math.asin(Math.min(1, Math.max(-1, s1)))) };
  }

  function paintMediumChips() {
    const active1 = getActiveMedium(n1Val);
    const active2 = getActiveMedium(n2Val);
    wrap.querySelectorAll('.reflab-chip[data-for="1"]').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-medium') === active1);
    });
    wrap.querySelectorAll('.reflab-chip[data-for="2"]').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-medium') === active2);
    });
  }

  function updateReadouts() {
    n1El.textContent = formatN(n1());
    n2El.textContent = formatN(n2());
    v1El.textContent = formatV(n1());
    v2El.textContent = formatV(n2());

    n1Slider.value = String(n1Val);
    n2Slider.value = String(n2Val);
    if (n1Input && document.activeElement !== n1Input) {
      n1Input.value = n1Val.toFixed(2);
    }
    if (n2Input && document.activeElement !== n2Input) {
      n2Input.value = n2Val.toFixed(2);
    }

    const tc = criticalDeg();
    if (tc != null) {
      critRow.hidden = false;
      critEl.textContent = `${tc.toFixed(1)}°`;
    } else {
      critRow.hidden = true;
    }

    tirEl.hidden = !isTir;
    slider2.disabled = isTir;
    slider2.classList.toggle('reflab-disabled', isTir);

    disp1.textContent = `${theta1Deg.toFixed(1)}°`;
    if (theta1Input && document.activeElement !== theta1Input) {
      theta1Input.value = theta1Deg.toFixed(1);
    }
    if (isTir) {
      disp2.textContent = '—';
      if (theta2Input) {
        theta2Input.value = '';
        theta2Input.disabled = true;
      }
    } else {
      const r = solveFromTheta1(theta1Deg);
      const t2 = r.theta2 != null ? r.theta2 : 0;
      disp2.textContent = r.theta2 != null ? `${r.theta2.toFixed(1)}°` : '—';
      if (theta2Input) {
        theta2Input.disabled = false;
        if (document.activeElement !== theta2Input) {
          theta2Input.value = t2.toFixed(1);
        }
      }
    }

    if (formulaEl) {
      const r = solveFromTheta1(theta1Deg);
      if (isTir) {
        const lhs = (n1Val * Math.sin(toRad(theta1Deg))).toFixed(3);
        formulaEl.innerHTML = `
          <div style="font-size: 0.82rem; opacity: 0.85; margin-bottom: 4px; font-weight: 600;">n₁ sin θ₁ &gt; n₂</div>
          <div style="font-size: 0.95rem; color: #ff8a80; font-family: monospace; font-weight: bold; line-height: 1.4;">
            ${formatN(n1Val)} &times; sin(${theta1Deg.toFixed(1)}&deg;) &gt; ${formatN(n2Val)}<br>
            <span style="font-size: 0.85rem; font-weight: bold;">
              ${lhs} &gt; ${formatN(n2Val)} (${t('tools.refraction.canvas.reflected')})
            </span>
          </div>
        `;
      } else {
        const t2 = r.theta2 != null ? r.theta2 : 0;
        const lhs = (n1Val * Math.sin(toRad(theta1Deg))).toFixed(3);
        const rhs = (n2Val * Math.sin(toRad(t2))).toFixed(3);
        formulaEl.innerHTML = `
          <div style="font-size: 0.82rem; opacity: 0.85; margin-bottom: 4px; font-weight: 600;">n₁ sin θ₁ = n₂ sin θ₂</div>
          <div style="font-size: 0.95rem; color: #a5f3fc; font-family: monospace; font-weight: bold; line-height: 1.4;">
            ${formatN(n1Val)} &times; sin(${theta1Deg.toFixed(1)}&deg;) = ${formatN(n2Val)} &times; sin(${t2.toFixed(1)}&deg;)<br>
            <span style="font-size: 0.85rem; font-weight: bold;">
              ${lhs} &approx; ${rhs}
            </span>
          </div>
        `;
      }
    }
  }

  function syncSlidersFromState() {
    slider1.value = String(theta1Deg);
    if (theta1Input && document.activeElement !== theta1Input) {
      theta1Input.value = theta1Deg.toFixed(1);
    }
    const r = solveFromTheta1(theta1Deg);
    if (!r.tir && r.theta2 != null) {
      slider2.value = String(Math.min(89, Math.max(0, r.theta2)));
      if (theta2Input && document.activeElement !== theta2Input) {
        theta2Input.value = r.theta2.toFixed(1);
      }
    }
  }

  let drawPending = false;
  function requestDraw() {
    if (drawPending) return;
    drawPending = true;
    requestAnimationFrame(() => {
      drawPending = false;
      draw();
    });
  }

  function applyFromTheta1() {
    const r = solveFromTheta1(theta1Deg);
    isTir = r.tir;
    updateReadouts();
    syncSlidersFromState();
    requestDraw();
  }

  function applyFromTheta2(t2) {
    const r = solveFromTheta2(t2);
    if (r.tir || r.theta1 == null) {
      // Impossible from θ₂ side — keep θ₁-driven state
      applyFromTheta1();
      return;
    }
    theta1Deg = Math.min(89, Math.max(0, r.theta1));
    isTir = false;
    updateReadouts();
    slider1.value = String(theta1Deg);
    slider2.value = String(t2);
    requestDraw();
  }

  function drawArrow(x1, y1, x2, y2, color, width = 2.5) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    const dx = x2 - x1;
    const dy = y2 - y1;
    const len = Math.hypot(dx, dy);
    if (len < 1) return;
    const ux = dx / len;
    const uy = dy / len;
    const size = 12;
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.moveTo(x2, y2);
    ctx.lineTo(x2 - ux * size - uy * size * 0.45, y2 - uy * size + ux * size * 0.45);
    ctx.lineTo(x2 - ux * size + uy * size * 0.45, y2 - uy * size - ux * size * 0.45);
    ctx.closePath();
    ctx.fill();
  }

  function drawAngleArc(cx, cy, startDeg, endDeg, color, label) {
    const r = 55; // Larger radius for projector clarity
    const a0 = toRad(startDeg);
    const a1 = toRad(endDeg);
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2.5; // Thicker line
    ctx.arc(cx, cy, r, a0, a1, endDeg < startDeg);
    ctx.stroke();
    const mid = (a0 + a1) / 2;
    ctx.fillStyle = color;
    ctx.font = 'bold 15px system-ui, sans-serif'; // Larger font
    
    // Calculate position based on the angle to avoid overlap with the normal line or rays
    const dist = r + 22;
    let textX = cx + Math.cos(mid) * dist - 18;
    let textY = cy + Math.sin(mid) * dist + 5;
    
    // Adjust alignment based on which quadrant the label is in
    if (Math.cos(mid) < -0.1) {
      textX = cx + Math.cos(mid) * dist - 54; // Shift left for left-side labels
    } else if (Math.cos(mid) > 0.1) {
      textX = cx + Math.cos(mid) * dist + 6;  // Shift right for right-side labels
    }
    
    ctx.fillText(label, textX, textY);
  }

  function draw() {
    const W = canvas.width;
    const H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    const cx = W / 2;
    const cy = H / 2;
    const rayLen = Math.min(W, H) * 0.47; // Zoomed in from 0.42 to 0.47

    const active1 = getActiveMedium(n1Val);
    const active2 = getActiveMedium(n2Val);
    const activeName1 = active1 ? t(`tools.refraction.medium.${active1}`) : t('tools.refraction.medium.custom');
    const activeName2 = active2 ? t(`tools.refraction.medium.${active2}`) : t('tools.refraction.medium.custom');

    // Media tint: top = medium 1, bottom = medium 2
    ctx.fillStyle = mediumFill(n1Val, 0.22);
    ctx.fillRect(0, 0, W, cy);
    ctx.fillStyle = mediumFill(n2Val, 0.28);
    ctx.fillRect(0, cy, W, H - cy);

    // Interface
    ctx.beginPath();
    ctx.strokeStyle = '#8b9bb8';
    ctx.lineWidth = 3; // Thicker interface line
    ctx.moveTo(30, cy);
    ctx.lineTo(W - 30, cy);
    ctx.stroke();
    ctx.fillStyle = '#bac4d6';
    ctx.font = 'bold 14px system-ui, sans-serif'; // Larger font
    ctx.fillText(t('tools.refraction.canvas.interface'), W - 130, cy - 10);

    // Normal (dashed vertical)
    ctx.beginPath();
    ctx.setLineDash([8, 6]); // Slightly larger dashes
    ctx.strokeStyle = '#8b9bb8'; // Brighter normal line
    ctx.lineWidth = 2.5; // Thicker normal line
    ctx.moveTo(cx, 20);
    ctx.lineTo(cx, H - 20);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = '#bac4d6';
    ctx.fillText(t('tools.refraction.canvas.normal'), cx + 10, 48);

    // Medium labels
    ctx.font = 'bold 17px system-ui, sans-serif'; // Larger font for projector readability
    ctx.fillStyle = '#ffffff'; // Brighter white
    ctx.fillText(
      `${activeName1}  (n₁ = ${formatN(n1())})`,
      32,
      40,
    );
    ctx.fillText(
      `${activeName2}  (n₂ = ${formatN(n2())})`,
      32,
      H - 28,
    );

    // Continuous ray path (not reflection):
    // incident from UPPER LEFT → through interface → refracted to LOWER RIGHT.
    const iAngle = -Math.PI / 2 - toRad(theta1Deg);
    const ix = cx + Math.cos(iAngle) * rayLen;
    const iy = cy + Math.sin(iAngle) * rayLen;
    drawArrow(ix, iy, cx, cy, '#ffea00', 5); // Thicker ray (width 5)

    // Calculate label positions along the rays (65% of the way) to prevent clipping at edges
    const labelDist = rayLen * 0.65;

    if (isTir) {
      // Reflection: bounce into UPPER RIGHT
      const rAngle = -Math.PI / 2 + toRad(theta1Deg);
      const rx = cx + Math.cos(rAngle) * rayLen;
      const ryReal = cy + Math.sin(rAngle) * rayLen;
      drawArrow(cx, cy, rx, ryReal, '#ff8a80', 5); // Thicker ray

      // Label along the reflected ray
      const lrx = cx + Math.cos(rAngle) * labelDist;
      const lry = cy + Math.sin(rAngle) * labelDist;
      ctx.fillStyle = '#ff8a80';
      ctx.font = 'bold 15px system-ui, sans-serif';
      ctx.fillText(t('tools.refraction.canvas.reflected'), lrx - 15, lry - 12);

      drawAngleArc(cx, cy, -90, -90 - theta1Deg, '#ffea00', `θ₁ = ${theta1Deg.toFixed(1)}°`);
      drawAngleArc(cx, cy, -90, -90 + theta1Deg, '#ff8a80', `θ₁ = ${theta1Deg.toFixed(1)}°`);
    } else {
      const sol = solveFromTheta1(theta1Deg);
      const t2 = sol.theta2 ?? 0;
      // Refracted into LOWER RIGHT (bottom half of the diagram)
      const tAngle = Math.PI / 2 - toRad(t2);
      const tx = cx + Math.cos(tAngle) * rayLen;
      const ty = cy + Math.sin(tAngle) * rayLen;
      drawArrow(cx, cy, tx, ty, '#22d3ee', 5); // Thicker ray

      // Label along the refracted ray
      const ltx = cx + Math.cos(tAngle) * labelDist;
      const lty = cy + Math.sin(tAngle) * labelDist;
      ctx.fillStyle = '#22d3ee';
      ctx.font = 'bold 15px system-ui, sans-serif';
      ctx.fillText(t('tools.refraction.canvas.refracted'), ltx + 12, lty + 18);

      drawAngleArc(cx, cy, -90, -90 - theta1Deg, '#ffea00', `θ₁ = ${theta1Deg.toFixed(1)}°`);
      drawAngleArc(cx, cy, 90, 90 - t2, '#22d3ee', `θ₂ = ${t2.toFixed(1)}°`);
    }

    // Label along the incident ray
    const lix = cx + Math.cos(iAngle) * labelDist;
    const liy = cy + Math.sin(iAngle) * labelDist;
    ctx.fillStyle = '#ffea00';
    ctx.font = 'bold 15px system-ui, sans-serif';
    ctx.fillText(t('tools.refraction.canvas.incident'), lix - 45, liy - 12);
  }

  function seededRandom(s) {
    const x = Math.sin(s) * 10000;
    return x - Math.floor(x);
  }

  function drawParticleModel() {
    if (!particleCanvas) return;
    const W = particleCanvas.width;
    const H = particleCanvas.height;
    ctxP.clearRect(0, 0, W, H);

    // Two boxes side-by-side: Left is Denser Medium, Right is Less Dense Medium
    const boxW = W * 0.42;
    const boxH = H * 0.72;
    const boxY = H * 0.18;

    const box1X = W * 0.06; // Left Box (Denser)
    const box2X = W * 0.52; // Right Box (Less Dense)

    // Draw Box 1 (Denser Medium)
    ctxP.fillStyle = 'rgba(160, 200, 230, 0.25)'; // Denser tint (Glass-like)
    ctxP.fillRect(box1X, boxY, boxW, boxH);
    ctxP.strokeStyle = '#3f4a66';
    ctxP.lineWidth = 2.5;
    ctxP.strokeRect(box1X, boxY, boxW, boxH);

    // Draw Box 2 (Less Dense Medium)
    ctxP.fillStyle = 'rgba(120, 160, 220, 0.15)'; // Less dense tint (Air-like)
    ctxP.fillRect(box2X, boxY, boxW, boxH);
    ctxP.strokeStyle = '#3f4a66';
    ctxP.lineWidth = 2.5;
    ctxP.strokeRect(box2X, boxY, boxW, boxH);

    // Draw background particles (molecules) jiggling in both boxes
    // Denser medium has WAY more particles packed together (e.g. n = 1.80 vs n = 1.10)
    drawBoxParticles(box1X, boxY, boxW, boxH, 1.80, 'rgba(255, 255, 255, 0.22)');
    drawBoxParticles(box2X, boxY, boxW, boxH, 1.10, 'rgba(34, 211, 238, 0.22)');

    // Draw 3 light rays in each box
    // Rays enter from top of each box at an angle (18 degrees)
    const angleRad = toRad(18);
    const rayLen = boxH / Math.cos(angleRad);
    const dx = rayLen * Math.sin(angleRad);
    const dy = boxH;

    // Box 1 Rays (Denser Medium - 2 rays bounce away, 1 passes through)
    const r1_1 = [
      { x: box1X + boxW * 0.15, y: boxY },
      { x: box1X + boxW * 0.15 + dx * 0.45, y: boxY + boxH * 0.45 },
      { x: box1X + boxW * 0.15 + dx * 0.45 - dx * 0.25, y: boxY + boxH * 0.45 - boxH * 0.25 } // bounces back up-left
    ];
    const r1_2 = [
      { x: box1X + boxW * 0.42, y: boxY },
      { x: box1X + boxW * 0.42 + dx, y: boxY + boxH } // passes through
    ];
    const r1_3 = [
      { x: box1X + boxW * 0.68, y: boxY },
      { x: box1X + boxW * 0.68 + dx * 0.6, y: boxY + boxH * 0.6 },
      { x: box1X + boxW * 0.68 + dx * 0.6 - dx * 0.3, y: boxY + boxH * 0.6 - boxH * 0.3 } // bounces back up-left
    ];

    // Draw Box 1 Rays
    ctxP.lineWidth = 2.5;
    
    // Ray 1 (Bounce)
    ctxP.beginPath();
    ctxP.strokeStyle = '#ffea00';
    ctxP.moveTo(r1_1[0].x, r1_1[0].y);
    ctxP.lineTo(r1_1[1].x, r1_1[1].y);
    ctxP.stroke();

    ctxP.beginPath();
    ctxP.strokeStyle = '#ff8a80'; // red/orange for bounce
    ctxP.setLineDash([4, 4]);
    ctxP.moveTo(r1_1[1].x, r1_1[1].y);
    ctxP.lineTo(r1_1[2].x, r1_1[2].y);
    ctxP.stroke();
    ctxP.setLineDash([]);

    // Ray 2 (Pass through)
    ctxP.beginPath();
    ctxP.strokeStyle = '#ffea00';
    ctxP.moveTo(r1_2[0].x, r1_2[0].y);
    ctxP.lineTo(r1_2[1].x, r1_2[1].y);
    ctxP.stroke();

    // Ray 3 (Bounce)
    ctxP.beginPath();
    ctxP.strokeStyle = '#ffea00';
    ctxP.moveTo(r1_3[0].x, r1_3[0].y);
    ctxP.lineTo(r1_3[1].x, r1_3[1].y);
    ctxP.stroke();

    ctxP.beginPath();
    ctxP.strokeStyle = '#ff8a80';
    ctxP.setLineDash([4, 4]);
    ctxP.moveTo(r1_3[1].x, r1_3[1].y);
    ctxP.lineTo(r1_3[2].x, r1_3[2].y);
    ctxP.stroke();
    ctxP.setLineDash([]);

    // Draw collision particles at bounce points in Box 1
    [r1_1[1], r1_3[1]].forEach(pt => {
      ctxP.beginPath();
      ctxP.fillStyle = '#ff8a80';
      ctxP.arc(pt.x, pt.y, 4.5, 0, Math.PI * 2);
      ctxP.fill();
      ctxP.strokeStyle = '#ffffff';
      ctxP.lineWidth = 1;
      ctxP.stroke();
    });

    // Box 2 Rays (Less Dense Medium - all 3 rays easily pass through)
    const r2_1 = [
      { x: box2X + boxW * 0.15, y: boxY },
      { x: box2X + boxW * 0.15 + dx, y: boxY + boxH }
    ];
    const r2_2 = [
      { x: box2X + boxW * 0.42, y: boxY },
      { x: box2X + boxW * 0.42 + dx, y: boxY + boxH }
    ];
    const r2_3 = [
      { x: box2X + boxW * 0.68, y: boxY },
      { x: box2X + boxW * 0.68 + dx, y: boxY + boxH }
    ];

    // Draw Box 2 Rays
    ctxP.strokeStyle = '#22d3ee';
    [r2_1, r2_2, r2_3].forEach(ray => {
      ctxP.beginPath();
      ctxP.moveTo(ray[0].x, ray[0].y);
      ctxP.lineTo(ray[1].x, ray[1].y);
      ctxP.stroke();
    });

    // Speed of light in both boxes
    // Denser medium speed is slower, Less dense is faster
    const speedDenser = 0.35;
    const speedLess = 0.85;

    // Position of moving photons
    const progressDenser = (animTime * speedDenser * 0.015) % 1.0;
    const progressLess = (animTime * speedLess * 0.015) % 1.0;

    // Helper to get position along a multi-segment path
    function getPathPos(path, progress) {
      if (path.length === 2) {
        return {
          x: path[0].x + (path[1].x - path[0].x) * progress,
          y: path[0].y + (path[1].y - path[0].y) * progress
        };
      }
      if (progress < 0.6) {
        const t = progress / 0.6;
        return {
          x: path[0].x + (path[1].x - path[0].x) * t,
          y: path[0].y + (path[1].y - path[0].y) * t
        };
      } else {
        const t = (progress - 0.6) / 0.4;
        return {
          x: path[1].x + (path[2].x - path[1].x) * t,
          y: path[1].y + (path[2].y - path[1].y) * t
        };
      }
    }

    // Draw Box 1 Photons
    const p1_1 = getPathPos(r1_1, progressDenser);
    const p1_2 = getPathPos(r1_2, progressDenser);
    const p1_3 = getPathPos(r1_3, progressDenser);

    drawPhoton(p1_1.x, p1_1.y, progressDenser < 0.6 ? '#ffea00' : '#ff8a80');
    drawPhoton(p1_2.x, p1_2.y, '#ffea00');
    drawPhoton(p1_3.x, p1_3.y, progressDenser < 0.6 ? '#ffea00' : '#ff8a80');

    // Draw Box 2 Photons
    const p2_1 = getPathPos(r2_1, progressLess);
    const p2_2 = getPathPos(r2_2, progressLess);
    const p2_3 = getPathPos(r2_3, progressLess);

    drawPhoton(p2_1.x, p2_1.y, '#22d3ee');
    drawPhoton(p2_2.x, p2_2.y, '#22d3ee');
    drawPhoton(p2_3.x, p2_3.y, '#22d3ee');

    // Draw labels above boxes
    ctxP.font = 'bold 13px system-ui, sans-serif';
    ctxP.fillStyle = '#ffea00';
    ctxP.fillText(t('tools.refraction.particleModel.denser'), box1X + 4, boxY - 10);
    
    ctxP.fillStyle = '#22d3ee';
    ctxP.fillText(t('tools.refraction.particleModel.lessDense'), box2X + 4, boxY - 10);

    // Draw speed text inside boxes
    ctxP.font = 'bold 12px system-ui, sans-serif';
    ctxP.fillStyle = '#ffffff';
    ctxP.fillText(`${t('tools.refraction.particleModel.speed')}: 0.55 c`, box1X + 12, boxY + 24);
    ctxP.fillText(`${t('tools.refraction.particleModel.speed')}: 0.91 c`, box2X + 12, boxY + 24);

    function drawPhoton(x, y, color) {
      ctxP.save();
      ctxP.shadowBlur = 12;
      ctxP.shadowColor = color;
      ctxP.fillStyle = '#ffffff';
      ctxP.beginPath();
      ctxP.arc(x, y, 6, 0, Math.PI * 2);
      ctxP.fill();
      ctxP.restore();
    }

    function drawBoxParticles(bx, by, bw, bh, nVal, color) {
      // Denser medium has WAY more particles packed together.
      const spacing = 36 / (nVal * nVal);
      ctxP.fillStyle = color;
      
      const cols = Math.ceil(bw / spacing) + 1;
      const rows = Math.ceil(bh / spacing) + 1;
      
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const gridX = bx + c * spacing;
          const gridY = by + r * spacing;
          
          const seed = (c * 17) + (r * 31) + (bx > W/2 ? 500 : 0);
          const randX = seededRandom(seed) * 0.3 - 0.15;
          const randY = seededRandom(seed + 1) * 0.3 - 0.15;
          const jiggleSpeed = 0.04 + seededRandom(seed + 2) * 0.04;
          const jiggleAmp = 0.8 + seededRandom(seed + 3) * 0.8;
          
          const jiggleX = Math.sin(animTime * jiggleSpeed + seed) * jiggleAmp;
          const jiggleY = Math.cos(animTime * jiggleSpeed + seed * 1.3) * jiggleAmp;
          
          const x = gridX + randX * spacing + jiggleX;
          const y = gridY + randY * spacing + jiggleY;
          
          if (x >= bx + 4 && x <= bx + bw - 4 && y >= by + 4 && y <= by + bh - 4) {
            ctxP.beginPath();
            ctxP.arc(x, y, 1.8, 0, Math.PI * 2);
            ctxP.fill();
          }
        }
      }
    }
  }

  function mediumFill(n, alpha) {
    if (n < 1.15) return `rgba(120, 160, 220, ${alpha})`;
    if (n < 1.42) return `rgba(40, 120, 200, ${alpha})`;
    return `rgba(160, 200, 230, ${alpha})`;
  }

  // Events
  wrap.querySelectorAll('.reflab-chip').forEach((btn) => {
    btn.addEventListener('click', () => {
      const side = btn.getAttribute('data-for');
      const id = btn.getAttribute('data-medium');
      if (!id || !MEDIA[id]) return;
      if (side === '1') n1Val = MEDIA[id].n;
      else n2Val = MEDIA[id].n;
      paintMediumChips();
      // Recalculate from current θ₁ when media change
      applyFromTheta1();
    });
  });

  n1Slider.addEventListener('input', () => {
    n1Val = Number(n1Slider.value);
    paintMediumChips();
    applyFromTheta1();
  });
  n1Slider.addEventListener('change', () => {
    n1Val = Number(n1Slider.value);
    paintMediumChips();
    applyFromTheta1();
  });

  n2Slider.addEventListener('input', () => {
    n2Val = Number(n2Slider.value);
    paintMediumChips();
    applyFromTheta1();
  });
  n2Slider.addEventListener('change', () => {
    n2Val = Number(n2Slider.value);
    paintMediumChips();
    applyFromTheta1();
  });

  slider1.addEventListener('input', () => {
    theta1Deg = Number(slider1.value);
    applyFromTheta1();
  });
  slider1.addEventListener('change', () => {
    theta1Deg = Number(slider1.value);
    applyFromTheta1();
  });

  slider2.addEventListener('input', () => {
    if (isTir) return;
    applyFromTheta2(Number(slider2.value));
  });
  slider2.addEventListener('change', () => {
    if (isTir) return;
    applyFromTheta2(Number(slider2.value));
  });

  if (n1Input) {
    n1Input.addEventListener('input', () => {
      let val = Number(n1Input.value);
      if (isNaN(val)) return;
      val = Math.min(2.00, Math.max(1.00, val));
      n1Val = val;
      paintMediumChips();
      applyFromTheta1();
    });
    n1Input.addEventListener('change', () => {
      let val = Number(n1Input.value);
      if (isNaN(val)) val = 1.00;
      val = Math.min(2.00, Math.max(1.00, val));
      n1Val = val;
      n1Input.value = val.toFixed(2);
      paintMediumChips();
      applyFromTheta1();
    });
  }

  if (n2Input) {
    n2Input.addEventListener('input', () => {
      let val = Number(n2Input.value);
      if (isNaN(val)) return;
      val = Math.min(2.00, Math.max(1.00, val));
      n2Val = val;
      paintMediumChips();
      applyFromTheta1();
    });
    n2Input.addEventListener('change', () => {
      let val = Number(n2Input.value);
      if (isNaN(val)) val = 1.33;
      val = Math.min(2.00, Math.max(1.00, val));
      n2Val = val;
      n2Input.value = val.toFixed(2);
      paintMediumChips();
      applyFromTheta1();
    });
  }

  if (theta1Input) {
    theta1Input.addEventListener('input', () => {
      let val = Number(theta1Input.value);
      if (isNaN(val)) return;
      val = Math.min(89, Math.max(0, val));
      theta1Deg = val;
      applyFromTheta1();
    });
    theta1Input.addEventListener('change', () => {
      let val = Number(theta1Input.value);
      if (isNaN(val)) val = 40;
      val = Math.min(89, Math.max(0, val));
      theta1Deg = val;
      theta1Input.value = val.toFixed(1);
      applyFromTheta1();
    });
  }

  if (theta2Input) {
    theta2Input.addEventListener('input', () => {
      if (isTir) return;
      let val = Number(theta2Input.value);
      if (isNaN(val)) return;
      val = Math.min(89, Math.max(0, val));
      applyFromTheta2(val);
    });
    theta2Input.addEventListener('change', () => {
      if (isTir) return;
      let val = Number(theta2Input.value);
      if (isNaN(val)) val = 29;
      val = Math.min(89, Math.max(0, val));
      applyFromTheta2(val);
      theta2Input.value = val.toFixed(1);
    });
  }

  wrap.querySelector('[data-reset]')?.addEventListener('click', () => {
    n1Val = 1.00;
    n2Val = 1.33;
    theta1Deg = 40;
    paintMediumChips();
    applyFromTheta1();
  });

  wrap.querySelector('[data-toggle-controls]')?.addEventListener('click', () => {
    isCollapsed = !isCollapsed;
    wrap.classList.toggle('reflab-collapsed', isCollapsed);
    const toggleBtn = wrap.querySelector('[data-toggle-controls]');
    if (toggleBtn) {
      const icon = toggleBtn.querySelector('.reflab-toggle-icon');
      const text = toggleBtn.querySelector('.reflab-toggle-text');
      if (isCollapsed) {
        icon.textContent = '⬅️';
        text.textContent = t('tools.refraction.showControls');
      } else {
        icon.textContent = '➡️';
        text.textContent = t('tools.refraction.hideControls');
      }
    }
    // Force ResizeObserver to run immediately
    const viz = wrap.querySelector('.reflab-viz');
    if (viz) {
      const w = Math.max(320, viz.clientWidth - 20);
      const h = Math.round(w * (440 / 720));
      canvas.width = w;
      canvas.height = h;
      requestDraw();
    }
    const vizP = wrap.querySelector('.reflab-viz-particle');
    if (vizP) {
      const w = Math.max(320, vizP.clientWidth - 28);
      const h = Math.round(w * (280 / 720));
      particleCanvas.width = w;
      particleCanvas.height = h;
    }
  });

  paintMediumChips();
  applyFromTheta1();

  root.appendChild(wrap);

  // Animation loop for particle model
  let animId = null;
  function tick() {
    if (!wrap.isConnected) {
      if (animId) cancelAnimationFrame(animId);
      return;
    }
    animTime += 1;
    drawParticleModel();
    animId = requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  // Fit canvases to container width
  const ro = new ResizeObserver(() => {
    const viz = wrap.querySelector('.reflab-viz');
    if (viz) {
      const w = Math.max(320, viz.clientWidth - 20);
      const h = Math.round(w * (440 / 720));
      if (canvas.width !== w) {
        canvas.width = w;
        canvas.height = h;
        requestDraw();
      }
    }
    const vizP = wrap.querySelector('.reflab-viz-particle');
    if (vizP) {
      const w = Math.max(320, vizP.clientWidth - 28);
      const h = Math.round(w * (280 / 720));
      if (particleCanvas.width !== w) {
        particleCanvas.width = w;
        particleCanvas.height = h;
      }
    }
  });
  ro.observe(wrap);
}
