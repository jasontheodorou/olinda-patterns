import { Accordion, Box, Container, Stack, Text } from '@mantine/core'
import { C, font } from '../tokens'

const f = font

function SectionHeading({ id, children }: { id: string; children: string }) {
  return (
    <Text
      component="h2"
      id={id}
      style={{ fontSize: 24, fontWeight: 700, color: C.ink, fontFamily: f, margin: '0 0 12px', paddingTop: 40, borderTop: `1px solid ${C.border}`, lineHeight: 1.2 }}
    >
      {children}
    </Text>
  )
}

function Lead({ children }: { children: React.ReactNode }) {
  return (
    <Text style={{ fontSize: 17, color: C.dark, fontFamily: f, lineHeight: 1.7, marginBottom: 24 }}>
      {children}
    </Text>
  )
}

function DevAccordion({ label, children }: { label?: string; children: React.ReactNode }) {
  return (
    <Accordion
      variant="separated"
      styles={{
        root: { marginBottom: 40 },
        item: { border: `1px solid ${C.border}`, background: C.surface, borderRadius: 0 },
        control: { fontFamily: f, fontSize: 14, color: C.muted, padding: '12px 16px' },
        chevron: { color: C.muted },
        panel: { fontFamily: f },
        content: { padding: '0 16px 16px' },
      }}
    >
      <Accordion.Item value="dev">
        <Accordion.Control>{label ?? 'Show values for developers'}</Accordion.Control>
        <Accordion.Panel>{children}</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  )
}

const TIMING = [
  { label: 'Instant',   ms: '120ms', desc: 'Hover effects, focus rings, small icon swaps. The user barely registers it.' },
  { label: 'Quick',     ms: '220ms', desc: 'Standard panel opens, tab switches, accordions. Feels responsive without being abrupt.' },
  { label: 'Measured',  ms: '360ms', desc: 'Modal opens, page-level reveals. Deliberately unhurried — use when you want the user to notice.' },
  { label: 'Ceremonial',ms: '600ms', desc: 'First-visit moments, confirmation states, onboarding steps. Reserve this for things that deserve weight.' },
]

const SPRINGS = [
  { name: 'Snappy',  feel: 'Crisp and immediate — like a button clicking into place.', use: 'Buttons, toggles, small interactive chips.' },
  { name: 'Default', feel: 'Solid and confident — the everyday spring. Nothing dramatic.', use: 'Cards, panels, drawers, modals.' },
  { name: 'Gentle',  feel: 'Slow and airy — almost like something floating into view.', use: 'Large elements, page-level transitions, hero sections.' },
]

const tdBase: React.CSSProperties = {
  fontSize: 14, color: C.dark, fontFamily: f, padding: '10px 16px 10px 0',
  borderBottom: `1px solid ${C.border}`, verticalAlign: 'top',
}
const thBase: React.CSSProperties = {
  textAlign: 'left', fontSize: 12, fontWeight: 700, color: C.muted,
  fontFamily: f, padding: '8px 16px 8px 0', borderBottom: `2px solid ${C.border}`,
  letterSpacing: '0.06em', textTransform: 'uppercase',
}
const code: React.CSSProperties = { background: C.bg, padding: '2px 6px', color: C.teal, fontSize: 13, fontFamily: 'monospace' }

