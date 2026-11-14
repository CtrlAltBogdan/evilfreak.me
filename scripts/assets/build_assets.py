#!/usr/bin/env python3
from pathlib import Path
from PIL import Image

from cutout import luminance_cut, polygon_cut
from grade import duotone, grade, grain, vignette
from optimize import save_variants

ROOT = Path(__file__).resolve().parents[2]
ORIGINALS = ROOT / "public/assets/originals"
OUT = ROOT / "public/assets/processed"


def source(name: str) -> Image.Image:
    return Image.open(ORIGINALS / name).convert("RGBA")


def save(image: Image.Image, relative: str, *, max_width: int = 1800, quality: int = 78) -> None:
    save_variants(image, OUT / relative, max_width=max_width, quality=quality)


def prologue() -> None:
    stage = source("opera-house-day.png")
    left = polygon_cut(stage.crop((45, 85, 650, 1195)), [(75, 70), (390, 70), (600, 230), (600, 1090), (100, 1090)], 9)
    right = polygon_cut(stage.crop((430, 105, 900, 1190)), [(30, 40), (460, 120), (460, 1080), (40, 1080)], 9)
    angel = polygon_cut(stage.crop((55, 125, 380, 520)), [(15, 80), (130, 50), (195, 0), (260, 38), (320, 95), (280, 265), (140, 385), (30, 310)], 6)
    balcony = stage.crop((85, 270, 780, 820))
    mistress = polygon_cut(source("red-cage.png").crop((330, 0, 960, 760)), [(80, 80), (300, 0), (550, 80), (620, 740), (0, 740)], 12)
    save(grain(grade(left, (55, 9, 14), contrast=1.4, saturation=.42, brightness=.35)), "prologue/architecture-left", max_width=900)
    save(grain(grade(right, (48, 8, 12), contrast=1.4, saturation=.4, brightness=.31)), "prologue/architecture-right", max_width=850)
    save(grade(angel, (92, 19, 25), contrast=1.3, saturation=.35, brightness=.5), "prologue/angel", max_width=520)
    save(vignette(duotone(balcony, "#070707", "#5a2b2e", 1.35), .4), "prologue/balcony-back", max_width=1100)
    save(grain(duotone(mistress, "#020202", "#74121e", 1.55), 9), "prologue/mistress-silhouette-mobile", max_width=720)


def act_one() -> None:
    cage = polygon_cut(source("red-cage.png"), [(120, 150), (520, 40), (860, 130), (1080, 320), (1180, 1330), (1050, 1360), (90, 1320), (20, 420)], 9)
    portal = source("red-opera-portal.png").crop((0, 0, 1200, 760))
    curtains = source("red-curtain-stage.png")
    left = polygon_cut(curtains.crop((0, 0, 470, 790)), [(0, 0), (460, 0), (395, 360), (300, 640), (0, 790)], 9)
    right = polygon_cut(curtains.crop((730, 0, 1200, 790)), [(10, 0), (470, 0), (470, 790), (175, 650), (65, 340)], 9)
    save(vignette(grade(portal, (122, 5, 12), contrast=1.35, saturation=.78, brightness=.48), .48), "act-1/opera-portal", max_width=1500)
    save(grade(left, (126, 5, 13), contrast=1.3, saturation=.85, brightness=.58), "act-1/curtain-left", max_width=650)
    save(grade(right, (126, 5, 13), contrast=1.3, saturation=.85, brightness=.58), "act-1/curtain-right", max_width=650)
    save(grain(grade(source("external/act1-scheisse.jpg"), (112, 5, 10), contrast=1.38, saturation=.7, brightness=.58)), "act-1/quills", max_width=700)
    save(grain(grade(cage, (146, 5, 18), contrast=1.38, saturation=.96, brightness=.72)), "act-1/mistress-cage-desktop", max_width=1200)
    save(grain(grade(cage.crop((155, 0, 1080, 1358)), (151, 4, 17), contrast=1.4, saturation=.98, brightness=.75)), "act-1/mistress-cage-mobile", max_width=820)


def act_two() -> None:
    architecture = source("opera-house-day.png").crop((0, 90, 900, 1120))
    arch = luminance_cut(duotone(architecture, "#050607", "#bac3c5", 1.45), 15, 105, 3)
    trace = polygon_cut(source("red-cage.png").crop((340, 0, 940, 660)), [(50, 80), (290, 0), (540, 80), (590, 650), (0, 650)], 10)
    save(grain(duotone(source("external/act2-disease.jpg"), "#07090c", "#d7d8d2", 1.3)), "act-2/grave", max_width=760)
    save(vignette(duotone(source("external/act2-beast.jpg"), "#050506", "#9da5ab", 1.45), .5), "act-2/runway", max_width=1100)
    save(grain(arch), "act-2/cold-architecture", max_width=1100)
    save(grain(duotone(trace, "#050607", "#8f1722", 1.55), 8), "act-2/mistress-trace-mobile", max_width=560)


