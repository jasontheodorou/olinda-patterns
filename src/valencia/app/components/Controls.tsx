import type { DesignerControls, ValenciaPattern } from '../../registry/types'
import type { ValenciaStyle } from '../../styles/motionStyles'
import type { ValenciaEnergy } from '../../styles/energy'
import type { ValenciaSpeed } from '../../styles/speed'
import './Controls.css'

type Props = {
  pattern: ValenciaPattern
  value: DesignerControls
  onChange: (next: DesignerControls) => void
}

const ENERGIES: ValenciaEnergy[] = ['low', 'medium', 'high']
const SPEEDS: ValenciaSpeed[] = ['slow', 'normal', 'fast']

export function Controls({ pattern, value, onChange }: Props) {
  return (
    <div className="v-controls">
      <fieldset className="v-controls__group">
        <legend className="v-controls__legend">Style</legend>
        <div className="v-controls__row">
          {pattern.styles.map(s => (
            <button
              key={s}
              type="button"
              onClick={() => onChange({ ...value, style: s as ValenciaStyle })}
              className={`v-controls__chip ${value.style === s ? 'v-controls__chip--active' : ''}`}
            >
              {s}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="v-controls__group">
        <legend className="v-controls__legend">Energy</legend>
        <div className="v-controls__row">
          {ENERGIES.map(e => (
            <button
              key={e}
              type="button"
              onClick={() => onChange({ ...value, energy: e })}
              className={`v-controls__chip ${value.energy === e ? 'v-controls__chip--active' : ''}`}
            >
              {e}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="v-controls__group">
        <legend className="v-controls__legend">Speed</legend>
        <div className="v-controls__row">
          {SPEEDS.map(s => (
            <button
              key={s}
              type="button"
              onClick={() => onChange({ ...value, speed: s })}
              className={`v-controls__chip ${value.speed === s ? 'v-controls__chip--active' : ''}`}
            >
              {s}
            </button>
          ))}
        </div>
      </fieldset>
    </div>
  )
}
