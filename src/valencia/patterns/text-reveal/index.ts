import { metadata as base } from './metadata'
import { StaggerTextDemo } from './StaggerText.demo'
import type { ValenciaPattern } from '../../registry/types'

export { StaggerText } from './StaggerText'
export { metadata } from './metadata'
export const pattern: ValenciaPattern = { ...base, demo: StaggerTextDemo }
