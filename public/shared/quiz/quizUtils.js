export const QUIZ_UI_LANGS = ["en", "zh", "zh-Hant"];

export function isChineseUI(lang) {
  return lang === "zh" || lang === "zh-Hant";
}

export function noQuizAlertMessage(lang) {
  if (lang === "zh") return "请先生成题目。";
  if (lang === "zh-Hant") return "請先產生題目。";
  return "Generate questions first.";
}

export function resolveQuizLang() {
  try {
    const parentLang = window.parent.document.documentElement.lang;
    if (parentLang && QUIZ_UI_LANGS.includes(parentLang)) return parentLang;
    if (parentLang?.startsWith("zh")) return parentLang === "zh-Hant" ? "zh-Hant" : "zh";
  } catch (_) {
    /* cross-origin */
  }
  const local = document.documentElement.lang;
  if (local && QUIZ_UI_LANGS.includes(local)) return local;
  if (local?.startsWith("zh")) return local === "zh-Hant" ? "zh-Hant" : "zh";
  return "en";
}

export const DIFFICULTY_LEVELS = [
  { id: "all", labelEn: "All levels", labelZh: "全部難度" },
  { id: "easy", labelEn: "Easy", labelZh: "易" },
  { id: "medium", labelEn: "Medium", labelZh: "中" },
  { id: "hard", labelEn: "Hard", labelZh: "難" },
];

export const DIFFICULTY_MAP = {
  Foundation: "easy",
  Standard: "medium",
  Applied: "hard",
};

export function difficultyLevel(q) {
  return DIFFICULTY_MAP[q.difficulty] || "medium";
}

export function createRng(seedStr) {
  let s = 0;
  const str = String(seedStr || "").trim();
  if (str) {
    for (let i = 0; i < str.length; i++) s = (Math.imul(31, s) + str.charCodeAt(i)) | 0;
  } else {
    s = (Date.now() ^ (Math.random() * 0x7fffffff)) | 0;
  }
  if (s === 0) s = 1;
  return {
    random() {
      s = (Math.imul(1664525, s) + 1013904223) | 0;
      return (s >>> 0) / 0x100000000;
    },
  };
}

