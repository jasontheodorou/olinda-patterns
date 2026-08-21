import type { DesignerControls, TaroccoPattern } from '../../registry/types'
import type { TaroccoStyle } from '../../styles/motionStyles'
import type { TaroccoEnergy } from '../../styles/energy'
import type { TaroccoSpeed } from '../../styles/speed'
import './Controls.css'

type Props = {
  pattern: TaroccoPattern
  value: DesignerControls
  onChange: (next: DesignerControls) => void
}

const ENERGIES: TaroccoEnergy[] = ['low', 'medium', 'high']
const SPEEDS: TaroccoSpeed[] = ['slow', 'normal', 'fast']

export function Controls({ pattern, value, onChange }: Props) {
  return (
    <div className="t-controls">
      <fieldset className="t-controls__group">
        <legend className="t-controls__legend">Style</legend>
        <div className="t-controls__row">
          {pattern.styles.map(s => (
            <button
              key={s}
              type="button"
              onClick={() => onChange({ ...value, style: s as TaroccoStyle })}
              className={`t-controls__chip ${value.style === s ? 'v-controls__chip--active' : ''}`}
            >
              {s}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="t-controls__group">
        <legend className="t-controls__legend">Energy</legend>
        <div className="t-controls__row">
          {ENERGIES.map(e => (
            <button
              key={e}
              type="button"
              onClick={() => onChange({ ...value, energy: e })}
              className={`t-controls__chip ${value.energy === e ? 'v-controls__chip--active' : ''}`}
            >
              {e}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="t-controls__group">
        <legend className="t-controls__legend">Speed</legend>
        <div className="t-controls__row">
          {SPEEDS.map(s => (
            <button
              key={s}
              type="button"
              onClick={() => onChange({ ...value, speed: s })}
              className={`t-controls__chip ${value.speed === s ? 'v-controls__chip--active' : ''}`}
            >
              {s}
            </button>
          ))}
        </div>
      </fieldset>
    </div>
  )
}
