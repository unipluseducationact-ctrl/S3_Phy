#!/usr/bin/env python3
"""Import MC questions from Unit Education worksheet PDF pairs."""

from __future__ import annotations

import json
import re
import sys
from dataclasses import dataclass, field
from pathlib import Path

import fitz
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
DOWNLOADS = Path("/Users/jeffcheung/Downloads")
IMAGES_DIR = ROOT / "public" / "worksheet-images"
IMPORTED_JSON = ROOT / "src" / "data" / "imported-questions.json"
QUESTIONS_JSON = ROOT / "src" / "data" / "questions.json"

MAX_IMAGE_WIDTH = 1200
WEBP_QUALITY = 82
HEADER_Y_MAX = 120
FOOTER_Y_MIN = 780

# Manual MC letter overrides when answer PDF parsing fails.
MANUAL_ANSWERS: dict[str, dict[int, str]] = {
    "f3-lens-mc-2425": {8: "C"},
    "f3-light-mc-2425": {1: "D", 13: "A", 18: "B", 19: "B", 30: "C", 54: "B"},
    "s3-lens-mock-2122": {8: "C", 27: "A"},
}

# Long / non-MC questions to skip (not suitable for MC worksheets).
EXCLUDED_QUESTIONS: dict[str, set[int]] = {
    "s3-light-test5": {7},
}

PDF_PAIRS: list[tuple[str, str, str, str]] = [
    (
        "f3-lens-mc-2425",
        "F3 Final exam (Lens) MC 2024-25.pdf",
        "F3 Final exam (Lens) MC 2024-25 Ans.pdf",
        "Imported: F3 Lens MC 2024-25",
    ),
    (
        "f3-light-mc-2425",
        "F3 Final exam (Light) MC 2024-25.pdf",
        "F3 Final exam (Light) MC 2024-25 Ans.pdf",
        "Imported: F3 Light MC 2024-25",
    ),
    (
        "f3-light-mc2-2425",
        "F3 Final exam (Light) MC 2 2024-25.pdf",
        "F3 Final exam (Light) MC 2 2024-25 Ans.pdf",
        "Imported: F3 Light MC 2 2024-25",
    ),
    (
        "s3-light-test5",
        "S3 Light Test 5.pdf",
        "S3 Light Test 5(ANS).pdf",
        "Imported: S3 Light Test 5",
    ),
    (
        "s3-lens-mock-2122",
        "S3 PHY Mock Test Lens 2 MC - 2021-22.pdf",
        "S3 PHY Mock Test Lens 2 MC - 2021-22 (ANS).pdf",
        "Imported: S3 Lens Mock 2021-22",
    ),
]

NOISE_PATTERNS = [
    re.compile(p, re.I)
    for p in (
        r"^Unit Education",
        r"^薈進",
        r"^Tel:",
        r"^警告",
        r"^Lens revision MC",
        r"^Light revision MC",
        r"^2025-\d+",
        r"^2024-\d+",
        r"^2021-\d+",
        r"^F\.3 Physics",
        r"^\(\s*ANSWER\s*\)",
        r"^Name\s*:",
        r"^\d+\s*$",
        r"^MC\s*$",
        r"^\s*42\s*$",
        r"^S3 PHY Mock",
        r"^Mock Test",
    )
]

Q_START_RE = re.compile(r"(?:^|\n)\s*(\d+)\.\s+")
CHOICE_RE = re.compile(r"^\s*([A-D])\.\s*(.*)$", re.M)
STANDALONE_LETTER_RE = re.compile(r"^[A-D]$")
FIGURE_HINT_RE = re.compile(r"\b(figure|diagram|shown|sketch|graph|above|below)\b", re.I)

