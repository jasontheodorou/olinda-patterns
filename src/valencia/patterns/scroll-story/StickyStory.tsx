import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import './StickyStory.css'
import { motionStyles, type ValenciaStyle } from '../../styles/motionStyles'
import { useReducedMotion } from '../../accessibility/reducedMotion'

export type Chapter = { title: string; body?: string; media: React.ReactNode }

type Props = {
  chapters: Chapter[]
  style?: ValenciaStyle
  className?: string
}

export function StickyStory({ chapters, style = 'editorial', className }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const base = motionStyles[style]

  return (
    <div ref={ref} className={`v-sticky-story ${className ?? ''}`}>
      <div className="v-sticky-story__sticky">
        <div className="v-sticky-story__media">
          {chapters.map((c, i) => (
            <ChapterMedia
              key={i}
              index={i}
              total={chapters.length}
              progress={scrollYProgress}
              reduce={reduce}
              ease={base.ease}
            >
              {c.media}
            </ChapterMedia>
          ))}
        </div>
      </div>

      <div className="v-sticky-story__chapters">
        {chapters.map((c, i) => (
          <section key={i} className="v-sticky-story__chapter" aria-labelledby={`v-ch-${i}`}>
            <h3 id={`v-ch-${i}`} className="v-sticky-story__title">{c.title}</h3>
            {c.body && <p className="v-sticky-story__body">{c.body}</p>}
          </section>
        ))}
      </div>
    </div>
  )
}

function ChapterMedia({
  children, index, total, progress, reduce, ease,
}: {
  children: React.ReactNode
  index: number
  total: number
  progress: ReturnType<typeof useScroll>['scrollYProgress']
  reduce: boolean | null
  ease: [number, number, number, number]
}) {
  const window = 1 / total
  const start = index * window
  const mid   = start + window * 0.5
  const end   = start + window
  const opacity = useTransform(
    progress,
    [Math.max(0, start - window * 0.1), mid, Math.min(1, end + window * 0.1)],
    [0, 1, 0],
    { ease: undefined },
  )
  const scale = useTransform(progress, [start, mid, end], [1.04, 1, 1.04])

  if (reduce) {
    return <div className="v-sticky-story__frame">{children}</div>
  }

  return (
    <motion.div
      className="v-sticky-story__frame"
      style={{ opacity, scale }}
      transition={{ ease }}
    >
      {children}
    </motion.div>
  )
}
