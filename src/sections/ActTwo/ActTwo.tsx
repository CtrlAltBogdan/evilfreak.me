import { ActFrame } from '../../components/layout/ActFrame'
import { ActHeader } from '../../components/ui/ActHeader'
import { development } from '../../config/data'
import { scenes } from '../../config/scenes'

export function ActTwo() {
  return <ActFrame scene={scenes.act2} className="act-two"><ActHeader scene={scenes.act2} chapter="02" /><div className="act-two__title reveal"><span>Development disciplines</span><h2>What I do</h2></div><div className="discipline-layout">{development.map(item => <article key={item.id} className={`discipline-card discipline-card--${item.id} reveal`}><span>{item.index}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div><div className="train-line" aria-hidden="true" /></ActFrame>
}
