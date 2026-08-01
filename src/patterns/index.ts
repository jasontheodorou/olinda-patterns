import type { ComponentType } from 'react'
import { SpringCardsDemo } from './SpringCards'

export type Pattern = {
  id: string
  title: string
  description: string
  status: 'draft' | 'ready'
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
]
