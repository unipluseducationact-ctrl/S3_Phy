const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const repoRoot = path.join(__dirname, '..');
const labRoot = path.join(repoRoot, '..', 'Optics', 'Webapp game', 'Plane Mirror Lab');
const bundleSrc = path.join(labRoot, 'js', 'bundle.js');
const bundleDest = path.join(repoRoot, 'public', 'plane-mirror-lab', 'js', 'bundle.js');

if (!fs.existsSync(path.join(labRoot, 'build-bundle.cjs'))) {
  console.warn('Plane Mirror Lab source not found; skipping bundle rebuild.');
  process.exit(0);
}

execSync('node build-bundle.cjs', { cwd: labRoot, stdio: 'inherit' });
fs.mkdirSync(path.dirname(bundleDest), { recursive: true });
fs.copyFileSync(bundleSrc, bundleDest);
console.log('Synced plane-mirror-lab/js/bundle.js -> public/');
