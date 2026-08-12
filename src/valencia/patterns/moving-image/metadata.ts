import type { PatternMetadata } from '../../registry/types'

export const metadata: PatternMetadata = {
  id: 'moving-image',
  name: 'Moving image',
  description: 'A media block that drifts as the page scrolls — subtle, controlled depth.',
  goodFor: ['Hero images', 'Section dividers', 'Editorial covers'],
  collections: ['Editorial', 'Bold'],
  styles: ['quiet', 'editorial', 'bold'],
  status: 'ready',
  component: 'ParallaxMedia',
  prompt:
`Add Valencia's "{{name}}" pattern to {{target}}.

Amount: tiny | small | medium (default small — avoid loud parallax)
Style: {{style}}

Wrap the media element; do not stretch the container.
Fully disables under reduced-motion — assume it will.`,
  runtime: 'dom',
  weight: 'light',
  accessibility: { reducedMotion: 'supported', keyboard: true, hoverOnly: false, autoplay: false },
  files: [
    'src/valencia/patterns/moving-image/ParallaxMedia.tsx',
    'src/valencia/patterns/moving-image/ParallaxMedia.css',
    'src/valencia/patterns/moving-image/index.ts',
    'src/valencia/core/parallax/Parallax.tsx',
    'src/valencia/core/scroll/useValenciaScroll.ts',
  ],
  packages: ['motion'],
}
