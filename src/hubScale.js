const SCALE_FLOOR = 0.82;

function syncHubScale() {
  const root = document.documentElement;
  const width = window.innerWidth;
  const height = Math.max(window.innerHeight, 1);
  let scale = 1;

  if (width <= 1360) scale = 0.9;
  else if (width <= 1500) scale = 0.96;

  if (height <= 700) scale = Math.min(scale, 0.88);

  scale = Math.max(SCALE_FLOOR, Math.min(1, scale));
  root.style.setProperty('--hub-scale', scale.toFixed(3));
}

export function initHubScale() {
  syncHubScale();
  window.addEventListener('resize', syncHubScale);
  return () => window.removeEventListener('resize', syncHubScale);
}
