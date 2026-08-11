import { useState } from 'react'
import { Checkbox, Radio, Switch } from './FormSelection'
import { T } from '../../tokens'

export function FormSelectionDemo() {
  const [checks, setChecks] = useState({ interviewing: false, prototyping: true, testing: false })
  const [signal, setSignal] = useState('described')
  const [notify, setNotify] = useState({ email: true, streaks: true, digest: false })

  return (
    <div style={{ background: T.surface.offWhite, padding: '80px 40px', minHeight: '100vh' }}>
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        <div style={{ marginBottom: 32 }}>
          <p style={{ fontFamily: T.font, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.fg.secondary, margin: '0 0 12px' }}>Component family</p>
          <h2 style={{ fontFamily: T.font, fontSize: 32, fontWeight: 700, color: T.fg.primary, lineHeight: 1.25, margin: '0 0 12px' }}>Checkbox · Radio · Switch</h2>
          <p style={{ fontFamily: T.font, fontSize: 15, color: T.fg.secondary, lineHeight: 1.6, margin: 0 }}>
            Selection primitives. Checkbox for many, Radio for one, Switch for instant on/off.
          </p>
        </div>

        <Panel title="Checkbox — pick your interests">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Checkbox
              name="interviewing" checked={checks.interviewing}
              onChange={e => setChecks({ ...checks, interviewing: e.target.checked })}
              label="Interviewing users"
              help="Recruitment, question design, moderation."
            />
            <Checkbox
              name="prototyping" checked={checks.prototyping}
              onChange={e => setChecks({ ...checks, prototyping: e.target.checked })}
              label="Prototyping"
              help="Sketch, paper, digital fidelity ladder."
            />
            <Checkbox
              name="testing" checked={checks.testing}
              onChange={e => setChecks({ ...checks, testing: e.target.checked })}
              label="Usability testing"
              help="Formative and summative studies."
            />
            <Checkbox name="advanced" label="Advanced blueprinting" help="Locked until you complete the fundamentals." disabled />
          </div>
        </Panel>

        <Panel title="Radio — reflection">
          <div style={{ fontFamily: T.font, fontSize: 14, color: T.fg.primary, marginBottom: 12, fontWeight: 600 }}>
            What signal tells you discovery is complete?
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Radio name="signal" value="designed"  checked={signal === 'designed'}  onChange={e => setSignal(e.target.value)} label="I have a designed solution" />
            <Radio name="signal" value="described" checked={signal === 'described'} onChange={e => setSignal(e.target.value)} label="I can describe user, context, and shape of solution" />
            <Radio name="signal" value="count"     checked={signal === 'count'}     onChange={e => setSignal(e.target.value)} label="I've done 20+ interviews" />
            <Radio name="signal" value="approval"  checked={signal === 'approval'}  onChange={e => setSignal(e.target.value)} label="The stakeholder is happy" />
          </div>
        </Panel>

        <Panel title="Switch — notification preferences">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Switch
              name="email" checked={notify.email}
              onChange={e => setNotify({ ...notify, email: e.target.checked })}
              label="Email notifications"
              help="Send progress and achievements to your inbox."
            />
            <Switch
              name="streaks" checked={notify.streaks}
              onChange={e => setNotify({ ...notify, streaks: e.target.checked })}
              label="Streak reminders"
              help="Nudge me if my practice streak is about to break."
            />
            <Switch
              name="digest" checked={notify.digest}
              onChange={e => setNotify({ ...notify, digest: e.target.checked })}
              label="Weekly digest"
            />
          </div>
        </Panel>
      </div>
    </div>
  )
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ background: T.surface.white, padding: 24, border: `1px solid ${T.border.default}`, borderRadius: T.radius.md, marginBottom: 20 }}>
      <div style={{ fontFamily: T.font, fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: T.fg.secondary, marginBottom: 16 }}>{title}</div>
      {children}
    </div>
  )
}
