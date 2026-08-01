import { Box, Container, SimpleGrid, Stack, Text } from '@mantine/core'
import { motion } from 'framer-motion'
import { PATTERNS } from '../patterns'
import { C, font } from '../tokens'

type Props = { onSelectPattern: (id: string) => void }

export function PatternsPage({ onSelectPattern }: Props) {
  return (
    <Container size={1100} py={52} px={20}>
      <Stack gap={32}>

        <Text component="h1" style={{ fontSize: 34, fontWeight: 700, color: C.ink, fontFamily: font, margin: 0, lineHeight: 1.15 }}>
          Patterns
        </Text>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
        >
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={16}>
            {PATTERNS.map(p => (
              <motion.div
                key={p.id}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 280, damping: 22 } },
                }}
              >
                <Box
                  component="button"
                  onClick={() => onSelectPattern(p.id)}
                  style={{
                    display: 'block', width: '100%', textAlign: 'left',
                    background: C.surface, border: `1px solid ${C.border}`,
                    borderTop: `4px solid ${C.teal}`, padding: '22px', cursor: 'pointer',
                    fontFamily: font, transition: 'border-top-color 150ms ease',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderTopColor = C.ink }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderTopColor = C.teal }}
                >
                  <Stack gap={8}>
                    <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10 }}>
                      <Text style={{ fontSize: 17, fontWeight: 600, color: C.teal, fontFamily: font, lineHeight: 1.3, textDecoration: 'underline' }}>
                        {p.title}
                      </Text>
                      <Text style={{
                        fontSize: 11, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase',
                        fontFamily: font, padding: '2px 7px', flexShrink: 0,
                        background: p.status === 'ready' ? C.teal : 'transparent',
                        color: p.status === 'ready' ? C.surface : C.muted,
                        border: `1px solid ${p.status === 'ready' ? C.teal : C.border}`,
                      }}>
                        {p.status}
                      </Text>
                    </Box>
                    <Text style={{ fontSize: 15, color: C.dark, fontFamily: font, lineHeight: 1.6 }}>
                      {p.description}
                    </Text>
                  </Stack>
                </Box>
              </motion.div>
            ))}
          </SimpleGrid>
        </motion.div>

      </Stack>
    </Container>
  )
}
