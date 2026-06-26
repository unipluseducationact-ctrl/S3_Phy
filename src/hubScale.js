const SCALE_FLOOR = 0.78;

function syncHubScale() {
  const root = document.documentElement;
  const width = window.innerWidth;
  const height = Math.max(window.innerHeight, 1);
  const aspectRatio = width / height;
  let scale = 1;

  if (width <= 1360) scale = 0.88;
  else if (width <= 1500) scale = 0.94;

  if (width > 1700 && aspectRatio > 1.7) {
    const aspectReduction = Math.min(0.07, (aspectRatio - 1.7) * 0.09);
    const widthReduction = Math.min(0.05, ((width - 1700) / 1800) * 0.05);
    scale -= aspectReduction + widthReduction;
  }

  if (height <= 700) scale = Math.min(scale, 0.82);

  scale = Math.max(SCALE_FLOOR, Math.min(1, scale));
  root.style.setProperty('--hub-scale', scale.toFixed(3));
}

export function initHubScale() {
  syncHubScale();
  window.addEventListener('resize', syncHubScale);
  return () => window.removeEventListener('resize', syncHubScale);
}
