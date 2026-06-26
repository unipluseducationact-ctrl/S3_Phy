import { assetUrl } from '../assetUrl.js';
import flashcards from '../data/flashcards.json';
import reflectionImages from '../data/flashcards-reflection.json';
import refractionImages from '../data/flashcards-refraction.json';
import tirImages from '../data/flashcards-tir.json';
import emImages from '../data/flashcards-em.json';
import convexImages from '../data/flashcards-convex.json';
import concaveImages from '../data/flashcards-concave.json';
import thermometerImages from '../data/flashcards-thermometer.json';
import heatInternalEnergyImages from '../data/flashcards-heat-internal-energy.json';
import changeOfStateImages from '../data/flashcards-change-of-state.json';
import heatTransferImages from '../data/flashcards-heat-transfer.json';

const THERMOMETRY_SUBTOPICS = [
  'liquidThermometer',
  'faultyThermometer',
  'resistanceThermometer',
  'thermistor',
];

function langKey(lang) {
  return lang === 'zh-Hant' ? 'zhHant' : 'en';
}

function flashImageUrl(relPath) {
  return assetUrl(relPath);
}

/**
 * @param {object} card
 * @param {string} lang
 * @param {number} id
 * @param {string} subtopic
 */
function normalizeCard(card, lang, id, subtopic) {
  const lk = langKey(lang);

  if (card?.en?.front || card?.zhHant?.front) {
    const pack = card[lk]?.front ? card[lk] : card.en || card.zhHant;
    const frontSrc = flashImageUrl(pack.front);
    const backSrc = pack.back ? flashImageUrl(pack.back) : frontSrc;
    return {
      id,
      subtopic: card.topic || subtopic,
      front: '',
      back: '',
      frontImage: frontSrc,
      backImage: backSrc,
      alt: card.alt || card.title || '',
      isImage: true,
    };
  }

  if (card?.front) {
    const frontSrc = flashImageUrl(card.front);
    const backSrc = card.back ? flashImageUrl(card.back) : frontSrc;
    return {
      id,
      subtopic: card.topic || subtopic,
      front: '',
      back: '',
      frontImage: frontSrc,
      backImage: backSrc,
      alt: card.alt || card.title || '',
      isImage: true,
    };
  }

  const pack = card[lk] || card.en;
  return {
    id,
    subtopic: card.topic || subtopic,
    front: pack?.q || '',
    back: pack?.a || '',
    isImage: false,
  };
}

/**
 * @param {object[]} rawCards
 * @param {string} lang
 * @param {string} defaultSubtopic
 */
function normalizeDeck(rawCards, lang, defaultSubtopic = 'General') {
  let nextId = 1;
  return rawCards.map((card) => {
    const normalized = normalizeCard(card, lang, nextId, card.topic || defaultSubtopic);
    nextId += 1;
    return normalized;
  });
}

function opticsRawDeck(deckKey) {
  const text = flashcards.slice();
  const deck = deckKey === 'rotatingMirror' ? 'reflection' : deckKey;

  if (deck === 'all') {
    const textNoLensImages = text.filter(
      (c) =>
        c.topic !== 'convex' &&
        c.topic !== 'concave' &&
        c.topic !== 'refraction' &&
        c.topic !== 'tir' &&
        c.topic !== 'em',
    );
    return [
      ...reflectionImages,
      ...refractionImages,
      ...tirImages,
      ...emImages,
      ...convexImages,
      ...concaveImages,
      ...textNoLensImages,
    ];
  }
  if (deck === 'reflection') return reflectionImages.slice();
  if (deck === 'convex') return convexImages.slice();
  if (deck === 'concave') return concaveImages.slice();
  if (deck === 'refractionTir') return [...refractionImages, ...tirImages];
  if (deck === 'em') return emImages.slice();
  const list = text.filter((c) => c.topic === deck);
  return list.length ? list : text;
}

function heatRawDeck(deckKey) {
  if (deckKey === 'all') {
    return [
      ...thermometerImages,
      ...heatInternalEnergyImages,
      ...changeOfStateImages,
      ...heatTransferImages,
    ];
  }
  if (deckKey === 'thermometry') return thermometerImages.slice();
  if (deckKey === 'heatInternalEnergy') return heatInternalEnergyImages.slice();
  if (deckKey === 'changeOfState') return changeOfStateImages.slice();
  if (deckKey === 'heatTransfer') return heatTransferImages.slice();
  const heatText = flashcards.filter((c) => THERMOMETRY_SUBTOPICS.includes(c.topic));
  const list = heatText.filter((c) => c.topic === deckKey);
  return list.length ? list : heatText;
}

/**
 * @param {string} deckKey
 * @param {string} lang
 */
export function buildOpticsDeck(deckKey, lang) {
  return normalizeDeck(opticsRawDeck(deckKey), lang);
}

/**
 * @param {string} deckKey
 * @param {string} lang
 */
export function buildHeatDeck(deckKey, lang) {
  return normalizeDeck(heatRawDeck(deckKey), lang);
}
