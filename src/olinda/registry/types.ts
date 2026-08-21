import type { ComponentType } from 'react'
import type { OlindaStyle } from '../styles/motionStyles'
import type { OlindaEnergy } from '../styles/energy'
import type { OlindaSpeed } from '../styles/speed'

export type PatternStatus = 'draft' | 'experimental' | 'ready'

export type OlindaTrigger = 'mount' | 'inView' | 'scroll' | 'hover' | 'press'

export type Runtime = 'dom' | 'rive' | 'canvas'
export type Weight  = 'light' | 'medium' | 'heavy'

export const COLLECTIONS = ['Clear', 'Editorial', 'Experimental'] as const
export type Collection = typeof COLLECTIONS[number]

export type AccessibilityMeta = {
  reducedMotion: 'supported' | 'partial' | 'none'
  keyboard: boolean
  hoverOnly: boolean
  autoplay: boolean
}

export type DesignerControls = {
  text?:   string
  style?:  OlindaStyle
  energy?: OlindaEnergy
  speed?:  OlindaSpeed
  when?:   'load' | 'scroll' | 'hover' | 'click'
}

export type PatternMetadata = {
  id: string
  name: string
  description: string
  goodFor: string[]
  collections: Collection[]
  styles: OlindaStyle[]
  status: PatternStatus
  isNew?: boolean
  publishedAt?: string
  component: string
  prompt: string
  runtime: Runtime
  weight: Weight
  accessibility: AccessibilityMeta
  files: string[]
  packages: string[]
  reference?: {
    source: string
    page?: string
    lesson?: string
    implementation: 'clean-room'
  }
}

export type OlindaPattern = PatternMetadata & {
  demo: ComponentType
}
