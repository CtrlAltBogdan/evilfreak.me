import { useEffect, useRef } from 'react'

export function useParallax(depth = 0, mobileDepth = depth) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if ((!depth && !mobileDepth) || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const node = ref.current
    if (!node) return
    let frame = 0
    const update = () => {
      frame = 0
      const rect = node.parentElement?.getBoundingClientRect()
      if (!rect || rect.bottom < -100 || rect.top > innerHeight + 100) return
      const activeDepth = matchMedia('(max-width: 760px)').matches ? mobileDepth : depth
      const y = (rect.top - innerHeight / 2) * activeDepth
      node.style.setProperty('--parallax-y', `${Math.max(-90, Math.min(90, y))}px`)
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update) }
    update()
    addEventListener('scroll', onScroll, { passive: true })
    return () => { removeEventListener('scroll', onScroll); cancelAnimationFrame(frame) }
  }, [depth, mobileDepth])
  return ref
}
