#!/usr/bin/env python3
"""Compatibility entry point. Prefer `npm run assets`."""
import runpy
import sys
from pathlib import Path

assets_dir = Path(__file__).parent / "assets"
sys.path.insert(0, str(assets_dir))
runpy.run_path(assets_dir / "build_assets.py", run_name="__main__")
