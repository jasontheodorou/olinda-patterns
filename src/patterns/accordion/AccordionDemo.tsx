import { useState } from 'react'
import { Accordion, type AccordionItem } from './Accordion'
import { T } from '../../tokens'

const ITEMS: AccordionItem[] = [
  { title: 'When should I move on from discovery?', content: 'You\'re done with discovery when you can describe the user, their context, and the shape of a good solution — even before you\'ve designed anything.' },
  { title: 'How many users do I need to interview?', content: 'For qualitative discovery, 5–8 interviews per user type usually surfaces the strongest patterns. If new themes are still appearing, keep going.' },
  { title: 'Do I need a research lead?',            content: 'For any project involving vulnerable users, safeguarding, or ethics review — yes. For everything else, a research lead adds rigour but isn\'t always essential.' },
  { title: 'Section coming soon',                   content: 'Coming soon.', disabled: true },
]

type Variant = 'default' | 'border'
type Density = 'compact' | 'default' | 'spacious'

export function AccordionDemo() {
  const [variant, setVariant] = useState<Variant>('border')
  const [density, setDensity] = useState<Density>('default')
  const [multi, setMulti]     = useState(false)

  return (
    <div style={{ background: T.surface.offWhite, padding: '80px 40px', minHeight: '100vh' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>

        <div style={{ marginBottom: 32 }}>
          <p style={{ fontFamily: T.font, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.fg.secondary, margin: '0 0 12px' }}>Component</p>
          <h2 style={{ fontFamily: T.font, fontSize: 32, fontWeight: 700, color: T.fg.primary, lineHeight: 1.25, margin: '0 0 12px' }}>Accordion</h2>
          <p style={{ fontFamily: T.font, fontSize: 15, color: T.fg.secondary, lineHeight: 1.6, margin: 0 }}>
            Progressive disclosure. Handy for FAQ-style questions inside a lesson, or as a "deep dive" toggle at the end of a card.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginBottom: 24, padding: '14px 18px', border: `1px solid ${T.border.default}`, background: T.surface.white, borderRadius: T.radius.sm }}>
          <ControlGroup label="Variant">
            {(['default', 'border'] as Variant[]).map(v => <Chip key={v} active={variant === v} onClick={() => setVariant(v)}>{v}</Chip>)}
          </ControlGroup>
          <ControlGroup label="Density">
            {(['compact', 'default', 'spacious'] as Density[]).map(d => <Chip key={d} active={density === d} onClick={() => setDensity(d)}>{d}</Chip>)}
          </ControlGroup>
          <ControlGroup label="Behaviour">
            <Chip active={!multi} onClick={() => setMulti(false)}>Single</Chip>
            <Chip active={multi}  onClick={() => setMulti(true)}>Multiple</Chip>
          </ControlGroup>
        </div>

        <Accordion items={ITEMS} variant={variant} density={density} allowMultiple={multi} defaultOpen={[0]} />
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
