import { Box, Container, SimpleGrid, Stack, Text, Title, UnstyledButton } from '@mantine/core'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

const ITEMS = [
  { title: 'Research methods', description: 'Planning, interviewing, synthesis.' },
  { title: 'Mapping services', description: 'Journey maps, blueprints, systems.' },
  { title: 'Designing and testing', description: 'Prototyping, usability, critique.' },
  { title: 'Account context', description: 'Understanding the client landscape.' },
  { title: 'Delivery rhythm', description: 'Agile, sprints, design in the open.' },
  { title: 'Design standards', description: 'GOV.UK Service Standard, accessibility.' },
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring' as const, stiffness: 300, damping: 24 },
  },
}

export function SpringCards({ onBack }: { onBack: () => void }) {
  return (
    <Box style={{ minHeight: '100vh', background: '#FAF8F6' }}>
      <Container size="lg" py={48}>
        <Stack gap={40}>

          <Stack gap={4}>
            <UnstyledButton
              onClick={onBack}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#5C5C5C', fontSize: 14, marginBottom: 8 }}
            >
              <ArrowLeft size={14} /> Back to patterns
            </UnstyledButton>
            <Text fz={11} fw={700} tt="uppercase" c="#5C5C5C" style={{ letterSpacing: '0.12em' }}>
              Pattern — spring card entrance
            </Text>
            <Title order={1} fz={32} fw={700} c="#333333">
              Staggered spring entrance
            </Title>
            <Text fz={16} c="#5C5C5C" maw={520}>
              Cards mount with a staggered spring animation. Each card enters 70ms after the last.
              Tweak <code>stiffness</code>, <code>damping</code>, and <code>staggerChildren</code> below.
            </Text>
          </Stack>

          <motion.div variants={container} initial="hidden" animate="show">
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
              {ITEMS.map((it) => (
                <motion.div key={it.title} variants={item}>
                  <Box
                    style={{
                      background: '#ffffff',
                      border: '1px solid #E6E3DF',
                      borderRadius: 12,
                      padding: '24px 24px',
                      height: '100%',
                    }}
                  >
                    <Stack gap={8}>
                      <Text fw={700} fz={16} c="#333333">{it.title}</Text>
                      <Text fz={14} c="#5C5C5C" lh={1.6}>{it.description}</Text>
                    </Stack>
                  </Box>
                </motion.div>
              ))}
            </SimpleGrid>
          </motion.div>

        </Stack>
      </Container>
    </Box>
  )
}
