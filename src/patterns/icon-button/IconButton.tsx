import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { motion } from 'motion/react'
import { T } from '../../tokens'

export type IconButtonVariant = 'primary' | 'outline' | 'subtle'
export type IconButtonSize = 'sm' | 'md' | 'lg'

interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'ref'> {
  variant?: IconButtonVariant
  size?: IconButtonSize
  label: string
  children: ReactNode
}

const SIZE: Record<IconButtonSize, number> = { sm: 32, md: 40, lg: 48 }

const VARIANT: Record<IconButtonVariant, { bg: string; text: string; border: string; hoverBg: string }> = {
  primary: { bg: T.navy,        text: T.fg.onDark,  border: T.navy,       hoverBg: T.navyDeep },
  outline: { bg: 'transparent', text: T.fg.primary, border: T.fg.primary, hoverBg: T.surface.cardAlt },
  subtle:  { bg: 'transparent', text: T.fg.primary, border: 'transparent', hoverBg: T.surface.cardAlt },
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton({
  variant = 'subtle', size = 'md', label, children, disabled, ...rest
}, ref) {
  const s = SIZE[size]
  const v = VARIANT[variant]

  return (
    <motion.button
      ref={ref}
      whileTap={disabled ? undefined : { scale: 0.94 }}
      transition={{ duration: 0.12, ease: [0.2, 0.8, 0.2, 1] }}
      aria-label={label}
      disabled={disabled}
      {...(rest as any)}
      style={{
        width: s, height: s,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        background: v.bg, color: v.text,
        border: `1px solid ${v.border}`,
        borderRadius: T.radius.pill,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: `background ${T.motion.base} ${T.motion.ease}`,
      }}
      onMouseEnter={e => { if (!disabled) e.currentTarget.style.background = v.hoverBg }}
      onMouseLeave={e => { e.currentTarget.style.background = v.bg }}
    >
      {children}
    </motion.button>
  )
})
