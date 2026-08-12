import type { ValenciaPattern } from '../../registry/types'
import { EditorialZoomDemo } from './EditorialZoom.demo'

export const metadata: ValenciaPattern = {
  id: 'image-zoom',
  name: 'Image zoom',
  description: 'A media block starts contained and progressively crops toward full-bleed as you scroll.',
  goodFor: ['Editorial covers', 'Statement moments', 'Section transitions'],
  collections: ['Editorial', 'Bold'],
  styles: ['editorial', 'bold'],
  status: 'ready',
  component: 'EditorialZoom',
  demo: EditorialZoomDemo,
  prompt:
`Add Valencia's "{{name}}" pattern to {{target}}.

Style: {{style}}
Optional caption: pass a short caption if useful.

Reserve for a single statement moment per page — not for every image.
Fully disables under reduced motion; the image stays in its inset frame.`,
  runtime: 'dom',
  weight: 'medium',
  accessibility: { reducedMotion: 'supported', keyboard: true, hoverOnly: false, autoplay: false },
  files: [
    'src/valencia/patterns/image-zoom/EditorialZoom.tsx',
    'src/valencia/patterns/image-zoom/EditorialZoom.css',
    'src/valencia/patterns/image-zoom/index.ts',
  ],
  packages: ['motion'],
}
