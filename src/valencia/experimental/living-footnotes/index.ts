import { metadata as base } from './metadata'
import { LivingFootnotes } from '../../../experimental/editorial-motion/patterns/living-footnotes'
import type { ValenciaPattern } from '../../registry/types'

export { LivingFootnotes }
export { metadata } from './metadata'
export const pattern: ValenciaPattern = { ...base, demo: LivingFootnotes }
