import { metadata as base } from './metadata'
import { EditorialZoomDemo } from './EditorialZoom.demo'
import type { ValenciaPattern } from '../../registry/types'

export { EditorialZoom } from './EditorialZoom'
export { metadata } from './metadata'
export const pattern: ValenciaPattern = { ...base, demo: EditorialZoomDemo }
