#!/usr/bin/env python3
"""Sync Reflection set 2 flashcard images into public/ + manifest."""

from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_SRC = Path(
    r"C:\Users\UniplusUser02\Desktop\PHYS\S3\Optics\Flashcards\Reflection set 2"
)
OUT_DIR = ROOT / "public" / "flashcards" / "reflection"
OUT_JSON = ROOT / "src" / "data" / "flashcards-reflection.json"
REPORT = ROOT / "scripts" / "flashcards-reflection-sync-report.md"

MAX_WIDTH = 1400
WEBP_QUALITY = 82

CARD_ORDER = [
    "Law of Reflection",
    "Angle Definitions",
    "Ray Diagram Construction",
    "Image Properties",
    "Object-Image Distance",
    "Visibility Condition",
    "Reversibility of Light",
    "Lateral Inversion",
    "Applications",
]

PATTERN = re.compile(
    r"^Reflection\s*-\s*(.+?)\s+(Front|Back)(?:\s*\((.+?)\))?\s*\.(png|jpe?g)$",
    re.IGNORECASE,
)


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


def scan_sources(src: Path) -> tuple[dict[str, dict], list[str]]:
    groups: dict[str, dict] = {}
    skipped: list[str] = []

    for f in sorted(src.iterdir()):
        if not f.is_file():
            continue
        m = PATTERN.match(f.name)
        if not m:
            if f.suffix.lower() in {".png", ".jpg", ".jpeg"}:
                skipped.append(f.name)
            continue

        title = m.group(1).strip()
        side = m.group(2).lower()
        variant = (m.group(3) or "").strip().lower()

        groups.setdefault(title, {"front": None, "backs": {}})
        g = groups[title]

        if side == "front":
            if variant:
                skipped.append(f.name)
                continue
            if g["front"] is None:
                g["front"] = f
            else:
                skipped.append(f.name)
            continue

        if side == "back":
            key = variant or "plain"
            if key not in g["backs"]:
                g["backs"][key] = f
            else:
                skipped.append(f.name)

    return groups, skipped


def pick_back(g: dict) -> Path | None:
    backs = g.get("backs") or {}
    if not backs:
        return None
    for key in sorted(backs.keys()):
        if key != "plain":
            return backs[key]
    return backs.get("plain")


def main() -> int:
    parser = argparse.ArgumentParser(description="Sync Reflection set 2 flashcard images")
    parser.add_argument("--src", type=Path, default=DEFAULT_SRC, help="Source image folder")
    args = parser.parse_args()
    src: Path = args.src

    if not src.is_dir():
        print(f"Source folder not found: {src}", file=sys.stderr)
        return 1

    groups, unmapped = scan_sources(src)
    report: list[str] = ["# Reflection set 2 flashcard image sync\n\n"]
    if unmapped:
        report.append("## Skipped / unmapped files\n\n")
        for n in unmapped:
            report.append(f"- {n}\n")
        report.append("\n")

    if OUT_DIR.exists():
        for old in OUT_DIR.glob("*.webp"):
            old.unlink()

    cards: list[dict] = []
    missing: list[str] = []

    for num, title in enumerate(CARD_ORDER, start=1):
        g = groups.get(title)
        if not g or not g.get("front"):
            missing.append(title)
            report.append(f"- **Card {num}** ({title}): no front image - skipped\n")
            continue

        front_src = g["front"]
        back_src = pick_back(g)
        prefix = f"{num:02d}"
        front_rel = f"./flashcards/reflection/{prefix}-front.webp"
        back_rel = f"./flashcards/reflection/{prefix}-back.webp"
        front_dest = OUT_DIR / f"{prefix}-front.webp"

        fw, fh = resize_and_save(front_src, front_dest)
        entry: dict = {
            "id": num,
            "topic": "reflection",
            "title": title,
            "front": front_rel,
            "alt": f"Flashcard {num} - {title}",
        }

        if back_src:
            back_dest = OUT_DIR / f"{prefix}-back.webp"
            bw, bh = resize_and_save(back_src, back_dest)
            entry["back"] = back_rel
            report.append(
                f"- **Card {num}** ({title}): front {front_src.name} -> {fw}x{fh}, "
                f"back {back_src.name} -> {bw}x{bh}\n"
            )
        else:
            entry["back"] = front_rel
            report.append(
                f"- **Card {num}** ({title}): single-sided from {front_src.name} -> {fw}x{fh}\n"
            )

        cards.append(entry)

    if missing:
        report.append("\n## Missing cards\n\n")
        for t in missing:
            report.append(f"- {t}\n")

    extra_titles = sorted(set(groups.keys()) - set(CARD_ORDER))
    if extra_titles:
        report.append("\n## Source titles not in CARD_ORDER\n\n")
        for t in extra_titles:
            report.append(f"- {t}\n")

    OUT_JSON.write_text(json.dumps(cards, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    report.append(f"\n**Total cards:** {len(cards)}\n")
    REPORT.write_text("".join(report), encoding="utf-8")
    print(f"Wrote {len(cards)} cards -> {OUT_JSON}")
    print(f"Assets -> {OUT_DIR}")
    return 0 if len(cards) == len(CARD_ORDER) else 1


if __name__ == "__main__":
    sys.exit(main())