export function seededShuffle(arr, seedStr) {
  const rng = createRng(seedStr);
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export function escHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Escape HTML but preserve safe <sub>letter</sub> tags from formatPhysicsSymbols. */
export function escHtmlQuizText(s) {
  const placeholders = [];
  const marked = String(s).replace(/<sub>([a-zA-Z0-9])<\/sub>/g, (_, ch) => {
    const token = `\u0000SUB${placeholders.length}\u0000`;
    placeholders.push(`<sub>${ch}</sub>`);
    return token;
  });
  let out = escHtml(marked);
  placeholders.forEach((tag, i) => {
    out = out.replace(`\u0000SUB${i}\u0000`, tag);
  });
  return out;
}

const SUPERSCRIPT_DIGITS = "⁰¹²³⁴⁵⁶⁷⁸⁹";

function toSuperscriptNumber(numStr) {
  return String(numStr)
    .split("")
    .map((ch) => {
      if (ch === "-") return "⁻";
      if (ch === "+") return "⁺";
      const i = ch.charCodeAt(0) - 48;
      return i >= 0 && i <= 9 ? SUPERSCRIPT_DIGITS[i] : ch;
    })
    .join("");
}

/** Format physics units with Unicode superscripts (kg⁻¹, °C⁻¹, 10⁵), like flashcards. */
export function formatPhysicsUnits(s) {
  if (s == null || s === "") return s;
  let t = String(s);
  t = t.replace(/10\s*\^\s*([+-]?\d+)/g, (_, exp) => `10${toSuperscriptNumber(exp)}`);
  t = t.replace(/kg\s*[−–-]\s*1/gi, "kg⁻¹");
  t = t.replace(/°C\s*[−–-]\s*1/gi, "°C⁻¹");
  t = t.replace(/℃\s*[−–-]\s*1/gi, "°C⁻¹");
  t = t.replace(/L\s*[−–-]\s*1/gi, "L⁻¹");
  t = t.replace(/min\s*[−–-]\s*1/gi, "min⁻¹");
  t = t.replace(/m\s+s\s*[−–-]\s*1/gi, "m s⁻¹");
  t = t.replace(/m\s*[−–-]\s*3/gi, "m³");
  return formatPhysicsSymbols(t);
}

/** Format physics symbols: lᵥ (latent heat of vaporization), etc. */
export function formatPhysicsSymbols(s) {
  if (s == null || s === "") return s;
  let t = String(s);
  t = t.replace(/ℓ\s*v/gi, "lᵥ");
  t = t.replace(/(?<=[\s(=])lv(?=[\s=.,;?)])/gi, "lᵥ");
  // No Unicode subscript z exists; modifier letter ᶻ renders as superscript.
  t = t.replace(/cᶻ/g, "c<sub>z</sub>");
  t = t.replace(/c_([a-z])/gi, (_, letter) => `c<sub>${letter.toLowerCase()}</sub>`);
  return t;
}

/** Join PDF column-wrap line breaks; keep (1)(2), (a), Given: blocks. */
export function repairPdfLineBreaks(s) {
  if (s == null || s === "") return s;
  let t = String(s);
  t = t.replace(/([A-Za-z0-9])([−–-])\n(?=[a-z])/g, "$1$2");

  const lines = t.split("\n");
  const out = [];
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    while (i + 1 < lines.length) {
      const cur = line.trimEnd();
      const next = lines[i + 1].trim();
      if (!next) break;
      if (/^\(\d+\)/.test(next)) break;
      if (/^\([a-d]\)/i.test(next)) break;
      if (/^Given:/i.test(next)) break;
      if (/^Substance\b/i.test(next)) break;
      if (/[.?!:]$/.test(cur)) break;
      if (/^[a-z(]/.test(next)) {
        const joiner = /[−–-]$/.test(cur) ? "" : " ";
        line = cur + joiner + next;
        i++;
        continue;
      }
      break;
    }
    out.push(line);
  }
  return out.join("\n");
}

export function formatQuizText(s) {
  return formatPhysicsSymbols(formatPhysicsUnits(repairPdfLineBreaks(s)));
}

export function questionFormat(q) {
  return q.format || "mcq";
}

/** Worksheet filters for question format (MCQ / T/F / fill). */
export const QUIZ_FORMAT_FILTERS = [
  { id: "mcq", labelEn: "Multiple choice", labelZh: "選擇題", labelZhHans: "选择题" },
  { id: "tf", labelEn: "True / False", labelZh: "是非題", labelZhHans: "是非题" },
  { id: "fill", labelEn: "Fill in the blanks", labelZh: "填充題", labelZhHans: "填空题" },
];

/** Only formats that exist in the loaded question bank. */
export function availableFormatFilters(questions) {
  const present = new Set((questions || []).map((q) => questionFormat(q)));
  return QUIZ_FORMAT_FILTERS.filter((f) => present.has(f.id));
}

/** Split stem into intro text and numbered statements like (1) … (2) … */
export function splitNumberedStatements(stem) {
  const s = String(stem || "");
  const idx = s.search(/\(\d+\)\s*/);
  if (idx === -1) return { intro: s, statements: null };
  const intro = s.slice(0, idx).trim();
  const tail = s.slice(idx).trim();
  const statements = tail
    .split(/(?=\(\d+\)\s*)/)
    .map((x) => x.trim())
    .filter(Boolean);
  if (!statements.length) return { intro: s, statements: null };
  return { intro, statements };
}

export function formatFilterLabel(filter, lang) {
  if (lang === "zh") return filter.labelZhHans || filter.labelZh;
  if (lang === "zh-Hant") return filter.labelZh;
  return filter.labelEn;
}

/** Count questions per section, per format, and section×format matrix. */
export function buildQuizBankStats(questions, sectionIds, formatIds) {
  const bySection = {};
  const byFormat = Object.fromEntries(formatIds.map((id) => [id, 0]));
  const matrix = {};
  for (const sid of sectionIds) {
    matrix[sid] = Object.fromEntries(formatIds.map((fid) => [fid, 0]));
  }
  for (const q of questions) {
    const fmt = questionFormat(q);
    if (!sectionIds.includes(q.section) || !formatIds.includes(fmt)) continue;
    bySection[q.section] = (bySection[q.section] || 0) + 1;
    byFormat[fmt] = (byFormat[fmt] || 0) + 1;
    if (matrix[q.section]) matrix[q.section][fmt] = (matrix[q.section][fmt] || 0) + 1;
  }
  return { total: questions.length, bySection, byFormat, matrix };
}

export function filterQuizPool(allQuestions, { sections, formats, difficulty }) {
  let pool = allQuestions.filter(
    (q) => sections.includes(q.section) && formats.includes(questionFormat(q))
  );
  if (difficulty && difficulty !== "all") {
    pool = pool.filter((q) => difficultyLevel(q) === difficulty);
  }
  return pool;
}

export function formatTypeLabel(q) {
  const f = questionFormat(q);
  if (f === "tf") return "T/F";
  if (f === "fill") return "FILL";
  if (f === "typein") return "TYPE-IN";
  return "MCQ";
}

export function typeinAnswerMatches(input, q) {
  const n = normalizeFillAnswer(input);
  if (!n) return false;
  const accept = q.accept || (q.answer ? [q.answer] : []);
  if (
    accept.some((a) => {
      const na = normalizeFillAnswer(a);
      return na && (n === na || n.includes(na) || na.includes(n));
    })
  ) {
    return true;
  }
  const keywords = q.keywords || [];
  if (keywords.length) {
    return keywords.every((k) => n.includes(normalizeFillAnswer(k)));
  }
  return false;
}

export function normalizeFillAnswer(s) {
  return String(s || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[.,;]/g, "");
}

export function fillAnswerMatches(input, acceptList) {
  const n = normalizeFillAnswer(input);
  if (!n) return false;
  return (acceptList || []).some((a) => normalizeFillAnswer(a) === n);
}

/** @returns {{ segments: Array<{type:'text'|'blank', value?: string, accept?: string[]}> }[]} */
export function getFillLines(q) {
  if (q.lines?.length) return q.lines;
  return (q.fields || []).map((field) => ({
    segments: [
      { type: "text", value: String(field.label || "").replace(/_+/g, "") },
      { type: "blank", accept: field.accept || [] },
    ],
  }));
}

export function countFillBlanks(q) {
  return getFillLines(q).reduce(
    (n, line) => n + line.segments.filter((s) => s.type === "blank").length,
    0
  );
}

export function fillLineAnswerText(line, fallbackAnswer) {
  return line.segments
    .map((seg) => {
      if (seg.type === "text") return seg.value || "";
      return fallbackAnswer || seg.accept?.[0] || "___";
    })
    .join("");
}

export function allFillFieldsCorrect(q, values) {
  const lines = getFillLines(q);
  if (!lines.length) return false;
  const blankCount = countFillBlanks(q);
  let i = 0;
  for (const line of lines) {
    for (const seg of line.segments) {
      if (seg.type !== "blank") continue;
      const accept = [...(seg.accept || [])];
      if (blankCount === 1 && q.answer && !accept.includes(q.answer)) accept.push(q.answer);
      if (!fillAnswerMatches(values[i], accept)) return false;
      i += 1;
    }
  }
  return i === values.length && i > 0;
}

function stemParagraphHtml(block) {
  return `<p class="stem-block mb-3 last:mb-0">${block.replace(/\n/g, "<br>")}</p>`;
}

function isMarkdownTable(text) {
  const lines = text.trim().split("\n").filter((line) => line.trim());
  return lines.length >= 2 && lines.every((line) => line.includes("|"));
}

function markdownTableToHtml(text) {
  const lines = text
    .trim()
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !/^\|[\s\-:|]+\|$/.test(line));
  if (!lines.length) return stemParagraphHtml(text);

  const parseRow = (line) => line.split("|").slice(1, -1).map((cell) => cell.trim());
  let html =
    '<div class="stem-table-wrap overflow-x-auto mb-3"><table class="stem-table w-full max-w-xl text-body-sm border-collapse border border-outline-variant/30">';

  lines.forEach((line, i) => {
    const cells = parseRow(line);
    const tag = i === 0 ? "th" : "td";
    html += `<tr class="${i === 0 ? "bg-surface-container-low" : ""}">`;
    cells.forEach((cell, ci) => {
      const cls =
        i === 0
          ? "px-3 py-2 border border-outline-variant/20 text-left font-label-bold"
          : ci === 0
            ? "px-3 py-2 border border-outline-variant/20 font-label-bold whitespace-nowrap"
            : "px-3 py-2 border border-outline-variant/20";
      html += `<${tag} class="${cls}">${cell}</${tag}>`;
    });
    html += "</tr>";
  });

  html += "</table></div>";
  return html;
}