TOPIC_RULES: list[tuple[str, re.Pattern[str]]] = [
    ("em", re.compile(r"\b(radio|microwave|infrared|ultraviolet|x-ray|gamma|electromagnetic|EM wave)\b", re.I)),
    ("tir", re.compile(r"\b(total internal reflection|TIR|critical angle|optical fibre|optical fiber)\b", re.I)),
    ("refraction", re.compile(r"\b(refract|Snell|refractive index|critical angle|apparent depth|optical density)\b", re.I)),
    ("reflection", re.compile(r"\b(reflect|plane mirror|mirror|specular|diffuse|virtual image)\b", re.I)),
    ("concave", re.compile(r"\b(concave|diverging lens|short-sighted|myopia)\b", re.I)),
    ("convex", re.compile(r"\b(convex|converging lens|magnifying|long-sighted|hyperopia|focal length|lens formula)\b", re.I)),
]


@dataclass
class ParsedQuestion:
    number: int
    page_index: int
    stem: str
    choices: list[str]
    y0: float
    y1: float
    answer: int | None = None
    explanation: str = ""
    image_path: str | None = None


@dataclass
class ImportStats:
    total: int = 0
    with_images: int = 0
    failures: list[str] = field(default_factory=list)


def is_noise_line(line: str) -> bool:
    stripped = line.strip()
    if not stripped:
        return True
    return any(p.search(stripped) for p in NOISE_PATTERNS)


def clean_text(text: str) -> str:
    lines = [line.rstrip() for line in text.split("\n") if not is_noise_line(line)]
    return "\n".join(lines)


def is_mc_page(text: str) -> bool:
    cleaned = clean_text(text)
    return bool(re.search(r"\bA\.\s", cleaned) and re.search(r"\bD\.\s", cleaned))


def shorten_hint(exp: str, max_len: int = 90) -> str:
    text = exp.strip()
    if not text:
        return "Review the key idea in the explanation."
    for sep in (". ", "。", "；", "; "):
        if sep in text:
            part = text.split(sep, 1)[0].strip()
            if 12 <= len(part) <= max_len:
                return part + (sep.strip() if sep.strip() in ".。" else ".")
    if len(text) <= max_len:
        return text
    return text[: max_len - 1].rstrip() + "…"


def infer_topic(text: str, default: str = "reflection") -> str:
    for topic, pattern in TOPIC_RULES:
        if pattern.search(text):
            return topic
    return default


def default_topic_for_source(source: str) -> str:
    if "lens" in source:
        return "convex"
    return "reflection"


def infer_answer_from_incorrect_explanation(exp: str) -> int | None:
    """Infer MC letter for 'which is/are incorrect?' when only prose is given."""
    if not exp:
        return None
    incorrect: set[int] = set()
    correct: set[int] = set()
    for m in re.finditer(r"\((\d+)\)\s+is\s+incorrect", exp, re.I):
        incorrect.add(int(m.group(1)))
    for m in re.finditer(r"\((\d+)\)\s+is\s+correct", exp, re.I):
        correct.add(int(m.group(1)))
    if not incorrect and not correct:
        return None
    wrong_nums = incorrect or {n for n in (1, 2, 3) if n not in correct}
    if wrong_nums == {1}:
        return 0
    if wrong_nums == {2}:
        return 1
    if wrong_nums == {3}:
        return 2
    if wrong_nums == {1, 2}:
        return 2
    if wrong_nums == {1, 3}:
        return 1
    if wrong_nums == {2, 3}:
        return 0
    if wrong_nums == {1, 2, 3}:
        return 3
    return None


def infer_answer_from_correct_explanation(exp: str) -> int | None:
    """Infer MC letter for 'which is/are correct?' when prose marks (n) correct/incorrect."""
    if not exp:
        return None
    correct: set[int] = set()
    incorrect: set[int] = set()
    for m in re.finditer(r"∴\s*\((\d+)\)\s+is\s+correct", exp, re.I):
        correct.add(int(m.group(1)))
    for m in re.finditer(r"\((\d+)\)\s+is\s+correct", exp, re.I):
        correct.add(int(m.group(1)))
    for m in re.finditer(r"\((\d+)\)\s+is\s+incorrect", exp, re.I):
        incorrect.add(int(m.group(1)))
    if not correct and not incorrect:
        return None
    right_nums = correct or {n for n in (1, 2, 3) if n not in incorrect}
    if right_nums == {1}:
        return 0
    if right_nums == {2}:
        return 1
    if right_nums == {3}:
        return 2
    if right_nums == {1, 2}:
        return 0
    if right_nums == {1, 3}:
        return 1
    if right_nums == {2, 3}:
        return 2
    if right_nums == {1, 2, 3}:
        return 3
    return None


