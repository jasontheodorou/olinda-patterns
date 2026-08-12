import type { PatternMetadata } from '../../registry/types'

export const metadata: PatternMetadata = {
  id: 'expanding-panel',
  name: 'Expanding panel',
  description: 'A small anchor becomes a larger content surface — used for FAQs and detail reveals.',
  goodFor: ['FAQs', 'Detail reveals', 'Navigation'],
  collections: ['Clear', 'Quiet'],
  styles: ['quiet', 'clear', 'editorial'],
  status: 'ready',
  component: 'ExpandingPlane',
  prompt:
`Add Valencia's "{{name}}" pattern to {{target}}.

Style: {{style}}
Provide items as [{ id, label, body }].

Anchor button announces aria-expanded and controls the body.
Under reduced motion the height animation disables; the panel toggles instantly.`,
  runtime: 'dom',
  weight: 'light',
  accessibility: { reducedMotion: 'supported', keyboard: true, hoverOnly: false, autoplay: false },
  files: [
    'src/valencia/patterns/expanding-panel/ExpandingPlane.tsx',
    'src/valencia/patterns/expanding-panel/ExpandingPlane.css',
    'src/valencia/patterns/expanding-panel/index.ts',
  ],
  packages: ['motion'],
}
