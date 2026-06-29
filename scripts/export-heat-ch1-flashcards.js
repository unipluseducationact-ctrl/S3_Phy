import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(import.meta.dirname, '..');
const DEFAULT_SOURCE = path.resolve(
  'C:/Users/user/Desktop/Notes-20260629T084723Z-3-001/flashcards/heat/js/flashcardData.js',
);
const SOURCE = process.argv[2] ? path.resolve(process.argv[2]) : DEFAULT_SOURCE;
const OUT = path.join(ROOT, 'src', 'data', 'flashcards-heat-ch1.json');

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
