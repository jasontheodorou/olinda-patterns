import { useState } from 'react'
import { TableOfContents, type TocItem } from './TableOfContents'
import { T } from '../../tokens'

const ITEMS: TocItem[] = [
  { id: 'intro',        label: 'What is discovery?', level: 1 },
  { id: 'why',          label: 'Why discovery matters', level: 1 },
  { id: 'questions',    label: 'Three questions to answer', level: 1 },
  { id: 'q-users',      label: 'Who are the users?', level: 2 },
  { id: 'q-needs',      label: 'What do they need?', level: 2 },
  { id: 'q-context',    label: 'What\'s the context?', level: 2 },
  { id: 'signals',      label: 'Signals discovery is done', level: 1 },
  { id: 'antipatterns', label: 'Common anti-patterns', level: 1 },
]

export function TableOfContentsDemo() {
  const [active, setActive] = useState('questions')

  return (
    <div style={{ background: T.surface.offWhite, padding: '80px 40px', minHeight: '100vh' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <div style={{ marginBottom: 32 }}>
          <p style={{ fontFamily: T.font, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.fg.secondary, margin: '0 0 12px' }}>Component</p>
          <h2 style={{ fontFamily: T.font, fontSize: 32, fontWeight: 700, color: T.fg.primary, lineHeight: 1.25, margin: '0 0 12px' }}>Table of contents</h2>
          <p style={{ fontFamily: T.font, fontSize: 15, color: T.fg.secondary, lineHeight: 1.6, margin: 0 }}>
            "On this page" nav for long-form cards or documentation lessons. Two levels of hierarchy.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 220px', gap: 32, alignItems: 'start' }}>
          <article style={{ background: T.surface.white, padding: 32, border: `1px solid ${T.border.default}`, borderRadius: T.radius.md, fontFamily: T.font }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: T.fg.primary, margin: '0 0 12px' }}>Understanding the discovery phase</h2>
            <p style={{ fontSize: 15, color: T.fg.primary, lineHeight: 1.65, margin: 0 }}>
              Click any heading in the TOC to activate it. In real use, an IntersectionObserver auto-tracks the current heading as the user scrolls.
            </p>
          </article>
          <aside style={{ position: 'sticky', top: 24 }}>
            <TableOfContents items={ITEMS} activeId={active} onNavigate={setActive} />
          </aside>
        </div>
      </div>
    </div>
  )
}
