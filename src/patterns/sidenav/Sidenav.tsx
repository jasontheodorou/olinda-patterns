import { useState, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown, CheckCircle2, Circle, Lock } from 'lucide-react'
import { T } from '../../tokens'

export type NavItemStatus = 'complete' | 'in-progress' | 'available' | 'locked'

export interface NavItem {
  id: string
  label: string
  status?: NavItemStatus
  children?: NavItem[]
}

interface SidenavProps {
  sections: NavItem[]
  activeId: string
  onSelect: (id: string) => void
}

export function Sidenav({ sections, activeId, onSelect }: SidenavProps) {
  return (
    <nav style={{ fontFamily: T.font, display: 'flex', flexDirection: 'column', gap: 4 }}>
      {sections.map(s => <Section key={s.id} item={s} activeId={activeId} onSelect={onSelect} />)}
    </nav>
  )
}

function Section({ item, activeId, onSelect }: { item: NavItem; activeId: string; onSelect: (id: string) => void }) {
  const [open, setOpen] = useState(true)
  const hasChildren = item.children && item.children.length > 0

  if (!hasChildren) return <Leaf item={item} activeId={activeId} onSelect={onSelect} />

  return (
    <div>
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          width: '100%', padding: '8px 10px',
          background: 'transparent', border: 'none', cursor: 'pointer',
          fontFamily: T.font, fontSize: 12, fontWeight: 700,
          color: T.fg.secondary, letterSpacing: '0.06em', textTransform: 'uppercase',
        }}
      >
        {item.label}
        <motion.span animate={{ rotate: open ? 0 : -90 }} transition={{ duration: 0.2 }} style={{ display: 'inline-flex' }}>
          <ChevronDown size={14} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.2, 0.8, 0.2, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: 2 }}>
              {item.children!.map(c => <Leaf key={c.id} item={c} activeId={activeId} onSelect={onSelect} />)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function Leaf({ item, activeId, onSelect }: { item: NavItem; activeId: string; onSelect: (id: string) => void }) {
  const isActive = item.id === activeId
  const locked = item.status === 'locked'

  return (
    <button
      onClick={() => !locked && onSelect(item.id)}
      disabled={locked}
      style={{
        display: 'flex', alignItems: 'center', gap: 10,
        width: '100%', padding: '9px 10px',
        background: isActive ? T.navy : 'transparent',
        color: isActive ? '#fff' : locked ? T.fg.muted : T.fg.primary,
        border: 'none',
        borderRadius: T.radius.sm,
        fontFamily: T.font, fontSize: 14, fontWeight: isActive ? 600 : 400,
        cursor: locked ? 'not-allowed' : 'pointer',
        opacity: locked ? 0.6 : 1,
        textAlign: 'left',
        transition: `background ${T.motion.fast} ${T.motion.ease}`,
      }}
      onMouseEnter={e => { if (!isActive && !locked) e.currentTarget.style.background = T.surface.cardAlt }}
      onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent' }}
    >
      <StatusDot status={item.status} isActive={isActive} />
      <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.label}</span>
    </button>
  )
}

function StatusDot({ status, isActive }: { status?: NavItemStatus; isActive: boolean }) {
  const c = isActive ? '#fff' : T.fg.secondary
  if (status === 'complete')    return <CheckCircle2 size={14} color={isActive ? '#fff' : T.teal} strokeWidth={2.5} />
  if (status === 'in-progress') return <div style={{ width: 8, height: 8, borderRadius: '50%', background: isActive ? '#fff' : T.navy, marginLeft: 3 }} />
  if (status === 'locked')      return <Lock size={12} color={c} />
  return <Circle size={12} color={c} />
}
