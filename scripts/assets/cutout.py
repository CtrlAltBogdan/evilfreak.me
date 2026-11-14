from PIL import Image, ImageChops, ImageDraw, ImageFilter


def polygon_cut(image: Image.Image, points: list[tuple[int, int]], feather: int = 8) -> Image.Image:
    result = image.copy().convert("RGBA")
    mask = Image.new("L", result.size, 0)
    ImageDraw.Draw(mask).polygon(points, fill=255)
    if feather:
        mask = mask.filter(ImageFilter.GaussianBlur(feather))
    result.putalpha(ImageChops.multiply(result.getchannel("A"), mask))
    return result


def luminance_cut(image: Image.Image, low: int = 24, high: int = 110, feather: int = 4) -> Image.Image:
    result = image.copy().convert("RGBA")
    luminance = result.convert("L")
    mask = luminance.point(lambda value: max(0, min(255, round((value - low) * 255 / max(1, high - low)))))
    if feather:
        mask = mask.filter(ImageFilter.GaussianBlur(feather))
    result.putalpha(ImageChops.multiply(result.getchannel("A"), mask))
    return result


def perspective_crop(image: Image.Image, quad: tuple[int, ...], size: tuple[int, int]) -> Image.Image:
    return image.transform(size, Image.Transform.QUAD, quad, Image.Resampling.BICUBIC)
