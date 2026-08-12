import type { ValenciaPattern } from '../../registry/types'
import { MagneticObjectDemo } from './MagneticObject.demo'

export const metadata: ValenciaPattern = {
  id: 'magnetic-object',
  name: 'Magnetic object',
  description: 'A single element that follows the cursor within a soft field.',
  goodFor: ['Primary CTAs', 'Brand marks', 'Playful specimens'],
  collections: ['Playful', 'Bold'],
  styles: ['playful', 'bold'],
  status: 'ready',
  component: 'MagneticObject',
  demo: MagneticObjectDemo,
  prompt:
`Add Valencia's "{{name}}" pattern to {{target}}.

Mode: magnetic | tilt | follow | press

Use sparingly — one hero button, one specimen. Not every CTA.
Disables entirely on coarse pointers and under reduced motion.`,
  runtime: 'dom',
  weight: 'light',
  accessibility: { reducedMotion: 'supported', keyboard: true, hoverOnly: true, autoplay: false },
  files: [
    'src/valencia/patterns/magnetic-object/MagneticObject.tsx',
    'src/valencia/patterns/magnetic-object/MagneticObject.css',
    'src/valencia/patterns/magnetic-object/index.ts',
    'src/valencia/core/pointer/PointerResponse.tsx',
    'src/valencia/accessibility/reducedMotion.ts',
  ],
  packages: ['motion'],
}
