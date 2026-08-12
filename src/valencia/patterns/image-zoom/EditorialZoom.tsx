import type { ReactNode } from 'react'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import './EditorialZoom.css'
import { useReducedMotion } from '../../accessibility/reducedMotion'

type Props = {
  children: ReactNode
  caption?: string
  className?: string
}

export function EditorialZoom({ children, caption, className }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const scale     = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 1.15])
  const clip      = useTransform(scrollYProgress, [0, 0.5, 1], ['inset(6% 12% round 12px)', 'inset(0% 0% round 12px)', 'inset(0% 0% round 0px)'])
  const captionO  = useTransform(scrollYProgress, [0.35, 0.55, 0.9, 1], [0, 1, 1, 0])

  if (reduce) {
    return (
      <div ref={ref} className={`v-zoom ${className ?? ''}`}>
        <div className="v-zoom__frame">{children}</div>
        {caption && <p className="v-zoom__caption">{caption}</p>}
      </div>
    )
  }

  return (
    <div ref={ref} className={`v-zoom ${className ?? ''}`}>
      <motion.div className="v-zoom__frame" style={{ scale, clipPath: clip }}>
        {children}
      </motion.div>
      {caption && (
        <motion.p className="v-zoom__caption" style={{ opacity: captionO }}>
          {caption}
        </motion.p>
      )}
    </div>
  )
}
