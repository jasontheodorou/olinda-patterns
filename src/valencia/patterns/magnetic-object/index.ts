import { metadata as base } from './metadata'
import { MagneticObjectDemo } from './MagneticObject.demo'
import type { ValenciaPattern } from '../../registry/types'

export { MagneticObject } from './MagneticObject'
export { metadata } from './metadata'
export const pattern: ValenciaPattern = { ...base, demo: MagneticObjectDemo }
