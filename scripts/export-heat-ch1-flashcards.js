import fs from 'fs';
import path from 'path';

const REPO_ROOT = path.resolve(import.meta.dirname, '..');
const OUT = path.join(REPO_ROOT, 'src', 'data', 'flashcards-heat-ch1.json');

if (!process.argv[2]) {
  console.error('Usage: node export-heat-ch1-flashcards.js <flashcardData.js>');
  console.error('  External asset — pass the path to the source flashcardData.js explicitly.');
  process.exit(1);
}
const SOURCE = path.resolve(process.argv[2]);

const SUBTOPIC_MAP = {
  'Thermometer & Temperature': 'thermometry',
  'Heat & Internal Energy': 'heatInternalEnergy',
  'Change of State': 'changeOfState',
  'Heat Transfer': 'heatTransfer',
};

function loadHeatDeck(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');
  const match = src.match(/export const FLASHCARD_DECK = (\[[\s\S]*\])\s*;/);
  if (!match) {
    throw new Error(`Could not parse FLASHCARD_DECK from ${filePath}`);
  }
  return Function(`"use strict"; return (${match[1]});`)();
}

const FLASHCARD_DECK = loadHeatDeck(SOURCE);

const out = FLASHCARD_DECK.map((card) => {
  const topic = SUBTOPIC_MAP[card.subtopic];
  if (!topic) {
    throw new Error(`Unknown subtopic: ${card.subtopic}`);
  }
  const pack = { q: card.front, a: card.back };
  return {
    topic,
    en: pack,
    zhHant: pack,
  };
});

fs.writeFileSync(OUT, `${JSON.stringify(out, null, 2)}\n`, 'utf8');
console.log(`Wrote ${out.length} cards to ${OUT}`);
