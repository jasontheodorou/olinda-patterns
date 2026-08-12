import { metadata as base } from './metadata'
import { ChaosGridComposer } from '../../../experimental/editorial-motion/patterns/chaos-grid'
import type { ValenciaPattern } from '../../registry/types'

export { ChaosGridComposer }
export { metadata } from './metadata'
export const pattern: ValenciaPattern = { ...base, demo: ChaosGridComposer }
