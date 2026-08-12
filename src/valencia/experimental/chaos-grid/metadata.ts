import type { PatternMetadata } from '../../registry/types'

export const metadata: PatternMetadata = {
  id: 'chaos-grid',
  name: 'Chaos grid',
  description: 'Pieces of work sit in a loose scatter, then compose into a grid on demand.',
  goodFor: ['Case-study collages', 'Process illustrations', 'Playful hero moments'],
  collections: ['Experimental', 'Playful'],
  styles: ['playful', 'clear'],
  status: 'experimental',
  component: 'ChaosGridComposer',
  prompt:
`Add Valencia's "{{name}}" experimental pattern to {{target}}.

This is bespoke — not a lightweight primitive. Copy the source folder
and adapt content, not motion mechanics.
Under reduced motion the pieces settle into their grid without animation.`,
  runtime: 'dom',
  weight: 'medium',
  accessibility: { reducedMotion: 'partial', keyboard: true, hoverOnly: false, autoplay: false },
  files: [
    'src/experimental/editorial-motion/patterns/chaos-grid/index.tsx',
    'src/experimental/editorial-motion/studio.css',
  ],
  packages: ['motion'],
}
