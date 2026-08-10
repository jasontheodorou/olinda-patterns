import { useState } from "react"
import { motion } from "motion/react"
import "../../studio.css"

const nodes = [{ x: 16, y: 26, t: "people" }, { x: 46, y: 18, t: "ideas" }, { x: 77, y: 30, t: "tools" }, { x: 28, y: 72, t: "history" }, { x: 62, y: 68, t: "meaning" }]
export function ContentConstellation() {
  const [active, setActive] = useState(1)
  return <section className="xp-stage xp-constellation"><p className="xp-kicker">08 / CONTENT CONSTELLATION</p><svg viewBox="0 0 100 100" preserveAspectRatio="none">{nodes.map((node, i) => i !== active && <motion.line key={node.t} x1={nodes[active].x} y1={nodes[active].y} x2={node.x} y2={node.y} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />)}</svg>{nodes.map((node, i) => <motion.button key={node.t} animate={{ scale: active === i ? 1.35 : 1 }} onClick={() => setActive(i)} style={{ left: `${node.x}%`, top: `${node.y}%` }}><span>{String(i + 1).padStart(2, "0")}</span>{node.t}</motion.button>)}<h2>Relationships<br />make insight.</h2></section>
}
