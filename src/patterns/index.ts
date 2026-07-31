import type { ComponentType } from 'react'

export type Pattern = {
  id: string
  title: string
  description: string
  status: 'draft' | 'ready'
  component: ComponentType<{ onBack: () => void }>
}

// Add new patterns here — they appear automatically on the homepage
import { SpringCards } from './SpringCards'

export const PATTERNS: Pattern[] = [
  {
    id: 'spring-cards',
    title: 'Spring card entrance',
    description: 'Cards stagger in with spring physics on mount. A starting point for list and grid entrances.',
    status: 'draft',
    component: SpringCards,
  },
]
