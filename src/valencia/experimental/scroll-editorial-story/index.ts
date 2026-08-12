import { metadata as base } from './metadata'
import { ScrollEditorialStoryDemo } from '../../../experimental/editorial-motion/patterns/scroll-editorial-story'
import type { ValenciaPattern } from '../../registry/types'

export { ScrollEditorialStoryDemo }
export { metadata } from './metadata'
export const pattern: ValenciaPattern = { ...base, demo: ScrollEditorialStoryDemo }