function expandStemBlocks(block) {
  if (/\(\d+\)/.test(block)) {
    const parts = block
      .split(/(?=\(\d+\))/)
      .map((part) => part.trim())
      .filter(Boolean);
    if (parts.length > 1) return parts;
  }
  if (/E(?:<sub>\d<\/sub>|[₀₁₂₃₄₅₆₇₈₉])\s*=/.test(block)) {
    const parts = block
      .split(/(?=E(?:<sub>\d<\/sub>|[₀₁₂₃₄₅₆₇₈₉])\s*=)/)
      .map((part) => part.trim())
      .filter(Boolean);
    if (parts.length > 1) return parts;
  }
  return [block];
}

/** Render quiz stem with paragraphs, numbered blocks, and markdown tables. */
export function formatStemHtml(text) {
  if (!text) return "";
  const s = escHtmlQuizText(formatQuizText(text));
  return s
    .split(/\n\n+/)
    .map((part) => part.trim())
    .filter(Boolean)
    .map((section) => {
      if (isMarkdownTable(section)) return markdownTableToHtml(section);
      return expandStemBlocks(section).map(stemParagraphHtml).join("");
    })
    .join("");
}

export function modelAnswerText(q) {
  const f = questionFormat(q);
  if (f === "tf") {
    const opt = q.options?.find((o) => o.key === q.answer);
    const word = opt?.text || (q.answer === "T" ? "True" : "False");
    const wordZh = opt?.textZh || (q.answer === "T" ? "正確" : "錯誤");
    return { en: `${word}.`, zh: `${wordZh}。` };
  }
  if (f === "fill") {
    const lines = getFillLines(q);
    if (lines.length) {
      return { en: lines.map((line) => fillLineAnswerText(line, q.answer)).join(" | "), zh: "" };
    }
  }
  if (f === "typein") {
    return {
      en: q.modelAnswer || q.answer || (q.accept || []).join(" / ") || "",
      zh: q.modelAnswerZh || "",
    };
  }
  const opt = q.options?.find((o) => o.key === q.answer);
  const en = opt ? `${q.answer}. ${opt.text}` : q.answer;
  const zh = opt?.textZh ? `${q.answer}. ${opt.textZh}` : "";
  return { en, zh };
}
