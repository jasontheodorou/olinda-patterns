import type { PatternMetadata } from '../../registry/types'

export const metadata: PatternMetadata = {
  id: 'shuffle-glossary',
  name: 'Shuffle glossary',
  description: 'A glossary whose terms shuffle into new adjacencies, hinting at fresh connections.',
  goodFor: ['Concept explorers', 'Reference material with tone'],
  collections: ['Experimental', 'Playful'],
  styles: ['playful', 'clear'],
  status: 'experimental',
  component: 'ShuffleGlossary',
  prompt:
`Add Valencia's "{{name}}" experimental pattern to {{target}}.

Shuffle uses Fisher-Yates; the terms stay sortable via the button.
Content must be independently addressable — treat animation as decorative.`,
  runtime: 'dom',
  weight: 'light',
  accessibility: { reducedMotion: 'partial', keyboard: true, hoverOnly: false, autoplay: false },
  files: [
    'src/experimental/editorial-motion/patterns/shuffle-glossary/index.tsx',
    'src/experimental/editorial-motion/studio.css',
  ],
  packages: ['motion'],
}
