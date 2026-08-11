import { useState } from 'react'
import { Alert, type AlertVariant } from './Alert'
import { Callout } from '../card/Card'
import { T } from '../../tokens'

const VARIANTS: AlertVariant[] = ['info', 'success', 'warning', 'danger', 'neutral']

const COPY: Record<AlertVariant, { title: string; body: string }> = {
  info:    { title: 'New module released',    body: '"Component architecture" is now available in your practice library.' },
  success: { title: 'Progress saved',         body: 'Your card completion has been synced to your profile.' },
  warning: { title: 'Session about to expire', body: 'You\'ll be signed out in 5 minutes. Save your notes.' },
  danger:  { title: 'Sync failed',            body: 'We couldn\'t save your progress. Check your connection and try again.' },
  neutral: { title: 'Heads up',               body: 'This module was last updated 3 days ago. New examples added.' },
}

export function AlertDemo() {
  const [outlined, setOutlined] = useState(true)
  const [dismissible, setDismissible] = useState(true)

  return (
    <div style={{ background: T.surface.offWhite, padding: '80px 40px', minHeight: '100vh' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>

        <div style={{ marginBottom: 32 }}>
          <p style={{ fontFamily: T.font, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.fg.secondary, margin: '0 0 12px' }}>Component</p>
          <h2 style={{ fontFamily: T.font, fontSize: 32, fontWeight: 700, color: T.fg.primary, lineHeight: 1.25, margin: '0 0 12px' }}>Alerts &amp; callouts</h2>
          <p style={{ fontFamily: T.font, fontSize: 15, color: T.fg.secondary, lineHeight: 1.6, margin: 0 }}>
            Two flavours. In-lesson <em>callouts</em> (tool / involve / best-practice) share the playbook's soft-tint pattern. Semantic <em>alerts</em> handle system feedback outside content.
          </p>
        </div>

        {/* Callouts — from playbook */}
        <Section title="In-lesson callouts">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Callout variant="tool"    body="Use the User Needs Canvas to structure discovery interviews. Focus on jobs-to-be-done rather than feature requests." ctaLabel="Open the canvas" ctaHref="#" />
            <Callout variant="involve" body="Bring your research lead in early. They'll help you spot gaps in your recruitment plan and prevent bias in your interview guide." />
            <Callout variant="best-practice" body="Write a single-page problem statement before starting fieldwork. If you can't explain the problem in a paragraph, discovery isn't ready to start." />
          </div>
        </Section>

        {/* Controls */}
        <div style={{ display: 'flex', gap: 24, marginBottom: 20, padding: '14px 18px', border: `1px solid ${T.border.default}`, background: T.surface.white, borderRadius: T.radius.sm }}>
          <Toggle label="Outlined"    value={outlined}    onChange={setOutlined} />
          <Toggle label="Dismissible" value={dismissible} onChange={setDismissible} />
        </div>

        <Section title="System alerts">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {VARIANTS.map(v => (
              <Alert key={`${v}-${outlined}-${dismissible}`} variant={v} outlined={outlined} dismissible={dismissible} title={COPY[v].title}>
                {COPY[v].body}
              </Alert>
            ))}
          </div>
        </Section>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <div style={{ fontFamily: T.font, fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: T.fg.secondary, marginBottom: 12 }}>{title}</div>
      {children}
    </div>
  )
}

function Toggle({ label, value, onChange }: { label: string; value: boolean; onChange: (v: boolean) => void }) {
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontFamily: T.font, fontSize: 13, color: T.fg.primary }}>
      <input type="checkbox" checked={value} onChange={e => onChange(e.target.checked)} style={{ margin: 0, cursor: 'pointer', accentColor: T.navy }} />
      {label}
    </label>
  )
}