def _numbers_from_text(text: str) -> list[float]:
    values: list[float] = []
    for m in re.finditer(r"(?<![A-Za-z])(\d+(?:\.\d+)?)", text):
        try:
            values.append(float(m.group(1)))
        except ValueError:
            continue
    return values


def infer_answer_from_numeric_match(exp: str, choices: list[str]) -> int | None:
    if not exp or not choices:
        return None
    exp_nums = _numbers_from_text(exp)
    if not exp_nums:
        return None
    # Prefer the last few numeric results in worked solutions.
    candidates = exp_nums[-4:]
    best_idx: int | None = None
    best_score = 0.0
    for idx, choice in enumerate(choices):
        choice_nums = _numbers_from_text(choice)
        if not choice_nums:
            continue
        for value in candidates:
            for target in choice_nums:
                if target == 0:
                    continue
                score = 1.0 - min(abs(value - target) / max(abs(target), 1e-6), 1.0)
                if score > best_score and score >= 0.995:
                    best_score = score
                    best_idx = idx
    return best_idx


def infer_answer_from_choice_phrases(exp: str, choices: list[str]) -> int | None:
    if not exp:
        return None
    lowered = exp.lower()
    hits: list[tuple[int, int]] = []
    for idx, choice in enumerate(choices):
        words = [w for w in re.findall(r"[a-z]{4,}", choice.lower()) if w not in {"only", "real", "virtual"}]
        if not words:
            continue
        score = sum(1 for w in words if w in lowered)
        if score >= 2:
            hits.append((score, idx))
    if not hits:
        return None
    hits.sort(reverse=True)
    return hits[0][1]


def extract_answer_from_tail(tail: str, choices: list[str] | None = None) -> tuple[int | None, str]:
    tail = tail.strip()
    if not tail:
        return None, ""

    lines = [ln.strip() for ln in tail.split("\n")]
    answer: int | None = None
    exp_lines: list[str] = []
    started_exp = False

    for line in lines:
        if not line:
            if started_exp:
                exp_lines.append("")
            continue
        if answer is None and STANDALONE_LETTER_RE.match(line):
            answer = ord(line) - ord("A")
            continue
        started_exp = True
        exp_lines.append(line)

    exp = re.sub(r"\s+", " ", " ".join(exp_lines)).strip()
    exp = re.split(r"(?:^|\n)\s*\d+\.\s", exp)[0].strip()

    if answer is None:
        letters = [ln for ln in lines if STANDALONE_LETTER_RE.match(ln)]
        if letters:
            answer = ord(letters[-1]) - ord("A")

    if answer is None:
        answer = infer_answer_from_incorrect_explanation(exp)
    if answer is None:
        answer = infer_answer_from_correct_explanation(exp)
    if answer is None and choices:
        answer = infer_answer_from_numeric_match(exp, choices)
    if answer is None and choices:
        answer = infer_answer_from_choice_phrases(exp, choices)

    return answer, exp


def merge_answer_maps(
    target: dict[int, tuple[int | None, str]],
    incoming: dict[int, tuple[int | None, str]],
) -> None:
    for num, pair in incoming.items():
        if num not in target:
            target[num] = pair
            continue
        old_a, old_exp = target[num]
        new_a, new_exp = pair
        merged_exp = new_exp if len(new_exp) > len(old_exp) else old_exp
        merged_a = old_a if old_a is not None else new_a
        if old_a is None and new_a is not None:
            merged_a = new_a
        target[num] = (merged_a, merged_exp)


