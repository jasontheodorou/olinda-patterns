import type { PatternMetadata } from '../../registry/types'

export const metadata: PatternMetadata = {
  id: 'editorial-zoom-experimental',
  name: 'Editorial zoom (experimental)',
  description: 'An earlier take on the image-zoom idea — different composition, kept for reference.',
  goodFor: ['Editorial covers', 'Reference'],
  collections: ['Experimental', 'Editorial'],
  styles: ['editorial'],
  status: 'experimental',
  component: 'EditorialZoom',
  prompt:
`Add Valencia's "{{name}}" experimental pattern to {{target}}.

Prefer the Ready pattern "Image zoom" for new work — this is retained for
reference and comparison.`,
  runtime: 'dom',
  weight: 'medium',
  accessibility: { reducedMotion: 'partial', keyboard: true, hoverOnly: false, autoplay: false },
  files: [
    'src/experimental/editorial-motion/patterns/editorial-zoom/index.tsx',
    'src/experimental/editorial-motion/studio.css',
  ],
  packages: ['motion'],
}
