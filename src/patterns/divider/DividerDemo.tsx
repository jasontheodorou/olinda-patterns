import { Divider } from './Divider'
import { T } from '../../tokens'

export function DividerDemo() {
  return (
    <div style={{ background: T.surface.offWhite, padding: '80px 40px', minHeight: '100vh' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <PageHeader title="Divider" desc="Structural separator between content blocks. Plain rule or with labelled kicker." />

        <div style={{ background: T.surface.white, padding: 32, border: `1px solid ${T.border.default}`, borderRadius: T.radius.md }}>
          <Body>Discovery is where we validate the problem before designing a solution.</Body>
          <Divider />
          <Body>You're done with discovery when you can describe the user, their context, and the shape of a good solution.</Body>
          <Divider label="Resources" />
          <Body>Templates, guides, and further reading grouped below.</Body>
          <Divider label="Section 2" align="left" />
          <Body>Left-aligned label option.</Body>
          <Divider variant="dashed" />
          <Body>Dashed variant for softer separation.</Body>
        </div>
      </div>
    </div>
  )
}

function PageHeader({ title, desc }: { title: string; desc: string }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <p style={{ fontFamily: T.font, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.fg.secondary, margin: '0 0 12px' }}>Component</p>
      <h2 style={{ fontFamily: T.font, fontSize: 32, fontWeight: 700, color: T.fg.primary, lineHeight: 1.25, margin: '0 0 12px' }}>{title}</h2>
      <p style={{ fontFamily: T.font, fontSize: 15, color: T.fg.secondary, lineHeight: 1.6, margin: 0 }}>{desc}</p>
    </div>
  )
}

function Body({ children }: { children: React.ReactNode }) {
  return <p style={{ fontFamily: T.font, fontSize: 15, color: T.fg.primary, lineHeight: 1.65, margin: 0 }}>{children}</p>
}