def parse_questions_on_page(page: fitz.Page, page_index: int) -> dict[int, ParsedQuestion]:
    text = page.get_text()
    if not is_mc_page(text):
        return {}

    cleaned = clean_text(text)
    matches = list(Q_START_RE.finditer(cleaned))
    if not matches:
        return {}

    page_dict = page.get_text("dict")
    text_blocks = sorted(
        (b for b in page_dict["blocks"] if b.get("type") == 0),
        key=lambda b: (b["bbox"][1], b["bbox"][0]),
    )

    def y_for_number(num: int) -> tuple[float, float]:
        pat = re.compile(rf"^\s*{num}\.\s")
        for block in text_blocks:
            for line in block.get("lines", []):
                line_text = "".join(span.get("text", "") for span in line.get("spans", []))
                if pat.match(line_text.strip()):
                    return block["bbox"][1], block["bbox"][3]
        return HEADER_Y_MAX, page.rect.height - 80

    questions: dict[int, ParsedQuestion] = {}
    for i, match in enumerate(matches):
        num = int(match.group(1))
        end = matches[i + 1].start() if i + 1 < len(matches) else len(cleaned)
        block = cleaned[match.start() : end].strip()

        a_match = re.search(r"^\s*A\.\s", block, re.M)
        if not a_match:
            # Image-only MC (e.g. Q10/Q11): keep placeholder choices.
            stem = re.sub(rf"^{num}\.\s*", "", block).strip()
            if not stem:
                stem = f"Refer to the figure for question {num}."
            choices = ["A", "B", "C", "D"]
            y0, _ = y_for_number(num)
            next_num = int(matches[i + 1].group(1)) if i + 1 < len(matches) else None
            if next_num is not None:
                y1, _ = y_for_number(next_num)
            else:
                y1 = FOOTER_Y_MIN
            questions[num] = ParsedQuestion(
                number=num,
                page_index=page_index,
                stem=stem,
                choices=choices,
                y0=y0,
                y1=y1,
            )
            continue

        stem = block[len(str(num)) + 1 : a_match.start()].strip()
        stem = re.sub(r"^\.\s*", "", stem).strip()
        choices_part = block[a_match.start() :]

        choices = ["", "", "", ""]
        for cm in CHOICE_RE.finditer(choices_part):
            idx = ord(cm.group(1)) - ord("A")
            choices[idx] = re.sub(r"\s+", " ", cm.group(2).strip())

        if sum(1 for c in choices if c) < 4:
            continue

        y0, _ = y_for_number(num)
        next_num = int(matches[i + 1].group(1)) if i + 1 < len(matches) else None
        if next_num is not None:
            y1, _ = y_for_number(next_num)
        else:
            y1 = FOOTER_Y_MIN

        questions[num] = ParsedQuestion(
            number=num,
            page_index=page_index,
            stem=stem,
            choices=choices,
            y0=y0,
            y1=y1,
        )

    return questions


def parse_answers_on_page(
    page: fitz.Page,
    page_questions: dict[int, ParsedQuestion] | None = None,
) -> dict[int, tuple[int | None, str]]:
    text = page.get_text()
    if not is_mc_page(text):
        return {}

    cleaned = clean_text(text)
    matches = list(Q_START_RE.finditer(cleaned))
    answers: dict[int, tuple[int | None, str]] = {}
    page_questions = page_questions or {}

    for i, match in enumerate(matches):
        num = int(match.group(1))
        end = matches[i + 1].start() if i + 1 < len(matches) else len(cleaned)
        block = cleaned[match.start() : end]
        choices = page_questions[num].choices if num in page_questions else None

        d_end: int | None = None
        for cm in CHOICE_RE.finditer(block):
            if cm.group(1) == "D":
                d_end = cm.end()

        if d_end is not None:
            tail = block[d_end:]
            answer, exp = extract_answer_from_tail(tail, choices)
            if answer is not None or exp:
                answers[num] = (answer, exp)
            continue

        # Image-only question: standalone letter after the number block.
        body = block.split(".", 1)[-1].strip()
        letter_match = re.search(r"(?:^|\n)\s*([A-D])\s*(?:\n|$)", body)
        if letter_match:
            answers[num] = (ord(letter_match.group(1)) - ord("A"), "")

    return answers


def save_webp_from_pixmap(pix: fitz.Pixmap, dest: Path) -> None:
    img = Image.frombytes("RGB", (pix.width, pix.height), pix.samples)
    if img.width > MAX_IMAGE_WIDTH:
        ratio = MAX_IMAGE_WIDTH / img.width
        img = img.resize(
            (MAX_IMAGE_WIDTH, max(1, int(img.height * ratio))),
            Image.Resampling.LANCZOS,
        )
    dest.parent.mkdir(parents=True, exist_ok=True)
    img.save(dest, "WEBP", quality=WEBP_QUALITY, method=6)


