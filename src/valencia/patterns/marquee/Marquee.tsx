import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'
import './Marquee.css'
import { useReducedMotion } from '../../accessibility/reducedMotion'

type Props = {
  children: ReactNode
  speed?: 'slow' | 'normal' | 'fast'
  direction?: 'left' | 'right'
  pauseOnHover?: boolean
  className?: string
}

const DURATION: Record<'slow' | 'normal' | 'fast', string> = {
  slow:   '55s',
  normal: '35s',
  fast:   '22s',
}

export function Marquee({
  children,
  speed = 'normal',
  direction = 'left',
  pauseOnHover = true,
  className,
}: Props) {
  const reduce = useReducedMotion()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (reduce) {
    return (
      <div className={`v-marquee v-marquee--static ${className ?? ''}`}>
        <div className="v-marquee__track">{children}</div>
      </div>
    )
  }

  return (
    <div
      className={`v-marquee ${pauseOnHover ? 'v-marquee--pausable' : ''} ${className ?? ''}`}
      style={{
        ['--v-marquee-duration' as string]: DURATION[speed],
        ['--v-marquee-direction' as string]: direction === 'left' ? 'normal' : 'reverse',
      }}
    >
      <div className="v-marquee__track" aria-hidden={mounted ? 'false' : undefined}>
        <div className="v-marquee__group">{children}</div>
        <div className="v-marquee__group" aria-hidden="true">{children}</div>
      </div>
    </div>
  )
}
