import { useState } from 'react'
import { FileText, Play, HelpCircle, MessageSquare } from 'lucide-react'
import { Tabs } from './Tabs'
import { T } from '../../tokens'

export function TabsDemo() {
  const [variant, setVariant] = useState<'underline' | 'pill'>('underline')

  const tabs = [
    {
      id: 'notes',
      label: 'Notes',
      icon: <FileText size={14} />,
      content: (
        <Panel>
          <p><strong>Discovery</strong> is where we validate the problem before designing a solution. It reduces the risk of building the wrong thing.</p>
          <p>Focus on three questions: who are the users, what are their needs, and what constraints does the context place on any solution?</p>
        </Panel>
      ),
    },
    {
      id: 'video',
      label: 'Video',
      icon: <Play size={14} />,
      content: (
        <Panel>
          <div style={{ aspectRatio: '16/9', background: T.surface.dark, borderRadius: T.radius.md, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.6)' }}>
            <Play size={40} />
          </div>
          <p style={{ marginTop: 12, color: T.fg.secondary, fontSize: 13 }}>4 min · Discovery in practice</p>
        </Panel>
      ),
    },
    {
      id: 'quiz',
      label: 'Reflection',
      icon: <HelpCircle size={14} />,
      badge: '3',
      content: (
        <Panel>
          <p style={{ fontWeight: 700, color: T.fg.primary }}>What signals tell you discovery is complete?</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 12 }}>
            {['You have a designed solution', 'You can describe user, context, and shape of solution', 'You\'ve done 20+ interviews', 'The stakeholder is happy'].map(a => (
              <button key={a} style={{ padding: '10px 14px', textAlign: 'left', background: T.surface.white, border: `1px solid ${T.border.default}`, borderRadius: T.radius.sm, cursor: 'pointer', fontFamily: T.font, fontSize: 14 }}>
                {a}
              </button>
            ))}
          </div>
        </Panel>
      ),
    },
    {
      id: 'discuss',
      label: 'Discussion',
      icon: <MessageSquare size={14} />,
      badge: 12,
      content: (
        <Panel>
          <p style={{ color: T.fg.secondary, fontStyle: 'italic' }}>12 comments on this card.</p>
          <p style={{ fontSize: 13, color: T.fg.primary }}>Share how you're applying this in your current project.</p>
        </Panel>
      ),
    },
  ]

  return (
    <div style={{ background: T.surface.offWhite, padding: '80px 40px', minHeight: '100vh' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <div style={{ marginBottom: 24 }}>
          <p style={{ fontFamily: T.font, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.fg.secondary, margin: '0 0 12px' }}>Component</p>
          <h2 style={{ fontFamily: T.font, fontSize: 32, fontWeight: 700, color: T.fg.primary, lineHeight: 1.25, margin: '0 0 12px' }}>Tabs</h2>
          <p style={{ fontFamily: T.font, fontSize: 15, color: T.fg.secondary, lineHeight: 1.6, margin: 0 }}>
            Switch between content types on a card — Notes / Video / Reflection / Discussion. Navy indicator, never orange.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 6, marginBottom: 20 }}>
          {(['underline', 'pill'] as const).map(v => (
            <button
              key={v}
              onClick={() => setVariant(v)}
              style={{
                padding: '5px 12px',
                border: `1px solid ${variant === v ? T.navy : T.border.default}`,
                background: variant === v ? T.navy : 'transparent',
                color: variant === v ? '#fff' : T.fg.primary,
                fontFamily: T.font, fontSize: 12, fontWeight: 600, cursor: 'pointer',
                borderRadius: T.radius.pill, textTransform: 'capitalize',
              }}
            >
              {v}
            </button>
          ))}
        </div>

        <div style={{ background: T.surface.white, padding: 24, border: `1px solid ${T.border.default}`, borderRadius: T.radius.md }}>
          <Tabs key={variant} tabs={tabs} variant={variant} />
        </div>
      </div>
    </div>
  )
}

function Panel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontFamily: T.font, color: T.fg.primary, lineHeight: 1.65, fontSize: 14,
      display: 'flex', flexDirection: 'column', gap: 12,
    }}>
      {children}
    </div>
  )
}
