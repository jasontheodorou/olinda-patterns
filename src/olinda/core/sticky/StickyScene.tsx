import type { ReactNode } from 'react'
import './StickyScene.css'

type Props = {
  children: ReactNode
  className?: string
  top?: string
}

export function StickyScene({ children, className, top = '0' }: Props) {
  return (
    <div className={`o-sticky-scene ${className ?? ''}`} style={{ ['--o-sticky-top' as string]: top }}>
      <div className="o-sticky-scene__inner">
        {children}
      </div>
    </div>
  )
}
