import type { ValenciaTheme } from './contract'

export const defaultTheme: ValenciaTheme = {
  colour: {
    background: '#F4F4EF',
    surface:    '#FFFFFF',
    text:       '#101010',
    muted:      '#6B6B6B',
    primary:    '#2946FF',
    accent:     '#FF5A3C',
  },
  type: {
    display: "'Inter', arial, sans-serif",
    body:    "'Inter', arial, sans-serif",
    mono:    "ui-monospace, 'SF Mono', Menlo, Monaco, monospace",
  },
  radius: {
    small:  4,
    medium: 10,
    large:  20,
  },
  spacing: {
    page:    'clamp(24px, 4vw, 48px)',
    section: 'clamp(48px, 8vw, 128px)',
  },
}
