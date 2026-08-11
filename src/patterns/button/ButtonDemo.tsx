import { ArrowRight, Play, Check, Trash2, Download, Plus } from 'lucide-react'
import { Button } from './Button'
import { T } from '../../tokens'

export function ButtonDemo() {
  return (
    <div style={{ background: T.surface.offWhite, padding: '80px 40px', minHeight: '100vh' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>

        <div style={{ marginBottom: 32 }}>
          <p style={{ fontFamily: T.font, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.fg.secondary, margin: '0 0 12px' }}>Component</p>
          <h2 style={{ fontFamily: T.font, fontSize: 32, fontWeight: 700, color: T.fg.primary, lineHeight: 1.25, margin: '0 0 12px' }}>Button</h2>
          <p style={{ fontFamily: T.font, fontSize: 15, color: T.fg.secondary, lineHeight: 1.6, margin: 0 }}>
            Pill-shaped by default. Navy for primary actions. Outline dark grey for secondary. Never orange.
          </p>
        </div>

        <Section title="Learning actions">
          <Button iconLeft={<Play size={14} />}>Continue module</Button>
          <Button variant="outline" iconLeft={<Check size={14} />}>Mark as complete</Button>
          <Button variant="subtle" iconRight={<ArrowRight size={14} />}>Next card</Button>
        </Section>

        <Section title="Variants">
          <Button variant="primary">Primary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="subtle">Subtle</Button>
          <Button variant="danger" iconLeft={<Trash2 size={14} />}>Reset progress</Button>
        </Section>

        <Section title="Sizes">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </Section>

        <Section title="States">
          <Button loading>Saving…</Button>
          <Button disabled>Locked</Button>
          <Button iconLeft={<Download size={14} />}>Download certificate</Button>
        </Section>

        <Section title="Full width">
          <div style={{ width: '100%' }}>
            <Button fullWidth iconLeft={<Plus size={14} />}>Start new module</Button>
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
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>{children}</div>
    </div>
  )
}
