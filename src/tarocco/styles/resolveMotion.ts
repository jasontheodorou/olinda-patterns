import { motionStyles, type TaroccoStyle, type MotionStyleTokens } from './motionStyles'
import { energy, type TaroccoEnergy } from './energy'
import { speed, type TaroccoSpeed } from './speed'

export type ResolvedMotion = {
  duration: number
  distance: number
  stagger: number
  scale: number
  ease: MotionStyleTokens['ease']
  spring: MotionStyleTokens['spring']
}

export function resolveMotion(
  style: TaroccoStyle = 'quiet',
  e: TaroccoEnergy = 'medium',
  s: TaroccoSpeed = 'normal',
): ResolvedMotion {
  const base = motionStyles[style]
  const em = energy[e]
  const sm = speed[s]
  return {
    duration: base.duration * sm,
    distance: base.distance * em.distance,
    stagger:  base.stagger  * em.stagger,
    scale:    em.scale,
    ease:     base.ease,
    spring:   base.spring,
  }
}
