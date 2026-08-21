import type { CSSProperties, ReactNode } from 'react'
import type { TaroccoTheme } from './contract'

type Props = {
  theme: TaroccoTheme
  children: ReactNode
}

function toCssVars(theme: TaroccoTheme): CSSProperties {
  return {
    '--t-bg':           theme.colour.background,
    '--t-surface':      theme.colour.surface,
    '--t-text':         theme.colour.text,
    '--t-muted':        theme.colour.muted,
    '--t-primary':      theme.colour.primary,
    '--t-accent':       theme.colour.accent ?? theme.colour.primary,
    '--t-font-display': theme.type.display,
    '--t-font-body':    theme.type.body,
    '--t-font-mono':    theme.type.mono ?? theme.type.body,
    '--t-radius-sm':    `${theme.radius.small}px`,
    '--t-radius-md':    `${theme.radius.medium}px`,
    '--t-radius-lg':    `${theme.radius.large}px`,
    '--t-space-page':   theme.spacing.page,
    '--t-space-section': theme.spacing.section,
    minHeight: '100vh',
    background: theme.colour.background,
    color: theme.colour.text,
    fontFamily: theme.type.body,
  } as CSSProperties
}

export function TaroccoThemeProvider({ theme, children }: Props) {
  return (
    <div data-tarocco-theme style={toCssVars(theme)}>
      {children}
    </div>
  )
}
