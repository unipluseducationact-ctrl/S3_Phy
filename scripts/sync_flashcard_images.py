#!/usr/bin/env python3
"""Sync Reflection flashcard images from PHYS folder into public/ + manifest."""

from __future__ import annotations

import argparse
import json
import re
import sys
from collections import defaultdict
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_SRC = Path(r"C:\Users\UniplusUser02\Desktop\PHYS\S3\Flashcards\Reflection")
OUT_DIR = ROOT / "public" / "flashcards" / "reflection"
OUT_JSON = ROOT / "src" / "data" / "flashcards-reflection.json"
REPORT = ROOT / "scripts" / "flashcards-reflection-sync-report.md"

MAX_WIDTH = 1400
WEBP_QUALITY = 82

# Flashcard 3 - Title (1).png  |  Flashcard 3 - Title.jpg (no part)
PATTERN = re.compile(
    r"^Flashcard\s+(\d+)\s*-\s*(.+?)(?:\s*\((\d+)\))?\s*\.(png|jpe?g)$",
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


def scan_sources(src: Path) -> dict[int, dict]:
    groups: dict[int, dict] = defaultdict(lambda: {"title": "", "parts": []})
    skipped: list[str] = []

    for f in sorted(src.iterdir()):
        if not f.is_file():
            continue
        m = PATTERN.match(f.name)
        if not m:
            if f.suffix.lower() in {".png", ".jpg", ".jpeg"}:
                skipped.append(f.name)
            continue
        num = int(m.group(1))
        title = m.group(2).strip()
        part = int(m.group(3)) if m.group(3) else 1
        ext = m.group(4).lower()
        groups[num]["title"] = title
        groups[num]["parts"].append((part, ext, f))

    return groups, skipped


def pick_sides(parts: list[tuple[int, str, Path]]) -> tuple[Path | None, Path | None, list[str]]:
    """Return (front_src, back_src, skipped_names)."""
    skipped: list[str] = []
    by_part: dict[int, list[tuple[str, Path]]] = defaultdict(list)
    for part, ext, path in parts:
        by_part[part].append((ext, path))

    def best_for_part(part: int) -> Path | None:
        items = by_part.get(part)
        if not items:
            return None
        pngs = [p for e, p in items if e == "png"]
        if pngs:
            return pngs[0]
        return items[0][1]

    front = best_for_part(1)
    back = best_for_part(2)

    used = {front, back} - {None}
    for part, items in sorted(by_part.items()):
        for _, path in items:
            if path not in used:
                skipped.append(path.name)

    # If only one unique file, single-sided
    if front and back and front.samefile(back):
        back = None

    return front, back, skipped


def main() -> int:
    parser = argparse.ArgumentParser(description="Sync Reflection flashcard images")
    parser.add_argument("--src", type=Path, default=DEFAULT_SRC, help="Source image folder")
    args = parser.parse_args()
    src: Path = args.src

    if not src.is_dir():
        print(f"Source folder not found: {src}", file=sys.stderr)
        return 1

    groups, unmapped = scan_sources(src)
    report: list[str] = ["# Reflection flashcard image sync\n\n"]
    if unmapped:
        report.append("## Unmapped image files\n\n")
        for n in unmapped:
            report.append(f"- {n}\n")
        report.append("\n")

    if OUT_DIR.exists():
        for old in OUT_DIR.glob("*.webp"):
            old.unlink()

    cards: list[dict] = []
    all_skipped: list[str] = []

    for num in sorted(groups.keys()):
        g = groups[num]
        front_src, back_src, skipped = pick_sides(g["parts"])
        all_skipped.extend(skipped)
        if not front_src:
            report.append(f"- **Card {num}**: no usable front image — skipped\n")
            continue

        prefix = f"{num:02d}"
        front_rel = f"./flashcards/reflection/{prefix}-front.webp"
        back_rel = f"./flashcards/reflection/{prefix}-back.webp"
        front_dest = OUT_DIR / f"{prefix}-front.webp"

        fw, fh = resize_and_save(front_src, front_dest)
        entry: dict = {
            "id": num,
            "topic": "reflection",
            "title": g["title"],
            "front": front_rel,
            "alt": f"Flashcard {num} — {g['title']}",
        }

        if back_src:
            back_dest = OUT_DIR / f"{prefix}-back.webp"
            bw, bh = resize_and_save(back_src, back_dest)
            entry["back"] = back_rel
            report.append(
                f"- **Card {num}** ({g['title']}): front {front_src.name} → {fw}×{fh}, "
                f"back {back_src.name} → {bw}×{bh}\n"
            )
        else:
            entry["back"] = front_rel
            report.append(
                f"- **Card {num}** ({g['title']}): single-sided from {front_src.name} → {fw}×{fh}\n"
            )

        cards.append(entry)

    OUT_JSON.write_text(json.dumps(cards, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    if all_skipped:
        report.append("\n## Duplicates skipped\n\n")
        for n in sorted(set(all_skipped)):
            report.append(f"- {n}\n")

    report.append(f"\n**Total cards:** {len(cards)}\n")
    REPORT.write_text("".join(report), encoding="utf-8")
    print(f"Wrote {len(cards)} cards -> {OUT_JSON}")
    print(f"Assets -> {OUT_DIR}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
