#!/usr/bin/env python3
"""Import Heat LQ PDF pairs (wrapper for import_worksheet_pdfs.py --lq-only)."""
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
raise SystemExit(
    subprocess.call([sys.executable, str(ROOT / "scripts" / "import_worksheet_pdfs.py"), "--lq-only", *sys.argv[1:]])
)
