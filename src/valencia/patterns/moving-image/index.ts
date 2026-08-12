import { metadata as base } from './metadata'
import { ParallaxMediaDemo } from './ParallaxMedia.demo'
import type { ValenciaPattern } from '../../registry/types'

export { ParallaxMedia } from './ParallaxMedia'
export { metadata } from './metadata'
export const pattern: ValenciaPattern = { ...base, demo: ParallaxMediaDemo }
