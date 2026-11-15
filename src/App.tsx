import { useEffect } from 'react'
import { Navigation } from './components/layout/Navigation'
import { Hero } from './sections/Hero/Hero'
import { ActOne } from './sections/ActOne/ActOne'
import { ActTwo } from './sections/ActTwo/ActTwo'
import { ActThree } from './sections/ActThree/ActThree'
import { ActFour } from './sections/ActFour/ActFour'
import { Finale } from './sections/Finale/Finale'
import { Encore } from './sections/Encore/Encore'
import { AnonixCaseStudy } from './pages/AnonixCaseStudy'
import { appRoute } from './config/paths'
import { Analytics } from './components/community/Analytics'

export function App() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal')
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { nodes.forEach(node => node.classList.add('is-visible')); return }
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) } }), { threshold: .1 })
    nodes.forEach(node => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  if (appRoute() === '/projects/anonix') return <><Analytics /><AnonixCaseStudy /></>
  return <><Analytics /><Navigation /><main id="main"><Hero /><ActOne /><ActTwo /><ActThree /><ActFour /><Finale /><Encore /></main></>
}
