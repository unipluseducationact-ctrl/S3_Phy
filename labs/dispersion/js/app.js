/** Core Dispersion of Light Lab — Physics Engine and Canvas UI */

const C_VACUUM = 3.0; // × 10⁸ m s⁻¹

const PRESETS = {
  crown: { id: 'crown', n0: 1.50, B: 0.015 },
  flint: { id: 'flint', n0: 1.62, B: 0.035 },
  diamond: { id: 'diamond', n0: 2.41, B: 0.055 },
  custom: { id: 'custom', n0: 1.60, B: 0.025 }
};

// Beautiful rainbow colors for the 15 white light rays (from red to violet)
const SPECTRUM_COLORS = [
  '#ff0000', // Red
  '#ff3a00',
  '#ff7400', // Orange
  '#ffae00',
  '#ffe800', // Yellow
  '#c2ff00',
  '#5cff00',
  '#00ff0a', // Green
  '#00ff70',
  '#00ffd6', // Cyan
  '#00c2ff', // Blue
  '#005cff',
  '#0a00ff', // Indigo
  '#7000ff',
  '#d600ff'  // Violet
];

export function initDispersionLab(root, t) {
  const wrap = document.createElement('div');
  wrap.className = 'displab';
  wrap.innerHTML = `
    <div class="displab-head">
      <h2 class="displab-title">${t('tools.dispersion.title')}</h2>
      <div class="displab-sub">${t('tools.dispersion.subtitle')}</div>
    </div>
    <div class="displab-dash">
      <div class="displab-viz">
        <button type="button" class="displab-toggle-btn" data-toggle-controls>
          <span class="displab-toggle-icon">➡️</span>
          <span class="displab-toggle-text">${t('tools.dispersion.hideControls')}</span>
        </button>
        <canvas class="displab-canvas" width="720" height="440" aria-label="${t('tools.dispersion.title')}"></canvas>
      </div>

      <div class="displab-controls" data-controls-panel>
        <!-- Column 1: Light Source Parameters -->
        <div class="displab-control-col">
          <div class="displab-label">
            <span>${t('tools.dispersion.sourceMode')}</span>
          </div>
          <div class="displab-mode-select">
            <button type="button" class="displab-mode-btn active" data-mode="white">${t('tools.dispersion.mode.white')}</button>
            <button type="button" class="displab-mode-btn" data-mode="mono">${t('tools.dispersion.mode.mono')}</button>
          </div>

          <div class="displab-group">
            <div class="displab-label">
              <span>${t('tools.dispersion.sourceHeight')}</span>
              <span class="displab-badge" data-readout="srcY">240 px</span>
            </div>
            <div class="displab-group-row">
              <input type="range" data-slider="srcY" min="120" max="320" step="1" value="240" />
              <input type="number" class="displab-num-input" data-input="srcY" min="120" max="320" step="1" value="240" />
            </div>
          </div>

          <div class="displab-group">
            <div class="displab-label">
              <span>${t('tools.dispersion.sourceAngle')}</span>
              <span class="displab-badge" data-readout="srcAngle">5.0°</span>
            </div>
            <div class="displab-group-row">
              <input type="range" data-slider="srcAngle" min="-30" max="30" step="0.5" value="5" />
              <input type="number" class="displab-num-input" data-input="srcAngle" min="-30" max="30" step="0.1" value="5" />
            </div>
          </div>

          <div class="displab-group" data-mono-only style="display: none;">
            <div class="displab-label">
              <span>${t('tools.dispersion.monoColor')}</span>
              <span class="displab-badge" data-readout="monoColor">Green</span>
            </div>
            <div class="displab-group-row">
              <input type="range" data-slider="monoColor" min="0" max="14" step="1" value="7" style="accent-color: #00ff0a;" />
            </div>
          </div>
        </div>

        <!-- Column 2: Prism Material Presets & Index -->
        <div class="displab-control-col">
          <div class="displab-label">
            <span>${t('tools.dispersion.presets')}</span>
          </div>
          <div class="displab-chips">
            <button type="button" class="displab-chip active" data-preset="crown">${t('tools.dispersion.material.crown')}</button>
            <button type="button" class="displab-chip" data-preset="flint">${t('tools.dispersion.material.flint')}</button>
            <button type="button" class="displab-chip" data-preset="diamond">${t('tools.dispersion.material.diamond')}</button>
            <button type="button" class="displab-chip" data-preset="custom">${t('tools.dispersion.material.custom')}</button>
          </div>

          <div class="displab-group">
            <div class="displab-label">
              <span>${t('tools.dispersion.baseN')}</span>
              <span class="displab-badge" data-readout="n0">1.50</span>
            </div>
            <div class="displab-group-row">
              <input type="range" data-slider="n0" min="1.20" max="2.60" step="0.01" value="1.50" />
              <input type="number" class="displab-num-input" data-input="n0" min="1.20" max="2.60" step="0.01" value="1.50" />
            </div>
          </div>

          <div class="displab-group">
            <div class="displab-label">
              <span>${t('tools.dispersion.dispStrength')}</span>
              <span class="displab-badge" data-readout="B">0.015</span>
            </div>
            <div class="displab-group-row">
              <input type="range" data-slider="B" min="0.000" max="0.100" step="0.001" value="0.015" />
              <input type="number" class="displab-num-input" data-input="B" min="0.000" max="0.100" step="0.001" value="0.015" />
            </div>
          </div>
        </div>

        <!-- Column 3: Geometric Options & Live Results -->
        <div class="displab-control-col">
          <div class="displab-group">
            <div class="displab-label">
              <span>${t('tools.dispersion.apexAngle')}</span>
              <span class="displab-badge" data-readout="apex">60.0°</span>
            </div>
            <div class="displab-group-row">
              <input type="range" data-slider="apex" min="30" max="90" step="1" value="60" />
              <input type="number" class="displab-num-input" data-input="apex" min="30" max="90" step="1" value="60" />
            </div>
          </div>

          <div class="displab-formula" data-formula-box>
            n(λ) = n₀ + B · f(λ)
          </div>

          <div class="displab-tir-badge" data-tir-banner style="display: none;">
            ⚠️ ${t('tools.dispersion.canvas.tir')}
          </div>

          <button type="button" class="displab-reset" data-reset-btn>${t('tools.dispersion.reset')}</button>
        </div>
      </div>
    </div>
  `;

  root.appendChild(wrap);

  const canvas = wrap.querySelector('.displab-canvas');
  const ctx = canvas.getContext('2d');

  // Control elements
  const controlsPanel = wrap.querySelector('[data-controls-panel]');
  const toggleBtn = wrap.querySelector('[data-toggle-controls]');
  const toggleText = wrap.querySelector('.displab-toggle-text');
  const toggleIcon = wrap.querySelector('.displab-toggle-icon');

  const modeBtns = wrap.querySelectorAll('.displab-mode-btn');
  const presetChips = wrap.querySelectorAll('.displab-chip');
  const monoOnlyContainer = wrap.querySelector('[data-mono-only]');
  const tirBanner = wrap.querySelector('[data-tir-banner]');
  const formulaBox = wrap.querySelector('[data-formula-box]');
  const resetBtn = wrap.querySelector('[data-reset-btn]');

  // UI state variables
  let state = {
    mode: 'white', // 'white' or 'mono'
    srcY: 230,
    srcAngle: 8.0,
    monoColorIndex: 7,
    n0: 1.50,
    B: 0.015,
    apex: 60.0,
    preset: 'crown'
  };

  let controlsHidden = false;

  // Slider & Number input linkages
  const inputs = {
    srcY: { slider: wrap.querySelector('[data-slider="srcY"]'), num: wrap.querySelector('[data-input="srcY"]'), key: 'srcY', parse: parseInt },
    srcAngle: { slider: wrap.querySelector('[data-slider="srcAngle"]'), num: wrap.querySelector('[data-input="srcAngle"]'), key: 'srcAngle', parse: parseFloat },
    n0: { slider: wrap.querySelector('[data-slider="n0"]'), num: wrap.querySelector('[data-input="n0"]'), key: 'n0', parse: parseFloat },
    B: { slider: wrap.querySelector('[data-slider="B"]'), num: wrap.querySelector('[data-input="B"]'), key: 'B', parse: parseFloat },
    apex: { slider: wrap.querySelector('[data-slider="apex"]'), num: wrap.querySelector('[data-input="apex"]'), key: 'apex', parse: parseFloat },
    monoColor: { slider: wrap.querySelector('[data-slider="monoColor"]'), key: 'monoColorIndex', parse: parseInt }
  };

  const readouts = {
    srcY: wrap.querySelector('[data-readout="srcY"]'),
    srcAngle: wrap.querySelector('[data-readout="srcAngle"]'),
    n0: wrap.querySelector('[data-readout="n0"]'),
    B: wrap.querySelector('[data-readout="B"]'),
    apex: wrap.querySelector('[data-readout="apex"]'),
    monoColor: wrap.querySelector('[data-readout="monoColor"]')
  };

  // Helper formatting values
  function updateReadoutUi() {
    readouts.srcY.textContent = `${state.srcY} px`;
    readouts.srcAngle.textContent = `${state.srcAngle.toFixed(1)}°`;
    readouts.n0.textContent = state.n0.toFixed(2);
    readouts.B.textContent = state.B.toFixed(3);
    readouts.apex.textContent = `${state.apex.toFixed(1)}°`;

    // Update mono color slider accent
    const monoCol = SPECTRUM_COLORS[state.monoColorIndex];
    inputs.monoColor.slider.style.accentColor = monoCol;
    
    const monoNames = {
      en: ['Violet', 'Purple', 'Indigo', 'Dark Blue', 'Blue', 'Light Blue', 'Cyan', 'Green', 'Lime', 'Yellow-Green', 'Yellow', 'Golden', 'Orange', 'Red-Orange', 'Red'],
      zh: ['深紫色', '紫色', '靛藍色', '深藍色', '藍色', '淺藍色', '青色', '綠色', '黃綠色', '嫩綠色', '黃色', '金黃色', '橙色', '橙紅色', '紅色']
    };
    const currentLang = document.documentElement.lang === 'zh-HK' ? 'zh' : 'en';
    readouts.monoColor.textContent = monoNames[currentLang][14 - state.monoColorIndex];
  }

  // Synchronize inputs
  function syncInputs() {
    for (const name in inputs) {
      const field = inputs[name];
      const val = state[field.key];
      if (field.slider) field.slider.value = String(val);
      if (field.num) field.num.value = val.toFixed(name === 'n0' ? 2 : name === 'B' ? 3 : 1);
    }
    updateReadoutUi();
  }

  // Register events on slider/number input groups
  function registerInputEvents() {
    for (const name in inputs) {
      const field = inputs[name];
      if (field.slider) {
        field.slider.addEventListener('input', (e) => {
          state[field.key] = field.parse(e.target.value);
          if (field.num) field.num.value = state[field.key].toFixed(name === 'n0' ? 2 : name === 'B' ? 3 : 1);
          
          if (name === 'n0' || name === 'B') {
            setPreset('custom');
          }
          updateReadoutUi();
          draw();
        });
      }
      if (field.num) {
        field.num.addEventListener('change', (e) => {
          let val = field.parse(e.target.value);
          const min = parseFloat(field.num.getAttribute('min'));
          const max = parseFloat(field.num.getAttribute('max'));
          if (isNaN(val)) val = state[field.key];
          if (val < min) val = min;
          if (val > max) val = max;
          
          state[field.key] = val;
          field.num.value = val.toFixed(name === 'n0' ? 2 : name === 'B' ? 3 : 1);
          if (field.slider) field.slider.value = String(val);

          if (name === 'n0' || name === 'B') {
            setPreset('custom');
          }
          updateReadoutUi();
          draw();
        });
      }
    }
  }

  // Set Preset Chip
  function setPreset(presetId) {
    state.preset = presetId;
    presetChips.forEach((chip) => {
      chip.classList.toggle('active', chip.getAttribute('data-preset') === presetId);
    });

    if (presetId !== 'custom') {
      const p = PRESETS[presetId];
      state.n0 = p.n0;
      state.B = p.B;
      syncInputs();
    }
  }

  presetChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      setPreset(chip.getAttribute('data-preset'));
      draw();
    });
  });

  // Source Mode White/Mono selection
  modeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      modeBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      state.mode = btn.getAttribute('data-mode');
      monoOnlyContainer.style.display = state.mode === 'mono' ? 'flex' : 'none';
      draw();
    });
  });

  // Toggle control panel visibility
  toggleBtn.addEventListener('click', () => {
    controlsHidden = !controlsHidden;
    controlsPanel.style.display = controlsHidden ? 'none' : 'grid';
    toggleText.textContent = controlsHidden ? t('tools.dispersion.showControls') : t('tools.dispersion.hideControls');
    toggleIcon.textContent = controlsHidden ? '⬅️' : '➡️';
  });

  // Reset Button
  resetBtn.addEventListener('click', () => {
    state = {
      mode: 'white',
      srcY: 230,
      srcAngle: 8.0,
      monoColorIndex: 7,
      n0: 1.50,
      B: 0.015,
      apex: 60.0,
      preset: 'crown'
    };
    modeBtns.forEach((b) => b.classList.toggle('active', b.getAttribute('data-mode') === 'white'));
    monoOnlyContainer.style.display = 'none';
    setPreset('crown');
    syncInputs();
    draw();
  });

  // Math vector tools
  function length(v) { return Math.sqrt(v.x * v.x + v.y * v.y); }
  function normalize(v) {
    const len = length(v);
    return len === 0 ? { x: 0, y: 0 } : { x: v.x / len, y: v.y / len };
  }
  function dot(v1, v2) { return v1.x * v2.x + v1.y * v2.y; }
  function toRad(deg) { return (deg * Math.PI) / 180; }
  function toDeg(rad) { return (rad * 180) / Math.PI; }

  // Intersection of ray with line segment
  function intersectRaySegment(rayOrigin, rayDir, segA, segB) {
    const v1 = { x: rayOrigin.x - segA.x, y: rayOrigin.y - segA.y };
    const v2 = { x: segB.x - segA.x, y: segB.y - segA.y };
    
    const det = -rayDir.x * v2.y + rayDir.y * v2.x;
    if (Math.abs(det) < 1e-10) return null;

    const u = (-rayDir.x * v1.y + rayDir.y * v1.x) / det;
    const t = (-v1.x * v2.y + v1.y * v2.x) / det;

    if (u >= 0 && u <= 1 && t > 0) {
      return {
        point: { x: rayOrigin.x + t * rayDir.x, y: rayOrigin.y + t * rayDir.y },
        t
      };
    }
    return null;
  }

  // Refraction formula vector
  function refract(I, N, eta) {
    const dotNI = dot(N, I);
    const k = 1.0 - eta * eta * (1.0 - dotNI * dotNI);
    if (k < 0.0) {
      return null; // Total internal reflection
    }
    return {
      x: eta * I.x + (eta * dotNI - Math.sqrt(k)) * N.x,
      y: eta * I.y + (eta * dotNI - Math.sqrt(k)) * N.y
    };
  }

  // Core drawing and physics function
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 1. Draw grid background for futuristic look
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1;
    for (let x = 40; x < canvas.width; x += 40) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
    }
    for (let y = 40; y < canvas.height; y += 40) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
    }

    // 2. Define Prism geometry
    // Center at (360, 240)
    const cx = 360;
    const cy = 240;
    const hPrism = 170; // height
    const baseLineY = 320;
    const topY = baseLineY - hPrism; // 150
    
    // Half width based on apex angle
    const halfWidth = hPrism * Math.tan(toRad(state.apex / 2));
    const P0 = { x: cx, y: topY };                      // Apex vertex
    const P1 = { x: cx - halfWidth, y: baseLineY };      // Bottom-Left vertex
    const P2 = { x: cx + halfWidth, y: baseLineY };      // Bottom-Right vertex

    // Prism faces
    const leftFace = { A: P0, B: P1 };
    const rightFace = { A: P0, B: P2 };
    const bottomFace = { A: P1, B: P2 };

    // Draw glass prism glow and path
    ctx.beginPath();
    ctx.moveTo(P0.x, P0.y);
    ctx.lineTo(P1.x, P1.y);
    ctx.lineTo(P2.x, P2.y);
    ctx.closePath();
    ctx.fillStyle = 'rgba(34, 211, 238, 0.08)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(34, 211, 238, 0.4)';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Draw normal guidelines for visual learning
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);

    // Rays tracing parameters
    const startX = 60;
    const startY = state.srcY;
    const angleRad = toRad(state.srcAngle);
    const dirIn = { x: Math.cos(angleRad), y: Math.sin(angleRad) };

    const raysToTrace = [];
    if (state.mode === 'white') {
      for (let i = 0; i < 15; i++) {
        // Map i from 0..14 to wavelength coefficient f in [-0.5, 0.5]
        // Red (lowest index) is f = -0.5, violet (highest index) is f = 0.5
        const f = (i / 14) - 0.5;
        const n = state.n0 + f * state.B;
        raysToTrace.push({
          n,
          color: SPECTRUM_COLORS[i],
          lineWidth: i === 0 || i === 14 ? 2 : 1.5,
          opacity: 0.85
        });
      }
    } else {
      const f = (state.monoColorIndex / 14) - 0.5;
      const n = state.n0 + f * state.B;
      raysToTrace.push({
        n,
        color: SPECTRUM_COLORS[state.monoColorIndex],
        lineWidth: 3.5,
        opacity: 1.0
      });
    }

    let hasTirOccurred = false;

    // Outer normal of Left Face
    // Left face goes P0(cx, topY) to P1(cx - halfWidth, baseLineY). Vector = (-halfWidth, hPrism)
    // Left outward perpendicular is (-hPrism, -halfWidth). Since x is negative, x-axis is left-ward pointing.
    const leftNormalRaw = { x: -hPrism, y: -halfWidth };
    const N1 = normalize(leftNormalRaw); // This points OUTWARD (left-up)

    // Outer normal of Right Face
    // Right face goes P0 to P2. Vector = (halfWidth, hPrism)
    // Right outward perpendicular is (hPrism, -halfWidth). x is positive, points right-ward.
    const rightNormalRaw = { x: hPrism, y: -halfWidth };
    const N2 = normalize(rightNormalRaw); // OUTWARD (right-up)

    // Bottom face outward normal (downwards, x=0, y=1)
    const N_bottom = { x: 0, y: 1 };

    // Trace all rays
    raysToTrace.forEach((ray) => {
      const path = [{ x: startX, y: startY }];

      // 1. Ray intersection with Left Face
      const hit1 = intersectRaySegment({ x: startX, y: startY }, dirIn, P0, P1);
      if (!hit1) {
        // Missed prism entirely, draw ray straight offscreen
        path.push({ x: startX + dirIn.x * 600, y: startY + dirIn.y * 600 });
        drawRayPath(path, ray.color, ray.lineWidth, ray.opacity);
        return;
      }

      path.push(hit1.point);

      // Apply first refraction (Air -> Glass, eta = 1.0 / n)
      // N must point against ray, so we use N1 (which points left-up, against incident ray from left)
      const r1 = 1.0 / ray.n;
      const dirMid = refract(dirIn, N1, r1);
      if (!dirMid) {
        // Refraction failed (extremely rare when going from rare to dense)
        path.push({ x: hit1.point.x + dirIn.x * 10, y: hit1.point.y + dirIn.y * 10 });
        drawRayPath(path, ray.color, ray.lineWidth, ray.opacity);
        return;
      }

      // Draw first normal
      if (state.mode === 'mono') {
        ctx.beginPath();
        ctx.moveTo(hit1.point.x - N1.x * 45, hit1.point.y - N1.y * 45);
        ctx.lineTo(hit1.point.x + N1.x * 45, hit1.point.y + N1.y * 45);
        ctx.stroke();
      }

      // 2. Intersection with Right Face or Bottom Face
      let hit2 = intersectRaySegment(hit1.point, dirMid, P0, P2); // Right face
      let isBottomHit = false;
      let exitNormal = N2;

      const hitBottom = intersectRaySegment(hit1.point, dirMid, P1, P2); // Bottom face
      if (hitBottom && (!hit2 || hitBottom.t < hit2.t)) {
        hit2 = hitBottom;
        isBottomHit = true;
        exitNormal = N_bottom;
      }

      if (!hit2) {
        // Lost inside prism, draw straight line
        path.push({ x: hit1.point.x + dirMid.x * 300, y: hit1.point.y + dirMid.y * 300 });
        drawRayPath(path, ray.color, ray.lineWidth, ray.opacity);
        return;
      }

      path.push(hit2.point);

      // Apply second refraction/reflection (Glass -> Air, eta = n / 1.0 = n)
      // Normal must point AGAINST ray. exitNormal is outward normal (points with ray), so we use -exitNormal
      const N2_against = { x: -exitNormal.x, y: -exitNormal.y };
      const r2 = ray.n;
      
      const dirOut = refract(dirMid, N2_against, r2);

      if (state.mode === 'mono') {
        // Draw exit normal
        ctx.beginPath();
        ctx.moveTo(hit2.point.x - exitNormal.x * 45, hit2.point.y - exitNormal.y * 45);
        ctx.lineTo(hit2.point.x + exitNormal.x * 45, hit2.point.y + exitNormal.y * 45);
        ctx.stroke();
      }

      if (!dirOut) {
        // Total Internal Reflection (TIR) inside prism!
        hasTirOccurred = true;
        // Reflected ray
        const dotN_dirMid = dot(N2_against, dirMid);
        const dirRefl = {
          x: dirMid.x - 2 * dotN_dirMid * N2_against.x,
          y: dirMid.y - 2 * dotN_dirMid * N2_against.y
        };

        // Trace reflected ray to the bottom face P1P2
        const hitReflBottom = intersectRaySegment(hit2.point, dirRefl, P1, P2);
        if (hitReflBottom) {
          path.push(hitReflBottom.point);
          // Refract out of bottom face (Glass -> Air)
          const N_bottom_against = { x: 0, y: -1 }; // Opposing the downward normal
          const dirExitTir = refract(dirRefl, N_bottom_against, r2);
          if (dirExitTir) {
            path.push({ x: hitReflBottom.point.x + dirExitTir.x * 300, y: hitReflBottom.point.y + dirExitTir.y * 300 });
          } else {
            // Second TIR! Just extend reflected ray
            path.push({ x: hitReflBottom.point.x + dirRefl.x * 300, y: hitReflBottom.point.y + dirRefl.y * 300 });
          }
        } else {
          path.push({ x: hit2.point.x + dirRefl.x * 300, y: hit2.point.y + dirRefl.y * 300 });
        }
      } else {
        // Ray refracted out normally
        path.push({ x: hit2.point.x + dirOut.x * 400, y: hit2.point.y + dirOut.y * 400 });
      }

      drawRayPath(path, ray.color, ray.lineWidth, ray.opacity);
    });

    ctx.setLineDash([]); // clear dash

    // 3. Draw Lens Labels and annotations
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 13px system-ui, sans-serif';
    ctx.fillText(t('tools.dispersion.canvas.prism'), cx - 35, baseLineY + 24);

    // Label light source
    ctx.font = '12px system-ui, sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    const srcLabel = state.mode === 'white' ? t('tools.dispersion.canvas.whiteSource') : t('tools.dispersion.canvas.monoSource');
    ctx.fillText(srcLabel, startX - 45, startY - 14);

    // Draw little laser/source emitter box
    ctx.fillStyle = '#1e293b';
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2;
    ctx.fillRect(startX - 20, startY - 10, 20, 20);
    ctx.strokeRect(startX - 20, startY - 10, 20, 20);

    // Lens apex A angle text
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 12px monospace';
    ctx.fillText(`A = ${state.apex.toFixed(0)}°`, P0.x - 18, P0.y + 24);

    // Show banner if TIR occurred
    tirBanner.style.display = hasTirOccurred ? 'block' : 'none';

    // Update Live Formula readout
    if (state.mode === 'white') {
      formulaBox.innerHTML = `
        <div style="font-weight: 700; margin-bottom: 4px; color: #a5f3fc;">${t('tools.dispersion.canvas.spectrum')}</div>
        <div style="font-size: 0.85rem; color: #f472b6;">
          n<sub>red</sub> = ${(state.n0 - 0.5 * state.B).toFixed(3)}<br>
          n<sub>violet</sub> = ${(state.n0 + 0.5 * state.B).toFixed(3)}
        </div>
      `;
    } else {
      const f = (state.monoColorIndex / 14) - 0.5;
      const nMono = state.n0 + f * state.B;
      formulaBox.innerHTML = `
        <div style="font-weight: 700; margin-bottom: 4px; color: #a5f3fc;">n(λ) = n₀ + B · f(λ)</div>
        <div style="font-size: 0.85rem; color: #38bdf8;">
          n = ${state.n0.toFixed(2)} + ${state.B.toFixed(3)} &times; (${f.toFixed(2)})<br>
          n<sub>mono</sub> = <strong style="font-size: 0.95rem; color: #00ff0a;">${nMono.toFixed(3)}</strong>
        </div>
      `;
    }
  }

  function drawRayPath(points, color, lineWidth, opacity) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.globalAlpha = opacity;
    // Add neon light shadow blur effect
    ctx.shadowColor = color;
    ctx.shadowBlur = 4;
    ctx.stroke();
    ctx.restore();
  }

  // Bind inputs and initial layout
  registerInputEvents();
  syncInputs();
  draw();
}
