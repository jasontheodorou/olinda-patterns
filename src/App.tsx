import { useState } from 'react'
import { Box, Badge, Container, SimpleGrid, Stack, Text, Title, UnstyledButton } from '@mantine/core'
import { motion } from 'framer-motion'
import { PATTERNS } from './patterns'
import { OrangeCircle } from './Transform'

function App() {
  const [active, setActive] = useState<string | null>(null)

  const current = PATTERNS.find(p => p.id === active)

  if (current) {
    const PatternComponent = current.component
    return <PatternComponent onBack={() => setActive(null)} />
  }

  return (
    <Box style={{ minHeight: '100vh', background: '#FAF8F6' }}>

      <Box style={{ borderBottom: '1px solid #E6E3DF', background: '#ffffff' }}>
        <Container size="lg" py="md" px="md">
          <Box style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <OrangeCircle size={12} />
            <Text fw={700} fz={15} c="#333333">Design sandbox</Text>
          </Box>
        </Container>
      </Box>

      <Container size="lg" py={56} px="md">
        <Stack gap={48}>

          <Stack gap={12} maw={600}>
            <Text fz={11} fw={700} tt="uppercase" c="#5C5C5C" style={{ letterSpacing: '0.12em' }}>
              Transform UK — pattern lab
            </Text>
            <Title order={1} fz={40} fw={700} c="#333333" lh={1.2}>
              Design patterns
            </Title>
            <Text fz={17} c="#5C5C5C" lh={1.65}>
              A sandbox for building and perfecting Framer Motion patterns before they go into production. Each pattern runs in isolation — click in, test it, iterate.
            </Text>
          </Stack>

          <motion.div
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
          >
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
              {PATTERNS.map((p) => (
                <motion.div
                  key={p.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 280, damping: 22 } },
                  }}
                >
                  <UnstyledButton
                    onClick={() => setActive(p.id)}
                    style={{ display: 'block', width: '100%', textAlign: 'left' }}
                  >
                    <Box
                      style={{
                        background: '#ffffff',
                        border: '1px solid #E6E3DF',
                        borderRadius: 12,
                        padding: '28px 24px',
                        height: '100%',
                        transition: 'box-shadow 180ms ease, transform 180ms ease',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={e => {
                        const el = e.currentTarget as HTMLElement
                        el.style.boxShadow = '0 8px 24px rgba(33,61,89,0.10)'
                        el.style.transform = 'translateY(-2px)'
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget as HTMLElement
                        el.style.boxShadow = 'none'
                        el.style.transform = 'none'
                      }}
                    >
                      <Stack gap={12}>
                        <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                          <Text fw={700} fz={16} c="#333333" lh={1.3}>{p.title}</Text>
                          <Badge
                            size="xs"
                            variant="light"
                            color={p.status === 'ready' ? 'teal' : 'gray'}
                            style={{ flexShrink: 0, marginLeft: 8 }}
                          >
                            {p.status}
                          </Badge>
                        </Box>
                        <Text fz={14} c="#5C5C5C" lh={1.6}>{p.description}</Text>
                        <Text fz={13} c="#213D59" fw={600} style={{ marginTop: 4 }}>
                          Open pattern →
                        </Text>
                      </Stack>
                    </Box>
                  </UnstyledButton>
                </motion.div>
              ))}

              <Box
                style={{
                  background: 'transparent',
                  border: '2px dashed #E6E3DF',
                  borderRadius: 12,
                  padding: '28px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: 140,
                }}
              >
                <Text fz={14} c="#CCC8C4" style={{ textAlign: 'center' }}>
                  Next pattern
                </Text>
              </Box>
            </SimpleGrid>
          </motion.div>

          <Box
            style={{
              background: '#ffffff',
              border: '1px solid #E6E3DF',
              borderRadius: 12,
              padding: '24px 28px',
              maxWidth: 560,
            }}
          >
            <Stack gap={8}>
              <Text fw={700} fz={14} c="#333333">Adding a new pattern</Text>
              <Text fz={13} c="#5C5C5C" lh={1.8}>
                1. Create <code>src/patterns/YourPattern.tsx</code> and export a component that accepts <code>{'{ onBack: () => void }'}</code><br />
                2. Add an entry to the <code>PATTERNS</code> array in <code>src/patterns/index.ts</code><br />
                3. It appears on this page automatically
              </Text>
            </Stack>
          </Box>

        </Stack>
      </Container>
    </Box>
  )
}

export default App
