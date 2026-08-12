import { metadata as base } from './metadata'
import { ShuffleGridDemo } from './ShuffleGrid.demo'
import type { ValenciaPattern } from '../../registry/types'

export { ShuffleGrid } from './ShuffleGrid'
export { metadata } from './metadata'
export const pattern: ValenciaPattern = { ...base, demo: ShuffleGridDemo }
