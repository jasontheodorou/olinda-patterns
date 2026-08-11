import { motion } from 'motion/react'
import { Check, ArrowRight } from 'lucide-react'
import { T } from '../../tokens'

// ─── Types ───────────────────────────────────────────────────────────────────

export type CalloutTint = 'tool' | 'involve' | 'best-practice'

export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'callout'; variant: CalloutTint; body: string; ctaLabel?: string; ctaHref?: string }

export interface CardResource {
  label: string
  meta?: string
  href?: string
}

export interface CardResourceGroup {
  title: string
  items: CardResource[]
}

export interface LessonCardData {
  title: string
  minutes: number
  content: ContentBlock[]
  resources?: CardResourceGroup[]
}

interface LessonCardProps {
  card: LessonCardData
  cardIndex: number
  totalCards: number
  isComplete: boolean
  onToggleComplete: () => void
}

// ─── LessonCard (mirrors rsd-playbook CardView) ──────────────────────────────

export function LessonCard({ card, cardIndex, totalCards, isComplete, onToggleComplete }: LessonCardProps) {
  return (
    <div style={{ fontFamily: T.font, display: 'flex', flexDirection: 'column', gap: T.space.lg }}>

      <div style={{ display: 'flex', flexDirection: 'column', gap: T.space.xs }}>
        <div style={{
          fontSize: 11, fontWeight: 700, textTransform: 'uppercase',
          color: T.fg.secondary, letterSpacing: '0.06em',
        }}>
          Card {cardIndex} of {totalCards} · {card.minutes} min
        </div>
        <h2 style={{
          fontSize: 28, fontWeight: 700, color: T.fg.primary,
          lineHeight: 1.25, margin: 0,
        }}>
          {card.title}
        </h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: T.space.md }}>
        {card.content.map((block, i) => <Block key={i} block={block} />)}
      </div>

      {card.resources && card.resources.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: T.space.xl, paddingTop: T.space.xl, borderTop: `1px solid ${T.border.default}` }}>
          {card.resources.map((g, i) => <ResourceGroup key={i} group={g} />)}
        </div>
      )}

      {/* Complete toggle */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginTop: T.space.md, paddingTop: T.space.lg,
        borderTop: `1px solid ${T.border.default}`,
      }}>
        <span style={{
          fontSize: 13,
          color: isComplete ? T.navy : T.fg.secondary,
          fontWeight: isComplete ? 700 : 400,
        }}>
          {isComplete ? 'Completed' : 'Not yet complete'}
        </span>
        <CompleteButton isComplete={isComplete} onClick={onToggleComplete} />
      </div>
    </div>
  )
}

// ─── Content blocks ──────────────────────────────────────────────────────────

function Block({ block }: { block: ContentBlock }) {
  if (block.type === 'paragraph') {
    return <p style={{ color: T.fg.primary, fontSize: 15, lineHeight: 1.6, margin: 0 }}>{block.text}</p>
  }
  if (block.type === 'heading') {
    return <h3 style={{ fontSize: 20, fontWeight: 700, color: T.fg.primary, lineHeight: 1.3, margin: `${T.space.sm}px 0 0` }}>{block.text}</h3>
  }
  return <Callout variant={block.variant} body={block.body} ctaLabel={block.ctaLabel} ctaHref={block.ctaHref} />
}

// ─── Callout (was Alert) ─────────────────────────────────────────────────────

const CALLOUT_LABEL: Record<CalloutTint, string> = {
  tool:            'Tool',
  involve:         'Involve',
  'best-practice': 'Best practice',
}

const CALLOUT_BG: Record<CalloutTint, string> = {
  tool:            T.soft.mist,
  involve:         T.soft.blush,
  'best-practice': T.soft.yellow,
}

export function Callout({
  variant, body, ctaLabel, ctaHref,
}: { variant: CalloutTint; body: string; ctaLabel?: string; ctaHref?: string }) {
  return (
    <div style={{
      background: CALLOUT_BG[variant],
      padding: `${T.space.lg}px ${T.space.lg}px`,
      borderRadius: T.radius.md,
      display: 'flex', flexDirection: 'column', gap: T.space.md, alignItems: 'flex-start',
      fontFamily: T.font,
    }}>
      <div style={{
        fontSize: 11, fontWeight: 700, textTransform: 'uppercase',
        color: T.fg.secondary, letterSpacing: '0.1em',
      }}>
        {CALLOUT_LABEL[variant]}
      </div>
      <div style={{ fontSize: 15, color: T.fg.primary, lineHeight: 1.6 }}>{body}</div>
      {ctaLabel && (
        <a
          href={ctaHref}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontSize: 13, fontWeight: 600, color: T.navy, textDecoration: 'none',
            marginTop: 4,
          }}
        >
          {ctaLabel} <ArrowRight size={14} />
        </a>
      )}
    </div>
  )
}

// ─── Resources ───────────────────────────────────────────────────────────────

function ResourceGroup({ group }: { group: CardResourceGroup }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: T.space.md }}>
      <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', color: T.fg.secondary, letterSpacing: '0.06em' }}>
        {group.title}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: T.space.sm }}>
        {group.items.map((r, i) => (
          <a
            key={i}
            href={r.href}
            style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: T.space.md,
              padding: `${T.space.md}px ${T.space.md}px`, background: T.surface.offWhite,
              border: `1px solid ${T.border.default}`, borderRadius: T.radius.sm,
              textDecoration: 'none',
              transition: `background ${T.motion.base} ${T.motion.ease}`,
            }}
            onMouseEnter={e => { e.currentTarget.style.background = T.surface.cardAlt }}
            onMouseLeave={e => { e.currentTarget.style.background = T.surface.offWhite }}
          >
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: T.fg.primary }}>{r.label}</div>
              {r.meta && <div style={{ fontSize: 12, color: T.fg.secondary, marginTop: 2 }}>{r.meta}</div>}
            </div>
            <ArrowRight size={16} color={T.fg.secondary} />
          </a>
        ))}
      </div>
    </div>
  )
}

// ─── Complete button ─────────────────────────────────────────────────────────

function CompleteButton({ isComplete, onClick }: { isComplete: boolean; onClick: () => void }) {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
      onClick={onClick}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        height: 36, padding: '0 16px',
        borderRadius: T.radius.pill,
        fontFamily: T.font, fontSize: 13, fontWeight: 600,
        cursor: 'pointer',
        background: isComplete ? 'transparent' : T.navy,
        color: isComplete ? T.fg.primary : T.fg.onDark,
        border: `1px solid ${isComplete ? T.fg.primary : T.navy}`,
        transition: `background ${T.motion.base} ${T.motion.ease}`,
      }}
    >
      {isComplete
        ? 'Mark as not complete'
        : (<><Check size={14} strokeWidth={3} />Mark as complete</>)}
    </motion.button>
  )
}
