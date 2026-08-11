import type { ReactNode } from 'react'
import { T } from '../../tokens'

export type BadgeTone = 'neutral' | 'success' | 'warning' | 'info' | 'accent' | 'brand'
export type BadgeStyle = 'solid' | 'soft' | 'outline'
export type BadgeSize = 'sm' | 'md'

interface BadgeProps {
  tone?: BadgeTone
  variant?: BadgeStyle
  size?: BadgeSize
  icon?: ReactNode
  children: ReactNode
}

const TONE: Record<BadgeTone, { solid: string; soft: string; text: string }> = {
  neutral: { solid: T.fg.primary,   soft: T.surface.cardAlt, text: T.fg.primary },
  success: { solid: T.teal,         soft: '#E5EDEE',         text: '#26372D' },
  warning: { solid: T.yellow,       soft: T.soft.yellow,     text: '#5E5320' },
  info:    { solid: T.sky,          soft: T.soft.mist,       text: '#1E3D48' },
  accent:  { solid: T.purple,       soft: '#F2EBF6',         text: T.purple },
  brand:   { solid: T.navy,         soft: '#D6E2EC',         text: T.navy },
}

export function Badge({
  tone = 'neutral', variant = 'soft', size = 'md', icon, children,
}: BadgeProps) {
  const t = TONE[tone]
  const isSolid = variant === 'solid'
  const isOutline = variant === 'outline'

  const scheme = isSolid
    ? { background: t.solid, color: '#fff', border: `1px solid ${t.solid}` }
    : isOutline
      ? { background: 'transparent', color: t.text, border: `1px solid ${t.text}` }
      : { background: t.soft, color: t.text, border: '1px solid transparent' }

  if (isSolid && tone === 'warning') scheme.color = T.fg.primary

  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: size === 'sm' ? '2px 8px' : '4px 10px',
      fontFamily: T.font,
      fontSize: size === 'sm' ? 11 : 12,
      fontWeight: 600,
      letterSpacing: 0.2,
      lineHeight: 1.4,
      borderRadius: T.radius.pill,
      whiteSpace: 'nowrap',
      ...scheme,
    }}>
      {icon && <span style={{ display: 'inline-flex' }}>{icon}</span>}
      {children}
    </span>
  )
}