export function StylesPage() {
  return (
    <Container size={1100} py={52} px={20}>
      <Stack gap={0} maw={760}>

        {/* Breadcrumb */}
        <Text style={{ fontSize: 13, color: C.muted, fontFamily: f, marginBottom: 24 }}>Overview › Styles</Text>

        {/* Page heading */}
        <Stack gap={10} style={{ marginBottom: 40 }}>
          <Text component="h1" style={{ fontSize: 34, fontWeight: 700, color: C.ink, fontFamily: f, margin: 0, lineHeight: 1.15 }}>
            Styles
          </Text>
          <Text style={{ fontSize: 19, color: C.dark, fontFamily: f, lineHeight: 1.65, margin: 0 }}>
            Principles for making animation feel consistent, purposeful, and kind to all users.
          </Text>
        </Stack>

        {/* Contents */}
        <Box style={{ background: C.surface, border: `1px solid ${C.border}`, padding: '20px 24px', marginBottom: 48, display: 'inline-block' }}>
          <Text style={{ fontSize: 14, fontWeight: 700, color: C.ink, fontFamily: f, marginBottom: 10 }}>Contents</Text>
          <ol style={{ margin: 0, padding: '0 0 0 18px' }}>
            {['How long should things take?', 'Choosing a feel', 'Accessibility'].map((s, i) => (
              <li key={s} style={{ marginBottom: 6 }}>
                <a href={`#section-${i + 1}`} style={{ fontSize: 15, color: C.teal, fontFamily: f }}>{s}</a>
              </li>
            ))}
          </ol>
        </Box>

        {/* Section 1: Timing */}
        <SectionHeading id="section-1">How long should things take?</SectionHeading>
        <Lead>
          Animation duration controls how much attention you draw to a change. Faster means quieter.
          Slower means the user notices. Match the duration to the importance of the moment.
        </Lead>

        <Stack gap={16} style={{ marginBottom: 8 }}>
          {TIMING.map(t => (
            <Box key={t.label} style={{ background: C.surface, border: `1px solid ${C.border}`, borderLeft: `4px solid ${C.teal}`, padding: '16px 20px' }}>
              <Box style={{ display: 'flex', gap: 12, alignItems: 'baseline', marginBottom: 4, flexWrap: 'wrap' }}>
                <Text style={{ fontSize: 16, fontWeight: 700, color: C.ink, fontFamily: f }}>{t.label}</Text>
                <Text style={{ fontSize: 13, color: C.gold, fontFamily: f }}>{t.ms}</Text>
              </Box>
              <Text style={{ fontSize: 15, color: C.dark, fontFamily: f, lineHeight: 1.6 }}>{t.desc}</Text>
            </Box>
          ))}
        </Stack>

        <DevAccordion>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={thBase}>Label</th>
                <th style={thBase}>Token</th>
                <th style={thBase}>Value</th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: 'Instant',    token: 'motion.fast',   ms: '120ms' },
                { label: 'Quick',      token: 'motion.base',   ms: '220ms' },
                { label: 'Measured',   token: 'motion.slow',   ms: '360ms' },
                { label: 'Ceremonial', token: 'motion.xslow',  ms: '600ms' },
              ].map(r => (
                <tr key={r.label}>
                  <td style={tdBase}>{r.label}</td>
                  <td style={tdBase}><code style={code}>{r.token}</code></td>
                  <td style={tdBase}>{r.ms}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </DevAccordion>

        {/* Section 2: Springs */}
        <SectionHeading id="section-2">Choosing a feel</SectionHeading>
        <Lead>
          Rather than picking a duration, spring animations are defined by their physical behaviour — stiffness and resistance.
          Think of it like choosing how much tension is in a spring. The three presets below cover almost every situation.
        </Lead>

        <Stack gap={16} style={{ marginBottom: 8 }}>
          {SPRINGS.map(s => (
            <Box key={s.name} style={{ background: C.surface, border: `1px solid ${C.border}`, borderLeft: `4px solid ${C.teal}`, padding: '16px 20px' }}>
              <Text style={{ fontSize: 16, fontWeight: 700, color: C.ink, fontFamily: f, marginBottom: 4 }}>{s.name}</Text>
              <Text style={{ fontSize: 15, color: C.dark, fontFamily: f, lineHeight: 1.6, marginBottom: 6 }}>{s.feel}</Text>
              <Text style={{ fontSize: 13, color: C.muted, fontFamily: f }}>Use for: {s.use}</Text>
            </Box>
          ))}
        </Stack>

        <DevAccordion>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={thBase}>Preset</th>
                <th style={thBase}>Stiffness</th>
                <th style={thBase}>Damping</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Snappy',  stiffness: 400, damping: 30 },
                { name: 'Default', stiffness: 300, damping: 24 },
                { name: 'Gentle',  stiffness: 180, damping: 20 },
              ].map(s => (
                <tr key={s.name}>
                  <td style={tdBase}>{s.name}</td>
                  <td style={tdBase}>{s.stiffness}</td>
                  <td style={tdBase}>{s.damping}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Text style={{ fontSize: 13, color: C.muted, fontFamily: f, marginTop: 12 }}>
            There is also a standard easing curve for duration-based transitions (where springs are not appropriate):
            <code style={{ ...code, marginLeft: 6 }}>cubic-bezier(0.2, 0.8, 0.2, 1)</code> — starts brisk, lands softly.
          </Text>
        </DevAccordion>

        {/* Section 3: Accessibility */}
        <SectionHeading id="section-3">Accessibility</SectionHeading>
        <Lead>
          Some people experience motion sickness, seizures, or cognitive difficulties when interfaces animate.
          Many of them configure their device to request reduced motion. Your animations must respect that.
        </Lead>

        <Box style={{ background: C.surface, border: `1px solid ${C.border}`, borderLeft: `4px solid ${C.gold}`, padding: '16px 20px', marginBottom: 16 }}>
          <Text style={{ fontSize: 16, fontWeight: 700, color: C.ink, fontFamily: f, marginBottom: 6 }}>
            The rule: if it moves, it must be skippable
          </Text>
          <Text style={{ fontSize: 15, color: C.dark, fontFamily: f, lineHeight: 1.6 }}>
            Every animation in this library should degrade gracefully when the user has asked for reduced motion.
            That usually means replacing movement with a simple fade — or no animation at all.
          </Text>
        </Box>
        <Text style={{ fontSize: 16, color: C.dark, fontFamily: f, lineHeight: 1.7, marginBottom: 16 }}>
          Never use animation to convey information that is not available any other way. If removing the animation
          would make the page confusing, the design has a problem that animation alone cannot fix.
        </Text>

        <DevAccordion label="How to implement reduced motion in code">
          <Text style={{ fontSize: 14, color: C.dark, fontFamily: f, lineHeight: 1.7 }}>
            Use the Framer Motion <code style={code}>useReducedMotion</code> hook. When it returns <code style={code}>true</code>,
            replace spring or slide variants with a simple <code style={code}>{'{ opacity: [0, 1] }'}</code> fade,
            or set <code style={code}>initial={false}</code> to skip the animation entirely.
            The <code style={code}>prefers-reduced-motion: reduce</code> media query is the underlying OS signal.
          </Text>
        </DevAccordion>

      </Stack>
    </Container>
  )
}
