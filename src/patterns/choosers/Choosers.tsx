import { useState, useRef, useEffect, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown, Check } from 'lucide-react'
import { T } from '../../tokens'

// ─── Select (native-styled dropdown chooser) ─────────────────────────────────

export interface SelectOption {
  value: string
  label: string
}

interface SelectProps {
  label?: string
  help?: string
  value: string
  onChange: (v: string) => void
  options: SelectOption[]
  placeholder?: string
  disabled?: boolean
}

export function Select({ label, help, value, onChange, options, placeholder = 'Select…', disabled }: SelectProps) {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [])

  const current = options.find(o => o.value === value)

  return (
    <div ref={wrapRef} style={{ position: 'relative', fontFamily: T.font, display: 'block' }}>
      {label && <div style={{ fontSize: 13, fontWeight: 600, color: T.fg.primary, marginBottom: 6 }}>{label}</div>}
      <button
        type="button"
        onClick={() => !disabled && setOpen(v => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        disabled={disabled}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: 40, padding: '0 14px',
          background: disabled ? T.surface.cardAlt : T.surface.white,
          border: `1px solid ${open ? T.navy : T.border.default}`,
          borderRadius: T.radius.sm,
          fontFamily: T.font, fontSize: 14,
          color: current ? T.fg.primary : T.fg.secondary,
          cursor: disabled ? 'not-allowed' : 'pointer',
          textAlign: 'left',
          transition: `border-color ${T.motion.fast} ${T.motion.ease}`,
          boxShadow: open ? '0 0 0 2px rgba(33, 61, 89, 0.15)' : 'none',
        }}
      >
        {current?.label ?? placeholder}
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} style={{ display: 'inline-flex', color: T.fg.secondary }}>
          <ChevronDown size={16} />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
            style={{
              position: 'absolute', top: 'calc(100% + 6px)', left: 0, right: 0,
              margin: 0, padding: 6, listStyle: 'none', zIndex: 100,
              background: T.surface.white,
              border: `1px solid ${T.border.default}`,
              borderRadius: T.radius.sm,
              boxShadow: '0 8px 24px rgba(51,51,51,0.10)',
              maxHeight: 280, overflowY: 'auto',
            }}
          >
            {options.map(o => {
              const selected = o.value === value
              return (
                <li key={o.value}>
                  <button
                    type="button"
                    onClick={() => { onChange(o.value); setOpen(false) }}
                    role="option"
                    aria-selected={selected}
                    style={{
                      width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '8px 10px',
                      background: selected ? T.surface.cardAlt : 'transparent',
                      border: 'none', borderRadius: 4,
                      fontFamily: T.font, fontSize: 14, color: T.fg.primary,
                      cursor: 'pointer', textAlign: 'left',
                      transition: `background ${T.motion.fast} ${T.motion.ease}`,
                    }}
                    onMouseEnter={e => { if (!selected) e.currentTarget.style.background = T.surface.offWhite }}
                    onMouseLeave={e => { if (!selected) e.currentTarget.style.background = 'transparent' }}
                  >
                    {o.label}
                    {selected && <Check size={14} color={T.navy} />}
                  </button>
                </li>
              )
            })}
          </motion.ul>
        )}
      </AnimatePresence>

      {help && <div style={{ fontSize: 12, color: T.fg.secondary, marginTop: 6 }}>{help}</div>}
    </div>
  )
}

// ─── Dropdown (menu triggered from any element) ──────────────────────────────

export interface DropdownItem {
  label: string
  icon?: ReactNode
  onClick?: () => void
  destructive?: boolean
  disabled?: boolean
  divider?: boolean
}

interface DropdownProps {
  trigger: ReactNode
  items: DropdownItem[]
  align?: 'left' | 'right'
}

export function Dropdown({ trigger, items, align = 'right' }: DropdownProps) {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [])

  return (
    <div ref={wrapRef} style={{ position: 'relative', display: 'inline-flex' }}>
      <div onClick={() => setOpen(v => !v)} style={{ display: 'inline-flex' }}>{trigger}</div>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
            style={{
              position: 'absolute', top: 'calc(100% + 6px)',
              [align]: 0 as any,
              margin: 0, padding: 6, listStyle: 'none', zIndex: 100,
              minWidth: 200,
              background: T.surface.white,
              border: `1px solid ${T.border.default}`,
              borderRadius: T.radius.sm,
              boxShadow: '0 8px 24px rgba(51,51,51,0.10)',
              fontFamily: T.font,
            }}
          >
            {items.map((item, i) => item.divider ? (
              <li key={i} style={{ height: 1, background: T.border.default, margin: '4px 0' }} />
            ) : (
              <li key={i}>
                <button
                  type="button"
                  onClick={() => { if (!item.disabled) { item.onClick?.(); setOpen(false) } }}
                  disabled={item.disabled}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center', gap: 10,
                    padding: '8px 10px',
                    background: 'transparent', border: 'none', borderRadius: 4,
                    fontFamily: T.font, fontSize: 14,
                    color: item.destructive ? T.red : item.disabled ? T.fg.muted : T.fg.primary,
                    cursor: item.disabled ? 'not-allowed' : 'pointer',
                    textAlign: 'left',
                    opacity: item.disabled ? 0.6 : 1,
                    transition: `background ${T.motion.fast} ${T.motion.ease}`,
                  }}
                  onMouseEnter={e => { if (!item.disabled) e.currentTarget.style.background = T.surface.cardAlt }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
                >
                  {item.icon && <span style={{ display: 'inline-flex', color: 'inherit' }}>{item.icon}</span>}
                  {item.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}
