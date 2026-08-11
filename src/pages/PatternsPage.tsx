import { useState } from 'react'
import { Box, Container, SimpleGrid, Stack, Text } from '@mantine/core'
import { motion, AnimatePresence } from 'motion/react'
import { PATTERNS, CATEGORIES, type PatternCategory } from '../patterns'
import { C, font } from '../tokens'

type Props = { onSelectPattern: (id: string) => void }
type Filter = PatternCategory | 'all'

export function PatternsPage({ onSelectPattern }: Props) {
  const [filter, setFilter] = useState<Filter>('all')

  const visible = filter === 'all' ? PATTERNS : PATTERNS.filter(p => p.category === filter)
  const activeCategory = CATEGORIES.find(c => c.id === filter)

  const counts: Record<Filter, number> = {
    all: PATTERNS.length,
    foundations: PATTERNS.filter(p => p.category === 'foundations').length,
    content:     PATTERNS.filter(p => p.category === 'content').length,
    forms:       PATTERNS.filter(p => p.category === 'forms').length,
    navigation:  PATTERNS.filter(p => p.category === 'navigation').length,
    motion:      PATTERNS.filter(p => p.category === 'motion').length,
  }

  return (
    <Container size={1100} py={52} px={20}>
      <Stack gap={28}>

        <Box>
          <Text component="h1" style={{ fontSize: 34, fontWeight: 700, color: C.ink, fontFamily: font, margin: 0, lineHeight: 1.15 }}>
            Patterns
          </Text>
          <Text style={{ fontSize: 15, color: C.muted, fontFamily: font, margin: '8px 0 0', lineHeight: 1.55 }}>
            {activeCategory ? activeCategory.description : `${PATTERNS.length} patterns across ${CATEGORIES.length} categories.`}
          </Text>
        </Box>

        {/* Subnav */}
        <Box style={{ display: 'flex', gap: 4, flexWrap: 'wrap', borderBottom: `1px solid ${C.border}` }}>
          <Chip active={filter === 'all'} onClick={() => setFilter('all')} count={counts.all}>All</Chip>
          {CATEGORIES.map(c => (
            <Chip key={c.id} active={filter === c.id} onClick={() => setFilter(c.id)} count={counts[c.id]}>
              {c.label}
            </Chip>
          ))}
        </Box>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04 } } }}
          >
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={16}>
              {visible.map(p => (
                <motion.div
                  key={p.id}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 300, damping: 24 } },
                  }}
                >
                  <Box
                    component="button"
                    onClick={() => onSelectPattern(p.id)}
                    style={{
                      display: 'flex', flexDirection: 'column',
                      width: '100%', height: '100%', textAlign: 'left',
                      background: C.surface, border: `1px solid ${C.border}`,
                      borderTop: `4px solid ${C.teal}`, padding: '22px', cursor: 'pointer',
                      fontFamily: font, transition: 'border-top-color 150ms ease',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderTopColor = C.ink }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderTopColor = C.teal }}
                  >
                    <Stack gap={10} style={{ flex: 1 }}>
                      <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10 }}>
                        <Text style={{ fontSize: 17, fontWeight: 600, color: C.teal, fontFamily: font, lineHeight: 1.3, textDecoration: 'underline' }}>
                          {p.title}
                        </Text>
                        <Text style={{
                          fontSize: 11, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase',
                          fontFamily: font, padding: '2px 7px', flexShrink: 0,
                          background: p.status === 'ready' ? C.teal : p.status === 'experimental' ? C.gold : 'transparent',
                          color: p.status === 'ready' || p.status === 'experimental' ? C.surface : C.muted,
                          border: `1px solid ${p.status === 'ready' ? C.teal : p.status === 'experimental' ? C.gold : C.border}`,
                        }}>
                          {p.status}
                        </Text>
                      </Box>
                      <Text style={{ fontSize: 14, color: C.dark, fontFamily: font, lineHeight: 1.55 }}>
                        {p.description}
                      </Text>
                    </Stack>

                    {/* Tags */}
                    <Box style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 14, paddingTop: 12, borderTop: `1px solid ${C.border}` }}>
                      {p.tags.map(tag => (
                        <span key={tag} style={{
                          fontSize: 10, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase',
                          fontFamily: font, color: C.muted,
                          padding: '2px 6px', background: C.bg, border: `1px solid ${C.border}`,
                        }}>
                          {tag}
                        </span>
                      ))}
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </SimpleGrid>
          </motion.div>
        </AnimatePresence>

      </Stack>
    </Container>
  )
}

function Chip({ children, active, onClick, count }: {
  children: React.ReactNode; active: boolean; onClick: () => void; count: number
}) {
  return (
    <button
      onClick={onClick}
      style={{
        position: 'relative',
        display: 'inline-flex', alignItems: 'center', gap: 8,
        padding: '10px 14px',
        background: 'transparent', border: 'none',
        borderBottom: `2px solid ${active ? C.ink : 'transparent'}`,
        marginBottom: -1,
        cursor: 'pointer',
        fontFamily: font, fontSize: 14, fontWeight: active ? 700 : 500,
        color: active ? C.ink : C.muted,
        transition: 'color 150ms ease, border-color 150ms ease',
      }}
      onMouseEnter={e => { if (!active) (e.currentTarget as HTMLElement).style.color = C.ink }}
      onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.color = C.muted }}
    >
      {children}
      <span style={{
        fontSize: 11, fontWeight: 600,
        padding: '1px 6px',
        background: active ? C.ink : C.bg,
        color: active ? C.surface : C.muted,
        border: active ? 'none' : `1px solid ${C.border}`,
        borderRadius: 999,
      }}>
        {count}
      </span>
    </button>
  )
}
