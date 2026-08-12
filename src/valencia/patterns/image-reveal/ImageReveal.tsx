import type { ReactNode } from 'react'
import { MaskReveal } from '../../core/mask/MaskReveal'
import type { ValenciaStyle } from '../../styles/motionStyles'
import type { ValenciaEnergy } from '../../styles/energy'
import type { ValenciaSpeed } from '../../styles/speed'

type Props = {
  children: ReactNode
  style?: ValenciaStyle
  energy?: ValenciaEnergy
  speed?: ValenciaSpeed
  from?: 'vertical' | 'horizontal' | 'zoom'
  when?: 'load' | 'scroll'
  className?: string
}

export function ImageReveal({
  children,
  style = 'editorial',
  energy = 'medium',
  speed = 'normal',
  from = 'vertical',
  when = 'scroll',
  className,
}: Props) {
  return (
    <MaskReveal
      style={style}
      energy={energy}
      speed={speed}
      from={from}
      when={when === 'load' ? 'mount' : 'inView'}
      className={className}
    >
      {children}
    </MaskReveal>
  )
}
