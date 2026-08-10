import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import "../../studio.css"

const words = ["SPACE", "FRICTION", "PEOPLE", "TIME"]

export function MeaningMachine() {
  const [active, setActive] = useState(0)
  return (
    <section className="xp-stage xp-meaning" onClick={() => setActive((active + 1) % words.length)}>
      <p className="xp-kicker">01 / THE MEANING MACHINE · CLICK ANYWHERE</p>
      <div className="xp-meaning-line">
        <span>IDEAS NEED</span>
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.strong key={words[active]} layout initial={{ y: 80, opacity: 0, rotate: 3 }} animate={{ y: 0, opacity: 1, rotate: 0 }} exit={{ y: -80, opacity: 0, rotate: -3 }} transition={{ type: "spring", stiffness: 360, damping: 30 }}>
            {words[active]}
          </motion.strong>
        </AnimatePresence>
      </div>
      <div className="xp-index">{String(active + 1).padStart(2, "0")} / 04</div>
    </section>
  )
}
