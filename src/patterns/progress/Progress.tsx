import { motion } from 'motion/react'
import { T } from '../../tokens'

const EASE = [0.2, 0.8, 0.2, 1] as const

// ─── ProgressBar ─────────────────────────────────────────────────────────────

interface ProgressBarProps {
  value: number
  size?: 'sm' | 'md' | 'lg'
  showLabel?: boolean
  tone?: 'default' | 'success'
  label?: string
}

const BAR_HEIGHT = { sm: 3, md: 6, lg: 10 }

export function ProgressBar({ value, size = 'md', showLabel, tone = 'default', label }: ProgressBarProps) {
  const v = Math.max(0, Math.min(100, value))
  const fill = tone === 'success' || v === 100 ? T.teal : T.navy

  return (
    <div style={{ fontFamily: T.font, width: '100%' }}>
      {(showLabel || label) && (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
          <span style={{ fontSize: 13, color: T.fg.primary, fontWeight: 600 }}>{label ?? 'Progress'}</span>
          {showLabel && <span style={{ fontSize: 13, color: T.fg.secondary }}>{Math.round(v)}%</span>}
        </div>
      )}
      <div style={{ height: BAR_HEIGHT[size], background: T.border.default, position: 'relative', borderRadius: 999, overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${v}%` }}
          transition={{ duration: 0.6, ease: EASE }}
          style={{ height: '100%', background: fill, borderRadius: 999 }}
        />
      </div>
    </div>
  )
}

// ─── ProgressRing ────────────────────────────────────────────────────────────

interface ProgressRingProps {
  value: number
  size?: number
  strokeWidth?: number
  label?: string
  sublabel?: string
}

export function ProgressRing({ value, size = 88, strokeWidth = 8, label, sublabel }: ProgressRingProps) {
  const v = Math.max(0, Math.min(100, value))
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const complete = v === 100
  const color = complete ? T.teal : T.navy

  return (
    <div style={{ position: 'relative', width: size, height: size, fontFamily: T.font }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size/2} cy={size/2} r={radius} strokeWidth={strokeWidth} stroke={T.border.default} fill="none" />
        <motion.circle
          cx={size/2} cy={size/2} r={radius}
          strokeWidth={strokeWidth}
          stroke={color}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference - (v / 100) * circumference }}
          transition={{ duration: 0.9, ease: EASE }}
        />
      </svg>
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
      }}>
        <span style={{ fontSize: size / 4.5, fontWeight: 700, color: T.fg.primary, lineHeight: 1 }}>
          {label ?? `${Math.round(v)}%`}
        </span>
        {sublabel && <span style={{ fontSize: 11, color: T.fg.secondary, marginTop: 2 }}>{sublabel}</span>}
      </div>
    </div>
  )
}

// ─── CardProgress ────────────────────────────────────────────────────────────
// New: the "Card X of Y" pattern used at the top of every lesson card.

interface CardProgressProps {
  current: number
  total: number
}

export function CardProgress({ current, total }: CardProgressProps) {
  const dots = Array.from({ length: total }, (_, i) => i)
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: T.font }}>
      <div style={{ display: 'flex', gap: 4 }}>
        {dots.map(i => {
          const isDone   = i < current - 1
          const isActive = i === current - 1
          return (
            <motion.div
              key={i}
              layout
              animate={{
                width: isActive ? 20 : 6,
                background: isDone || isActive ? T.navy : T.border.default,
              }}
              transition={{ duration: 0.3, ease: EASE }}
              style={{ height: 6, borderRadius: 999 }}
            />
          )
        })}
      </div>
      <span style={{ fontSize: 12, fontWeight: 600, color: T.fg.secondary }}>
        {current} of {total}
      </span>
    </div>
  )
}
