import { metadata as base } from './metadata'
import { ShuffleGlossary } from '../../../experimental/editorial-motion/patterns/shuffle-glossary'
import type { ValenciaPattern } from '../../registry/types'

export { ShuffleGlossary }
export { metadata } from './metadata'
export const pattern: ValenciaPattern = { ...base, demo: ShuffleGlossary }
