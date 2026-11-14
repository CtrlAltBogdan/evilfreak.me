import type { Scene as SceneType } from '../../config/scenes'
import { SceneLayer } from './SceneLayer'

export function Scene({ scene }: { scene: SceneType }) {
  return <div className="scene" aria-hidden="true"><div className={`stage-light stage-light--${scene.light}`} />{scene.assets.map(asset => <SceneLayer key={asset.id} {...asset} />)}<div className="scene-grain" style={{ opacity: scene.grain }} /></div>
}