def largest_image_in_region(page: fitz.Page, y0: float, y1: float) -> fitz.Rect | None:
    best: tuple[float, fitz.Rect] | None = None
    for block in page.get_text("dict")["blocks"]:
        if block.get("type") != 1:
            continue
        x0, by0, x1, by1 = block["bbox"]
        if by1 < y0 or by0 > y1:
            continue
        if by0 < HEADER_Y_MAX:
            continue
        area = (x1 - x0) * (by1 - by0)
        if area < 2500:
            continue
        if best is None or area > best[0]:
            best = (area, fitz.Rect(x0, by0, x1, by1))
    return best[1] if best else None


def question_needs_image(question: ParsedQuestion, page: fitz.Page) -> bool:
    if FIGURE_HINT_RE.search(question.stem):
        return True
    if question.stem.startswith("Refer to the figure"):
        return True
    region = largest_image_in_region(page, question.y0, question.y1)
    return region is not None


def extract_question_image(
    page: fitz.Page,
    question: ParsedQuestion,
    dest: Path,
) -> bool:
    y0 = max(question.y0 - 5, HEADER_Y_MAX)
    y1 = min(question.y1 - 5, FOOTER_Y_MIN)
    if y1 <= y0 + 20:
        y1 = min(page.rect.height - 60, y0 + 260)

    clip = largest_image_in_region(page, y0, y1)
    if clip is None:
        clip = fitz.Rect(page.rect.x0 + 15, y0, page.rect.x1 - 15, y1)
    else:
        clip = fitz.Rect(clip.x0 - 8, clip.y0 - 8, clip.x1 + 8, clip.y1 + 8)

    clip = clip & page.rect
    if clip.is_empty or clip.height < 20:
        return False

    pix = page.get_pixmap(matrix=fitz.Matrix(2, 2), clip=clip, alpha=False)
    save_webp_from_pixmap(pix, dest)
    return True


def make_lang_pack(
    stem: str,
    choices: list[str],
    answer: int,
    exp: str,
    image: str | None,
) -> dict:
    pack: dict = {
        "q": stem,
        "choices": choices,
        "a": answer,
        "exp": exp or "See the worked solution in the source PDF.",
        "hint": shorten_hint(exp or stem),
    }
    if image:
        pack["image"] = image
    return pack


def build_question_entry(
    source: str,
    section: str,
    topic: str,
    question: ParsedQuestion,
) -> dict | None:
    if question.answer is None or question.answer < 0:
        return None

    rel_image = question.image_path
    en = make_lang_pack(
        question.stem,
        question.choices,
        question.answer,
        question.explanation,
        rel_image,
    )
    return {
        "topic": topic,
        "section": section,
        "source": source,
        "en": en,
        "zhHant": dict(en),
    }


