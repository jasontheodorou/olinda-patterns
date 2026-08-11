import { useState } from 'react'
import { Pagination } from './Pagination'
import { T } from '../../tokens'

export function PaginationDemo() {
  const [p1, setP1] = useState(3)
  const [p2, setP2] = useState(1)
  const [p3, setP3] = useState(24)

  return (
    <div style={{ background: T.surface.offWhite, padding: '80px 40px', minHeight: '100vh' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <div style={{ marginBottom: 32 }}>
          <p style={{ fontFamily: T.font, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.fg.secondary, margin: '0 0 12px' }}>Component</p>
          <h2 style={{ fontFamily: T.font, fontSize: 32, fontWeight: 700, color: T.fg.primary, lineHeight: 1.25, margin: '0 0 12px' }}>Pagination</h2>
          <p style={{ fontFamily: T.font, fontSize: 15, color: T.fg.secondary, lineHeight: 1.6, margin: 0 }}>
            Numbered navigation for card-list and library pages. Ellipses truncate on long counts.
          </p>
        </div>

        <Panel title="Short (5 pages)"><Pagination current={p1} total={5} onChange={setP1} /></Panel>
        <Panel title="Start of long range"><Pagination current={p2} total={50} onChange={setP2} /></Panel>
        <Panel title="Middle of long range"><Pagination current={p3} total={50} onChange={setP3} /></Panel>

        <Panel title="Contextual — practice library">
          <div style={{ fontFamily: T.font, fontSize: 13, color: T.fg.secondary, marginBottom: 12 }}>
            Showing modules {(p1 - 1) * 6 + 1}–{Math.min(p1 * 6, 30)} of 30
          </div>
          <Pagination current={p1} total={5} onChange={setP1} />
        </Panel>
      </div>
    </div>
  )
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ background: T.surface.white, padding: 24, border: `1px solid ${T.border.default}`, borderRadius: T.radius.md, marginBottom: 16 }}>
      <div style={{ fontFamily: T.font, fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: T.fg.secondary, marginBottom: 12 }}>{title}</div>
      {children}
    </div>
  )
}
