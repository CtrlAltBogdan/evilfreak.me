import type { Scene } from '../../config/scenes'

export function ActHeader({ scene, chapter }: { scene: Scene; chapter: string }) {
  return <header className="act-header reveal"><div className="act-meta"><span>{scene.act} / {chapter}</span><span>{scene.title}</span></div><p>{scene.title}</p></header>
}
