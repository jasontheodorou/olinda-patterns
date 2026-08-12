import type { PatternMetadata } from '../../registry/types'

export const metadata: PatternMetadata = {
  id: 'content-constellation',
  name: 'Content constellation',
  description: 'A cluster of ideas floats loosely, then aligns into a legible arrangement.',
  goodFor: ['Concept mapping', 'Editorial dashboards', 'Introductory sections'],
  collections: ['Experimental', 'Editorial'],
  styles: ['editorial', 'playful'],
  status: 'experimental',
  component: 'ContentConstellation',
  prompt:
`Add Valencia's "{{name}}" experimental pattern to {{target}}.

Bespoke — copy the source folder and adapt content. Reduced motion collapses
to the aligned state.`,
  runtime: 'dom',
  weight: 'medium',
  accessibility: { reducedMotion: 'partial', keyboard: true, hoverOnly: false, autoplay: false },
  files: [
    'src/experimental/editorial-motion/patterns/content-constellation/index.tsx',
    'src/experimental/editorial-motion/studio.css',
  ],
  packages: ['motion'],
}