def act_three() -> None:
    wide = source("green-skull-stage.png")
    skull = polygon_cut(wide.crop((0, 260, 690, 780)), [(20, 190), (70, 95), (220, 45), (425, 40), (570, 105), (680, 280), (655, 505), (115, 515), (35, 430)], 8)
    close = polygon_cut(source("blue-skull.png"), [(0, 100), (120, 20), (740, 10), (1010, 140), (1120, 500), (1010, 850), (90, 850), (0, 690)], 10)
    stairs = polygon_cut(source("red-staircase.png"), [(0, 1120), (95, 1030), (360, 875), (540, 780), (760, 610), (990, 560), (1180, 650), (1180, 1240), (0, 1340)], 10)
    haunt = polygon_cut(source("red-cage.png").crop((350, 15, 930, 650)), [(70, 70), (285, 0), (520, 70), (570, 630), (0, 630)], 9)
    save(grain(grade(skull, (50, 108, 71), contrast=1.3, saturation=.58, brightness=.74)), "act-3/skull-wide", max_width=1100)
    save(grain(grade(close, (55, 29, 125), contrast=1.28, saturation=.7, brightness=.66)), "act-3/skull-close", max_width=1500)
    save(grade(stairs, (75, 31, 129), contrast=1.35, saturation=.55, brightness=.48), "act-3/stairs", max_width=1200)
    save(vignette(grade(source("purple-stage.png"), (82, 33, 148), contrast=1.25, saturation=.72, brightness=.52), .48), "act-3/performance", max_width=1100)
    save(grain(grade(source("external/act3-killah.jpg"), (81, 32, 135), contrast=1.35, saturation=.72, brightness=.58)), "act-3/roses", max_width=780)
    save(grain(duotone(haunt, "#06040b", "#a2243a", 1.7), 7), "act-3/mistress-haunt-mobile", max_width=480)
    save(grade(stairs.crop((160, 570, 1180, 1340)), (72, 34, 132), contrast=1.4, saturation=.52, brightness=.48), "act-3/stairs-mobile", max_width=900)


def act_four() -> None:
    boat = polygon_cut(source("blue-boat-lantern.png"), [(0, 45), (350, 0), (735, 20), (735, 475), (0, 475)], 6)
    chess = source("external/mistress/poker-face-london.jpg").crop((420, 520, 1750, 2820))
    two_gagas = source("external/mistress/million-reasons.jpg").crop((430, 620, 1600, 2500))
    save(grain(duotone(boat, "#070707", "#d8ccb5", 1.25)), "act-4/gondola-close", max_width=1000)
    save(vignette(duotone(source("red-staircase.png"), "#050505", "#8e2a2a", 1.4), .55), "act-4/runway", max_width=1050)
    save(grain(grade(chess, (112, 15, 25), contrast=1.32, saturation=.48, brightness=.68)), "act-4/mistress-chessboard-mobile", max_width=820)
    save(grain(duotone(two_gagas, "#090909", "#e7dfd0", 1.32), 6), "act-4/two-gagas-mobile", max_width=760)
    save(grain(grade(source("external/act4-shallow.jpg").crop((650, 80, 1920, 1400)), (111, 29, 29), contrast=1.35, saturation=.55, brightness=.6)), "act-4/mistress-gondola-desktop", max_width=1100)


def finale() -> None:
    stage = source("opera-house-day.png")
    angel = polygon_cut(stage.crop((55, 125, 380, 520)), [(15, 80), (130, 50), (195, 0), (260, 38), (320, 95), (280, 265), (140, 385), (30, 310)], 6)
    dissolve = polygon_cut(source("red-cage.png").crop((300, 0, 960, 780)), [(70, 80), (330, 0), (590, 90), (650, 770), (0, 770)], 12)
    save(grain(grade(source("external/finale-bad-romance.jpg"), (222, 215, 200), contrast=1.2, saturation=.28, brightness=.9, tint_amount=.08)), "finale/white-ensemble", max_width=1400)
    save(duotone(angel, "#171719", "#f1eadf", 1.28), "finale/angel", max_width=600)
    save(grain(duotone(dissolve, "#110306", "#ad2634", 1.55), 11), "finale/mistress-dissolve-mobile", max_width=640)


def encore() -> None:
    rigging = source("opera-house-day.png").crop((0, 0, 900, 520))
    save(grain(duotone(rigging, "#050505", "#b5b1aa", 1.55), 9), "encore/rigging-mobile", max_width=820)


def main() -> None:
    for build in (prologue, act_one, act_two, act_three, act_four, finale, encore):
        build()


if __name__ == "__main__":
    main()
