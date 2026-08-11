import { useEffect, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X } from 'lucide-react'
import { T } from '../../tokens'

interface ModalProps {
  open: boolean
  onClose: () => void
  title?: string
  children: ReactNode
  footer?: ReactNode
  size?: 'sm' | 'md' | 'lg'
  dismissible?: boolean
}

const SIZE = { sm: 400, md: 560, lg: 720 }

export function Modal({ open, onClose, title, children, footer, size = 'md', dismissible = true }: ModalProps) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape' && dismissible) onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [open, onClose, dismissible])

  return (
    <AnimatePresence>
      {open && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
          {/* Backdrop — fade, per playbook Modal defaults */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={dismissible ? onClose : undefined}
            style={{ position: 'absolute', inset: 0, background: 'rgba(51, 51, 51, 0.4)' }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? 'modal-title' : undefined}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
            style={{
              position: 'relative', width: '100%', maxWidth: SIZE[size],
              background: T.surface.white, borderRadius: T.radius.md,
              boxShadow: '0 24px 48px rgba(51, 51, 51, 0.12)',
              fontFamily: T.font,
              display: 'flex', flexDirection: 'column',
              maxHeight: '90vh',
            }}
          >
            {(title || dismissible) && (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px 12px', gap: 16 }}>
                {title && <h3 id="modal-title" style={{ margin: 0, fontSize: 20, fontWeight: 700, color: T.fg.primary }}>{title}</h3>}
                {dismissible && (
                  <button
                    onClick={onClose}
                    aria-label="Close"
                    style={{ background: 'transparent', border: 'none', padding: 6, cursor: 'pointer', color: T.fg.secondary, display: 'inline-flex', borderRadius: 4 }}
                  >
                    <X size={18} />
                  </button>
                )}
              </div>
            )}

            <div style={{ padding: '4px 24px 20px', overflowY: 'auto', color: T.fg.primary, fontSize: 15, lineHeight: 1.6 }}>
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
