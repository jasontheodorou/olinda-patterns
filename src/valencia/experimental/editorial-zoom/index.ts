import { metadata as base } from './metadata'
import { EditorialZoom } from '../../../experimental/editorial-motion/patterns/editorial-zoom'
import type { ValenciaPattern } from '../../registry/types'

export { EditorialZoom as EditorialZoomExperimental }
export { metadata } from './metadata'
export const pattern: ValenciaPattern = { ...base, demo: EditorialZoom }
