import type { PatternMetadata } from '../../registry/types'

export const metadata: PatternMetadata = {
  id: 'image-reveal',
  name: 'Image reveal',
  description: 'A media block that unmasks into view — vertical, horizontal, or zoom.',
  goodFor: ['Hero images', 'Section covers', 'Editorial media'],
  collections: ['Editorial', 'Quiet', 'Clear'],
  styles: ['quiet', 'clear', 'editorial'],
  status: 'ready',
  component: 'ImageReveal',
  prompt:
`Add Valencia's "{{name}}" pattern to {{target}}.

Style: {{style}}
Energy: {{energy}}
From: vertical | horizontal | zoom (choose the one that suits the layout)

Wrap the media element; do not rewrite its markup.
Ensure the media remains visible under reduced motion (unmask completes instantly).`,
  runtime: 'dom',
  weight: 'light',
  accessibility: { reducedMotion: 'supported', keyboard: true, hoverOnly: false, autoplay: false },
  files: [
    'src/valencia/patterns/image-reveal/ImageReveal.tsx',
    'src/valencia/patterns/image-reveal/ImageReveal.css',
    'src/valencia/patterns/image-reveal/index.ts',
    'src/valencia/core/mask/MaskReveal.tsx',
    'src/valencia/core/mask/MaskReveal.css',
  ],
  packages: ['motion'],
}
