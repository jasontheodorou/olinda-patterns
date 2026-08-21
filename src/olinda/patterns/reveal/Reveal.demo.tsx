import type { OlindaStyle } from '../../styles/motionStyles'
import type { OlindaEnergy } from '../../styles/energy'
import type { OlindaSpeed } from '../../styles/speed'
import { Reveal } from './Reveal'
import './Reveal.css'

type Props = {
  playKey?: number
  style?: OlindaStyle
  energy?: OlindaEnergy
  speed?: OlindaSpeed
}

export function RevealDemo({
  playKey = 0,
  style = 'clear',
  energy = 'medium',
  speed = 'normal',
}: Props) {
  return (
    <div className="o-reveal-demo">
      <Reveal style={style} energy={energy} speed={speed} playKey={playKey}>
        <div className="o-reveal-demo__block">
          <p className="o-reveal-demo__kicker">Apply for support</p>
          <h2 className="o-reveal-demo__title">Better public services, made together.</h2>
        </div>
      </Reveal>
    </div>
  )
}
