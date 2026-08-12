import { metadata as base } from './metadata'
import { MarqueeDemo } from './Marquee.demo'
import type { ValenciaPattern } from '../../registry/types'

export { Marquee } from './Marquee'
export { metadata } from './metadata'
export const pattern: ValenciaPattern = { ...base, demo: MarqueeDemo }
