import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import "../../studio.css"

export function EditorialZoom() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] })
  const scale = useTransform(scrollYProgress, [0, 1], [7, 1])
  const radius = useTransform(scrollYProgress, [0, 1], ["50%", "0%"])
  const captionOpacity = useTransform(scrollYProgress, [0.65, 0.88], [0, 1])
  return (
    <section ref={ref} className="xp-zoom-wrap">
      <div className="xp-zoom-sticky">
        <p className="xp-kicker">03 / EDITORIAL ZOOM</p>
        <motion.div className="xp-zoom-art" style={{ scale, borderRadius: radius }}><span>A</span></motion.div>
        <motion.div className="xp-zoom-caption" style={{ opacity: captionOpacity }}><small>CONTEXT CHANGES MEANING</small><h2>Look closer.<br />Then step back.</h2></motion.div>
      </div>
    </section>
  )
}
