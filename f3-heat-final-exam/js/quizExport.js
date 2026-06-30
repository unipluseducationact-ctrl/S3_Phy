import {
  escHtml,
  isChineseUI,
  noQuizAlertMessage,
  modelAnswerText,
  questionFormat,
  getFillLines,
  splitNumberedStatements,
  formatQuizText,
} from "./quizUtils.js";

function fillLineExportHtml(line, answersMode) {
  let html = "";
  line.segments.forEach((seg) => {
    if (seg.type === "text") {
      html += escHtml(seg.value || "");
      return;
    }
    if (answersMode) {
      html += `<b>${escHtml(seg.accept?.[0] || "")}</b>`;
    } else {
      html += "__________";
    }
  });
  return html;
}

function buildDocBody(questions, answersMode) {
  let body = "";
  questions.forEach((q, i) => {
    const fmt = questionFormat(q);
    body += `<h2>Q${i + 1} · ${escHtml(q.section)} · ${escHtml(q.difficulty)} · ${escHtml(fmt.toUpperCase())}</h2>`;
    const { intro, statements } = splitNumberedStatements(q.stem);
    if (statements) {
      body += `<p><b>EN:</b> ${escHtml(formatQuizText(intro))}</p>`;
      statements.forEach((stmt) => {
        body += `<p style="margin:0.35em 0 0.35em 1.25em">${escHtml(formatQuizText(stmt))}</p>`;
      });
    } else {
      body += `<p><b>EN:</b> ${escHtml(formatQuizText(q.stem))}</p>`;
    }
    if (q.stemZh) body += `<p><b>中文：</b> ${escHtml(q.stemZh)}</p>`;
    if (q.images?.length && !answersMode) {
      q.images.forEach((fig) => {
        body += `<p><i>[Diagram: ${escHtml(fig.caption || fig.alt || "see notes")}]</i></p>`;
      });
    } else if (q.image?.src && !answersMode) {
      body += `<p><i>[Diagram: ${escHtml(q.image.caption || q.image.alt || "see notes")}]</i></p>`;
    }
    if (!answersMode) {
      if (fmt === "fill" && getFillLines(q).length) {
        if (q.wordBank?.length) {
          body += `<p><i>Word bank:</i> ${escHtml(q.wordBank.join(", "))}</p>`;
        }
        body += "<ol>";
        getFillLines(q).forEach((line) => {
          body += `<li>${fillLineExportHtml(line, answersMode)}</li>`;
        });
        body += "</ol>";
      } else if (q.optionsLayout === "table" && q.optionTable?.rows?.length) {
        const headers = q.optionTable.headers || [];
        body += "<table border='1' cellpadding='6' cellspacing='0'><tr><th></th>";
        headers.forEach((h) => {
          body += `<th>${escHtml(h)}</th>`;
        });
        body += "</tr>";
        q.optionTable.rows.forEach((row) => {
          body += `<tr><td><b>${escHtml(row.key)}</b></td>`;
          (row.cells || []).forEach((cell) => {
            body += `<td>${escHtml(formatQuizText(cell))}</td>`;
          });
          body += "</tr>";
        });
        body += "</table>";
      } else if (q.options?.length) {
        body += "<ul>";
        q.options.forEach((opt) => {
          const zh = opt.textZh ? ` / ${escHtml(opt.textZh)}` : "";
          body += `<li><b>${escHtml(opt.key)}.</b> ${escHtml(opt.text)}${zh}</li>`;
        });
        body += "</ul>";
      }
    }
    if (answersMode) {
      const ma = modelAnswerText(q);
      body += `<p><b>Answer / 答案：</b> ${escHtml(ma.en)}</p>`;
      if (ma.zh) body += `<p>${escHtml(ma.zh)}</p>`;
      body += `<p><i>Hint / 提示:</i> ${escHtml(q.hint || "")}</p>`;
    }
  });
  return body;
}

export function downloadWord(questions, answersMode, lang) {
  if (!questions.length) {
    alert(noQuizAlertMessage(lang));
    return;
  }
  const titleEn = answersMode
    ? "Ch 3.7 Refraction — Answers"
    : "Ch 3.7 Refraction — Questions";
  const titleZh = answersMode ? "第三章 3.7 折射 — 答案" : "第三章 3.7 折射 — 試題";
  const body = buildDocBody(questions, answersMode);
  const html =
    '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">' +
    `<head><meta charset="utf-8"><title>${escHtml(titleEn)}</title></head><body>` +
    `<h1>${escHtml(titleEn)}</h1><h2 style="font-size:14pt">${escHtml(titleZh)}</h2>${body}</body></html>`;
  const blob = new Blob(["\ufeff", html], { type: "application/msword" });
  const a = document.createElement("a");
  const ts = new Date().toISOString().slice(0, 19).replace(/[:T]/g, "-");
  a.href = URL.createObjectURL(blob);
  a.download = (answersMode ? "refraction_answers_" : "refraction_questions_") + ts + ".doc";
  a.click();
  URL.revokeObjectURL(a.href);
}

export function printSheet(questions, answersMode, lang) {
  if (!questions.length) {
    alert(noQuizAlertMessage(lang));
    return;
  }
  const sheet = document.getElementById("quiz-pdf-sheet");
  if (!sheet) return;
  const titleEn = answersMode
    ? "Ch 3.7 Refraction (Answers)"
    : "Ch 3.7 Refraction (Questions)";
  let html = `<h1>${escHtml(titleEn)}</h1>`;
  html += buildDocBody(questions, answersMode);
  sheet.innerHTML = html;
  window.print();
}
