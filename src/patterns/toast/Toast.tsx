import { useState, useCallback, createContext, useContext, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { CheckCircle2, Info, AlertTriangle, XCircle, X, Award } from 'lucide-react'
import { T } from '../../tokens'

export type ToastTone = 'success' | 'info' | 'warning' | 'danger' | 'achievement'

interface ToastData {
  id: number
  tone: ToastTone
  title: string
  body?: string
  duration?: number
}

interface ToastContextValue { push: (t: Omit<ToastData, 'id'>) => void }

const ToastContext = createContext<ToastContextValue | null>(null)

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used inside <ToastProvider>')
  return ctx
}

const TONE: Record<ToastTone, { bg: string; text: string; icon: typeof Info }> = {
  success:     { bg: T.teal,       text: '#fff',       icon: CheckCircle2 },
  info:        { bg: T.sky,        text: '#fff',       icon: Info         },
  warning:     { bg: T.yellow,     text: T.fg.primary, icon: AlertTriangle },
  danger:      { bg: T.red,        text: '#fff',       icon: XCircle      },
  achievement: { bg: T.navy,       text: '#fff',       icon: Award        },
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastData[]>([])

  const push = useCallback((t: Omit<ToastData, 'id'>) => {
    const id = Date.now() + Math.random()
    setToasts(ts => [...ts, { ...t, id }])
    setTimeout(() => setToasts(ts => ts.filter(x => x.id !== id)), t.duration ?? 4000)
  }, [])

  return (
    <ToastContext.Provider value={{ push }}>
      {children}
      <div style={{
        position: 'fixed', bottom: 24, right: 24, zIndex: 9999,
        display: 'flex', flexDirection: 'column-reverse', gap: 10, pointerEvents: 'none',
      }}>
        <AnimatePresence>
          {toasts.map(t => <ToastItem key={t.id} data={t} onClose={() => setToasts(ts => ts.filter(x => x.id !== t.id))} />)}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}

function ToastItem({ data, onClose }: { data: ToastData; onClose: () => void }) {
  const tone = TONE[data.tone]
  const Icon = tone.icon

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 40, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 40, transition: { duration: 0.18 } }}
      transition={{ duration: 0.22, ease: [0.2, 0.8, 0.2, 1] }}
      style={{
        pointerEvents: 'auto',
        display: 'flex', gap: 12, alignItems: 'flex-start',
        minWidth: 280, maxWidth: 380,
        padding: '14px 16px',
        background: tone.bg, color: tone.text,
        borderRadius: T.radius.sm,
        boxShadow: '0 12px 32px rgba(51,51,51,0.14)',
        fontFamily: T.font,
      }}
    >
      <Icon size={18} style={{ marginTop: 1, flexShrink: 0 }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14, fontWeight: 700, lineHeight: 1.3 }}>{data.title}</div>
        {data.body && <div style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.5, marginTop: 2 }}>{data.body}</div>}
      </div>
      <button
        onClick={onClose}
        style={{ background: 'transparent', border: 'none', color: tone.text, cursor: 'pointer', padding: 2, opacity: 0.7, borderRadius: 4 }}
      >
        <X size={14} />
      </button>
    </motion.div>
  )
}
