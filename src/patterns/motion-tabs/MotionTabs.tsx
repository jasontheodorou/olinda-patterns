import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { C, font } from '../../tokens'

const EASE = [0.65, 0, 0.45, 1] as const

// ─── Panel demos ─────────────────────────────────────────────────────────────

function SimplicityDemo() {
  return (
    <PanelFrame>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        style={{ background: '#fff', padding: '32px 40px', maxWidth: 360, textAlign: 'center' }}
      >
        <p style={{ fontFamily: font, fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', color: C.muted, margin: '0 0 8px' }}>One thing</p>
        <p style={{ fontFamily: font, fontSize: 18, color: C.ink, margin: 0, lineHeight: 1.35 }}>Only what the moment needs.</p>
      </motion.div>
    </PanelFrame>
  )
}

const STEPS = ['Upload', 'Share', 'Track']

function UnderstandingDemo() {
  const [step, setStep] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setStep(s => (s + 1) % STEPS.length), 1500)
    return () => clearInterval(id)
  }, [])

  return (
    <PanelFrame>
      <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        {STEPS.map((s, i) => (
          <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
              <motion.div
                animate={{
                  background: i <= step ? '#fff' : 'rgba(255,255,255,0.2)',
                  scale: i === step ? 1.15 : 1,
                }}
                transition={{ duration: 0.35, ease: EASE }}
                style={{ width: 40, height: 40, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: i <= step ? C.ink : '#fff', fontFamily: font, fontSize: 13, fontWeight: 600 }}
              >
                {i + 1}
              </motion.div>
              <span style={{ fontFamily: font, fontSize: 12, color: i <= step ? '#fff' : 'rgba(255,255,255,0.5)' }}>{s}</span>
            </div>
            {i < STEPS.length - 1 && (
              <div style={{ width: 60, height: 1, background: 'rgba(255,255,255,0.15)', position: 'relative', marginBottom: 22 }}>
                <motion.div
                  animate={{ scaleX: i < step ? 1 : 0 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  style={{ position: 'absolute', inset: 0, background: '#fff', transformOrigin: 'left' }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </PanelFrame>
  )
}

function FeedbackDemo() {
  return (
    <PanelFrame>
      <div style={{ display: 'flex', gap: 12 }}>
        {['Upload', 'Share', 'Save'].map(label => (
          <motion.button
            key={label}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: 'spring', stiffness: 500, damping: 22 }}
            style={{ background: '#fff', color: C.ink, border: 'none', padding: '12px 22px', fontFamily: font, fontSize: 14, fontWeight: 500, cursor: 'pointer' }}
          >
            {label}
          </motion.button>
        ))}
      </div>
    </PanelFrame>
  )
}

function PlayfulnessDemo() {
  return (
    <PanelFrame>
      <div style={{ display: 'flex', gap: 16 }}>
        {[0, 1, 2, 3].map(i => (
          <motion.div
            key={i}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15, ease: [0.4, 0, 0.6, 1] }}
            style={{ width: 16, height: 16, borderRadius: '50%', background: '#fff' }}
          />
        ))}
      </div>
    </PanelFrame>
  )
}

// ─── Building blocks ─────────────────────────────────────────────────────────

function PanelFrame({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40 }}>
      {children}
    </div>
  )
}

// ─── Tabs component ──────────────────────────────────────────────────────────

const TABS = [
  { label: 'Prioritize Simplicity', color: C.dark,  Demo: SimplicityDemo    },
  { label: 'Deepen Understanding',  color: C.teal,  Demo: UnderstandingDemo },
  { label: 'Instant Feedback',      color: C.muted, Demo: FeedbackDemo      },
  { label: 'Subtle Playfulness',    color: C.gold,  Demo: PlayfulnessDemo   },
]

const BORDER = 'rgba(255,255,255,0.18)'

export function MotionTabs() {
  const [active, setActive] = useState(0)
  const { Demo, color } = TABS[active]

  return (
    <div>
      {/* Tab row */}
      <div style={{ display: 'flex' }}>
        {TABS.map((tab, i) => {
          const isActive = active === i
          return (
            <button
              key={tab.label}
              onClick={() => setActive(i)}
              style={{
                flex: 1,
                padding: '14px 12px',
                fontFamily: font,
                fontSize: 13,
                fontWeight: isActive ? 600 : 400,
                cursor: 'pointer',
                textAlign: 'center',
                background:    isActive ? '#fff' : C.ink,
                color:         isActive ? C.ink : 'rgba(255,255,255,0.85)',
                border:        `1px solid ${BORDER}`,
                borderBottom:  isActive ? '1px solid #fff' : `1px solid ${BORDER}`,
                marginLeft:    i > 0 ? -1 : 0,
                position:      'relative',
                zIndex:        isActive ? 1 : 0,
                transition:    'background 0.35s ease, color 0.35s ease',
              }}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* Content panel */}
      <motion.div
        initial={false}
        animate={{ backgroundColor: color }}
        transition={{ duration: 0.4, ease: EASE }}
        style={{
          border: `1px solid ${BORDER}`,
          borderTop: 'none',
          aspectRatio: '16 / 9',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ position: 'absolute', inset: 0 }}
          >
            <Demo />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

// ─── Demo wrapper ────────────────────────────────────────────────────────────

export function MotionTabsDemo() {
  return (
    <div style={{ background: C.ink, padding: '80px 48px', minHeight: '100vh' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>

        <div style={{ marginBottom: 48, maxWidth: 560 }}>
          <p style={{ fontFamily: font, fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', color: C.gold, margin: '0 0 16px' }}>
            Motion principles
          </p>
          <h2 style={{ fontFamily: font, fontSize: 'clamp(28px, 3.4vw, 44px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, margin: '0 0 16px' }}>
            Designed to be scalable
          </h2>
          <p style={{ fontFamily: font, fontSize: 16, color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, margin: 0 }}>
            Not every experience requires the same amount of expressiveness. Motion should always pay off the four principles.
          </p>
        </div>

        <MotionTabs />

      </div>
    </div>
  )
}
