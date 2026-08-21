import type { ComponentType } from 'react'
import type { TaroccoStyle } from '../styles/motionStyles'
import type { TaroccoEnergy } from '../styles/energy'
import type { TaroccoSpeed } from '../styles/speed'

export type PatternStatus = 'draft' | 'experimental' | 'ready'

export type TaroccoTrigger = 'mount' | 'inView' | 'scroll' | 'hover' | 'press'

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
  style?:  TaroccoStyle
  energy?: TaroccoEnergy
  speed?:  TaroccoSpeed
  when?:   'load' | 'scroll' | 'hover' | 'click'
}

export type PatternMetadata = {
  id: string
  name: string
  description: string
  goodFor: string[]
  collections: Collection[]
  styles: TaroccoStyle[]
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

export type TaroccoPattern = PatternMetadata & {
  demo: ComponentType
}
