# evilfreak.me

Personal portfolio.

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

The asset command uses the Python environment described in `requirements-assets.txt`:

```bash
python3 -m venv .venv
.venv/bin/pip install -r requirements-assets.txt
```

## Assets

```bash
npm run assets
```

Original photographs live in `public/assets/originals/` and are never overwritten. `scripts/assets/build_assets.py` rebuilds the scene-specific WebP and AVIF files in `public/assets/processed/` using ordinary crop, masks, grading, grain and compression.

`ASSET_INVENTORY.md`, `ASSET_SOURCES.md` and `MAYHEM_RESEARCH.md` document the source material and scene decisions. External photographs are replaceable layers rather than baked-in backgrounds.

## Deployment

GitHub Pages deploys `dist/` from `main` through `.github/workflows/deploy.yml`.
