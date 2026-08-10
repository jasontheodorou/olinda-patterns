import { useState } from "react"
import { motion } from "motion/react"
import "../../studio.css"

const pieces = ["BRIEF.PDF", "A useful mess", "IMG_2048", "VOICE NOTE", "compare", "FINAL.FIG", "keep this", "one idea"]

export function ChaosGridComposer() {
  const [ordered, setOrdered] = useState(false)
  return (
    <section className="xp-stage xp-chaos">
      <button className="xp-button" onClick={() => setOrdered(!ordered)}>{ordered ? "Release" : "Compose"}</button>
      <p className="xp-kicker">02 / CHAOS–TO–GRID</p>
      <div className={`xp-chaos-grid ${ordered ? "is-ordered" : ""}`}>
        {pieces.map((piece, index) => (
          <motion.article key={piece} layout transition={{ type: "spring", stiffness: 260, damping: 27 }} style={!ordered ? { x: ((index * 47) % 150) - 75, y: ((index * 83) % 140) - 70, rotate: ((index * 17) % 24) - 12, zIndex: index } : undefined}>
            <small>{String(index + 1).padStart(2, "0")}</small><strong>{piece}</strong>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
