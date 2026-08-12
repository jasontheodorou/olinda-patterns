import { metadata as base } from './metadata'
import { ContentConstellation } from '../../../experimental/editorial-motion/patterns/content-constellation'
import type { ValenciaPattern } from '../../registry/types'

export { ContentConstellation }
export { metadata } from './metadata'
export const pattern: ValenciaPattern = { ...base, demo: ContentConstellation }
