#!/usr/bin/env python3
import argparse
from pathlib import Path
from PIL import Image, ImageStat


def describe(path: Path) -> str:
    image = Image.open(path).convert("RGB")
    sample = image.copy()
    sample.thumbnail((128, 128))
    mean = tuple(round(value) for value in ImageStat.Stat(sample).mean)
    return f"{path.name}\t{image.width}x{image.height}\tmean rgb{mean}"


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("paths", nargs="+", type=Path)
    args = parser.parse_args()
    for source in args.paths:
        print(describe(source))
