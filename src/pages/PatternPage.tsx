import { Box, Container, Stack, Text } from '@mantine/core'
import type { Pattern } from '../patterns'
import { C, font } from '../tokens'

const f = font

type Props = { pattern: Pattern; onNavigate: (id: string) => void }

function Breadcrumb({ pattern, onNavigate }: Props) {
  return (
    <Box style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 28, flexWrap: 'wrap' }}>
      <button onClick={() => onNavigate('home')} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontFamily: f, fontSize: 13, color: C.teal, textDecoration: 'underline' }}>Overview</button>
      <span style={{ fontSize: 13, color: C.muted, fontFamily: f }}>›</span>
      <button onClick={() => onNavigate('patterns')} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontFamily: f, fontSize: 13, color: C.teal, textDecoration: 'underline' }}>Patterns</button>
      <span style={{ fontSize: 13, color: C.muted, fontFamily: f }}>›</span>
      <span style={{ fontSize: 13, color: C.dark, fontFamily: f }}>{pattern.title}</span>
    </Box>
  )
}

const STATUS_STYLE: Record<string, { background: string; color: string; border: string }> = {
  ready:        { background: C.teal,        color: C.surface, border: `1px solid ${C.teal}` },
  experimental: { background: C.gold,        color: C.surface, border: `1px solid ${C.gold}` },
  draft:        { background: 'transparent', color: C.muted,   border: `1px solid ${C.border}` },
}

export function PatternPage({ pattern, onNavigate }: Props) {
  const Demo = pattern.demo

  if (pattern.fullBleed) {
    return <Demo />
  }

  const statusStyle = STATUS_STYLE[pattern.status] ?? STATUS_STYLE.draft

  return (
    <Container size={1100} py={52} px={20}>
      <Stack gap={0} maw={780}>

        <Breadcrumb pattern={pattern} onNavigate={onNavigate} />

        <Box style={{ display: 'flex', alignItems: 'flex-start', gap: 14, flexWrap: 'wrap', marginBottom: 32 }}>
          <Text component="h1" style={{ fontSize: 34, fontWeight: 700, color: C.ink, fontFamily: f, margin: 0, lineHeight: 1.15 }}>
            {pattern.title}
          </Text>
          <Text style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', fontFamily: f, padding: '4px 10px', marginTop: 7, flexShrink: 0, ...statusStyle }}>
            {pattern.status}
          </Text>
        </Box>

        <Box style={{ background: C.bg, border: `1px solid ${C.border}`, padding: '32px 24px' }}>
          <Demo />
        </Box>

      </Stack>
    </Container>
  )
}
