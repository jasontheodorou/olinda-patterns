import type { ValenciaTheme } from './contract'

export const defaultTheme: ValenciaTheme = {
  colour: {
    background: '#F6F2F5',
    surface:    '#FFFFFF',
    text:       '#0F0F0F',
    muted:      '#5C5C5C',
    primary:    '#EA6D2C',
    accent:     '#5040E3',
  },
  type: {
    display: "'Inter', arial, sans-serif",
    body:    "'Inter', arial, sans-serif",
    mono:    "ui-monospace, 'SF Mono', Menlo, Monaco, monospace",
  },
  radius: {
    small:  6,
    medium: 14,
    large:  28,
  },
  spacing: {
    page:    'clamp(24px, 4vw, 48px)',
    section: 'clamp(48px, 8vw, 128px)',
  },
}
