import { ChevronLeft, ChevronRight } from 'lucide-react'
import { T } from '../../tokens'

interface PaginationProps {
  current: number
  total: number
  onChange: (page: number) => void
  siblings?: number
}

export function Pagination({ current, total, onChange, siblings = 1 }: PaginationProps) {
  const pages = getPages(current, total, siblings)

  return (
    <nav aria-label="Pagination" style={{ display: 'flex', alignItems: 'center', gap: 4, fontFamily: T.font }}>
      <PageButton disabled={current === 1} onClick={() => onChange(current - 1)} ariaLabel="Previous page">
        <ChevronLeft size={16} />
      </PageButton>

      {pages.map((p, i) =>
        p === '…'
          ? <span key={`e${i}`} style={{ padding: '0 8px', color: T.fg.secondary, fontSize: 14 }}>…</span>
          : <PageButton key={p} onClick={() => onChange(p as number)} active={p === current}>{p}</PageButton>
      )}

      <PageButton disabled={current === total} onClick={() => onChange(current + 1)} ariaLabel="Next page">
        <ChevronRight size={16} />
      </PageButton>
    </nav>
  )
}

function PageButton({ children, onClick, disabled, active, ariaLabel }: {
  children: React.ReactNode; onClick: () => void; disabled?: boolean; active?: boolean; ariaLabel?: string
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-current={active ? 'page' : undefined}
      style={{
        minWidth: 36, height: 36, padding: '0 10px',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        background: active ? T.navy : 'transparent',
        color: active ? '#fff' : disabled ? T.fg.muted : T.fg.primary,
        border: `1px solid ${active ? T.navy : T.border.default}`,
        borderRadius: T.radius.sm,
        fontFamily: T.font, fontSize: 14, fontWeight: active ? 700 : 500,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: `all ${T.motion.fast} ${T.motion.ease}`,
      }}
      onMouseEnter={e => { if (!disabled && !active) e.currentTarget.style.background = T.surface.cardAlt }}
      onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'transparent' }}
    >
      {children}
    </button>
  )
}

function getPages(current: number, total: number, siblings: number): (number | '…')[] {
  const range: (number | '…')[] = []
  const start = Math.max(2, current - siblings)
  const end = Math.min(total - 1, current + siblings)

  range.push(1)
  if (start > 2) range.push('…')
  for (let i = start; i <= end; i++) range.push(i)
  if (end < total - 1) range.push('…')
  if (total > 1) range.push(total)

  return range
}
