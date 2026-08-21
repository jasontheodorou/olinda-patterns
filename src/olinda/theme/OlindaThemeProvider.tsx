import type { CSSProperties, ReactNode } from 'react'
import type { OlindaTheme } from './contract'

type Props = {
  theme: OlindaTheme
  children: ReactNode
}

function toCssVars(theme: OlindaTheme): CSSProperties {
  return {
    '--o-bg':           theme.colour.background,
    '--o-surface':      theme.colour.surface,
    '--o-text':         theme.colour.text,
    '--o-muted':        theme.colour.muted,
    '--o-primary':      theme.colour.primary,
    '--o-accent':       theme.colour.accent ?? theme.colour.primary,
    '--o-font-display': theme.type.display,
    '--o-font-body':    theme.type.body,
    '--o-font-mono':    theme.type.mono ?? theme.type.body,
    '--o-radius-sm':    `${theme.radius.small}px`,
    '--o-radius-md':    `${theme.radius.medium}px`,
    '--o-radius-lg':    `${theme.radius.large}px`,
    '--o-space-page':   theme.spacing.page,
    '--o-space-section': theme.spacing.section,
    minHeight: '100vh',
    background: theme.colour.background,
    color: theme.colour.text,
    fontFamily: theme.type.body,
  } as CSSProperties
}

export function OlindaThemeProvider({ theme, children }: Props) {
  return (
    <div data-olinda-theme style={toCssVars(theme)}>
      {children}
    </div>
  )
}
