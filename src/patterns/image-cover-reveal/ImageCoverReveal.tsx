import { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'motion/react'
import { C, font } from '../../tokens'

const IMAGE_URL =
  'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1600&q=80&fit=crop'

const HEADING = 'Visual imagery brings value to life across use cases and surfaces.'

// ─── Shared scene ────────────────────────────────────────────────────────────

interface SceneProps {
  coverWidthPct: MotionValue<number>
  fontSize?: string
  paddingX?: number
  textBottom?: number
  maxWidth?: number
}

function Scene({
  coverWidthPct,
  fontSize = 'clamp(28px, 4vw, 52px)',
  paddingX = 60,
  textBottom = 72,
  maxWidth = 620,
}: SceneProps) {
  const coverWidth = useTransform(coverWidthPct, (v) => `${v}%`)
  const whiteClip  = useTransform(coverWidthPct, (v) => `inset(0 0 0 ${v}%)`)

  const textStyle = {
    fontFamily: font,
    fontSize,
    fontWeight: 700,
    lineHeight: 1.1,
    margin: 0,
    padding: `0 ${paddingX}px`,
    maxWidth,
  } as const

  return (
    <>
      <img
        src={IMAGE_URL}
        alt="A woman using her phone to document her work"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />

      {/* Cover — left-anchored, right edge sweeps leftward */}
      <motion.div style={{
        position: 'absolute', top: 0, left: 0,
        height: '100%', width: coverWidth,
        background: C.bg,
        zIndex: 1,
      }} />

      {/* Text — full-width anchor so clip % aligns with cover % */}
      <div style={{ position: 'absolute', bottom: textBottom, left: 0, right: 0, zIndex: 2, pointerEvents: 'none' }}>
        <h2 style={{ ...textStyle, color: C.ink, position: 'relative' }}>
          {HEADING}
        </h2>
        <motion.div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, clipPath: whiteClip }}>
          <h2 style={{ ...textStyle, color: '#ffffff' }}>
            {HEADING}
          </h2>
        </motion.div>
      </div>
    </>
  )
}

// ─── Version 1: Full-bleed ───────────────────────────────────────────────────

export function ImageCoverRevealFullBleed() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const coverWidthPct = useTransform(scrollYProgress, [0, 0.8], [100, 0])

  return (
    <div ref={sectionRef} style={{ height: '220vh', position: 'relative' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>
        <Scene coverWidthPct={coverWidthPct} />
      </div>
    </div>
  )
}

// ─── Version 2: Boxed component ──────────────────────────────────────────────
// The box itself — drop this into any page. Starts fully covered, reveals as
// it scrolls into view. Requires content above it so it enters from below.

export function ImageCoverRevealBoxed() {
  const boxRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: boxRef,
    offset: ['start end', 'end center'],
  })

  const coverWidthPct = useTransform(scrollYProgress, [0, 1], [100, 0])

  return (
    <div
      ref={boxRef}
      style={{ position: 'relative', height: 480, overflow: 'hidden', borderRadius: 4 }}
    >
      <Scene
        coverWidthPct={coverWidthPct}
        fontSize='clamp(18px, 2.2vw, 30px)'
        paddingX={36}
        textBottom={36}
        maxWidth={480}
      />
    </div>
  )
}

// ─── Version 2: Demo wrapper ─────────────────────────────────────────────────
// Shown in the pattern library. Puts the box below the fold so scroll-in
// behaviour is always correct regardless of where the demo is rendered.

export function ImageCoverRevealBoxedDemo() {
  return (
    <div style={{ background: C.bg, minHeight: '180vh', padding: '80px 48px 120px' }}>

      {/* Mock page content above the box */}
      <div style={{ maxWidth: 720, marginBottom: 120 }}>
        <p style={{ fontFamily: font, fontSize: 12, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: C.teal, marginBottom: 20 }}>
          Imagery
        </p>
        <h1 style={{ fontFamily: font, fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 700, color: C.ink, lineHeight: 1.1, marginBottom: 24 }}>
          The details are not the details.<br />They make the design.
        </h1>
        <p style={{ fontFamily: font, fontSize: 16, color: C.muted, lineHeight: 1.7, maxWidth: 560 }}>
          Visual imagery brings Dropbox, and its value, to life across use cases and surfaces. Below is an image cover reveal — scroll down to see it animate in.
        </p>
      </div>

      {/* The boxed component — below the fold, reveals on scroll */}
      <div style={{ maxWidth: 860, marginBottom: 80 }}>
        <ImageCoverRevealBoxed />
      </div>

    </div>
  )
}
