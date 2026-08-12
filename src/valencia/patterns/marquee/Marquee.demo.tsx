import { Marquee } from './Marquee'

const WORDS = ['Design', 'Motion', 'Clarity', 'Restraint', 'Craft', 'Care', 'Space', 'Rhythm']

export function MarqueeDemo() {
  return (
    <div style={{ padding: '48px 0' }}>
      <Marquee speed="normal">
        {WORDS.map(w => (
          <span key={w} style={{
            fontFamily: 'var(--v-font-display)',
            fontSize: 'clamp(32px, 5vw, 72px)',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            color: 'var(--v-text)',
          }}>
            {w} —
          </span>
        ))}
      </Marquee>
    </div>
  )
}
