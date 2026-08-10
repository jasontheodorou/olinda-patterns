import type { ComponentType } from 'react'
import { SpringCardsDemo } from './SpringCards'
import { ScrollEditorialStoryDemo } from './scroll-editorial-story'
import { ExperimentalPatternsGallery } from '../experimental/editorial-motion'

export type Pattern = {
  id: string
  title: string
  description: string
  status: 'draft' | 'experimental' | 'ready'
  fullBleed?: boolean
  demo: ComponentType
}

export const PATTERNS: Pattern[] = [
  {
    id: 'spring-cards',
    title: 'Spring card entrance',
    description: 'Cards stagger in with spring physics on mount.',
    status: 'draft',
    demo: SpringCardsDemo,
  },
  {
    id: 'scroll-editorial-story',
    title: 'Scroll editorial story',
    description: 'Scroll-linked composition with four chapters, live controls, and persistent iteration history.',
    status: 'experimental',
    fullBleed: true,
    demo: ScrollEditorialStoryDemo,
  },
  {
    id: 'experimental-editorial-motion',
    title: 'Experimental editorial motion',
    description: 'Nine scroll and interaction patterns exploring editorial motion principles.',
    status: 'experimental',
    fullBleed: true,
    demo: ExperimentalPatternsGallery,
  },
]
