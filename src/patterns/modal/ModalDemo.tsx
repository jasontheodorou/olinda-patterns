import { useState } from 'react'
import { Award } from 'lucide-react'
import { Modal } from './Modal'
import { Button } from '../button/Button'
import { Badge } from '../badge/Badge'
import { T } from '../../tokens'

export function ModalDemo() {
  const [open, setOpen] = useState<'confirm' | 'reflection' | 'unlock' | null>(null)

  return (
    <div style={{ background: T.surface.offWhite, padding: '80px 40px', minHeight: '100vh' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <div style={{ marginBottom: 32 }}>
          <p style={{ fontFamily: T.font, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.fg.secondary, margin: '0 0 12px' }}>Component</p>
          <h2 style={{ fontFamily: T.font, fontSize: 32, fontWeight: 700, color: T.fg.primary, lineHeight: 1.25, margin: '0 0 12px' }}>Modal</h2>
          <p style={{ fontFamily: T.font, fontSize: 15, color: T.fg.secondary, lineHeight: 1.6, margin: 0 }}>
            Focused overlays for confirmations, reflections, and module-unlock moments.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <Button onClick={() => setOpen('confirm')}>Confirm reset</Button>
          <Button variant="outline" onClick={() => setOpen('reflection')}>Reflection prompt</Button>
          <Button variant="outline" onClick={() => setOpen('unlock')}>Unlock module</Button>
        </div>

        <Modal
          open={open === 'confirm'}
          onClose={() => setOpen(null)}
          title="Reset progress?"
          size="sm"
          footer={<>
            <Button variant="subtle" onClick={() => setOpen(null)}>Cancel</Button>
            <Button variant="danger" onClick={() => setOpen(null)}>Reset progress</Button>
          </>}
        >
          You'll lose all completed cards in <strong>Discovery foundations</strong>. Streaks and achievements are safe.
        </Modal>

        <Modal
          open={open === 'reflection'}
          onClose={() => setOpen(null)}
          title="Reflect before you move on"
          size="md"
          footer={<>
            <Button variant="subtle" onClick={() => setOpen(null)}>Skip</Button>
            <Button onClick={() => setOpen(null)}>Continue</Button>
          </>}
        >
          <p style={{ margin: '0 0 12px' }}>Think about a recent project. Which of these applies most to your discovery approach?</p>
          <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li>I usually start with stakeholder interviews first</li>
            <li>I typically jump straight into user interviews</li>
            <li>I lead with desk research and existing data</li>
          </ul>
        </Modal>

        <Modal
          open={open === 'unlock'}
          onClose={() => setOpen(null)}
          title="Module unlocked"
          size="md"
          footer={<>
            <Button variant="subtle" onClick={() => setOpen(null)}>Not now</Button>
            <Button onClick={() => setOpen(null)}>Start module</Button>
          </>}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{
              width: 56, height: 56, borderRadius: '50%',
              background: T.navy,
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
            }}>
              <Award size={28} />
            </div>
            <div style={{ fontSize: 20, fontWeight: 700, color: T.fg.primary }}>Interviewing users</div>
            <p style={{ margin: 0 }}>You've completed the foundations. This module goes deeper into recruitment, question design, and running the session.</p>
            <div style={{ display: 'flex', gap: 6 }}>
              <Badge tone="info" size="sm">Intermediate</Badge>
              <Badge tone="neutral" size="sm" variant="outline">6 cards</Badge>
              <Badge tone="neutral" size="sm" variant="outline">45 min</Badge>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  )
}
