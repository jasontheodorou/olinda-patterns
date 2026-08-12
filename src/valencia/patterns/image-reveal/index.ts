import { metadata as base } from './metadata'
import { ImageRevealDemo } from './ImageReveal.demo'
import type { ValenciaPattern } from '../../registry/types'

export { ImageReveal } from './ImageReveal'
export { metadata } from './metadata'
export const pattern: ValenciaPattern = { ...base, demo: ImageRevealDemo }
