import { Box, Stack, Text } from '@mantine/core'
import { motion } from 'framer-motion'
import { C, font } from '../tokens'

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
  show: { transition: { staggerChildren: 0.07 } },
}

const item = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring' as const, stiffness: 300, damping: 24 },
  },
}

export function SpringCardsDemo() {
  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <Box style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
        {ITEMS.map((it) => (
          <motion.div key={it.title} variants={item}>
            <Box style={{ background: C.surface, border: `1px solid ${C.border}`, borderTop: `3px solid ${C.teal}`, padding: '16px', height: '100%' }}>
              <Stack gap={4}>
                <Text style={{ fontSize: 15, fontWeight: 600, color: C.ink, fontFamily: font }}>{it.title}</Text>
                <Text style={{ fontSize: 13, color: C.dark, fontFamily: font, lineHeight: 1.55 }}>{it.description}</Text>
              </Stack>
            </Box>
          </motion.div>
        ))}
      </Box>
    </motion.div>
  )
}
