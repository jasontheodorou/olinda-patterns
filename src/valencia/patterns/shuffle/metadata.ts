import type { PatternMetadata } from '../../registry/types'

export const metadata: PatternMetadata = {
  id: 'shuffle',
  name: 'Shuffle',
  description: 'A grid whose items re-order with a fluid layout transition.',
  goodFor: ['Case-study grids', 'Team pages', 'Playful demonstrations'],
  collections: ['Playful', 'Clear'],
  styles: ['playful', 'clear', 'bold'],
  status: 'ready',
  component: 'ShuffleGrid',
  prompt:
`Add Valencia's "{{name}}" pattern to {{target}}.

Style: {{style}}
Provide items as [{ id, content }] — id is stable, content is what renders.
Shuffle uses Fisher-Yates; do not replace with sort(Math.random).
Layout transitions disable under reduced motion; the button still shuffles.`,
  runtime: 'dom',
  weight: 'light',
  accessibility: { reducedMotion: 'partial', keyboard: true, hoverOnly: false, autoplay: false },
  files: [
    'src/valencia/patterns/shuffle/ShuffleGrid.tsx',
    'src/valencia/patterns/shuffle/ShuffleGrid.css',
    'src/valencia/patterns/shuffle/index.ts',
    'src/valencia/accessibility/reducedMotion.ts',
  ],
  packages: ['motion'],
}
