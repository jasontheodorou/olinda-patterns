import type { DesignerControls, OlindaPattern } from '../../registry/types'
import type { OlindaStyle } from '../../styles/motionStyles'
import type { OlindaEnergy } from '../../styles/energy'
import type { OlindaSpeed } from '../../styles/speed'
import './Controls.css'

type Props = {
  pattern: OlindaPattern
  value: DesignerControls
  onChange: (next: DesignerControls) => void
}

const ENERGIES: OlindaEnergy[] = ['low', 'medium', 'high']
const SPEEDS: OlindaSpeed[] = ['slow', 'normal', 'fast']

export function Controls({ pattern, value, onChange }: Props) {
  return (
    <div className="o-controls">
      <fieldset className="o-controls__group">
        <legend className="o-controls__legend">Style</legend>
        <div className="o-controls__row">
          {pattern.styles.map(s => (
            <button
              key={s}
              type="button"
              onClick={() => onChange({ ...value, style: s as OlindaStyle })}
              className={`o-controls__chip ${value.style === s ? 'v-controls__chip--active' : ''}`}
            >
              {s}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="o-controls__group">
        <legend className="o-controls__legend">Energy</legend>
        <div className="o-controls__row">
          {ENERGIES.map(e => (
            <button
              key={e}
              type="button"
              onClick={() => onChange({ ...value, energy: e })}
              className={`o-controls__chip ${value.energy === e ? 'v-controls__chip--active' : ''}`}
            >
              {e}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="o-controls__group">
        <legend className="o-controls__legend">Speed</legend>
        <div className="o-controls__row">
          {SPEEDS.map(s => (
            <button
              key={s}
              type="button"
              onClick={() => onChange({ ...value, speed: s })}
              className={`o-controls__chip ${value.speed === s ? 'v-controls__chip--active' : ''}`}
            >
              {s}
            </button>
          ))}
        </div>
      </fieldset>
    </div>
  )
}
