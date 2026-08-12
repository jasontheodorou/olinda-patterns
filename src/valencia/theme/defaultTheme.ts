import type { ValenciaTheme } from './contract'

export const defaultTheme: ValenciaTheme = {
  colour: {
    background: '#F5F2EE',
    surface: '#FFFFFF',
    text: '#202221',
    muted: '#654922',
    primary: '#405748',
    accent: '#998848',
  },
  type: {
    display: "'Inter', arial, sans-serif",
    body: "'Inter', arial, sans-serif",
    mono: "ui-monospace, 'SF Mono', Menlo, Monaco, monospace",
  },
  radius: {
    small: 4,
    medium: 8,
    large: 16,
  },
  spacing: {
    page: 'clamp(24px, 4vw, 48px)',
    section: 'clamp(48px, 8vw, 128px)',
  },
}
