import { useState, type ReactNode } from 'react'
import { motion } from 'motion/react'
import { T } from '../../tokens'

export interface TabItem {
  id: string
  label: string
  icon?: ReactNode
  content: ReactNode
  badge?: string | number
}

interface TabsProps {
  tabs: TabItem[]
  defaultId?: string
  variant?: 'underline' | 'pill'
}

export function Tabs({ tabs, defaultId, variant = 'underline' }: TabsProps) {
  const [active, setActive] = useState(defaultId ?? tabs[0]?.id)
  const activeTab = tabs.find(t => t.id === active) ?? tabs[0]

  return (
    <div style={{ fontFamily: T.font }}>
      <div style={{
        display: 'flex', gap: variant === 'pill' ? 4 : 0,
        borderBottom: variant === 'underline' ? `1px solid ${T.border.default}` : 'none',
        marginBottom: 20,
        padding: variant === 'pill' ? 4 : 0,
        background: variant === 'pill' ? T.surface.cardAlt : 'transparent',
        borderRadius: variant === 'pill' ? T.radius.md : 0,
        width: variant === 'pill' ? 'fit-content' : 'auto',
      }}>
        {tabs.map(t => {
          const isActive = t.id === active
          return (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              style={{
                position: 'relative',
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: variant === 'pill' ? '6px 14px' : '10px 4px',
                margin: variant === 'underline' ? '0 16px 0 0' : 0,
                background: variant === 'pill' && isActive ? T.surface.white : 'transparent',
                border: 'none',
                fontFamily: T.font, fontSize: 14, fontWeight: isActive ? 700 : 600,
                color: isActive ? T.fg.primary : T.fg.secondary,
                cursor: 'pointer',
                borderRadius: variant === 'pill' ? T.radius.sm : 0,
                transition: `color ${T.motion.fast} ${T.motion.ease}, background ${T.motion.fast} ${T.motion.ease}`,
                boxShadow: variant === 'pill' && isActive ? '0 1px 2px rgba(51,51,51,0.06)' : 'none',
              }}
            >
              {t.icon}
              {t.label}
              {t.badge != null && (
                <span style={{
                  fontSize: 11, fontWeight: 700, padding: '1px 6px',
                  background: isActive ? T.navy : T.border.default,
                  color: isActive ? '#fff' : T.fg.primary,
                  borderRadius: T.radius.pill,
                }}>{t.badge}</span>
              )}
              {variant === 'underline' && isActive && (
                <motion.div
                  layoutId="tab-underline"
                  style={{ position: 'absolute', bottom: -1, left: 0, right: 0, height: 2, background: T.navy }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          )
        })}
      </div>

      <div>{activeTab?.content}</div>
    </div>
  )
}
