import { ActFrame } from '../../components/layout/ActFrame'
import { ActHeader } from '../../components/ui/ActHeader'
import { ProjectCard } from '../../components/ui/ProjectCard'
import { scenes } from '../../config/scenes'

export function Finale() {
  return <ActFrame scene={scenes.finale} className="finale"><ActHeader scene={scenes.finale} chapter="05" /><div className="finale-title reveal"><span>Selected work</span><h2>Built to survive<br />the spotlight.</h2><p>One real project is stronger than a wall of invented case studies.</p></div><div className="finale-project"><ProjectCard compact /></div><div className="credits"><span>Direction / Design / Development</span><b>CtrlAltBogdan</b><span>Berlin, Germany</span></div></ActFrame>
}
