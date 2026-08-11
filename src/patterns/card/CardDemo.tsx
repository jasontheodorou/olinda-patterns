import { useState } from 'react'
import { LessonCard, type LessonCardData } from './Card'
import { T } from '../../tokens'

const CARD: LessonCardData = {
  title: 'Understanding the discovery phase',
  minutes: 5,
  content: [
    { type: 'paragraph', text: 'Discovery is where we validate the problem before designing a solution. It exists to reduce the risk of building the wrong thing.' },
    { type: 'heading', text: 'What you\'re trying to answer' },
    { type: 'paragraph', text: 'Discovery answers three questions: who are the users, what are their needs, and what constraints does the context place on any solution?' },
    {
      type: 'callout', variant: 'tool',
      body: 'Use the User Needs Canvas to structure discovery interviews. Focus on jobs-to-be-done rather than feature requests.',
      ctaLabel: 'Open the canvas',
      ctaHref: '#',
    },
    {
      type: 'callout', variant: 'involve',
      body: 'Bring your research lead in early. They\'ll help you spot gaps in your recruitment plan and prevent bias in your interview guide.',
    },
    {
      type: 'callout', variant: 'best-practice',
      body: 'Write a single-page problem statement before starting fieldwork. If you can\'t explain the problem in a paragraph, discovery isn\'t ready to start.',
    },
    { type: 'heading', text: 'When to move on' },
    { type: 'paragraph', text: 'You\'re done with discovery when you can describe the user, their context, and the shape of a good solution — even if you haven\'t designed anything yet.' },
  ],
  resources: [
    {
      title: 'Templates',
      items: [
        { label: 'User Needs Canvas', meta: 'Miro template · 15 min setup', href: '#' },
        { label: 'Discovery report template', meta: 'Google Docs · Transform brand', href: '#' },
      ],
    },
    {
      title: 'Further reading',
      items: [
        { label: 'GDS Service Manual — Discovery', meta: 'gov.uk · 8 min read', href: '#' },
      ],
    },
  ],
}

export function CardDemo() {
  const [complete, setComplete] = useState(false)

  return (
    <div style={{ background: T.surface.offWhite, padding: '80px 40px', minHeight: '100vh' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>

        <div style={{ marginBottom: 32 }}>
          <p style={{ fontFamily: T.font, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.fg.secondary, margin: '0 0 12px' }}>
            RSD Playbook · Master your practice
          </p>
          <h2 style={{ fontFamily: T.font, fontSize: 32, fontWeight: 700, color: T.fg.primary, lineHeight: 1.25, margin: '0 0 12px' }}>
            Lesson card
          </h2>
          <p style={{ fontFamily: T.font, fontSize: 15, color: T.fg.secondary, lineHeight: 1.6, margin: 0 }}>
            Mirrors the CardView used in pathway 2. Kicker meta · title · content blocks · optional resources · complete toggle.
          </p>
        </div>

        <div style={{
          background: T.surface.white,
          border: `1px solid ${T.border.default}`,
          borderRadius: T.radius.md,
          padding: `${T.space.xl}px ${T.space.xl}px`,
        }}>
          <LessonCard
            card={CARD}
            cardIndex={3}
            totalCards={8}
            isComplete={complete}
            onToggleComplete={() => setComplete(v => !v)}
          />
        </div>

      </div>
    </div>
  )
}
