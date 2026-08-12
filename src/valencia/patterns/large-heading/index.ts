import { metadata as base } from './metadata'
import { KineticHeadlineDemo } from './KineticHeadline.demo'
import type { ValenciaPattern } from '../../registry/types'

export { KineticHeadline } from './KineticHeadline'
export { metadata } from './metadata'
export const pattern: ValenciaPattern = { ...base, demo: KineticHeadlineDemo }
