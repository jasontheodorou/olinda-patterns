import { useState } from 'react'
import { Drawer } from './Drawer'
import { Button } from '../button/Button'
import { Badge } from '../badge/Badge'
import { T } from '../../tokens'

export function DrawerDemo() {
  const [open, setOpen] = useState<'right' | 'left' | null>(null)

  return (
    <div style={{ background: T.surface.offWhite, padding: '80px 40px', minHeight: '100vh' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <div style={{ marginBottom: 32 }}>
          <p style={{ fontFamily: T.font, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.fg.secondary, margin: '0 0 12px' }}>Component</p>
          <h2 style={{ fontFamily: T.font, fontSize: 32, fontWeight: 700, color: T.fg.primary, lineHeight: 1.25, margin: '0 0 12px' }}>Drawer</h2>
          <p style={{ fontFamily: T.font, fontSize: 15, color: T.fg.secondary, lineHeight: 1.6, margin: 0 }}>
            Off-canvas panel for module details, filter builders, and preview flows without leaving the current card.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 10 }}>
          <Button onClick={() => setOpen('right')}>Open right drawer</Button>
          <Button variant="outline" onClick={() => setOpen('left')}>Open left drawer</Button>
        </div>

        <Drawer
          open={open === 'right'}
          onClose={() => setOpen(null)}
          title="Module details"
          footer={<>
            <Button variant="subtle" onClick={() => setOpen(null)}>Close</Button>
            <Button onClick={() => setOpen(null)}>Start module</Button>
          </>}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', gap: 6 }}>
              <Badge tone="info" size="sm">Intermediate</Badge>
              <Badge tone="neutral" size="sm" variant="outline">6 cards</Badge>
              <Badge tone="neutral" size="sm" variant="outline">45 min</Badge>
            </div>
            <div>
              <h4 style={{ margin: '0 0 8px', fontSize: 17, fontWeight: 700, color: T.fg.primary }}>Interviewing users</h4>
              <p style={{ margin: 0, color: T.fg.secondary, lineHeight: 1.6 }}>
                Recruitment, question design, moderation, synthesis — the practical toolkit for running research sessions that produce actionable insight.
              </p>
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: T.fg.secondary, marginBottom: 8 }}>What you'll cover</div>
              <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
                <li>Recruitment plans and screener design</li>
                <li>Writing an interview guide</li>
                <li>Running the session with rigour</li>
                <li>Note-taking and synthesis</li>
              </ul>
            </div>
          </div>
        </Drawer>

        <Drawer
          open={open === 'left'}
          onClose={() => setOpen(null)}
          title="Filters"
          side="left"
          footer={<>
            <Button variant="subtle" onClick={() => setOpen(null)}>Reset</Button>
            <Button onClick={() => setOpen(null)}>Apply</Button>
          </>}
        >
          <p style={{ margin: 0, color: T.fg.secondary }}>Filter your practice library by difficulty, duration, and role.</p>
        </Drawer>
      </div>
    </div>
  )
}
