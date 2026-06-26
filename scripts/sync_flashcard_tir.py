#!/usr/bin/env python3
"""Sync Total internal reflection set 3 bilingual flashcard images into public/ + manifest."""

from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_SRC = Path(
    r"C:\Users\UniplusUser02\Desktop\PHYS\S3\Optics\Flashcards\Total internal reflection set 3"
)
OUT_DIR = ROOT / "public" / "flashcards" / "tir"
OUT_JSON = ROOT / "src" / "data" / "flashcards-tir.json"
REPORT = ROOT / "scripts" / "flashcards-tir-sync-report.md"

MAX_WIDTH = 1400
WEBP_QUALITY = 82

CARD_ORDER = [
    "WhatIsTIR",
    "TwoConditions",
    "CriticalAngle",
    "ThreeScenarios",
    "FishEyeView",
    "Mirage",
    "ReflectingPrisms",
    "OpticalFibres",
    "KeyAdvantages",
]

CARD_TITLES = {
    "WhatIsTIR": "What is TIR",
    "TwoConditions": "Two Conditions",
    "CriticalAngle": "Critical Angle",
    "ThreeScenarios": "Three Scenarios",
    "FishEyeView": "Fish Eye View",
    "Mirage": "Mirage",
    "ReflectingPrisms": "Reflecting Prisms",
    "OpticalFibres": "Optical Fibres",
    "KeyAdvantages": "Key Advantages",
}

LANG_DIR_CANDIDATES = {
    "en": ["English"],
    "zh": ["Traditional Chinese", "Traditional chinese"],
}

PATTERN = re.compile(
    r"^(EN|ZH)-TIR-\d{2}-(.+?)-(Front|Back)(?:-v\d+)?\.(png|jpe?g)$",
    re.IGNORECASE,
)


def resolve_lang_dir(src: Path, lang_key: str) -> Path | None:
    for name in LANG_DIR_CANDIDATES[lang_key]:
        folder = src / name
        if folder.is_dir():
            return folder
    return None


def resize_and_save(src: Path, dest: Path) -> tuple[int, int]:
    with Image.open(src) as im:
        im = im.convert("RGB")
        w, h = im.size
        if w > MAX_WIDTH:
            nh = int(h * MAX_WIDTH / w)
            im = im.resize((MAX_WIDTH, nh), Image.Resampling.LANCZOS)
        dest.parent.mkdir(parents=True, exist_ok=True)
        im.save(dest, "WEBP", quality=WEBP_QUALITY, method=6)
        return im.size


def scan_lang_folder(folder: Path) -> tuple[dict[str, dict[str, Path]], list[str]]:
    groups: dict[str, dict[str, Path]] = {}
    skipped: list[str] = []

    if not folder.is_dir():
        return groups, skipped

    for f in sorted(folder.iterdir()):
        if not f.is_file():
            continue
        m = PATTERN.match(f.name)
        if not m:
            if f.suffix.lower() in {".png", ".jpg", ".jpeg"}:
                skipped.append(f.name)
            continue

        title = m.group(2).strip()
        side = m.group(3).lower()
        groups.setdefault(title, {})
        if side not in groups[title]:
            groups[title][side] = f
        else:
            skipped.append(f.name)

    return groups, skipped


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Sync TIR set 3 bilingual flashcard images"
    )
    parser.add_argument("--src", type=Path, default=DEFAULT_SRC, help="Source image folder")
    args = parser.parse_args()
    src: Path = args.src

    if not src.is_dir():
        print(f"Source folder not found: {src}", file=sys.stderr)
        return 1

    lang_groups: dict[str, dict[str, dict[str, Path]]] = {}
    all_skipped: list[str] = []

    for lang_key in LANG_DIR_CANDIDATES:
        folder = resolve_lang_dir(src, lang_key)
        if folder is None:
            print(f"Language folder not found for {lang_key} under {src}", file=sys.stderr)
            return 1
        groups, skipped = scan_lang_folder(folder)
        lang_groups[lang_key] = groups
        all_skipped.extend(f"{folder.name}/{n}" for n in skipped)

    report: list[str] = ["# TIR set 3 bilingual flashcard image sync\n\n"]
    if all_skipped:
        report.append("## Skipped / unmapped files\n\n")
        for n in all_skipped:
            report.append(f"- {n}\n")
        report.append("\n")

    if OUT_DIR.exists():
        for old in OUT_DIR.glob("*.webp"):
            old.unlink()

    cards: list[dict] = []
    missing: list[str] = []

    for num, card_key in enumerate(CARD_ORDER, start=1):
        prefix = f"{num:02d}"
        title = CARD_TITLES[card_key]
        entry: dict = {
            "id": num,
            "topic": "tir",
            "title": title,
            "alt": f"Flashcard {num} - {title}",
        }

        card_ok = False
        for lang_key, json_key in (("en", "en"), ("zh", "zhHant")):
            g = lang_groups.get(lang_key, {}).get(card_key)
            if not g:
                missing.append(f"{json_key}:{card_key}")
                report.append(
                    f"- **Card {num}** ({title}, {json_key}): no images - skipped lang pack\n"
                )
                continue

            front_src = g.get("front")
            back_src = g.get("back")
            if not front_src and back_src:
                front_src = back_src
                report.append(
                    f"- **Card {num}** ({title}, {json_key}): no front; using back as front\n"
                )
            if not front_src:
                missing.append(f"{json_key}:{card_key}")
                report.append(
                    f"- **Card {num}** ({title}, {json_key}): no front image - skipped lang pack\n"
                )
                continue

            front_rel = f"./flashcards/tir/{prefix}-{lang_key}-front.webp"
            back_rel = f"./flashcards/tir/{prefix}-{lang_key}-back.webp"
            front_dest = OUT_DIR / f"{prefix}-{lang_key}-front.webp"

            fw, fh = resize_and_save(front_src, front_dest)
            pack: dict[str, str] = {"front": front_rel}
            card_ok = True

            if back_src and back_src != front_src:
                back_dest = OUT_DIR / f"{prefix}-{lang_key}-back.webp"
                bw, bh = resize_and_save(back_src, back_dest)
                pack["back"] = back_rel
                report.append(
                    f"- **Card {num}** ({title}, {json_key}): front {front_src.name} -> {fw}x{fh}, "
                    f"back {back_src.name} -> {bw}x{bh}\n"
                )
            else:
                pack["back"] = front_rel
                report.append(
                    f"- **Card {num}** ({title}, {json_key}): single-sided from "
                    f"{front_src.name} -> {fw}x{fh}\n"
                )

            entry[json_key] = pack

        if card_ok:
            cards.append(entry)

    if missing:
        report.append("\n## Missing cards\n\n")
        for t in missing:
            report.append(f"- {t}\n")

    OUT_JSON.write_text(json.dumps(cards, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    report.append(f"\n**Total cards:** {len(cards)}\n")
    REPORT.write_text("".join(report), encoding="utf-8")
    print(f"Wrote {len(cards)} cards -> {OUT_JSON}")
    print(f"Assets -> {OUT_DIR}")
    return 0 if len(cards) == len(CARD_ORDER) else 1


if __name__ == "__main__":
    sys.exit(main())
