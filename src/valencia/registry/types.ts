import type { ComponentType } from 'react'
import type { ValenciaStyle } from '../styles/motionStyles'
import type { ValenciaEnergy } from '../styles/energy'
import type { ValenciaSpeed } from '../styles/speed'

export type PatternStatus = 'draft' | 'experimental' | 'ready'

export type ValenciaTrigger = 'mount' | 'inView' | 'scroll' | 'hover' | 'press'

export type Runtime = 'dom' | 'rive' | 'canvas'
export type Weight  = 'light' | 'medium' | 'heavy'

export const COLLECTIONS = ['Quiet', 'Clear', 'Bold', 'Playful', 'Editorial', 'Experimental'] as const
export type Collection = typeof COLLECTIONS[number]

export type AccessibilityMeta = {
  reducedMotion: 'supported' | 'partial' | 'none'
  keyboard: boolean
  hoverOnly: boolean
  autoplay: boolean
}

export type DesignerControls = {
  text?:   string
  style?:  ValenciaStyle
  energy?: ValenciaEnergy
  speed?:  ValenciaSpeed
  when?:   'load' | 'scroll' | 'hover' | 'click'
}

export type PatternMetadata = {
  id: string
  name: string
  description: string
  goodFor: string[]
  collections: Collection[]
  styles: ValenciaStyle[]
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

export type ValenciaPattern = PatternMetadata & {
  demo: ComponentType
}
