import type { PatternMetadata } from '../../registry/types'

export const metadata: PatternMetadata = {
  id: 'large-heading',
  name: 'Large heading',
  description: 'A large heading that reveals word-by-word behind a soft mask.',
  goodFor: ['Homepages', 'Section openings', 'Editorial covers'],
  collections: ['Editorial', 'Bold', 'Quiet'],
  styles: ['quiet', 'editorial', 'bold'],
  status: 'ready',
  component: 'KineticHeadline',
  prompt:
`Add Valencia's "{{name}}" pattern to {{target}}.

Style: {{style}}
Energy: {{energy}}
Trigger: {{when}}

Use the project's existing colours, typography, and semantic HTML.
Preserve unrelated content and layout.
Respect reduced-motion preferences (heading must be readable without motion).
Run the build after integrating and fix any errors.`,
  runtime: 'dom',
  weight: 'light',
  accessibility: {
    reducedMotion: 'supported',
    keyboard: true,
    hoverOnly: false,
    autoplay: false,
  },
  files: [
    'src/valencia/patterns/large-heading/KineticHeadline.tsx',
    'src/valencia/patterns/large-heading/KineticHeadline.css',
    'src/valencia/patterns/large-heading/index.ts',
  ],
  packages: ['motion'],
}
