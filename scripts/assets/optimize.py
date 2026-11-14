from pathlib import Path
from PIL import Image

try:
    import pillow_avif  # noqa: F401
    AVIF_AVAILABLE = True
except ImportError:
    AVIF_AVAILABLE = False


def save_variants(image: Image.Image, destination: Path, *, max_width: int = 1800, quality: int = 78) -> None:
    destination.parent.mkdir(parents=True, exist_ok=True)
    output = image.copy()
    if output.width > max_width:
        height = round(output.height * max_width / output.width)
        output = output.resize((max_width, height), Image.Resampling.LANCZOS)
    output.save(destination.with_suffix(".webp"), "WEBP", quality=quality, method=6, exact=True)
    if AVIF_AVAILABLE:
        output.save(destination.with_suffix(".avif"), "AVIF", quality=max(45, quality - 18), speed=6)
    print(f"{destination.parent.name}/{destination.stem}: {output.width}x{output.height}")
