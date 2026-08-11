import { HelpCircle, Info, Award, Flame } from 'lucide-react'
import { Tooltip } from './Tooltip'
import { T } from '../../tokens'

export function TooltipDemo() {
  return (
    <div style={{ background: T.surface.offWhite, padding: '80px 40px', minHeight: '100vh' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>

        <div style={{ marginBottom: 32 }}>
          <p style={{ fontFamily: T.font, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.fg.secondary, margin: '0 0 12px' }}>Component</p>
          <h2 style={{ fontFamily: T.font, fontSize: 32, fontWeight: 700, color: T.fg.primary, lineHeight: 1.25, margin: '0 0 12px' }}>Tooltip</h2>
          <p style={{ fontFamily: T.font, fontSize: 15, color: T.fg.secondary, lineHeight: 1.6, margin: 0 }}>
            On-demand hints. Great for glossary terms, streak counters, and definitions.
          </p>
        </div>

        <Section title="Inline glossary hints">
          <div style={{ background: T.surface.white, padding: 24, border: `1px solid ${T.border.default}`, borderRadius: T.radius.md }}>
            <p style={{ fontFamily: T.font, fontSize: 15, color: T.fg.primary, lineHeight: 1.75, margin: 0 }}>
              A robust discovery blends{' '}
              <Tooltip content="Semi-structured, 1:1 sessions with users">
                <U>depth interviews</U>
              </Tooltip>
              {' '}with{' '}
              <Tooltip content="Watching users in their actual context">
                <U>contextual observation</U>
              </Tooltip>
              {' '}before you attempt any{' '}
              <Tooltip content="Grouping raw notes into themes">
                <U>synthesis</U>
              </Tooltip>.
            </p>
          </div>
        </Section>

        <Section title="Icon buttons">
          <div style={{ display: 'flex', gap: 12 }}>
            <Tooltip content="Achievement locked"><IconButton><Award size={16} /></IconButton></Tooltip>
            <Tooltip content="7-day practice streak"><IconButton><Flame size={16} /></IconButton></Tooltip>
            <Tooltip content="What does this mean?"><IconButton><HelpCircle size={16} /></IconButton></Tooltip>
            <Tooltip content="More info"><IconButton><Info size={16} /></IconButton></Tooltip>
          </div>
        </Section>

        <Section title="Placements">
          <div style={{ display: 'flex', gap: 32, padding: 40, background: T.surface.white, border: `1px solid ${T.border.default}`, borderRadius: T.radius.md, justifyContent: 'center' }}>
            <Tooltip content="Top" placement="top"><Pill>top</Pill></Tooltip>
            <Tooltip content="Bottom" placement="bottom"><Pill>bottom</Pill></Tooltip>
            <Tooltip content="Left" placement="left"><Pill>left</Pill></Tooltip>
            <Tooltip content="Right" placement="right"><Pill>right</Pill></Tooltip>
          </div>
        </Section>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <div style={{ fontFamily: T.font, fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: T.fg.secondary, marginBottom: 12 }}>{title}</div>
      {children}
    </div>
  )
}

function U({ children }: { children: React.ReactNode }) {
  return <span style={{ borderBottom: `1px dashed ${T.fg.secondary}`, cursor: 'help', color: T.fg.primary, fontWeight: 600 }}>{children}</span>
}

function IconButton({ children }: { children: React.ReactNode }) {
  return (
    <button style={{
      width: 36, height: 36, borderRadius: T.radius.pill,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      background: T.surface.white, border: `1px solid ${T.border.default}`, color: T.fg.primary, cursor: 'pointer',
    }}>
      {children}
    </button>
  )
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      padding: '6px 14px', background: T.surface.white, border: `1px solid ${T.border.default}`,
      fontFamily: T.font, fontSize: 13, fontWeight: 600, borderRadius: T.radius.pill, cursor: 'default',
    }}>
      {children}
    </span>
  )
}
