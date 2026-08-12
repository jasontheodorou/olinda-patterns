import type { PatternMetadata } from '../../registry/types'

export const metadata: PatternMetadata = {
  id: 'meaning-machine',
  name: 'Meaning machine',
  description: 'A word swaps for its neighbours in place, changing the meaning of a sentence.',
  goodFor: ['Statement pages', 'Manifestos', 'Concept demonstrations'],
  collections: ['Experimental', 'Playful', 'Editorial'],
  styles: ['playful', 'editorial'],
  status: 'experimental',
  component: 'MeaningMachine',
  prompt:
`Add Valencia's "{{name}}" experimental pattern to {{target}}.

Provide a base sentence with a slot, plus a list of substitutions.
The full sentence must remain readable under reduced motion.`,
  runtime: 'dom',
  weight: 'light',
  accessibility: { reducedMotion: 'partial', keyboard: true, hoverOnly: false, autoplay: true },
  files: [
    'src/experimental/editorial-motion/patterns/meaning-machine/index.tsx',
    'src/experimental/editorial-motion/studio.css',
  ],
  packages: ['motion'],
}
