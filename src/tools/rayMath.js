export const deg = (rad) => (rad * 180) / Math.PI;
export const rad = (deg) => (deg * Math.PI) / 180;

export function clamp(v, a, b) {
  return Math.max(a, Math.min(b, v));
}

/** Snell: n1 sin t1 = n2 sin t2; return t2 in radians or null if TIR from medium1 to 2 */
export function snellRefractedAngle(n1, t1, n2) {
  const s = (n1 / n2) * Math.sin(t1);
  if (s > 1 + 1e-9) return null;
  if (s < -1 - 1e-9) return null;
  return Math.asin(clamp(s, -1, 1));
}

export function criticalAngle(nDense, nRare) {
  if (nDense <= nRare) return null;
  const ratio = nRare / nDense;
  if (ratio > 1) return null;
  return Math.asin(ratio);
}
