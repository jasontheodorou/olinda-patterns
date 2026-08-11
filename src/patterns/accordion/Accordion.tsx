import { useState, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import { T } from '../../tokens'

export type AccordionItem = {
  title: string
  content: ReactNode
  disabled?: boolean
}

type Variant = 'default' | 'border'
type Density = 'compact' | 'default' | 'spacious'

interface AccordionProps {
  items: AccordionItem[]
  variant?: Variant
  density?: Density
  allowMultiple?: boolean
  defaultOpen?: number[]
}

const HEADER_PADDING: Record<Density, string> = {
  compact: '12px 16px', default: '20px 20px', spacious: '28px 24px',
}
const CONTENT_PADDING: Record<Density, string> = {
  compact: '0 16px 12px', default: '0 20px 20px', spacious: '0 24px 28px',
}

const EASE = [0.2, 0.8, 0.2, 1] as const

export function Accordion({
  items, variant = 'default', density = 'default', allowMultiple = false, defaultOpen = [],
}: AccordionProps) {
  const [open, setOpen] = useState<number[]>(defaultOpen)

  const toggle = (i: number) => {
    if (open.includes(i)) setOpen(open.filter(x => x !== i))
    else setOpen(allowMultiple ? [...open, i] : [i])
  }

  const isBordered = variant === 'border'

  return (
    <div style={{
      border:       isBordered ? `1px solid ${T.border.default}` : 'none',
      borderRadius: isBordered ? T.radius.md : 0,
      overflow:     isBordered ? 'hidden' : 'visible',
      background:   isBordered ? T.surface.white : 'transparent',
    }}>
      {items.map((item, i) => (
        <Item
          key={i}
          item={item}
          isOpen={open.includes(i)}
          onToggle={() => !item.disabled && toggle(i)}
          density={density}
          isLast={i === items.length - 1}
        />
      ))}
    </div>
  )
}

function Item({
  item, isOpen, onToggle, density, isLast,
}: {
  item: AccordionItem
  isOpen: boolean
  onToggle: () => void
  density: Density
  isLast: boolean
}) {
  const { title, content, disabled } = item

  return (
    <div style={{ borderBottom: isLast ? 'none' : `1px solid ${T.border.default}` }}>
      <button
        onClick={onToggle}
        disabled={disabled}
        aria-expanded={isOpen}
        style={{
          width: '100%',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 16, padding: HEADER_PADDING[density],
          background: 'transparent', border: 'none',
          fontFamily: T.font, fontSize: 16, fontWeight: 700,
          color: disabled ? T.fg.muted : T.fg.primary,
          textAlign: 'left',
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.5 : 1,
          transition: `background ${T.motion.fast} ${T.motion.ease}`,
        }}
        onMouseEnter={e => { if (!disabled) e.currentTarget.style.background = T.surface.cardAlt }}
        onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
      >
        {title}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.22, ease: EASE }}
          style={{ display: 'inline-flex', flexShrink: 0 }}
        >
          <ChevronDown size={20} strokeWidth={2} color={disabled ? T.fg.muted : T.fg.primary} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: EASE }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ padding: CONTENT_PADDING[density], fontFamily: T.font, fontSize: 15, color: T.fg.primary, lineHeight: 1.65 }}>
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
