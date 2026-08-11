import type { ReactNode } from 'react'
import { T } from '../../tokens'

interface DividerProps {
  label?: ReactNode
  align?: 'left' | 'center' | 'right'
  variant?: 'solid' | 'dashed'
  spacing?: number
}

export function Divider({ label, align = 'center', variant = 'solid', spacing = 24 }: DividerProps) {
  if (!label) {
    return <hr style={{
      border: 'none', borderTop: `1px ${variant} ${T.border.default}`,
      margin: `${spacing}px 0`,
    }} />
  }

  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12,
      margin: `${spacing}px 0`,
      justifyContent: align === 'center' ? 'center' : 'flex-start',
      fontFamily: T.font,
    }}>
      {align !== 'left' && <span style={{ flex: 1, height: 1, borderTop: `1px ${variant} ${T.border.default}` }} />}
      <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: T.fg.secondary }}>{label}</span>
      {align !== 'right' && <span style={{ flex: 1, height: 1, borderTop: `1px ${variant} ${T.border.default}` }} />}
    </div>
  )
}
