import { Award, CheckCircle2, Clock, Flame, Sparkles, User } from 'lucide-react'
import { Badge } from './Badge'
import { T } from '../../tokens'

export function BadgeDemo() {
  return (
    <div style={{ background: T.surface.offWhite, padding: '80px 40px', minHeight: '100vh' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>

        <div style={{ marginBottom: 32 }}>
          <p style={{ fontFamily: T.font, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.fg.secondary, margin: '0 0 12px' }}>Component</p>
          <h2 style={{ fontFamily: T.font, fontSize: 32, fontWeight: 700, color: T.fg.primary, lineHeight: 1.25, margin: '0 0 12px' }}>Badge</h2>
          <p style={{ fontFamily: T.font, fontSize: 15, color: T.fg.secondary, lineHeight: 1.6, margin: 0 }}>
            Compact status marker. Six tones across the Transform palette. Use for role/account, module meta, and achievements.
          </p>
        </div>

        <Section title="Role & account (playbook context)">
          <Badge tone="brand" icon={<User size={12} />}>Service designer</Badge>
          <Badge tone="brand" variant="outline">HMCTS</Badge>
          <Badge tone="brand" variant="outline">DfE</Badge>
        </Section>

        <Section title="Module meta">
          <Badge tone="success" variant="soft">Beginner</Badge>
          <Badge tone="info"    variant="soft">Intermediate</Badge>
          <Badge tone="warning" variant="soft">Advanced</Badge>
          <Badge tone="neutral" variant="outline" icon={<Clock size={12} />}>15 min</Badge>
        </Section>

        <Section title="Card status">
          <Badge tone="success" variant="solid" icon={<CheckCircle2 size={12} />}>Complete</Badge>
          <Badge tone="info"    variant="soft"  icon={<Sparkles size={12} />}>In progress</Badge>
          <Badge tone="neutral" variant="outline">Not started</Badge>
          <Badge tone="accent"  variant="outline">Optional</Badge>
        </Section>

        <Section title="Achievement">
          <Badge tone="warning" icon={<Award size={12} />}>Practice streak</Badge>
          <Badge tone="accent"  icon={<Flame size={12} />}>7-day streak</Badge>
          <Badge tone="brand"   icon={<Sparkles size={12} />}>First module</Badge>
        </Section>

        <Section title="Sizes">
          <Badge tone="success" size="sm">sm</Badge>
          <Badge tone="success" size="md">md</Badge>
        </Section>

        <Section title="Variants">
          <Badge tone="info" variant="solid">Solid</Badge>
          <Badge tone="info" variant="soft">Soft</Badge>
          <Badge tone="info" variant="outline">Outline</Badge>
        </Section>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{ fontFamily: T.font, fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: T.fg.secondary, marginBottom: 12 }}>{title}</div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>{children}</div>
    </div>
  )
}
