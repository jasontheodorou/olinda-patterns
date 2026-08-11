import { useEffect, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X } from 'lucide-react'
import { T } from '../../tokens'

interface DrawerProps {
  open: boolean
  onClose: () => void
  title?: string
  children: ReactNode
  footer?: ReactNode
  side?: 'right' | 'left'
  width?: number
}

export function Drawer({ open, onClose, title, children, footer, side = 'right', width = 420 }: DrawerProps) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [open, onClose])

  const from = side === 'right' ? width : -width

  return (
    <AnimatePresence>
      {open && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 1000 }}>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            style={{ position: 'absolute', inset: 0, background: 'rgba(51, 51, 51, 0.4)' }}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? 'drawer-title' : undefined}
            initial={{ x: from }} animate={{ x: 0 }} exit={{ x: from }}
            transition={{ type: 'spring', stiffness: 400, damping: 36 }}
            style={{
              position: 'absolute', top: 0, bottom: 0, [side]: 0 as any, width,
              background: T.surface.white,
              boxShadow: '-16px 0 32px rgba(51,51,51,0.12)',
              display: 'flex', flexDirection: 'column',
              fontFamily: T.font,
            }}
          >
            {(title || true) && (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', borderBottom: `1px solid ${T.border.default}` }}>
                <h3 id="drawer-title" style={{ margin: 0, fontSize: 18, fontWeight: 700, color: T.fg.primary }}>{title ?? ''}</h3>
                <button onClick={onClose} aria-label="Close" style={{ background: 'transparent', border: 'none', padding: 6, cursor: 'pointer', color: T.fg.secondary, display: 'inline-flex', borderRadius: 4 }}>
                  <X size={18} />
                </button>
              </div>
            )}
            <div style={{ flex: 1, overflowY: 'auto', padding: '20px 24px', color: T.fg.primary, fontSize: 14, lineHeight: 1.6 }}>
              {children}
            </div>
            {footer && (
              <div style={{ padding: '16px 24px', borderTop: `1px solid ${T.border.default}`, display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
                {footer}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
