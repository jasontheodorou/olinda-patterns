import { useRef } from "react"
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react"
import {
  defaultEditorialChapters,
  defaultEditorialStoryConfig,
  type EditorialChapter,
  type EditorialStoryConfig,
} from "./types"
import "./scroll-editorial-story.css"

type Props = {
  chapters?: EditorialChapter[]
  config?: EditorialStoryConfig
  className?: string
}

function Chapter({
  chapter,
  index,
  config,
}: {
  chapter: EditorialChapter
  index: number
  config: EditorialStoryConfig
}) {
  const ref = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const eased = useSpring(scrollYProgress, { stiffness: 100, damping: 24 })
  const headingY = useTransform(eased, [0, 0.48, 1], [config.travel, 0, -config.travel * 0.35])
  const headingOpacity = useTransform(eased, [0.05, 0.28, 0.78, 0.96], [0, 1, 1, 0])
  const labelX = useTransform(eased, [0, 0.5, 1], [config.travel * 1.8, 0, -config.travel])
  const labelRotate = useTransform(eased, [0, 0.5, 1], [config.rotation, 0, -config.rotation])
  const mediaScale = useTransform(eased, [0.1, 0.5, 0.9], [0.82, 1, 0.94])
  const mediaRotate = useTransform(
    eased,
    [0.1, 0.5, 0.9],
    [index % 2 ? -config.rotation : config.rotation, 0, index % 2 ? 2 : -2],
  )

  return (
    <section
      ref={ref}
      className="es-chapter"
      style={{ minHeight: `${config.chapterHeight}vh` }}
      aria-labelledby={`es-title-${index}`}
    >
      <div className="es-sticky">
        <motion.div
          className="es-copy"
          style={reduceMotion ? undefined : { y: headingY, opacity: headingOpacity }}
        >
          <p className="es-eyebrow">{chapter.eyebrow}</p>
          <h2 id={`es-title-${index}`} style={{ fontSize: `clamp(3.4rem, ${9 * config.headlineScale}vw, ${9.5 * config.headlineScale}rem)` }}>
            {chapter.title}
          </h2>
          <p className="es-body">{chapter.body}</p>
        </motion.div>

        <motion.div
          className="es-word-card"
          style={{
            borderRadius: config.cardRadius,
            background: index % 2 ? config.secondaryAccent : config.accent,
            color: index % 2 ? config.paper : config.ink,
            ...(reduceMotion ? {} : { x: labelX, rotate: labelRotate, scale: mediaScale }),
          }}
          aria-hidden="true"
        >
          {chapter.accent}
        </motion.div>

        <motion.ul
          className="es-fragments"
          style={reduceMotion ? undefined : { scale: mediaScale, rotate: mediaRotate }}
          aria-label="Story fragments"
        >
          {chapter.fragments.map((fragment, fragmentIndex) => (
            <motion.li
              key={fragment}
              style={{
                borderRadius: config.cardRadius,
                background: fragmentIndex === index % chapter.fragments.length
                  ? config.ink
                  : config.paper,
                color: fragmentIndex === index % chapter.fragments.length
                  ? config.paper
                  : config.ink,
              }}
            >
              <span>{String(fragmentIndex + 1).padStart(2, "0")}</span>
              {fragment}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

export function ScrollEditorialStory({
  chapters = defaultEditorialChapters,
  config = defaultEditorialStoryConfig,
  className = "",
}: Props) {
  const root = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: root })
  const progress = useSpring(scrollYProgress, { stiffness: 160, damping: 30 })

  return (
    <main
      ref={root}
      className={`es-root ${className}`}
      style={{
        "--es-ink": config.ink,
        "--es-paper": config.paper,
        "--es-accent": config.accent,
      } as React.CSSProperties}
    >
      {config.showProgress && (
        <motion.div className="es-progress" style={{ scaleX: progress, background: config.accent }} />
      )}

      <header className="es-intro">
        <p>AN EDITORIAL MOTION STUDY</p>
        <h1>From noise<br />to meaning.</h1>
        <span>Scroll to compose the idea ↓</span>
      </header>

      {chapters.map((chapter, index) => (
        <Chapter key={chapter.title} chapter={chapter} index={index} config={config} />
      ))}

      <footer className="es-finale">
        <p>THE END / OR A BEGINNING</p>
        <h2>Make the movement mean something.</h2>
      </footer>
    </main>
  )
}
