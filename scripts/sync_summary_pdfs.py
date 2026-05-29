#!/usr/bin/env python3
"""Copy Summary PDFs from PHYS S3 folder into public/summary-pdfs/."""

from __future__ import annotations

import shutil
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SUMMARY_SRC = Path(r"C:\Users\UniplusUser02\Desktop\PHYS\S3\Summary")
OUT_DIR = ROOT / "public" / "summary-pdfs"

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


def main() -> int:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    copied = 0
    for folder_name, topic in TOPICS:
        folder = SUMMARY_SRC / folder_name
        en_src = find_pdf(folder, "en")
        zh_src = find_pdf(folder, "zh")
        en_dst = OUT_DIR / f"{topic}-en.pdf"
        zh_dst = OUT_DIR / f"{topic}-zhHant.pdf"
        shutil.copy2(en_src, en_dst)
        shutil.copy2(zh_src, zh_dst)
        print(f"{topic}: {en_src.name} -> {en_dst.name}")
        print(f"{topic}: {zh_src.name} -> {zh_dst.name}")
        copied += 2
    print(f"Copied {copied} PDFs -> {OUT_DIR}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
