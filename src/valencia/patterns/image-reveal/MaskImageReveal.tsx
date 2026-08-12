import { MaskReveal } from '../../core/mask/MaskReveal'
import type { ValenciaStyle } from '../../styles/motionStyles'
import type { ValenciaEnergy } from '../../styles/energy'
import type { ValenciaSpeed } from '../../styles/speed'
import './MaskImageReveal.css'

type Props = {
  src: string
  alt: string
  from?: 'vertical' | 'horizontal' | 'zoom'
  style?: ValenciaStyle
  energy?: ValenciaEnergy
  speed?: ValenciaSpeed
  when?: 'load' | 'scroll'
  className?: string
}

export function MaskImageReveal({
  src,
  alt,
  from = 'vertical',
  style = 'editorial',
  energy = 'medium',
  speed = 'normal',
  when = 'scroll',
  className,
}: Props) {
  return (
    <MaskReveal
      from={from}
      style={style}
      energy={energy}
      speed={speed}
      when={when === 'load' ? 'mount' : 'inView'}
      className={`v-mir ${className ?? ''}`}
    >
      <img src={src} alt={alt} className="v-mir__img" />
    </MaskReveal>
  )
}
