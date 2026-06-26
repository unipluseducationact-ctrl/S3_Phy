/** @typedef {{ id: number, subtopic: string, front: string, back: string, frontImage?: string, backImage?: string, alt?: string, isImage?: boolean }} Flashcard */

export const RATE_AGAIN = 1.7;
export const RATE_GOT_IT = 0.7;
export const RATE_NEUTRAL = 1.0;
export const RATE_MASTERED = 0.1;
export const GOT_IT_MASTER_COUNT = 3;

function rateToCopyCount(rate) {
  const whole = Math.floor(rate);
  const frac = rate - whole;
  return whole + (Math.random() < frac ? 1 : 0);
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function buildSequenceQueueRound2Plus(copyPlan) {
  const buckets = new Map(copyPlan.map((e) => [e.id, e.copies]));
  const queue = [];
  let lastId = null;
  const total = copyPlan.reduce((sum, e) => sum + e.copies, 0);

  for (let i = 0; i < total; i += 1) {
    let candidates = [...buckets.entries()].filter(([id, c]) => c > 0 && id !== lastId);
    if (candidates.length === 0) {
      candidates = [...buckets.entries()].filter(([, c]) => c > 0);
    }
    candidates.sort((a, b) => b[1] - a[1]);
    const [id, remaining] = candidates[0];
    queue.push(id);
    buckets.set(id, remaining - 1);
    lastId = id;
  }
  return queue;
}

function expandCopyPlan(copyPlan) {
  const queue = [];
  copyPlan.forEach(({ id, copies }) => {
    for (let i = 0; i < copies; i += 1) queue.push(id);
  });
  return queue;
}

/**
 * @param {() => Flashcard[]} getDeck
 */
export function createFlashcardSession(getDeck) {
  /** @type {'sequence' | 'random'} */
  let mode = 'sequence';
  let roundNumber = 1;
  /** @type {{ id: number, copies: number }[]} */
  let roundCopyPlan = [];
  /** @type {number[]} */
  let roundQueue = [];
  let queueIndex = 0;
  let flipped = false;
  let showingSummary = false;
  let sessionComplete = false;

  /** @type {Map<number, { nextRate: number, totalGotIt: number, roundAgain: number, roundGotIt: number, roundNeutral: number }>} */
  const cardState = new Map();

  function activeDeck() {
    return getDeck();
  }

  function deckById() {
    return new Map(activeDeck().map((c) => [c.id, c]));
  }

  function initCardStates() {
    cardState.clear();
    activeDeck().forEach((c) => {
      cardState.set(c.id, {
        nextRate: RATE_NEUTRAL,
        totalGotIt: 0,
        roundAgain: 0,
        roundGotIt: 0,
        roundNeutral: 0,
      });
    });
  }

  function buildCopyPlan() {
    const deck = activeDeck();
    if (roundNumber === 1) {
      return deck.map((c) => ({ id: c.id, copies: 1 }));
    }
    return deck
      .map((c) => ({
        id: c.id,
        copies: rateToCopyCount(cardState.get(c.id)?.nextRate ?? RATE_NEUTRAL),
      }))
      .filter((e) => e.copies > 0);
  }

  function buildQueueFromPlan(copyPlan) {
    if (copyPlan.length === 0) return [];
    if (roundNumber === 1) {
      const ids = copyPlan.map((e) => e.id);
      if (mode === 'random') return shuffle([...ids]);
      return [...ids].sort((a, b) => a - b);
    }
    if (mode === 'random') return shuffle(expandCopyPlan(copyPlan));
    return buildSequenceQueueRound2Plus(copyPlan);
  }

  function startRound() {
    showingSummary = false;
    sessionComplete = false;
    roundCopyPlan = buildCopyPlan();
    const totalCopies = roundCopyPlan.reduce((s, e) => s + e.copies, 0);
    if (totalCopies === 0) {
      sessionComplete = true;
      showingSummary = true;
      roundQueue = [];
      queueIndex = 0;
      return;
    }
    activeDeck().forEach((c) => {
      const st = cardState.get(c.id);
      if (st) {
        st.roundAgain = 0;
        st.roundGotIt = 0;
        st.roundNeutral = 0;
      }
    });
    roundQueue = buildQueueFromPlan(roundCopyPlan);
    queueIndex = 0;
    flipped = false;
  }

  function resetSession() {
    roundNumber = 1;
    initCardStates();
    startRound();
  }

  function currentCardId() {
    return roundQueue[queueIndex] ?? null;
  }

  function currentCard() {
    const id = currentCardId();
    if (id == null) return null;
    return deckById().get(id) ?? null;
  }

  function applyRate(kind) {
    const id = currentCardId();
    if (id == null) return;
    const st = cardState.get(id);
    if (!st) return;
    if (kind === 'again') {
      st.nextRate = RATE_AGAIN;
      st.totalGotIt = 0;
      st.roundAgain += 1;
    } else if (kind === 'gotit') {
      st.totalGotIt += 1;
      st.roundGotIt += 1;
      st.nextRate = st.totalGotIt >= GOT_IT_MASTER_COUNT ? RATE_MASTERED : RATE_GOT_IT;
    } else if (kind === 'neutral') {
      st.roundNeutral += 1;
      st.nextRate = RATE_NEUTRAL;
    }
  }

  function advance() {
    flipped = false;
    if (queueIndex < roundQueue.length - 1) {
      queueIndex += 1;
      return false;
    }
    showingSummary = true;
    return true;
  }

  resetSession();

  return {
    getMode: () => mode,
    setMode(nextMode) {
      if (mode === nextMode) return;
      mode = nextMode;
      roundQueue = buildQueueFromPlan(roundCopyPlan);
      queueIndex = 0;
      flipped = false;
    },
    resetSession,
    getRoundNumber: () => roundNumber,
    getProgress: () => ({
      index: roundQueue.length ? queueIndex + 1 : 0,
      total: roundQueue.length,
    }),
    isFlipped: () => flipped,
    flip() {
      flipped = !flipped;
    },
    unflip() {
      flipped = false;
    },
    currentCard,
    prev() {
      if (queueIndex > 0) {
        queueIndex -= 1;
        flipped = false;
        return true;
      }
      return false;
    },
    nextNavigate() {
      if (queueIndex < roundQueue.length - 1) {
        queueIndex += 1;
        flipped = false;
        return true;
      }
      return false;
    },
    rateAgain() {
      if (!flipped) return false;
      applyRate('again');
      return advance();
    },
    rateGotIt() {
      if (!flipped) return false;
      applyRate('gotit');
      return advance();
    },
    rateNeutral() {
      if (!flipped) return false;
      applyRate('neutral');
      return advance();
    },
    isSummary: () => showingSummary,
    isSessionComplete: () => sessionComplete,
    getRoundStats() {
      let again = 0;
      let gotIt = 0;
      let neutral = 0;
      cardState.forEach((st) => {
        again += st.roundAgain;
        gotIt += st.roundGotIt;
        neutral += st.roundNeutral;
      });
      return { again, gotIt, neutral };
    },
    nextRound() {
      roundNumber += 1;
      startRound();
    },
    restart() {
      resetSession();
    },
  };
}
