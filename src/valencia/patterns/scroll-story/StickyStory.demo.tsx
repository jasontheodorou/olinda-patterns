import { StickyStory } from './StickyStory'

const swatch = (from: string, to: string, label: string) => (
  <div style={{
    width: '100%', height: '100%',
    background: `linear-gradient(135deg, ${from}, ${to})`,
    display: 'grid', placeItems: 'center',
    color: 'white', fontFamily: 'var(--v-font-display)',
    fontSize: 32, fontWeight: 600, letterSpacing: '-0.01em',
  }}>
    {label}
  </div>
)

export function StickyStoryDemo() {
  return (
    <div style={{ padding: '32px' }}>
      <StickyStory
        style="editorial"
        chapters={[
          {
            title: 'Understand',
            body: 'Start with what people actually need. Watch, listen, and ask.',
            media: swatch('#405748', '#998848', 'Understand'),
          },
          {
            title: 'Design',
            body: 'Prototype small pieces. Show them early. Change what does not work.',
            media: swatch('#654922', '#405748', 'Design'),
          },
          {
            title: 'Test',
            body: 'Run it with real users. Fix what breaks. Repeat.',
            media: swatch('#202221', '#654922', 'Test'),
          },
        ]}
      />
    </div>
  )
}
