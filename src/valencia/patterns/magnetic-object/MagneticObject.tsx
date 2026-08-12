import type { ReactNode } from 'react'
import { PointerResponse, type PointerMode } from '../../core/pointer/PointerResponse'
import './MagneticObject.css'

type Props = {
  children: ReactNode
  mode?: PointerMode
  strength?: number
  className?: string
}

export function MagneticObject({ children, mode = 'magnetic', strength = 0.3, className }: Props) {
  return (
    <span className={`v-mag ${className ?? ''}`}>
      <PointerResponse mode={mode} strength={strength}>
        {children}
      </PointerResponse>
    </span>
  )
}
