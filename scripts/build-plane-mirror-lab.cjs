const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const repoRoot = path.join(__dirname, '..');
const labRoot = path.join(repoRoot, 'labs', 'plane-mirror-lab');
const publicRoot = path.join(repoRoot, 'public', 'plane-mirror-lab');

if (!fs.existsSync(path.join(labRoot, 'build-bundle.cjs'))) {
  console.warn('Plane Mirror Lab source not found at labs/plane-mirror-lab; skipping bundle rebuild.');
  process.exit(0);
}

execSync('node build-bundle.cjs', { cwd: labRoot, stdio: 'inherit' });

const syncFiles = [
  ['js/bundle.js', 'js/bundle.js'],
  ['index.html', 'index.html'],
  ['styles.css', 'styles.css'],
];

for (const [relSrc, relDest] of syncFiles) {
  const src = path.join(labRoot, relSrc);
  const dest = path.join(publicRoot, relDest);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
}

console.log('Synced labs/plane-mirror-lab -> public/plane-mirror-lab/');
