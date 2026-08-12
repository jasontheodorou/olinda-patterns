import { metadata as base } from './metadata'
import { EasingPlayground } from '../../../experimental/editorial-motion/patterns/easing-playground'
import type { ValenciaPattern } from '../../registry/types'

export { EasingPlayground }
export { metadata } from './metadata'
export const pattern: ValenciaPattern = { ...base, demo: EasingPlayground }
