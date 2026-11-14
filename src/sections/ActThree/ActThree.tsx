import { ActFrame } from '../../components/layout/ActFrame'
import { ActHeader } from '../../components/ui/ActHeader'
import { productSkills, stackGroups } from '../../config/data'
import { scenes } from '../../config/scenes'

export function ActThree() {
  return <ActFrame scene={scenes.act3} className="act-three"><ActHeader scene={scenes.act3} chapter="03" /><div className="stack-title reveal"><span>Technical inventory</span><h2>Stack / systems</h2></div><div className="stack-board">{stackGroups.map((group, index) => <article className={`skill-group skill-group--${index + 1} reveal`} key={group.title}><header><span>0{index + 1}</span><h3>{group.title}</h3></header><div className="primary-skills">{group.primary.map(item => <strong key={item}>{item}</strong>)}</div>{group.secondary.length > 0 && <div className="secondary-skills">{group.secondary.map(item => <span key={item}>{item}</span>)}</div>}</article>)}</div><aside className="product-strip reveal"><span>Frontend / product</span>{productSkills.map(item => <b key={item}>{item}</b>)}</aside></ActFrame>
}
