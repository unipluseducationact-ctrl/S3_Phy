import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(import.meta.dirname, '..');
const DEFAULT_SOURCE = path.resolve(
  'C:/Users/UniplusUser02/Desktop/light flashcards v2-20260630T052438Z-3-001/light flashcards v2/flashcards/light/js/flashcardData.js',
);
const SOURCE = process.argv[2] ? path.resolve(process.argv[2]) : DEFAULT_SOURCE;
const OUT = path.join(ROOT, 'src', 'data', 'flashcards-light-ch3.json');

const SUBTOPIC_MAP = {
  Reflection: 'reflection',
  Refraction: 'refraction',
  'Total Internal Reflection': 'tir',
};

function loadLightDeck(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');
  const match = src.match(/export const FLASHCARD_DECK = (\[[\s\S]*\])\s*;/);
  if (!match) {
    throw new Error(`Could not parse FLASHCARD_DECK from ${filePath}`);
  }
  return Function(`"use strict"; return (${match[1]});`)();
}

const FLASHCARD_DECK = loadLightDeck(SOURCE);

const out = FLASHCARD_DECK.map((card) => {
  const topic = SUBTOPIC_MAP[card.subtopic];
  if (!topic) {
    throw new Error(`Unknown subtopic: ${card.subtopic}`);
  }
  const pack = { q: card.front, a: card.back };
  const entry = {
    topic,
    en: pack,
    zhHant: pack,
  };
  if (card.compactFront) entry.compactFront = true;
  if (card.compactBack) entry.compactBack = true;
  return entry;
});

fs.writeFileSync(OUT, `${JSON.stringify(out, null, 2)}\n`, 'utf8');
console.log(`Wrote ${out.length} cards to ${OUT}`);
