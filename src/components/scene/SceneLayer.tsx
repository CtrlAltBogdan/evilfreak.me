import type { CSSProperties } from 'react'
import type { SceneAsset } from '../../config/scenes'
import { useParallax } from '../../hooks/useParallax'

export function SceneLayer({ id, src, mobileSrc, layer, depth = 0, opacity = 1, blendMode = 'normal', alt, x = '0%', y = '0%', width = '100%', mobileX, mobileY, mobileWidth, mobileScale = 1, mobileOpacity, mobileDepth, mobileCrop = '50% 50%', mobileBlendMode, mobileHidden }: SceneAsset) {
  const ref = useParallax(depth, mobileDepth)
  const style = {
    '--x': x, '--y': y, '--width': width, '--layer-opacity': opacity, '--blend': blendMode,
    '--mobile-x': mobileX ?? x, '--mobile-y': mobileY ?? y, '--mobile-width': mobileWidth ?? width,
    '--mobile-opacity': mobileOpacity ?? opacity, '--mobile-scale': mobileScale,
    '--mobile-crop': mobileCrop,
    '--mobile-blend': mobileBlendMode ?? blendMode,
  } as CSSProperties
  const withBase = (path: string) => path.startsWith('/') ? `${import.meta.env.BASE_URL}${path.slice(1)}` : path
  const desktop = withBase(src)
  const mobile = withBase(mobileSrc ?? src)
  return <div ref={ref} className="scene-layer" data-layer={layer} data-asset={id} data-mobile-hidden={mobileHidden || undefined} style={style}>
    <picture><source media="(max-width: 760px)" srcSet={mobile.replace(/\.webp$/, '.avif')} type="image/avif" /><source media="(max-width: 760px)" srcSet={mobile} type="image/webp" /><source srcSet={desktop.replace(/\.webp$/, '.avif')} type="image/avif" /><img src={desktop} alt={alt ?? ''} aria-hidden={alt ? undefined : true} loading={id.startsWith('architecture') || id === 'angel' || id === 'balcony' ? 'eager' : 'lazy'} decoding="async" /></picture>
  </div>
}
