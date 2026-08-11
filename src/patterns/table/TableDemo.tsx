import { Table, type Column } from './Table'
import { Badge } from '../badge/Badge'
import { ProgressBar } from '../progress/Progress'
import { T } from '../../tokens'

interface ModuleRow {
  id: number
  module: string
  cards: string
  progress: number
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  status: 'Complete' | 'In progress' | 'Not started' | 'Locked'
}

const ROWS: ModuleRow[] = [
  { id: 1, module: 'Discovery foundations',    cards: '5 / 5', progress: 100, difficulty: 'Beginner',     status: 'Complete' },
  { id: 2, module: 'Interviewing users',       cards: '4 / 6', progress: 66,  difficulty: 'Intermediate', status: 'In progress' },
  { id: 3, module: 'Synthesis & sensemaking',  cards: '1 / 5', progress: 20,  difficulty: 'Intermediate', status: 'In progress' },
  { id: 4, module: 'Prototyping in low fidelity', cards: '0 / 7', progress: 0, difficulty: 'Beginner',    status: 'Not started' },
  { id: 5, module: 'Advanced blueprinting',    cards: '0 / 8', progress: 0,   difficulty: 'Advanced',     status: 'Locked' },
]

const COLUMNS: Column<ModuleRow>[] = [
  { key: 'module',     header: 'Module' },
  { key: 'difficulty', header: 'Level', render: r => (
    <Badge size="sm" tone={r.difficulty === 'Beginner' ? 'success' : r.difficulty === 'Intermediate' ? 'info' : 'warning'}>{r.difficulty}</Badge>
  ) },
  { key: 'cards',      header: 'Cards', width: 90 },
  { key: 'progress',   header: 'Progress', width: 200, render: r => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <div style={{ flex: 1 }}><ProgressBar value={r.progress} size="sm" /></div>
      <span style={{ fontSize: 12, color: T.fg.secondary, fontFamily: T.font, minWidth: 30 }}>{r.progress}%</span>
    </div>
  ) },
  { key: 'status',     header: 'Status', width: 120, render: r => (
    <Badge size="sm" variant={r.status === 'Complete' ? 'solid' : 'soft'}
      tone={r.status === 'Complete' ? 'success' : r.status === 'In progress' ? 'info' : r.status === 'Locked' ? 'neutral' : 'neutral'}>
      {r.status}
    </Badge>
  ) },
]

export function TableDemo() {
  return (
    <div style={{ background: T.surface.offWhite, padding: '80px 40px', minHeight: '100vh' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <div style={{ marginBottom: 32 }}>
          <p style={{ fontFamily: T.font, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.fg.secondary, margin: '0 0 12px' }}>Component</p>
          <h2 style={{ fontFamily: T.font, fontSize: 32, fontWeight: 700, color: T.fg.primary, lineHeight: 1.25, margin: '0 0 12px' }}>Table</h2>
          <p style={{ fontFamily: T.font, fontSize: 15, color: T.fg.secondary, lineHeight: 1.6, margin: 0 }}>
            Great for progress dashboards and admin views. Click rows to drill into a module.
          </p>
        </div>

        <Table
          caption="Your practice progress"
          columns={COLUMNS}
          rows={ROWS}
          onRowClick={() => {}}
        />
      </div>
    </div>
  )
}
