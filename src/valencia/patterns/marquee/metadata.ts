import type { PatternMetadata } from '../../registry/types'

export const metadata: PatternMetadata = {
  id: 'marquee',
  name: 'Marquee',
  description: 'A horizontal loop of labels or marks — pauses on hover, static under reduced motion.',
  goodFor: ['Section dividers', 'Campaign phrases', 'Partner marks'],
  collections: ['Bold', 'Playful', 'Editorial'],
  styles: ['bold', 'playful', 'editorial'],
  status: 'ready',
  component: 'Marquee',
  prompt:
`Add Valencia's "{{name}}" pattern to {{target}}.

Speed: slow | normal | fast (default normal)
Direction: left | right

Duplicate the content once inside — the pattern handles the loop.
Under reduced motion the row is static; never rely on the animation
to convey required information.`,
  runtime: 'dom',
  weight: 'light',
  accessibility: { reducedMotion: 'supported', keyboard: true, hoverOnly: false, autoplay: true },
  files: [
    'src/valencia/patterns/marquee/Marquee.tsx',
    'src/valencia/patterns/marquee/Marquee.css',
    'src/valencia/patterns/marquee/index.ts',
  ],
  packages: [],
}
