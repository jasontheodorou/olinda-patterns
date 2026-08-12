import type { PatternMetadata } from '../../registry/types'

export const metadata: PatternMetadata = {
  id: 'scroll-editorial-story',
  name: 'Scroll editorial story',
  description: 'A four-chapter scroll composition with live controls and persistent iteration history.',
  goodFor: ['Methodology showcases', 'Editorial explainers', 'Motion-first landing sections'],
  collections: ['Experimental', 'Editorial'],
  styles: ['editorial', 'bold'],
  status: 'experimental',
  component: 'ScrollEditorialStoryDemo',
  prompt:
`Add Valencia's "{{name}}" experimental pattern to {{target}}.

This is a full page-level experience — do not embed inside dense layouts.
Iteration log persists via localStorage; consider disabling it in embedded contexts.`,
  runtime: 'dom',
  weight: 'heavy',
  accessibility: { reducedMotion: 'partial', keyboard: true, hoverOnly: false, autoplay: false },
  files: [
    'src/experimental/editorial-motion/patterns/scroll-editorial-story/ScrollEditorialStory.tsx',
    'src/experimental/editorial-motion/patterns/scroll-editorial-story/ScrollEditorialStoryDemo.tsx',
    'src/experimental/editorial-motion/patterns/scroll-editorial-story/scroll-editorial-story.css',
    'src/experimental/editorial-motion/patterns/scroll-editorial-story/types.ts',
    'src/experimental/editorial-motion/patterns/scroll-editorial-story/useIterationLog.ts',
  ],
  packages: ['motion'],
}
