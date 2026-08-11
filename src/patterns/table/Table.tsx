import type { ReactNode } from 'react'
import { T } from '../../tokens'

export interface Column<T> {
  key: keyof T | string
  header: ReactNode
  render?: (row: T) => ReactNode
  width?: number | string
  align?: 'left' | 'right' | 'center'
}

interface TableProps<T> {
  columns: Column<T>[]
  rows: T[]
  onRowClick?: (row: T) => void
  striped?: boolean
  caption?: string
}

export function Table<T extends { id: string | number }>({
  columns, rows, onRowClick, striped = true, caption,
}: TableProps<T>) {
  return (
    <div style={{ background: T.surface.white, border: `1px solid ${T.border.default}`, borderRadius: T.radius.md, overflow: 'hidden', fontFamily: T.font }}>
      {caption && <div style={{ padding: '16px 20px', borderBottom: `1px solid ${T.border.default}`, fontSize: 13, fontWeight: 700, color: T.fg.primary }}>{caption}</div>}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              {columns.map((c, i) => (
                <th key={i} style={{
                  padding: '12px 16px', textAlign: c.align ?? 'left',
                  width: c.width, whiteSpace: 'nowrap',
                  background: T.surface.cardAlt,
                  fontFamily: T.font, fontSize: 12, fontWeight: 700, color: T.fg.secondary,
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                  borderBottom: `1px solid ${T.border.default}`,
                }}>{c.header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr
                key={row.id}
                onClick={onRowClick ? () => onRowClick(row) : undefined}
                style={{
                  background: striped && ri % 2 === 1 ? T.surface.offWhite : T.surface.white,
                  cursor: onRowClick ? 'pointer' : 'default',
                  transition: `background ${T.motion.fast} ${T.motion.ease}`,
                }}
                onMouseEnter={e => { if (onRowClick) e.currentTarget.style.background = T.surface.cardAlt }}
                onMouseLeave={e => { e.currentTarget.style.background = striped && ri % 2 === 1 ? T.surface.offWhite : T.surface.white }}
              >
                {columns.map((c, ci) => (
                  <td key={ci} style={{
                    padding: '14px 16px', textAlign: c.align ?? 'left',
                    fontSize: 14, color: T.fg.primary, verticalAlign: 'middle',
                    borderBottom: ri === rows.length - 1 ? 'none' : `1px solid ${T.border.default}`,
                  }}>
                    {c.render ? c.render(row) : (row as any)[c.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
