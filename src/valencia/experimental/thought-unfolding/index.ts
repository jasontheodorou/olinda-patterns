import { metadata as base } from './metadata'
import { ThoughtUnfolding } from '../../../experimental/editorial-motion/patterns/thought-unfolding'
import type { ValenciaPattern } from '../../registry/types'

export { ThoughtUnfolding }
export { metadata } from './metadata'
export const pattern: ValenciaPattern = { ...base, demo: ThoughtUnfolding }
