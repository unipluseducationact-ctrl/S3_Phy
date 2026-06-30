import { assetUrl } from '../assetUrl.js';
import lightCh3Cards from '../data/flashcards-light-ch3.json';
import heatCh1Cards from '../data/flashcards-heat-ch1.json';

function langKey(lang) {
  return lang === 'zh-Hant' ? 'zhHant' : 'en';
}

function flashImageUrl(relPath) {
  return assetUrl(relPath);
}

function lightByTopic(topic) {
  return lightCh3Cards.filter((card) => card.topic === topic);
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
    compactFront: Boolean(card.compactFront),
    compactBack: Boolean(card.compactBack),
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
  const deck = deckKey === 'rotatingMirror' ? 'reflection' : deckKey;

  if (deck === 'all') return lightCh3Cards.slice();
  if (deck === 'reflection') return lightByTopic('reflection');
  if (deck === 'refractionTir') return [...lightByTopic('refraction'), ...lightByTopic('tir')];
  return lightCh3Cards.slice();
}

function heatRawDeck(deckKey) {
  if (deckKey === 'all') return heatCh1Cards.slice();
  return heatCh1Cards.filter((card) => card.topic === deckKey);
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
