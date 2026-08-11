import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { Badge } from '../badge/Badge'
import { T } from '../../tokens'

const HOVER = { y: -2 } as const
const HOVER_TRANSITION = { type: 'spring' as const, stiffness: 400, damping: 24 }

// ─── IconCard ────────────────────────────────────────────────────────────────

interface IconCardProps {
  icon: ReactNode
  title: string
  description?: string
  tint?: 'mist' | 'blush' | 'yellow' | 'plain'
  onClick?: () => void
}

const TINT_BG = {
  mist: T.soft.mist, blush: T.soft.blush, yellow: T.soft.yellow, plain: T.surface.white,
}

export function IconCard({ icon, title, description, tint = 'plain', onClick }: IconCardProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={HOVER} whileTap={{ scale: 0.99 }} transition={HOVER_TRANSITION}
      style={{
        display: 'flex', flexDirection: 'column', gap: 16,
        width: '100%', textAlign: 'left', cursor: 'pointer',
        background: TINT_BG[tint],
        border: `1px solid ${tint === 'plain' ? T.border.default : 'transparent'}`,
        borderRadius: T.radius.md,
        padding: 20,
        fontFamily: T.font,
      }}
    >
      <div style={{
        width: 44, height: 44, borderRadius: '50%',
        background: tint === 'plain' ? T.surface.cardAlt : T.surface.white,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        color: T.navy,
      }}>
        {icon}
      </div>
      <div>
        <h3 style={{ margin: '0 0 6px', fontSize: 16, fontWeight: 700, color: T.fg.primary, lineHeight: 1.3 }}>{title}</h3>
        {description && <p style={{ margin: 0, fontSize: 13, color: T.fg.secondary, lineHeight: 1.55 }}>{description}</p>}
      </div>
    </motion.button>
  )
}

// ─── ImageCard ───────────────────────────────────────────────────────────────

interface ImageCardProps {
  image: string
  title: string
  description?: string
  eyebrow?: string
  badge?: string
  onClick?: () => void
}

export function ImageCard({ image, title, description, eyebrow, badge, onClick }: ImageCardProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={HOVER} whileTap={{ scale: 0.99 }} transition={HOVER_TRANSITION}
      style={{
        display: 'flex', flexDirection: 'column',
        width: '100%', textAlign: 'left', cursor: 'pointer',
        background: T.surface.white,
        border: `1px solid ${T.border.default}`,
        borderRadius: T.radius.md,
        overflow: 'hidden',
        fontFamily: T.font,
        padding: 0,
      }}
    >
      <div style={{ aspectRatio: '16/9', background: `url(${image}) center/cover`, position: 'relative' }}>
        {badge && (
          <div style={{ position: 'absolute', top: 12, left: 12 }}>
            <Badge tone="brand" variant="solid" size="sm">{badge}</Badge>
          </div>
        )}
      </div>
      <div style={{ padding: 20 }}>
        {eyebrow && <p style={{ margin: '0 0 6px', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: T.fg.secondary }}>{eyebrow}</p>}
        <h3 style={{ margin: '0 0 8px', fontSize: 17, fontWeight: 700, color: T.fg.primary, lineHeight: 1.3 }}>{title}</h3>
        {description && <p style={{ margin: 0, fontSize: 13, color: T.fg.secondary, lineHeight: 1.55 }}>{description}</p>}
      </div>
    </motion.button>
  )
}

// ─── ThumbnailCard ───────────────────────────────────────────────────────────

interface ThumbnailCardProps {
  thumbnail: ReactNode
  title: string
  meta?: string
  onClick?: () => void
}

export function ThumbnailCard({ thumbnail, title, meta, onClick }: ThumbnailCardProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={HOVER} whileTap={{ scale: 0.99 }} transition={HOVER_TRANSITION}
      style={{
        display: 'flex', alignItems: 'center', gap: 14,
        width: '100%', textAlign: 'left', cursor: 'pointer',
        background: T.surface.white,
        border: `1px solid ${T.border.default}`,
        borderRadius: T.radius.md,
        padding: '12px 14px',
        fontFamily: T.font,
      }}
    >
      <div style={{
        width: 48, height: 48, borderRadius: T.radius.sm, flexShrink: 0,
        background: T.surface.cardAlt,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        color: T.navy,
      }}>
        {thumbnail}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: T.fg.primary, lineHeight: 1.3, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{title}</div>
        {meta && <div style={{ fontSize: 12, color: T.fg.secondary, marginTop: 2 }}>{meta}</div>}
      </div>
      <ArrowRight size={16} color={T.fg.secondary} />
    </motion.button>
  )
}
