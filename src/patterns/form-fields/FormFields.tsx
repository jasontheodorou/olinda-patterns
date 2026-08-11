import { forwardRef, useState, type InputHTMLAttributes, type TextareaHTMLAttributes, type ReactNode } from 'react'
import { T } from '../../tokens'

const LABEL_STYLE: React.CSSProperties = {
  display: 'block',
  fontFamily: T.font, fontSize: 13, fontWeight: 600, color: T.fg.primary,
  marginBottom: 6,
}

const HELP_STYLE: React.CSSProperties = {
  fontFamily: T.font, fontSize: 12, color: T.fg.secondary, marginTop: 6,
}

const ERROR_STYLE: React.CSSProperties = {
  fontFamily: T.font, fontSize: 12, color: T.red, marginTop: 6, fontWeight: 600,
}

const baseFieldStyle = (invalid: boolean, focused: boolean, disabled: boolean): React.CSSProperties => ({
  width: '100%',
  fontFamily: T.font, fontSize: 14, lineHeight: 1.4,
  color: T.fg.primary,
  background: disabled ? T.surface.cardAlt : T.surface.white,
  border: `1px solid ${invalid ? T.red : focused ? T.navy : T.border.default}`,
  borderRadius: T.radius.sm,
  boxShadow: focused && !invalid ? `0 0 0 2px rgba(33, 61, 89, 0.15)` : 'none',
  outline: 'none',
  transition: `border-color ${T.motion.fast} ${T.motion.ease}, box-shadow ${T.motion.fast} ${T.motion.ease}`,
  cursor: disabled ? 'not-allowed' : 'text',
})

// ─── Input ───────────────────────────────────────────────────────────────────

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  help?: string
  error?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input({
  label, help, error, leftIcon, rightIcon, disabled, id, ...rest
}, ref) {
  const [focused, setFocused] = useState(false)
  const inputId = id ?? rest.name

  return (
    <label htmlFor={inputId} style={{ display: 'block' }}>
      {label && <span style={LABEL_STYLE}>{label}</span>}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {leftIcon && <span style={{ position: 'absolute', left: 12, color: T.fg.secondary, display: 'inline-flex', pointerEvents: 'none' }}>{leftIcon}</span>}
        <input
          ref={ref}
          id={inputId}
          disabled={disabled}
          {...rest}
          onFocus={e => { setFocused(true); rest.onFocus?.(e) }}
          onBlur={e => { setFocused(false); rest.onBlur?.(e) }}
          style={{
            ...baseFieldStyle(!!error, focused, !!disabled),
            padding: `10px ${rightIcon ? 40 : 14}px 10px ${leftIcon ? 40 : 14}px`,
            height: 40,
          }}
        />
        {rightIcon && <span style={{ position: 'absolute', right: 12, color: T.fg.secondary, display: 'inline-flex', pointerEvents: 'none' }}>{rightIcon}</span>}
      </div>
      {error ? <div style={ERROR_STYLE}>{error}</div> : help ? <div style={HELP_STYLE}>{help}</div> : null}
    </label>
  )
})

// ─── Textarea ────────────────────────────────────────────────────────────────

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  help?: string
  error?: string
  showCounter?: boolean
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea({
  label, help, error, showCounter, disabled, id, maxLength, value, ...rest
}, ref) {
  const [focused, setFocused] = useState(false)
  const taId = id ?? rest.name
  const count = typeof value === 'string' ? value.length : 0

  return (
    <label htmlFor={taId} style={{ display: 'block' }}>
      {label && <span style={LABEL_STYLE}>{label}</span>}
      <textarea
        ref={ref}
        id={taId}
        disabled={disabled}
        value={value}
        maxLength={maxLength}
        {...rest}
        onFocus={e => { setFocused(true); rest.onFocus?.(e) }}
        onBlur={e => { setFocused(false); rest.onBlur?.(e) }}
        style={{
          ...baseFieldStyle(!!error, focused, !!disabled),
          padding: '10px 14px',
          minHeight: 96,
          resize: 'vertical',
        }}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
        <div style={{ flex: 1 }}>
          {error ? <div style={ERROR_STYLE}>{error}</div> : help ? <div style={HELP_STYLE}>{help}</div> : null}
        </div>
        {showCounter && maxLength && (
          <div style={{ ...HELP_STYLE, whiteSpace: 'nowrap' }}>{count} / {maxLength}</div>
        )}
      </div>
    </label>
  )
})
