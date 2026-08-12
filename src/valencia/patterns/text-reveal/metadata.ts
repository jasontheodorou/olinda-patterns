import type { ValenciaPattern } from '../../registry/types'
import { StaggerTextDemo } from './StaggerText.demo'

export const metadata: ValenciaPattern = {
  id: 'text-reveal',
  name: 'Text reveal',
  description: 'Short lines rise into view, one after another.',
  goodFor: ['Manifestos', 'Section intros', 'Pull quotes'],
  collections: ['Quiet', 'Clear', 'Editorial'],
  styles: ['quiet', 'clear', 'editorial'],
  status: 'ready',
  component: 'StaggerText',
  demo: StaggerTextDemo,
  prompt:
`Add Valencia's "{{name}}" pattern to {{target}}.

Style: {{style}}
Energy: {{energy}}
Trigger: {{when}}

Use for short, editorial lines — not body copy.
Preserve semantic paragraph structure.
Respect reduced-motion preferences.`,
  runtime: 'dom',
  weight: 'light',
  accessibility: { reducedMotion: 'supported', keyboard: true, hoverOnly: false, autoplay: false },
  files: [
    'src/valencia/patterns/text-reveal/StaggerText.tsx',
    'src/valencia/patterns/text-reveal/StaggerText.css',
    'src/valencia/patterns/text-reveal/index.ts',
  ],
  packages: ['motion'],
}
