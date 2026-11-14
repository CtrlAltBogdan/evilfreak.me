import random
from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageOps


def grade(image: Image.Image, tint: tuple[int, int, int], *, contrast: float = 1.15, saturation: float = .9, brightness: float = .78, tint_amount: float = .12) -> Image.Image:
    source = image.convert("RGBA")
    rgb = ImageEnhance.Contrast(source.convert("RGB")).enhance(contrast)
    rgb = ImageEnhance.Color(rgb).enhance(saturation)
    rgb = ImageEnhance.Brightness(rgb).enhance(brightness)
    rgb = Image.blend(rgb, Image.new("RGB", rgb.size, tint), tint_amount)
    return Image.merge("RGBA", (*rgb.split(), source.getchannel("A")))


def duotone(image: Image.Image, shadow: str, highlight: str, contrast: float = 1.2) -> Image.Image:
    source = image.convert("RGBA")
    mono = ImageEnhance.Contrast(source.convert("L")).enhance(contrast)
    rgb = ImageOps.colorize(mono, black=shadow, white=highlight)
    return Image.merge("RGBA", (*rgb.split(), source.getchannel("A")))


def grain(image: Image.Image, amount: int = 7, opacity: int = 24, seed: int = 1701) -> Image.Image:
    source = image.convert("RGBA")
    random.seed(seed)
    noise = Image.new("L", source.size)
    noise.putdata([max(0, min(255, 128 + random.randint(-amount, amount))) for _ in range(source.width * source.height)])
    overlay = Image.merge("RGBA", (noise, noise, noise, Image.new("L", source.size, opacity)))
    return Image.alpha_composite(source, overlay)


def vignette(image: Image.Image, strength: float = .45) -> Image.Image:
    source = image.convert("RGBA")
    w, h = source.size
    mask = Image.new("L", (w, h), 0)
    ImageDraw.Draw(mask).ellipse((-w * .2, -h * .15, w * 1.2, h * 1.15), fill=255)
    mask = mask.filter(ImageFilter.GaussianBlur(max(w, h) // 6))
    dark = Image.new("RGBA", source.size, (0, 0, 0, 0))
    dark.putalpha(ImageOps.invert(mask).point(lambda value: round(value * strength)))
    return Image.alpha_composite(source, dark)
