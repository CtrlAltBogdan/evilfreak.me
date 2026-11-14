import { ActFrame } from '../../components/layout/ActFrame'
import { ActHeader } from '../../components/ui/ActHeader'
import { creativeSkills } from '../../config/data'
import { scenes } from '../../config/scenes'

const codeSide = ['Backend systems', 'Infrastructure', 'Frontend', 'Automation']
export function ActFour() {
  return <ActFrame scene={scenes.act4} className="act-four"><ActHeader scene={scenes.act4} chapter="04" /><div className="duality-title reveal"><span>Code / visual</span><h2>Two practices.<br />One workflow.</h2></div><div className="duality-grid"><section className="duality-side duality-side--code reveal"><header><span>01</span><h3>Code</h3></header>{codeSide.map(item => <p key={item}>{item}</p>)}</section><section className="duality-side duality-side--visual reveal"><header><span>02</span><h3>Visual</h3></header>{creativeSkills.map(item => <article key={item.title}><h4>{item.title}</h4><p>{item.text}</p></article>)}</section></div><div className="chess-grid" aria-hidden="true" /></ActFrame>
}
