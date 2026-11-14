import { useEffect, useState } from 'react'

export function useActiveAct(ids: string[]) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(e => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible?.target.id) setActive(visible.target.id)
    }, { rootMargin: '-25% 0px -55%', threshold: [0, .1, .25, .5] })
    ids.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [ids.join('|')])
  return active
}
