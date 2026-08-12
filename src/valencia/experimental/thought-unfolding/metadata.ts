import type { PatternMetadata } from '../../registry/types'

export const metadata: PatternMetadata = {
  id: 'thought-unfolding',
  name: 'Thought unfolding',
  description: 'An idea reveals itself in layers as the reader progresses.',
  goodFor: ['Thoughtpieces', 'Long-form arguments', 'Editorial covers'],
  collections: ['Experimental', 'Editorial', 'Quiet'],
  styles: ['editorial', 'quiet'],
  status: 'experimental',
  component: 'ThoughtUnfolding',
  prompt:
`Add Valencia's "{{name}}" experimental pattern to {{target}}.

Best as a stand-alone hero section on a long article.
Under reduced motion the layers land immediately, in the same order.`,
  runtime: 'dom',
  weight: 'medium',
  accessibility: { reducedMotion: 'partial', keyboard: true, hoverOnly: false, autoplay: false },
  files: [
    'src/experimental/editorial-motion/patterns/thought-unfolding/index.tsx',
    'src/experimental/editorial-motion/studio.css',
  ],
  packages: ['motion'],
}
