import { useState, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Info, CheckCircle2, AlertTriangle, XCircle, X } from 'lucide-react'
import { T } from '../../tokens'

// ─── Semantic alerts (banner-style) ──────────────────────────────────────────

export type AlertVariant = 'info' | 'success' | 'warning' | 'danger' | 'neutral'

interface AlertProps {
  variant?: AlertVariant
  title?: string
  children: ReactNode
  outlined?: boolean
  dismissible?: boolean
  onDismiss?: () => void
  icon?: boolean
  action?: ReactNode
}

const V: Record<AlertVariant, {
  solid: { bg: string; text: string }
  muted: { bg: string; border: string; text: string }
}> = {
  info:    { solid: { bg: T.sky,    text: '#fff' },       muted: { bg: T.soft.mist,   border: '#B5D0DA', text: T.fg.primary } },
  success: { solid: { bg: T.teal,   text: '#fff' },       muted: { bg: '#E4EBE6',     border: '#B5C7BC', text: '#26372D'     } },
  warning: { solid: { bg: T.yellow, text: T.fg.primary }, muted: { bg: T.soft.yellow, border: '#D6CBA0', text: '#5E5320'     } },
  danger:  { solid: { bg: T.red,    text: '#fff' },       muted: { bg: '#F5E1DD',     border: '#D8B5B5', text: '#5E1F1F'     } },
  neutral: { solid: { bg: T.fg.primary, text: '#fff' },   muted: { bg: T.surface.cardAlt, border: T.border.default, text: T.fg.primary } },
}

const ICONS = { info: Info, success: CheckCircle2, warning: AlertTriangle, danger: XCircle, neutral: Info }

export function Alert({
  variant = 'info', title, children, outlined = false, dismissible = false, onDismiss, icon = true, action,
}: AlertProps) {
  const [show, setShow] = useState(true)
  const scheme = outlined ? V[variant].muted : V[variant].solid
  const Icon = ICONS[variant]

  const handleDismiss = () => { setShow(false); onDismiss?.() }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="alert"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, height: 0, marginTop: 0, marginBottom: 0 }}
          transition={{ duration: 0.22, ease: [0.2, 0.8, 0.2, 1] }}
          style={{
            position: 'relative', display: 'flex', gap: 12,
            padding: dismissible ? '16px 44px 16px 16px' : '16px',
            borderRadius: T.radius.sm,
            background: scheme.bg,
            border: outlined ? `1px solid ${(scheme as any).border ?? 'transparent'}` : '1px solid transparent',
            color: scheme.text,
            fontFamily: T.font,
          }}
        >
          {icon && <div style={{ flexShrink: 0, marginTop: 1 }}><Icon size={20} strokeWidth={2} /></div>}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8, minWidth: 0 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {title && <div style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.3 }}>{title}</div>}
              <div style={{ fontSize: 14, lineHeight: 1.55 }}>{children}</div>
            </div>
            {action && <div>{action}</div>}
          </div>
          {dismissible && (
            <button
              onClick={handleDismiss}
              aria-label="Dismiss"
              style={{ position: 'absolute', top: 12, right: 12, background: 'transparent', border: 'none', padding: 4, color: scheme.text, cursor: 'pointer', display: 'inline-flex', borderRadius: 4 }}
            >
              <X size={16} strokeWidth={2} />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
