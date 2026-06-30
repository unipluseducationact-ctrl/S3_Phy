#!/usr/bin/env python3
"""Extract flashcards from PHYS S3 Flashcards PDFs into src/data/flashcards.json."""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
FLASH_SRC = Path(r"C:\Users\UniplusUser02\Desktop\PHYS\S3\Flashcards")
OUT_JSON = ROOT / "scripts" / "data" / "flashcards.json"
REPORT = ROOT / "scripts" / "flashcards-extraction-report.md"

TOPICS = [
    ("Reflection", "reflection"),
    ("Refraction and snells law", "refraction"),
    ("Total internal reflection", "tir"),
    ("Convex lens", "convex"),
    ("Concave lens", "concave"),
    ("EM waves", "em"),
]


def read_pdf(path: Path) -> str:
    reader = PdfReader(str(path))
    return "\n".join((p.extract_text() or "") for p in reader.pages)


def clean_body(text: str) -> str:
    text = re.sub(r"\s+", " ", text).strip()
    text = re.sub(r"Flashcard\s+\d+:\s*", "", text, flags=re.I)
    text = re.sub(r"閃卡\s*\d+\s*[：:]\s*", "", text)
    return text.strip()


def parse_en(text: str) -> list[tuple[str, str]]:
    qs = [q.strip() for q in re.findall(r"^Q:\s*(.+)$", text, re.M)]
    parts = re.split(r"Flashcard\s+\d+:\s*", text, flags=re.I)[1:]
    bodies = [clean_body(p.split("Flashcard")[0]) for p in parts]
    n = min(len(qs), len(bodies))
    if not n and bodies:
        titles = re.findall(r"Flashcard\s+\d+:\s*([^\n]+)", text, re.I)
        return [(titles[i] if i < len(titles) else f"Card {i + 1}", bodies[i]) for i in range(len(bodies))]
    return list(zip(qs[:n], bodies[:n]))


def parse_zh(text: str) -> dict[int, tuple[str, str]]:
    qs = [q.strip() for q in re.findall(r"問題[：:]\s*([^\n]+)", text)]
    matches = list(re.finditer(r"閃卡\s*(\d+)\s*[：:]\s*([^\n]+)", text))
    out: dict[int, tuple[str, str]] = {}
    for i, m in enumerate(matches):
        num = int(m.group(1))
        title = m.group(2).strip()
        start = m.end()
        end = matches[i + 1].start() if i + 1 < len(matches) else len(text)
        body = clean_body(text[start:end])
        q = qs[i].strip() if i < len(qs) else title
        out[num] = (q, body)
    return out


def find_pdf(folder: Path, lang: str) -> Path:
    if lang == "en":
        hits = list(folder.glob("*English*"))
    else:
        hits = list(folder.glob("*Traditional*"))
    if not hits:
        raise FileNotFoundError(f"No {lang} PDF in {folder}")
    return hits[0]


def main() -> int:
    cards: list[dict] = []
    report_lines = ["# Flashcards extraction report\n"]

    for folder_name, topic in TOPICS:
        folder = FLASH_SRC / folder_name
        en_path = find_pdf(folder, "en")
        zh_path = find_pdf(folder, "zh")
        en_pairs = parse_en(read_pdf(en_path))
        zh_map = parse_zh(read_pdf(zh_path))
        matched_zh = 0
        for i, (eq, ea) in enumerate(en_pairs, start=1):
            entry: dict = {
                "topic": topic,
                "en": {"q": eq, "a": ea},
            }
            if i in zh_map:
                zq, za = zh_map[i]
                entry["zhHant"] = {"q": zq, "a": za}
                matched_zh += 1
            cards.append(entry)
        report_lines.append(
            f"- **{topic}**: EN {len(en_pairs)} cards, ZH matched {matched_zh}/{len(en_pairs)} "
            f"(ZH keys: {len(zh_map)})\n"
        )
        print(f"{topic}: {len(en_pairs)} EN, {matched_zh} ZH matched")

    OUT_JSON.write_text(json.dumps(cards, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    REPORT.write_text("".join(report_lines), encoding="utf-8")
    print(f"Wrote {len(cards)} cards -> {OUT_JSON}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
