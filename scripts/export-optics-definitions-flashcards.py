#!/usr/bin/env python3
"""Export Optics definition flashcards from build_decks.py into S3_Phy JSON + public assets."""

from __future__ import annotations

import argparse
import importlib.util
import json
import shutil
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
DEFAULT_BUILD_DECKS = REPO_ROOT.parent / "Optics" / "Flashcards" / "scripts" / "build_decks.py"
DEFAULT_ASSETS_SRC = REPO_ROOT.parent / "Optics" / "Flashcards" / "optics-definitions-zh" / "assets"
OUT_JSON = REPO_ROOT / "src" / "data" / "flashcards-optics-definitions.json"
OUT_ASSETS = REPO_ROOT / "public" / "flashcards" / "optics-definitions"


def load_cards(build_decks: Path) -> list[dict]:
    spec = importlib.util.spec_from_file_location("build_decks", build_decks)
    if spec is None or spec.loader is None:
        raise RuntimeError(f"Cannot load {build_decks}")
    mod = importlib.util.module_from_spec(spec)
    sys.modules["build_decks"] = mod
    spec.loader.exec_module(mod)
    cards = getattr(mod, "CARDS", None)
    if not cards:
        raise RuntimeError("CARDS not found in build_decks.py")
    return cards


def image_rel(card: dict) -> str | None:
    raw = card.get("image")
    if not raw:
        return None
    name = Path(raw.replace("./assets/", "")).name
    return f"./flashcards/optics-definitions/{name}"


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--build-decks",
        type=Path,
        default=DEFAULT_BUILD_DECKS,
        help="Path to build_decks.py (default: sibling Optics/Flashcards/scripts)",
    )
    parser.add_argument(
        "--assets-src",
        type=Path,
        default=DEFAULT_ASSETS_SRC,
        help="Source assets directory (default: sibling Optics/Flashcards/optics-definitions-zh/assets)",
    )
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    cards = load_cards(args.build_decks)
    out: list[dict] = []
    copied: set[str] = set()

    for card in cards:
        entry: dict = {
            "topic": card["subtopic"],
            "en": {"q": card["en"]["front"], "a": card["en"]["back"]},
            "zhHant": {"q": card["zh"]["front"], "a": card["zh"]["back"]},
        }
        rel = image_rel(card)
        if rel:
            entry["backImage"] = rel
            entry["imageAlt"] = card.get("imageAlt", "diagram")
            name = Path(rel).name
            src = args.assets_src / name
            if not src.is_file():
                raise FileNotFoundError(f"Missing asset: {src}")
            OUT_ASSETS.mkdir(parents=True, exist_ok=True)
            dest = OUT_ASSETS / name
            if name not in copied or not dest.is_file():
                shutil.copy2(src, dest)
                copied.add(name)
        out.append(entry)

    OUT_JSON.parent.mkdir(parents=True, exist_ok=True)
    OUT_JSON.write_text(json.dumps(out, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {len(out)} cards to {OUT_JSON}")
    print(f"Copied {len(copied)} images to {OUT_ASSETS}")


if __name__ == "__main__":
    main()
