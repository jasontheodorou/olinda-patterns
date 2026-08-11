import { useState } from 'react'
import { Sidenav, type NavItem } from './Sidenav'
import { T } from '../../tokens'

const SECTIONS: NavItem[] = [
  {
    id: 'foundations', label: 'Discovery foundations',
    children: [
      { id: 'f1', label: 'What is discovery?',           status: 'complete' },
      { id: 'f2', label: 'Who are you designing for?',    status: 'complete' },
      { id: 'f3', label: 'The context of use',            status: 'in-progress' },
      { id: 'f4', label: 'When to move on',               status: 'available' },
    ],
  },
  {
    id: 'interviewing', label: 'Interviewing users',
    children: [
      { id: 'i1', label: 'Recruitment',              status: 'available' },
      { id: 'i2', label: 'Writing the guide',        status: 'available' },
      { id: 'i3', label: 'Running the session',      status: 'available' },
      { id: 'i4', label: 'Ethics and safeguarding',  status: 'locked' },
    ],
  },
  {
    id: 'advanced', label: 'Advanced blueprinting',
    children: [
      { id: 'a1', label: 'Blueprinting basics',      status: 'locked' },
      { id: 'a2', label: 'Cross-channel journeys',   status: 'locked' },
    ],
  },
]

export function SidenavDemo() {
  const [active, setActive] = useState('f3')

  return (
    <div style={{ background: T.surface.offWhite, padding: '80px 40px', minHeight: '100vh' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <div style={{ marginBottom: 32 }}>
          <p style={{ fontFamily: T.font, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.fg.secondary, margin: '0 0 12px' }}>Component</p>
          <h2 style={{ fontFamily: T.font, fontSize: 32, fontWeight: 700, color: T.fg.primary, lineHeight: 1.25, margin: '0 0 12px' }}>Sidenav</h2>
          <p style={{ fontFamily: T.font, fontSize: 15, color: T.fg.secondary, lineHeight: 1.6, margin: 0 }}>
            Module and card tree with status indicators (complete · in progress · available · locked).
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 24 }}>
          <aside style={{ background: T.surface.white, padding: 16, border: `1px solid ${T.border.default}`, borderRadius: T.radius.md, alignSelf: 'start' }}>
            <Sidenav sections={SECTIONS} activeId={active} onSelect={setActive} />
          </aside>
          <main style={{ background: T.surface.white, padding: 32, border: `1px solid ${T.border.default}`, borderRadius: T.radius.md, minHeight: 300 }}>
            <div style={{ fontFamily: T.font, fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: T.fg.secondary, marginBottom: 8 }}>Active</div>
            <div style={{ fontFamily: T.font, fontSize: 20, fontWeight: 700, color: T.fg.primary }}>{active}</div>
            <p style={{ fontFamily: T.font, fontSize: 14, color: T.fg.secondary, lineHeight: 1.6, marginTop: 12 }}>Click any leaf in the sidenav to change the active card.</p>
          </main>
        </div>
      </div>
    </div>
  )
}
