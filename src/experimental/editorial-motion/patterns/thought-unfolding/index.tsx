import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import "../../studio.css"

const ideas = {
  Creativity: "The ability to form a connection that did not seem inevitable before.",
  needs: "A relationship—not ownership. Ideas become useful in contact with other things.",
  constraints: "A boundary that gives invention something to push against.",
}
export function ThoughtUnfolding() {
  const [active, setActive] = useState<keyof typeof ideas>("Creativity")
  return <section className="xp-stage xp-thought"><p className="xp-kicker">06 / A THOUGHT UNFOLDING</p><h2>{Object.keys(ideas).map((word) => <button key={word} onClick={() => setActive(word as keyof typeof ideas)}>{word}</button>)}</h2><AnimatePresence mode="wait"><motion.article key={active} layoutId={active} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}><small>{active.toUpperCase()} / DEFINITION</small><p>{ideas[active]}</p></motion.article></AnimatePresence></section>
}
