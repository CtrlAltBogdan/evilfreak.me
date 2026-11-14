import type { CSSProperties, ReactNode } from 'react'
import type { Scene } from '../../config/scenes'
import { Scene as SceneArt } from '../scene/Scene'

export function ActFrame({ scene, children, className = '' }: { scene: Scene; children: ReactNode; className?: string }) {
  const style = { '--accent': scene.accent, '--secondary': scene.secondary, '--stage-background': scene.background } as CSSProperties
  return <section id={scene.id} className={`act ${className}`} data-act={scene.act} style={style}><SceneArt scene={scene} /><div className="act-content">{children}</div></section>
}
