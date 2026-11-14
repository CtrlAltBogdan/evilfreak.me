import { ActFrame } from '../../components/layout/ActFrame'
import { ProjectCard } from '../../components/ui/ProjectCard'
import { ActHeader } from '../../components/ui/ActHeader'
import { scenes } from '../../config/scenes'

export function ActOne() {
  return <ActFrame scene={scenes.act1} className="act-one"><ActHeader scene={scenes.act1} chapter="01" /><div className="act-one__intro reveal"><span>Introduction / current focus</span><h2>Building systems<br />behind the curtain.</h2></div><div className="act-one__project"><ProjectCard /></div><div className="green-infection" aria-hidden="true"><span>Garden of Eden signal</span></div></ActFrame>
}
