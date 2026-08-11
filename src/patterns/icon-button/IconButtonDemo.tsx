import { Bookmark, Share2, MoreHorizontal, Play, Pause, ArrowLeft, ArrowRight, X, Check, Heart, Search } from 'lucide-react'
import { IconButton } from './IconButton'
import { T } from '../../tokens'

export function IconButtonDemo() {
  return (
    <div style={{ background: T.surface.offWhite, padding: '80px 40px', minHeight: '100vh' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <div style={{ marginBottom: 32 }}>
          <p style={{ fontFamily: T.font, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.fg.secondary, margin: '0 0 12px' }}>Component</p>
          <h2 style={{ fontFamily: T.font, fontSize: 32, fontWeight: 700, color: T.fg.primary, lineHeight: 1.25, margin: '0 0 12px' }}>IconButton</h2>
          <p style={{ fontFamily: T.font, fontSize: 15, color: T.fg.secondary, lineHeight: 1.6, margin: 0 }}>Icon-only actions. Pill-round, three variants, three sizes. Always provide an aria-label.</p>
        </div>

        <Section title="Card actions">
          <IconButton label="Bookmark"><Bookmark size={16} /></IconButton>
          <IconButton label="Share"><Share2 size={16} /></IconButton>
          <IconButton label="More options"><MoreHorizontal size={16} /></IconButton>
        </Section>

        <Section title="Variants">
          <IconButton label="Primary" variant="primary"><Play size={16} /></IconButton>
          <IconButton label="Outline" variant="outline"><Pause size={16} /></IconButton>
          <IconButton label="Subtle" variant="subtle"><X size={16} /></IconButton>
        </Section>

        <Section title="Sizes">
          <IconButton label="sm" size="sm"><Check size={14} /></IconButton>
          <IconButton label="md" size="md"><Check size={16} /></IconButton>
          <IconButton label="lg" size="lg"><Check size={20} /></IconButton>
        </Section>

        <Section title="Nav pair">
          <IconButton label="Previous card" variant="outline"><ArrowLeft size={16} /></IconButton>
          <IconButton label="Next card" variant="primary"><ArrowRight size={16} /></IconButton>
        </Section>

        <Section title="Toolbar">
          <IconButton label="Search"><Search size={16} /></IconButton>
          <IconButton label="Favourite"><Heart size={16} /></IconButton>
          <IconButton label="Share"><Share2 size={16} /></IconButton>
          <IconButton label="More"><MoreHorizontal size={16} /></IconButton>
        </Section>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{ fontFamily: T.font, fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: T.fg.secondary, marginBottom: 12 }}>{title}</div>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', padding: 16, background: T.surface.white, border: `1px solid ${T.border.default}`, borderRadius: T.radius.sm }}>{children}</div>
    </div>
  )
}
