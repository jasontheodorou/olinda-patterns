import { metadata as base } from './metadata'
import { ExpandingPlaneDemo } from './ExpandingPlane.demo'
import type { ValenciaPattern } from '../../registry/types'

export { ExpandingPlane } from './ExpandingPlane'
export { metadata } from './metadata'
export const pattern: ValenciaPattern = { ...base, demo: ExpandingPlaneDemo }
