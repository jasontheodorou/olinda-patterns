import { useState, type ReactNode } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'motion/react'
import './ExpandingPlane.css'
import { motionStyles, type ValenciaStyle } from '../../styles/motionStyles'
import { useReducedMotion } from '../../accessibility/reducedMotion'

type Item = { id: string; label: ReactNode; body: ReactNode }

type Props = {
  items: Item[]
  style?: ValenciaStyle
  className?: string
}

export function ExpandingPlane({ items, style = 'clear', className }: Props) {
  const [open, setOpen] = useState<string | null>(null)
  const reduce = useReducedMotion()
  const base = motionStyles[style]

  return (
    <LayoutGroup>
      <div className={`v-plane ${className ?? ''}`}>
        {items.map(item => (
          <motion.div
            key={item.id}
            layoutId={reduce ? undefined : `plane-${item.id}`}
            className={`v-plane__item ${open === item.id ? 'v-plane__item--open' : ''}`}
            transition={reduce ? { duration: 0 } : { type: 'spring', ...base.spring }}
          >
            <button
              className="v-plane__anchor"
              onClick={() => setOpen(open === item.id ? null : item.id)}
              aria-expanded={open === item.id}
              aria-controls={`plane-body-${item.id}`}
            >
              {item.label}
              <span className="v-plane__chevron" aria-hidden="true">
                {open === item.id ? '−' : '+'}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {open === item.id && (
                <motion.div
                  id={`plane-body-${item.id}`}
                  className="v-plane__body"
                  initial={reduce ? undefined : { height: 0, opacity: 0 }}
                  animate={reduce ? undefined : { height: 'auto', opacity: 1 }}
                  exit={reduce ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: base.duration, ease: base.ease }}
                >
                  <div className="v-plane__inner">{item.body}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </LayoutGroup>
  )
}
