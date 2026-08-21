import { metadata as base } from './metadata'
import { RevealDemo } from './Reveal.demo'
import type { OlindaPattern } from '../../registry/types'

export { Reveal } from './Reveal'
export { metadata } from './metadata'
export const pattern: OlindaPattern = { ...base, demo: RevealDemo }
