import { ArrowDownRight, GitBranch } from 'lucide-react'
import { Scene } from '../../components/scene/Scene'
import { Button } from '../../components/ui/Button'
import { profile } from '../../config/profile'
import { scenes } from '../../config/scenes'

export function Hero() {
  return <section id="top" className="hero" style={{ '--accent': scenes.prologue.accent } as React.CSSProperties}>
    <Scene scene={scenes.prologue} />
    <div className="hero-house-label"><span>Prologue</span><span>Opera House / Berlin</span></div>
    <div className="hero-copy"><p className="hero-kicker">Developer portfolio / staged as a show</p><h1><span>EVIL</span><span>FREAK</span></h1><div className="hero-identity"><p>Bohdan / <strong>{profile.handle}</strong></p><span>Full-stack developer<br />Infrastructure · Web</span></div><div className="hero-actions"><Button href="#act-1" variant="accent">View work <ArrowDownRight /></Button><Button href={profile.github} target="_blank" rel="noreferrer"><GitBranch /> GitHub</Button><Button href="#encore" variant="dark">Contact</Button></div></div>
    <aside className="hero-status"><span>LIVE / PORTFOLIO</span><dl><div><dt>Based</dt><dd>{profile.location}</dd></div><div><dt>Current</dt><dd>{profile.currentProject}</dd></div><div><dt>Focus</dt><dd>Web / Infrastructure</dd></div></dl></aside>
    <a className="scroll-cue" href="#act-1">The show begins <ArrowDownRight /></a>
  </section>
}
