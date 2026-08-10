import { useState, type ComponentType } from "react"
import { MeaningMachine } from "./patterns/meaning-machine"
import { ChaosGridComposer } from "./patterns/chaos-grid"
import { EditorialZoom } from "./patterns/editorial-zoom"
import { LivingFootnotes } from "./patterns/living-footnotes"
import { ShuffleGlossary } from "./patterns/shuffle-glossary"
import { ThoughtUnfolding } from "./patterns/thought-unfolding"
import { EasingPlayground } from "./patterns/easing-playground"
import { ContentConstellation } from "./patterns/content-constellation"
import { ScrollEditorialStoryDemo } from "./patterns/scroll-editorial-story"
import "./studio.css"

const patterns: Array<[string, ComponentType]> = [
  ["Scroll story", ScrollEditorialStoryDemo], ["Meaning machine", MeaningMachine],
  ["Chaos grid", ChaosGridComposer], ["Editorial zoom", EditorialZoom],
  ["Living footnotes", LivingFootnotes], ["Shuffle glossary", ShuffleGlossary],
  ["Thought unfolding", ThoughtUnfolding], ["Emotional easing", EasingPlayground],
  ["Constellation", ContentConstellation],
]
export function ExperimentalPatternsGallery() {
  const [active, setActive] = useState(0)
  const Pattern = patterns[active][1]
  return <main className="xp-gallery"><nav className="xp-gallery-nav">{patterns.map(([name], index) => <button className={active===index?"is-active":""} onClick={() => setActive(index)} key={name}>{name}</button>)}</nav><div className="xp-gallery-note">EXPERIMENTAL PATTERN {active + 1} / {patterns.length}</div><Pattern /></main>
}
