import { T } from '../../tokens'

interface SpinnerProps {
  size?: number
  strokeWidth?: number
  color?: string
  label?: string
}

export function Spinner({ size = 24, strokeWidth = 3, color = T.navy, label }: SpinnerProps) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: T.font, fontSize: 13, color: T.fg.secondary }}>
      <span
        style={{
          width: size, height: size,
          border: `${strokeWidth}px solid ${T.border.default}`,
          borderTopColor: color,
          borderRadius: '50%',
          animation: 'spinner-spin 0.8s linear infinite',
          display: 'inline-block',
        }}
      />
      {label && <span>{label}</span>}
      <style>{'@keyframes spinner-spin { to { transform: rotate(360deg) } }'}</style>
    </span>
  )
}
