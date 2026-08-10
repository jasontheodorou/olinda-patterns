import { useState } from "react"
import { motion } from "motion/react"
import "../../studio.css"

const terms = ["SIGNAL", "RHYTHM", "VOICE", "SPACE", "TENSION", "CARE", "SYSTEM", "PLAY"]
export function ShuffleGlossary() {
  const [items, setItems] = useState(terms)
  const shuffle = () => setItems((current) => [...current].sort(() => Math.random() - 0.5))
  return <section className="xp-stage xp-glossary"><p className="xp-kicker">05 / SHUFFLE GLOSSARY</p><button className="xp-button" onClick={shuffle}>Shuffle relationships</button><div>{items.map((term, i) => <motion.article layout key={term} transition={{ type: "spring", stiffness: 330, damping: 28 }} data-tone={i % 4}><span>{term.slice(0, 1)}</span><strong>{term}</strong></motion.article>)}</div></section>
}
