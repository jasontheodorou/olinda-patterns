import { useState } from 'react'
import { Stepper, type Step } from './Stepper'
import { Button } from '../button/Button'
import { T } from '../../tokens'

const STEPS: Step[] = [
  { label: 'Frame',     detail: 'Problem statement & scope' },
  { label: 'Research',  detail: 'Field interviews & synthesis' },
  { label: 'Prototype', detail: 'Low-fidelity concepts' },
  { label: 'Test',      detail: 'Usability & validation' },
]

type Orientation = 'horizontal' | 'vertical'

export function StepperDemo() {
  const [active, setActive] = useState(1)
  const [orientation, setOrientation] = useState<Orientation>('horizontal')
  const [linear, setLinear] = useState(true)

  const next = () => setActive(a => Math.min(a + 1, STEPS.length - 1))
  const prev = () => setActive(a => Math.max(a - 1, 0))
  const reset = () => setActive(0)

  return (
    <div style={{ background: T.surface.offWhite, padding: '80px 40px', minHeight: '100vh' }}>
      <div style={{ maxWidth: 780, margin: '0 auto' }}>

        <div style={{ marginBottom: 32 }}>
          <p style={{ fontFamily: T.font, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.fg.secondary, margin: '0 0 12px' }}>Component</p>
          <h2 style={{ fontFamily: T.font, fontSize: 32, fontWeight: 700, color: T.fg.primary, lineHeight: 1.25, margin: '0 0 12px' }}>Stepper</h2>
          <p style={{ fontFamily: T.font, fontSize: 15, color: T.fg.secondary, lineHeight: 1.6, margin: 0 }}>
            Wayfinding for the design process — Frame → Research → Prototype → Test — or any multi-step form.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 32, marginBottom: 32, padding: '14px 18px', border: `1px solid ${T.border.default}`, background: T.surface.white, borderRadius: T.radius.sm, flexWrap: 'wrap' }}>
          <ControlGroup label="Orientation">
            {(['horizontal', 'vertical'] as Orientation[]).map(o => <Chip key={o} active={orientation === o} onClick={() => setOrientation(o)}>{o}</Chip>)}
          </ControlGroup>
          <ControlGroup label="Navigation">
            <Chip active={linear}  onClick={() => setLinear(true)}>Linear</Chip>
            <Chip active={!linear} onClick={() => setLinear(false)}>Free</Chip>
          </ControlGroup>
        </div>

        <div style={{ padding: orientation === 'horizontal' ? '32px 24px' : '32px', background: T.surface.white, border: `1px solid ${T.border.default}`, borderRadius: T.radius.md, marginBottom: 24 }}>
          <Stepper steps={STEPS} activeStep={active} orientation={orientation} onStepClick={setActive} linear={linear} />
        </div>

        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
          <Button variant="subtle" onClick={reset}>Reset</Button>
          <Button variant="outline" onClick={prev} disabled={active === 0}>Back</Button>
          <Button onClick={next} disabled={active === STEPS.length - 1}>{active === STEPS.length - 1 ? 'Complete' : 'Next'}</Button>
        </div>
      </div>
    </div>
  )
}

function ControlGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span style={{ fontFamily: T.font, fontSize: 10, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: T.fg.secondary }}>{label}</span>
      <div style={{ display: 'flex', gap: 4 }}>{children}</div>
    </div>
  )
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '4px 10px', border: `1px solid ${active ? T.navy : T.border.default}`,
        background: active ? T.navy : 'transparent', color: active ? '#fff' : T.fg.primary,
        fontFamily: T.font, fontSize: 12, fontWeight: 600, cursor: 'pointer',
        borderRadius: T.radius.pill, textTransform: 'capitalize',
        transition: `all ${T.motion.fast} ${T.motion.ease}`,
      }}
    >
      {children}
    </button>
  )
}
