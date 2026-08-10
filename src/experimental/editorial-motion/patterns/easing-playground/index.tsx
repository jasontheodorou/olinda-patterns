import { useState } from "react"
import { motion } from "motion/react"
import "../../studio.css"

const moods = { decisive: [0.22, 1, 0.36, 1], patient: [0.65, 0, 0.35, 1], playful: [0.34, 1.56, 0.64, 1] } as const
export function EasingPlayground() {
  const [mood, setMood] = useState<keyof typeof moods>("decisive")
  const [run, setRun] = useState(false)
  return <section className="xp-stage xp-easing"><p className="xp-kicker">07 / EMOTIONAL EASING</p><div className="xp-easing-controls">{Object.keys(moods).map((name) => <button className={mood === name ? "is-active" : ""} onClick={() => { setMood(name as keyof typeof moods); setRun(false) }} key={name}>{name}</button>)}</div><div className="xp-easing-track" onClick={() => setRun(!run)}><motion.div animate={{ x: run ? "calc(100vw - 15rem)" : 0, rotate: run ? 16 : -8 }} transition={{ duration: 1.1, ease: moods[mood] }}><span>➤</span></motion.div></div><h2>{mood} movement<br />changes the voice.</h2></section>
}
