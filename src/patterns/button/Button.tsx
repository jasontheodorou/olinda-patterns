import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { motion } from 'motion/react'
import { T } from '../../tokens'

export type ButtonVariant = 'primary' | 'outline' | 'subtle' | 'danger'
export type ButtonSize    = 'sm' | 'md' | 'lg'

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'ref'> {
  variant?: ButtonVariant
  size?: ButtonSize
  iconLeft?: ReactNode
  iconRight?: ReactNode
  fullWidth?: boolean
  loading?: boolean
  children: ReactNode
}

const SIZE: Record<ButtonSize, { padding: string; fontSize: number; height: number }> = {
  sm: { padding: '0 14px', fontSize: 13, height: 32 },
  md: { padding: '0 18px', fontSize: 14, height: 40 },
  lg: { padding: '0 24px', fontSize: 15, height: 48 },
}

const VARIANT: Record<ButtonVariant, { bg: string; text: string; border: string; hoverBg: string }> = {
  primary: { bg: T.navy,           text: T.fg.onDark,  border: T.navy,          hoverBg: T.navyDeep },
  outline: { bg: 'transparent',    text: T.fg.primary, border: T.fg.primary,    hoverBg: T.surface.cardAlt },
  subtle:  { bg: 'transparent',    text: T.fg.primary, border: 'transparent',   hoverBg: T.surface.cardAlt },
  danger:  { bg: T.red,            text: T.fg.onDark,  border: T.red,           hoverBg: '#A93226' },
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({
  variant = 'primary', size = 'md', iconLeft, iconRight, fullWidth, loading, disabled, children, ...rest
}, ref) {
  const s = SIZE[size]
  const v = VARIANT[variant]

  return (
    <motion.button
      ref={ref}
      whileTap={disabled || loading ? undefined : { scale: 0.97 }}
      transition={{ duration: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
      disabled={disabled || loading}
      {...(rest as any)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        gap: 8, height: s.height, padding: s.padding,
        fontFamily: T.font, fontSize: s.fontSize, fontWeight: 600, lineHeight: 1,
        cursor: disabled || loading ? 'not-allowed' : 'pointer',
        background: v.bg, color: v.text,
        border: `1px solid ${v.border}`,
        borderRadius: T.radius.pill,        // Pill by default — Transform brand rule
        opacity: disabled ? 0.5 : 1,
        transition: `background ${T.motion.base} ${T.motion.ease}, border-color ${T.motion.base} ${T.motion.ease}`,
        width: fullWidth ? '100%' : undefined,
        userSelect: 'none',
      }}
      onMouseEnter={e => { if (!disabled && !loading) e.currentTarget.style.background = v.hoverBg }}
      onMouseLeave={e => { e.currentTarget.style.background = v.bg }}
    >
      {loading
        ? <span style={{ width: 14, height: 14, border: `2px solid ${v.text}`, borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
        : iconLeft}
      {children}
      {!loading && iconRight}
      <style>{'@keyframes spin { to { transform: rotate(360deg) } }'}</style>
    </motion.button>
  )
})
