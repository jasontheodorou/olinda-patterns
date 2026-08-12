import type { ValenciaPattern } from '../../registry/types'
import { StickyStoryDemo } from './StickyStory.demo'

export const metadata: ValenciaPattern = {
  id: 'scroll-story',
  name: 'Scroll story',
  description: 'A sticky media column that changes chapter as the reading column scrolls past.',
  goodFor: ['Methodology walkthroughs', 'Product tours', 'Editorial explainers'],
  collections: ['Editorial', 'Quiet'],
  styles: ['quiet', 'editorial'],
  status: 'ready',
  component: 'StickyStory',
  demo: StickyStoryDemo,
  prompt:
`Add Valencia's "{{name}}" pattern to {{target}}.

Style: {{style}}
Chapters: provide 3–6 chapter objects with { title, body, media }.

Assume mobile stacks the sticky media above each chapter — do not build
a bespoke small-screen layout unless the pattern's default is wrong for
your case.
Under reduced motion the media cross-fade disables; content stays present.`,
  runtime: 'dom',
  weight: 'medium',
  accessibility: { reducedMotion: 'supported', keyboard: true, hoverOnly: false, autoplay: false },
  files: [
    'src/valencia/patterns/scroll-story/StickyStory.tsx',
    'src/valencia/patterns/scroll-story/StickyStory.css',
    'src/valencia/patterns/scroll-story/index.ts',
  ],
  packages: ['motion'],
}
