#!/usr/bin/env python3
"""Sync Concave lens bilingual summary posters into public/summary/."""

from __future__ import annotations

import sys
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC_DIR = Path(r"C:\Users\UniplusUser02\Desktop\PHYS\S3\Optics\Summary\Concave lens")
POSTERS = {
    "concave-en.webp": SRC_DIR / "EN-Concave-Lens-Summary-Poster.png",
    "concave-zhHant.webp": SRC_DIR / "ZH-Concave-Lens-Summary-Poster.png",
}
OUT_DIR = ROOT / "public" / "summary"
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


def main() -> int:
    missing = [name for name, src in POSTERS.items() if not src.is_file()]
    if missing:
        for name in missing:
            print(f"Source not found for {name}: {POSTERS[name]}", file=sys.stderr)
        return 1

    legacy = OUT_DIR / "concave.webp"
    if legacy.is_file():
        legacy.unlink()

    for out_name, src in POSTERS.items():
        out = OUT_DIR / out_name
        w, h = resize_and_save(src, out)
        print(f"Wrote {out} ({w}x{h}) from {src.name}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
