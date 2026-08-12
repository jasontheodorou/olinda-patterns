import type { PatternMetadata } from '../../registry/types'

export const metadata: PatternMetadata = {
  id: 'living-footnotes',
  name: 'Living footnotes',
  description: 'Marginalia annotate a text and animate into view as their referent is read.',
  goodFor: ['Long-form articles', 'Academic writing', 'Editorial explainers'],
  collections: ['Experimental', 'Editorial'],
  styles: ['editorial', 'quiet'],
  status: 'experimental',
  component: 'LivingFootnotes',
  prompt:
`Add Valencia's "{{name}}" experimental pattern to {{target}}.

Attach footnote content by reference; the pattern handles reveal on scroll.
Ensure notes remain accessible (as regular footnotes) with motion off.`,
  runtime: 'dom',
  weight: 'medium',
  accessibility: { reducedMotion: 'supported', keyboard: true, hoverOnly: false, autoplay: false },
  files: [
    'src/experimental/editorial-motion/patterns/living-footnotes/index.tsx',
    'src/experimental/editorial-motion/studio.css',
  ],
  packages: ['motion'],
}
