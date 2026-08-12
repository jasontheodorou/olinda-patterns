import { metadata as base } from './metadata'
import { StickyStoryDemo } from './StickyStory.demo'
import type { ValenciaPattern } from '../../registry/types'

export { StickyStory, type Chapter } from './StickyStory'
export { metadata } from './metadata'
export const pattern: ValenciaPattern = { ...base, demo: StickyStoryDemo }
