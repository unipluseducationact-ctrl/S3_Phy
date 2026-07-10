#!/usr/bin/env python3
"""Sync Refraction bilingual summary posters into public/summary/."""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

from PIL import Image

REPO_ROOT = Path(__file__).resolve().parent.parent
DEFAULT_SRC_DIR = REPO_ROOT.parent / "Optics" / "Summary" / "Refraction and snells law"
POSTER_FILES = {
    "refraction-en.webp": "EN-Refraction-Summary-Poster.png",
    "refraction-zhHant.webp": "ZH-Refraction-Summary-Poster.png",
}
OUT_DIR = REPO_ROOT / "public" / "summary"
MAX_WIDTH = 1400
WEBP_QUALITY = 82


def resize_and_save(src: Path, dest: Path) -> tuple[int, int]:
    with Image.open(src) as im:
        im = im.convert("RGB")
        w, h = im.size
        if w > MAX_WIDTH:
            nh = int(h * MAX_WIDTH / w)
            im = im.resize((MAX_WIDTH, nh), Image.Resampling.LANCZOS)
        OUT_DIR.mkdir(parents=True, exist_ok=True)
        im.save(dest, "WEBP", quality=WEBP_QUALITY, method=6)
        return im.size


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--src",
        type=Path,
        default=DEFAULT_SRC_DIR,
        help="Source directory with poster PNGs (default: sibling Optics/Summary folder)",
    )
    return parser.parse_args()


def main() -> int:
    src_dir = parse_args().src
    posters = {name: src_dir / fname for name, fname in POSTER_FILES.items()}

    missing = [name for name, src in posters.items() if not src.is_file()]
    if missing:
        for name in missing:
            print(f"Source not found for {name}: {posters[name]}", file=sys.stderr)
        return 1

    legacy = OUT_DIR / "refraction.webp"
    if legacy.is_file():
        legacy.unlink()

    for out_name, src in posters.items():
        out = OUT_DIR / out_name
        w, h = resize_and_save(src, out)
        print(f"Wrote {out} ({w}x{h}) from {src.name}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
