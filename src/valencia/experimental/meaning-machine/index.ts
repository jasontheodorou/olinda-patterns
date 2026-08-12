import { metadata as base } from './metadata'
import { MeaningMachine } from '../../../experimental/editorial-motion/patterns/meaning-machine'
import type { ValenciaPattern } from '../../registry/types'

export { MeaningMachine }
export { metadata } from './metadata'
export const pattern: ValenciaPattern = { ...base, demo: MeaningMachine }
