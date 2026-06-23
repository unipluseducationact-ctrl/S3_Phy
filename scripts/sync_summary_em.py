#!/usr/bin/env python3
"""Sync EM waves summary poster into public/summary/em.webp."""

from __future__ import annotations

import sys
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = Path(r"C:\Users\UniplusUser02\Desktop\PHYS\S3\Optics\Summary\EM waves") / "EM Waves Summary Poster (Portrait 3_4).png"
OUT = ROOT / "public" / "summary" / "em.webp"
MAX_WIDTH = 1400
WEBP_QUALITY = 82


def main() -> int:
    if not SRC.is_file():
        print(f"Source not found: {SRC}", file=sys.stderr)
        return 1

    with Image.open(SRC) as im:
        im = im.convert("RGB")
        w, h = im.size
        if w > MAX_WIDTH:
            nh = int(h * MAX_WIDTH / w)
            im = im.resize((MAX_WIDTH, nh), Image.Resampling.LANCZOS)
        OUT.parent.mkdir(parents=True, exist_ok=True)
        im.save(OUT, "WEBP", quality=WEBP_QUALITY, method=6)
        print(f"Wrote {OUT} ({im.size[0]}x{im.size[1]})")
    return 0


if __name__ == "__main__":
    sys.exit(main())