#!/usr/bin/env python3
"""Sync Change of State bilingual flashcard images into public/ + manifest."""

from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_SRC = Path(
    r"C:\Users\UniplusUser02\Desktop\PHYS\S3\Heat\Flashcards\Change of State"
)
OUT_DIR = ROOT / "public" / "flashcards" / "change-of-state"
OUT_JSON = ROOT / "src" / "data" / "flashcards-change-of-state.json"
REPORT = ROOT / "scripts" / "flashcards-change-of-state-sync-report.md"

MAX_WIDTH = 1400
WEBP_QUALITY = 82

CARD_TITLES = {
    "01": "What is Latent Heat?",
    "02": "Fusion & Freezing",
    "03": "Vaporization & Condensation",
    "04": "Internal Energy",
    "05": "Heating Curve",
    "06": "Cooling Curve",
    "07": "Evaporation vs Boiling",
    "08": "Evaporation Factors",
    "09": "Energy Formula E=ml",
    "10": "Specific Latent Heat Values",
    "11": "Experiment: Latent Heat of Fusion",
    "12": "Experiment: Latent Heat of Vaporization",
}

CARD_ORDER = list(CARD_TITLES.keys())

LANG_DIR_CANDIDATES = {
    "en": ["English"],
    "zh": ["Traditional Chinese", "Traditional chinese"],
}

PATTERN = re.compile(
    r"^(EN|ZH)-COV-(\d{2})-.+-(Front|Back)(?:-v\d+)?(?: \(\d+\))?\.(png|jpe?g)$",
    re.IGNORECASE,
)


def resolve_lang_dir(src: Path, lang_key: str) -> Path | None:
    for name in LANG_DIR_CANDIDATES[lang_key]:
        folder = src / name
        if folder.is_dir():
            return folder
    return None


def file_preference(name: str) -> tuple[int, int]:
    dup = 1 if re.search(r"\(\d+\)", name) else 0
    version = 0
    m = re.search(r"-v(\d+)", name, re.IGNORECASE)
    if m:
        version = int(m.group(1))
    return (dup, -version)


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

        num = m.group(2)
        side = m.group(3).lower()
        groups.setdefault(num, {})
        existing = groups[num].get(side)
        if existing is None or file_preference(f.name) < file_preference(existing.name):
            groups[num][side] = f
        else:
            skipped.append(f.name)

    return groups, skipped


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Sync Change of State bilingual flashcard images"
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

    report: list[str] = ["# Change of State bilingual flashcard image sync\n\n"]
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

    for num in CARD_ORDER:
        title = CARD_TITLES[num]
        entry: dict = {
            "id": int(num),
            "topic": "changeOfState",
            "title": title,
            "alt": f"Flashcard {int(num)} - {title}",
        }

        card_ok = True
        for lang_key, json_key in (("en", "en"), ("zh", "zhHant")):
            g = lang_groups.get(lang_key, {}).get(num)
            if not g or "front" not in g:
                missing.append(f"{json_key}:{num}")
                card_ok = False
                report.append(
                    f"- **Card {num}** ({title}, {json_key}): no front image - skipped lang pack\n"
                )
                continue

            front_src = g["front"]
            back_src = g.get("back")
            front_rel = f"./flashcards/change-of-state/{num}-{lang_key}-front.webp"
            back_rel = f"./flashcards/change-of-state/{num}-{lang_key}-back.webp"
            front_dest = OUT_DIR / f"{num}-{lang_key}-front.webp"

            fw, fh = resize_and_save(front_src, front_dest)
            pack: dict[str, str] = {"front": front_rel}

            if back_src:
                back_dest = OUT_DIR / f"{num}-{lang_key}-back.webp"
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

    OUT_JSON.write_text(json.dumps(cards, indent=2) + "\n", encoding="utf-8")

    report.append(f"\n**Total cards:** {len(cards)}\n")
    REPORT.write_text("".join(report), encoding="utf-8")
    print(f"Wrote {len(cards)} cards -> {OUT_JSON}")
    print(f"Assets -> {OUT_DIR}")
    return 0 if len(cards) == len(CARD_ORDER) else 1


if __name__ == "__main__":
    sys.exit(main())
