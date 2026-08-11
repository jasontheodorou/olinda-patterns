import { useState, useRef, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { T } from '../../tokens'

type Placement = 'top' | 'bottom' | 'left' | 'right'

interface TooltipProps {
  content: ReactNode
  placement?: Placement
  delay?: number
  children: ReactNode
}

export function Tooltip({ content, placement = 'top', delay = 300, children }: TooltipProps) {
  const [open, setOpen] = useState(false)
  const timer = useRef<number>()

  const show = () => { window.clearTimeout(timer.current); timer.current = window.setTimeout(() => setOpen(true), delay) }
  const hide = () => { window.clearTimeout(timer.current); setOpen(false) }

  const pos = POSITION[placement]

  return (
    <span onMouseEnter={show} onMouseLeave={hide} onFocus={show} onBlur={hide} style={{ position: 'relative', display: 'inline-flex' }}>
      {children}
      <AnimatePresence>
        {open && (
          <motion.span
            role="tooltip"
            initial={{ opacity: 0, ...pos.offset }}
            animate={{ opacity: 1, ...pos.rest }}
            exit={{ opacity: 0, ...pos.offset, transition: { duration: 0.1 } }}
            transition={{ duration: 0.18, ease: [0.2, 0.8, 0.2, 1] }}
            style={{
              position: 'absolute', zIndex: 100,
              padding: '6px 10px',
              background: T.surface.dark,
              color: T.fg.onDark,
              fontFamily: T.font, fontSize: 12, fontWeight: 500,
              lineHeight: 1.4,
              whiteSpace: 'nowrap',
              borderRadius: T.radius.sm,
              pointerEvents: 'none',
              ...pos.base,
            }}
          >
            {content}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  )
}

const POSITION: Record<Placement, { base: React.CSSProperties; offset: React.CSSProperties; rest: React.CSSProperties }> = {
  top:    { base: { bottom: 'calc(100% + 6px)', left: '50%', transform: 'translateX(-50%)' }, offset: { y: 4 }, rest: { y: 0 } },
  bottom: { base: { top: 'calc(100% + 6px)',    left: '50%', transform: 'translateX(-50%)' }, offset: { y: -4 }, rest: { y: 0 } },
  left:   { base: { right: 'calc(100% + 6px)',  top: '50%',  transform: 'translateY(-50%)' }, offset: { x: 4 }, rest: { x: 0 } },
  right:  { base: { left: 'calc(100% + 6px)',   top: '50%',  transform: 'translateY(-50%)' }, offset: { x: -4 }, rest: { x: 0 } },
}
