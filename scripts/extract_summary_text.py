#!/usr/bin/env python3
"""Dump Summary PDF text into scripts/summary-text/ for MCQ review."""

from __future__ import annotations

import sys
from pathlib import Path

from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
SUMMARY_SRC = Path(r"C:\Users\UniplusUser02\Desktop\PHYS\S3\Summary")
OUT_DIR = ROOT / "scripts" / "summary-text"

TOPICS = [
    ("Reflection", "reflection"),
    ("Refraction and snells law", "refraction"),
    ("Total internal reflection", "tir"),
    ("Convex lens", "convex"),
    ("Concave lens", "concave"),
    ("EM waves", "em"),
]


def find_pdf(folder: Path, lang: str) -> Path:
    if lang == "en":
        hits = list(folder.glob("*English*"))
    else:
        hits = list(folder.glob("*Traditional*"))
    if not hits:
        raise FileNotFoundError(f"No {lang} PDF in {folder}")
    return hits[0]


def read_pdf(path: Path) -> str:
    reader = PdfReader(str(path))
    return "\n".join((p.extract_text() or "") for p in reader.pages)


def main() -> int:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for folder_name, topic in TOPICS:
        folder = SUMMARY_SRC / folder_name
        for lang, suffix in [("en", "en"), ("zh", "zhHant")]:
            src = find_pdf(folder, lang)
            text = read_pdf(src)
            out = OUT_DIR / f"{topic}-{suffix}.txt"
            out.write_text(text, encoding="utf-8")
            print(f"Wrote {out} ({len(text)} chars)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
