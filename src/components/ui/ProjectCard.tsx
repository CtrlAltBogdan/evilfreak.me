import { ArrowUpRight } from 'lucide-react'
import { appPath } from '../../config/paths'
import { Button } from './Button'

const stack = ['PHP', 'JavaScript', 'MySQL', 'Redis', 'Docker', 'Linux']

export function ProjectCard({ compact = false }: { compact?: boolean }) {
  return <article className={`project-card ${compact ? 'project-card--compact' : ''} reveal`}>
    <div className="project-card__index">CURRENTLY BUILDING / 001</div>
    <div className="anonix-name"><span>ANONIX</span></div>
    <p className="project-card__type">Cloud hosting platform</p>
    {!compact && <p className="project-card__description">Hosting, billing, game servers, VPS management, support and infrastructure automation.</p>}
    <div className="tech-row">{stack.map(item => <span key={item}>{item}</span>)}</div>
    <div className="project-card__actions"><Button href="https://anonix.cloud/en" target="_blank" rel="noreferrer" variant="accent">Open project <ArrowUpRight /></Button><Button href={appPath('projects/anonix/')} variant="dark">Case study</Button></div>
  </article>
}