def import_pdf_pair(
    source: str,
    question_pdf: Path,
    answer_pdf: Path,
    section: str,
    stats: ImportStats,
) -> list[dict]:
    if not question_pdf.is_file():
        stats.failures.append(f"{source}: missing question PDF {question_pdf.name}")
        return []
    if not answer_pdf.is_file():
        stats.failures.append(f"{source}: missing answer PDF {answer_pdf.name}")
        return []

    qdoc = fitz.open(question_pdf)
    adoc = fitz.open(answer_pdf)

    all_questions: dict[int, ParsedQuestion] = {}
    all_answers: dict[int, tuple[int | None, str]] = {}

    page_questions_by_index: dict[int, dict[int, ParsedQuestion]] = {}
    for page_index in range(len(qdoc)):
        page_qs = parse_questions_on_page(qdoc[page_index], page_index)
        page_questions_by_index[page_index] = page_qs
        all_questions.update(page_qs)

    for page_index in range(len(adoc)):
        page_qs = page_questions_by_index.get(page_index, {})
        page_ans = parse_answers_on_page(adoc[page_index], page_qs)
        merge_answer_maps(all_answers, page_ans)

    entries: list[dict] = []
    default_topic = default_topic_for_source(source)

    excluded = EXCLUDED_QUESTIONS.get(source, set())
    manual_for_source = MANUAL_ANSWERS.get(source, {})

    for num in sorted(all_questions):
        if num in excluded:
            continue

        pq = all_questions[num]
        ans_pair = all_answers.get(num)
        if ans_pair:
            pq.answer, pq.explanation = ans_pair
            if pq.answer is None and pq.explanation:
                pq.answer = (
                    infer_answer_from_numeric_match(pq.explanation, pq.choices)
                    or infer_answer_from_choice_phrases(pq.explanation, pq.choices)
                    or infer_answer_from_correct_explanation(pq.explanation)
                    or infer_answer_from_incorrect_explanation(pq.explanation)
                )
        else:
            if num not in manual_for_source:
                stats.failures.append(f"{source} Q{num}: missing answer")

        manual_letter = manual_for_source.get(num)
        if manual_letter:
            pq.answer = ord(manual_letter.upper()) - ord("A")

        page = qdoc[pq.page_index]
        image_name = f"{source}-q{num:02d}.webp"
        image_dest = IMAGES_DIR / image_name
        rel_image = f"./worksheet-images/{image_name}"

        if question_needs_image(pq, page):
            if extract_question_image(page, pq, image_dest):
                pq.image_path = rel_image
                stats.with_images += 1
            else:
                stats.failures.append(f"{source} Q{num}: figure expected but image extraction failed")

        combined_text = pq.stem + " " + " ".join(pq.choices) + " " + pq.explanation
        topic = infer_topic(combined_text, default_topic)

        entry = build_question_entry(source, section, topic, pq)
        if entry is None:
            stats.failures.append(f"{source} Q{num}: could not determine answer letter")
            continue

        if len(pq.stem) < 8 and not pq.image_path:
            stats.failures.append(f"{source} Q{num}: stem too short / likely parse issue")

        entries.append(entry)
        stats.total += 1

    qdoc.close()
    adoc.close()
    return entries


def load_existing_questions() -> list[dict]:
    if QUESTIONS_JSON.is_file():
        return json.loads(QUESTIONS_JSON.read_text(encoding="utf-8"))
    return []


def merge_questions(existing: list[dict], imported: list[dict]) -> list[dict]:
    curated = [q for q in existing if not q.get("source")]
    return curated + imported


def main() -> int:
    stats = ImportStats()
    imported: list[dict] = []

    for source, q_name, a_name, section in PDF_PAIRS:
        pair_entries = import_pdf_pair(
            source,
            DOWNLOADS / q_name,
            DOWNLOADS / a_name,
            section,
            stats,
        )
        imported.extend(pair_entries)
        print(f"{source}: imported {len(pair_entries)} questions")

    IMPORTED_JSON.parent.mkdir(parents=True, exist_ok=True)
    IMPORTED_JSON.write_text(
        json.dumps(imported, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )

    existing = load_existing_questions()
    if not existing:
        # Fall back to curated worksheet questions if questions.json is empty.
        sys.path.insert(0, str(ROOT / "scripts"))
        from build_worksheet_questions import ensure_hints, QUESTIONS

        existing = ensure_hints(QUESTIONS)

    merged = merge_questions(existing, imported)
    QUESTIONS_JSON.write_text(
        json.dumps(merged, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )

    print("\n=== Import summary ===")
    print(f"Total questions imported: {stats.total}")
    print(f"Questions with images: {stats.with_images}")
    print(f"Parse failures: {len(stats.failures)}")
    if stats.failures:
        print("\nFailures:")
        for msg in stats.failures[:40]:
            print(f"  - {msg}")
        if len(stats.failures) > 40:
            print(f"  ... and {len(stats.failures) - 40} more")
    print(f"\nWrote {IMPORTED_JSON}")
    print(f"Merged {len(merged)} total questions -> {QUESTIONS_JSON}")
    return 0 if stats.total else 1


if __name__ == "__main__":
    raise SystemExit(main())
