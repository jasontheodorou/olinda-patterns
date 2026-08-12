import type { PatternMetadata } from '../../registry/types'

export const metadata: PatternMetadata = {
  id: 'easing-playground',
  name: 'Easing playground',
  description: 'An interactive editor for cubic-bezier and spring curves, comparing timings side by side.',
  goodFor: ['Team workshops', 'Motion documentation', 'Design system pages'],
  collections: ['Experimental'],
  styles: ['clear', 'playful'],
  status: 'experimental',
  component: 'EasingPlayground',
  prompt:
`Add Valencia's "{{name}}" experimental pattern to {{target}}.

Interactive documentation — the curves are the content. Best used as a page,
not embedded inside other layouts.`,
  runtime: 'dom',
  weight: 'medium',
  accessibility: { reducedMotion: 'partial', keyboard: true, hoverOnly: false, autoplay: false },
  files: [
    'src/experimental/editorial-motion/patterns/easing-playground/index.tsx',
    'src/experimental/editorial-motion/studio.css',
  ],
  packages: ['motion'],
}
