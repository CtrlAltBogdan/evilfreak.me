import { GitBranch, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { profile } from '../../config/profile'
import { useActiveAct } from '../../hooks/useActiveAct'

const acts = ['top', 'act-1', 'act-2', 'act-3', 'act-4', 'finale', 'encore']
const links = [['act-1', 'Work'], ['act-3', 'Stack'], ['act-4', 'About'], ['encore', 'Contact']] as const

export function Navigation() {
  const [open, setOpen] = useState(false)
  const active = useActiveAct(acts)
  const number = Math.max(0, acts.indexOf(active))
  const actLabel = number === 0 ? 'Prologue' : number < 5 ? `Act ${['I', 'II', 'III', 'IV'][number - 1]}` : number === 5 ? 'Finale' : 'Encore'
  return <>
    <nav className="site-nav" aria-label="Primary navigation"><a className="nav-mark" href="#top">evilfreak.me</a><span className="nav-act"><i />{actLabel}</span><button className="nav-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="nav-links" aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button><div id="nav-links" className={`nav-links ${open ? 'is-open' : ''}`}>{links.map(([id, label]) => <a key={id} className={active === id ? 'is-active' : ''} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}</div><a className="nav-github" href={profile.github} target="_blank" rel="noreferrer" aria-label="CtrlAltBogdan on GitHub"><GitBranch size={19} /></a></nav>
    <div className="mobile-act-progress" aria-hidden="true">{acts.map((id, index) => <i key={id} className={index === number ? 'is-current' : index < number ? 'is-past' : ''} />)}</div>
  </>
}
