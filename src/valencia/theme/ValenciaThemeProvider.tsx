import type { CSSProperties, ReactNode } from 'react'
import type { ValenciaTheme } from './contract'

type Props = {
  theme: ValenciaTheme
  children: ReactNode
}

function toCssVars(theme: ValenciaTheme): CSSProperties {
  return {
    '--v-bg':           theme.colour.background,
    '--v-surface':      theme.colour.surface,
    '--v-text':         theme.colour.text,
    '--v-muted':        theme.colour.muted,
    '--v-primary':      theme.colour.primary,
    '--v-accent':       theme.colour.accent ?? theme.colour.primary,
    '--v-font-display': theme.type.display,
    '--v-font-body':    theme.type.body,
    '--v-font-mono':    theme.type.mono ?? theme.type.body,
    '--v-radius-sm':    `${theme.radius.small}px`,
    '--v-radius-md':    `${theme.radius.medium}px`,
    '--v-radius-lg':    `${theme.radius.large}px`,
    '--v-space-page':   theme.spacing.page,
    '--v-space-section': theme.spacing.section,
    minHeight: '100vh',
    background: theme.colour.background,
    color: theme.colour.text,
    fontFamily: theme.type.body,
  } as CSSProperties
}

export function ValenciaThemeProvider({ theme, children }: Props) {
  return (
    <div data-valencia-theme style={toCssVars(theme)}>
      {children}
    </div>
  )
}
