import type { ReactNode } from 'react'
import './StickyScene.css'

type Props = {
  children: ReactNode
  className?: string
  top?: string
}

export function StickyScene({ children, className, top = '0' }: Props) {
  return (
    <div className={`v-sticky-scene ${className ?? ''}`} style={{ ['--v-sticky-top' as string]: top }}>
      <div className="v-sticky-scene__inner">
        {children}
      </div>
    </div>
  )
}
