import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import "../../studio.css"

const notes = [
  ["friction", "Resistance can be productive when it slows an idea just enough to examine it."],
  ["space", "Whitespace is not absence. It gives relationships enough room to become legible."],
  ["sequence", "The order in which evidence appears changes the argument a reader constructs."],
] as const

export function LivingFootnotes() {
  const [active, setActive] = useState(0)
  return (
    <section className="xp-stage xp-footnotes">
      <p className="xp-kicker">04 / LIVING FOOTNOTES</p>
      <article><h2>An idea needs {notes.map(([word], index) => <button key={word} className={active === index ? "is-active" : ""} onClick={() => setActive(index)}>{word}</button>)} to become clear.</h2></article>
      <aside>
        <AnimatePresence mode="wait"><motion.div key={active} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}><small>NOTE {active + 1}</small><p>{notes[active][1]}</p></motion.div></AnimatePresence>
      </aside>
    </section>
  )
}
