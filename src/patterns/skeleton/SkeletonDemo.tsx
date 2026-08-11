import { useState, useEffect } from 'react'
import { Skeleton, CardSkeleton, ModuleListSkeleton } from './Skeleton'
import { LessonCard, type LessonCardData } from '../card/Card'
import { Button } from '../button/Button'
import { T } from '../../tokens'

const SAMPLE: LessonCardData = {
  title: 'Understanding the discovery phase',
  minutes: 5,
  content: [
    { type: 'paragraph', text: 'Discovery is where we validate the problem before designing a solution.' },
    { type: 'callout', variant: 'tool', body: 'Use the User Needs Canvas to structure discovery interviews.' },
  ],
}

export function SkeletonDemo() {
  const [loading, setLoading] = useState(true)
  useEffect(() => { if (loading) { const id = setTimeout(() => setLoading(false), 2000); return () => clearTimeout(id) } }, [loading])

  return (
    <div style={{ background: T.surface.offWhite, padding: '80px 40px', minHeight: '100vh' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>

        <div style={{ marginBottom: 24 }}>
          <p style={{ fontFamily: T.font, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.fg.secondary, margin: '0 0 12px' }}>Component</p>
          <h2 style={{ fontFamily: T.font, fontSize: 32, fontWeight: 700, color: T.fg.primary, lineHeight: 1.25, margin: '0 0 12px' }}>Skeleton</h2>
          <p style={{ fontFamily: T.font, fontSize: 15, color: T.fg.secondary, lineHeight: 1.6, margin: 0 }}>
            Loading placeholders shaped to real playbook content — no layout shift on data arrival.
          </p>
        </div>

        <div style={{ marginBottom: 24 }}>
          <Button size="sm" onClick={() => setLoading(true)}>Reload</Button>
        </div>

        <Section title="Text primitives">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 480, background: T.surface.white, padding: 24, border: `1px solid ${T.border.default}`, borderRadius: T.radius.md }}>
            <Skeleton height={18} width="60%" />
            <Skeleton height={14} width="100%" />
            <Skeleton height={14} width="100%" />
            <Skeleton height={14} width="70%" />
          </div>
        </Section>

        <Section title="Lesson card">
          {loading ? <CardSkeleton /> : (
            <div style={{ background: T.surface.white, border: `1px solid ${T.border.default}`, borderRadius: T.radius.md, padding: 32 }}>
              <LessonCard card={SAMPLE} cardIndex={1} totalCards={1} isComplete={false} onToggleComplete={() => {}} />
            </div>
          )}
        </Section>

        <Section title="Module list">
          {loading ? <ModuleListSkeleton /> : (
            <div style={{ background: T.surface.white, padding: 24, border: `1px solid ${T.border.default}`, borderRadius: T.radius.md, textAlign: 'center', color: T.fg.secondary, fontFamily: T.font, fontSize: 14 }}>
              Content loaded.
            </div>
          )}
        </Section>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <div style={{ fontFamily: T.font, fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: T.fg.secondary, marginBottom: 12 }}>{title}</div>
      {children}
    </div>
  )
}
