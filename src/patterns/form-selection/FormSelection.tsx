import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react'
import { motion } from 'motion/react'
import { Check } from 'lucide-react'
import { T } from '../../tokens'

// ─── Checkbox ────────────────────────────────────────────────────────────────

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: ReactNode
  help?: string
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox({
  label, help, checked, disabled, id, ...rest
}, ref) {
  const cbId = id ?? rest.name
  return (
    <label htmlFor={cbId} style={{
      display: 'flex', gap: 12, alignItems: 'flex-start',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      fontFamily: T.font,
    }}>
      <span style={{ position: 'relative', display: 'inline-flex', flexShrink: 0, marginTop: 1 }}>
        <input
          ref={ref}
          id={cbId}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          {...rest}
          style={{ position: 'absolute', inset: 0, opacity: 0, cursor: disabled ? 'not-allowed' : 'pointer', margin: 0 }}
        />
        <motion.span
          animate={{ background: checked ? T.navy : T.surface.white, borderColor: checked ? T.navy : T.border.default }}
          transition={{ duration: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
          style={{
            width: 18, height: 18, borderRadius: 4, border: '1.5px solid',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          {checked && <Check size={12} strokeWidth={3} color="#fff" />}
        </motion.span>
      </span>
      <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span style={{ fontSize: 14, color: T.fg.primary, lineHeight: 1.4 }}>{label}</span>
        {help && <span style={{ fontSize: 12, color: T.fg.secondary }}>{help}</span>}
      </span>
    </label>
  )
})

// ─── Radio ───────────────────────────────────────────────────────────────────

interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: ReactNode
  help?: string
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio({
  label, help, checked, disabled, id, ...rest
}, ref) {
  const rId = id ?? `${rest.name}-${rest.value}`
  return (
    <label htmlFor={rId} style={{
      display: 'flex', gap: 12, alignItems: 'flex-start',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      fontFamily: T.font,
    }}>
      <span style={{ position: 'relative', display: 'inline-flex', flexShrink: 0, marginTop: 1 }}>
        <input
          ref={ref}
          id={rId}
          type="radio"
          checked={checked}
          disabled={disabled}
          {...rest}
          style={{ position: 'absolute', inset: 0, opacity: 0, cursor: disabled ? 'not-allowed' : 'pointer', margin: 0 }}
        />
        <motion.span
          animate={{ borderColor: checked ? T.navy : T.border.default }}
          transition={{ duration: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
          style={{
            width: 18, height: 18, borderRadius: '50%', border: '1.5px solid',
            background: T.surface.white,
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <motion.span
            animate={{ scale: checked ? 1 : 0 }}
            transition={{ duration: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
            style={{ width: 8, height: 8, borderRadius: '50%', background: T.navy }}
          />
        </motion.span>
      </span>
      <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span style={{ fontSize: 14, color: T.fg.primary, lineHeight: 1.4 }}>{label}</span>
        {help && <span style={{ fontSize: 12, color: T.fg.secondary }}>{help}</span>}
      </span>
    </label>
  )
})

// ─── Switch ──────────────────────────────────────────────────────────────────

interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: ReactNode
  help?: string
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch({
  label, help, checked, disabled, id, ...rest
}, ref) {
  const sId = id ?? rest.name
  return (
    <label htmlFor={sId} style={{
      display: 'flex', gap: 12, alignItems: 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      fontFamily: T.font,
    }}>
      <span style={{ position: 'relative', display: 'inline-flex' }}>
        <input
          ref={ref}
          id={sId}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          {...rest}
          role="switch"
          style={{ position: 'absolute', inset: 0, opacity: 0, cursor: disabled ? 'not-allowed' : 'pointer', margin: 0 }}
        />
        <motion.span
          animate={{ background: checked ? T.navy : T.border.default }}
          transition={{ duration: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
          style={{
            width: 40, height: 22, borderRadius: 999,
            position: 'relative', display: 'inline-block',
          }}
        >
          <motion.span
            animate={{ x: checked ? 20 : 2 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            style={{
              position: 'absolute', top: 2,
              width: 18, height: 18, borderRadius: '50%',
              background: '#fff',
              boxShadow: '0 1px 3px rgba(51,51,51,0.15)',
            }}
          />
        </motion.span>
      </span>
      {label && (
        <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <span style={{ fontSize: 14, color: T.fg.primary, lineHeight: 1.4 }}>{label}</span>
          {help && <span style={{ fontSize: 12, color: T.fg.secondary }}>{help}</span>}
        </span>
      )}
    </label>
  )
})
