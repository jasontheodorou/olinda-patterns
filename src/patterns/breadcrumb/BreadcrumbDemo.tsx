import { Breadcrumb } from './Breadcrumb'
import { T } from '../../tokens'

export function BreadcrumbDemo() {
  return (
    <div style={{ background: T.surface.offWhite, padding: '80px 40px', minHeight: '100vh' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>

        <div style={{ marginBottom: 32 }}>
          <p style={{ fontFamily: T.font, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.fg.secondary, margin: '0 0 12px' }}>Component</p>
          <h2 style={{ fontFamily: T.font, fontSize: 32, fontWeight: 700, color: T.fg.primary, lineHeight: 1.25, margin: '0 0 12px' }}>Breadcrumb</h2>
          <p style={{ fontFamily: T.font, fontSize: 15, color: T.fg.secondary, lineHeight: 1.6, margin: 0 }}>
            Wayfinding through the practice hierarchy — Practice → Module → Card.
          </p>
        </div>

        <Section title="Playbook path">
          <Breadcrumb items={[
            { label: 'Master your practice', onClick: () => {} },
            { label: 'Discovery foundations', onClick: () => {} },
            { label: 'When to move on' },
          ]}/>
        </Section>

        <Section title="With home">
          <Breadcrumb
            showHome
            onHome={() => {}}
            items={[
              { label: 'Master your practice', onClick: () => {} },
              { label: 'Interviewing users',   onClick: () => {} },
              { label: 'Structuring the guide' },
            ]}
          />
        </Section>

        <Section title="Alternate separator">
          <Breadcrumb
            separator={<span style={{ color: T.fg.secondary, fontSize: 14 }}>/</span>}
            items={[
              { label: 'Onboarding',    onClick: () => {} },
              { label: 'Week 1',        onClick: () => {} },
              { label: 'Introductions' },
            ]}
          />
        </Section>

        <Section title="Long chain (wraps)">
          <Breadcrumb items={[
            { label: 'Playbook',                    onClick: () => {} },
            { label: 'Master your practice',        onClick: () => {} },
            { label: 'Advanced service design',     onClick: () => {} },
            { label: 'Service blueprinting',        onClick: () => {} },
            { label: 'Cross-channel journeys' },
          ]}/>
        </Section>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 24, padding: 20, background: T.surface.white, border: `1px solid ${T.border.default}`, borderRadius: T.radius.md }}>
      <div style={{ fontFamily: T.font, fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: T.fg.secondary, marginBottom: 12 }}>{title}</div>
      {children}
    </div>
  )
}
