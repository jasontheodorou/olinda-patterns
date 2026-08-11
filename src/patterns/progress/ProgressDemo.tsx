import { useState, useEffect } from 'react'
import { ProgressBar, ProgressRing, CardProgress } from './Progress'
import { T } from '../../tokens'

export function ProgressDemo() {
  const [live, setLive] = useState(30)
  useEffect(() => {
    const id = setInterval(() => setLive(v => (v + 7) % 105), 1200)
    return () => clearInterval(id)
  }, [])

  return (
    <div style={{ background: T.surface.offWhite, padding: '80px 40px', minHeight: '100vh' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>

        <div style={{ marginBottom: 32 }}>
          <p style={{ fontFamily: T.font, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.fg.secondary, margin: '0 0 12px' }}>Component family</p>
          <h2 style={{ fontFamily: T.font, fontSize: 32, fontWeight: 700, color: T.fg.primary, lineHeight: 1.25, margin: '0 0 12px' }}>Progress</h2>
          <p style={{ fontFamily: T.font, fontSize: 15, color: T.fg.secondary, lineHeight: 1.6, margin: 0 }}>
            Card-in-module dots · module completion bars · course-level ring. Navy fill, teal on complete.
          </p>
        </div>

        <Section title="Card in module (playbook pattern)">
          <Panel>
            <CardProgress current={3} total={8} />
          </Panel>
        </Section>

        <Section title="Module progress">
          <Panel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <ProgressBar value={100} label="Discovery foundations"        showLabel size="md" />
              <ProgressBar value={62}  label="Interviewing users"           showLabel size="md" />
              <ProgressBar value={30}  label="Synthesis & sensemaking"      showLabel size="md" />
              <ProgressBar value={0}   label="Prototyping in low fidelity"  showLabel size="md" />
            </div>
          </Panel>
        </Section>

        <Section title="Sizes">
          <Panel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <ProgressBar value={50} label="Small"  showLabel size="sm" />
              <ProgressBar value={50} label="Medium" showLabel size="md" />
              <ProgressBar value={50} label="Large"  showLabel size="lg" />
            </div>
          </Panel>
        </Section>

        <Section title="Rings">
          <Panel>
            <div style={{ display: 'flex', gap: 32, alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
              <ProgressRing value={0}   sublabel="Not started" />
              <ProgressRing value={25}  sublabel="Just started" />
              <ProgressRing value={68}  sublabel="Halfway" />
              <ProgressRing value={100} sublabel="Complete" />
            </div>
          </Panel>
        </Section>

        <Section title="Practice dashboard">
          <Panel>
            <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 32, alignItems: 'center' }}>
              <ProgressRing value={live} size={120} strokeWidth={10} sublabel="Practice" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <ProgressBar value={live}                        label="Overall practice"  showLabel size="md" />
                <ProgressBar value={Math.min(live * 1.3, 100)}   label="Current module"    showLabel size="md" />
                <ProgressBar value={Math.min(live * 1.6, 100)}   label="Current card"      showLabel size="md" />
              </div>
            </div>
          </Panel>
        </Section>

      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{ fontFamily: T.font, fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: T.fg.secondary, marginBottom: 12 }}>{title}</div>
      {children}
    </div>
  )
}

function Panel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: T.surface.white, padding: 24, border: `1px solid ${T.border.default}`, borderRadius: T.radius.md }}>
      {children}
    </div>
  )
}
