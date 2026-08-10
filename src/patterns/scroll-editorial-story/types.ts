export type EditorialChapter = {
  eyebrow: string
  title: string
  body: string
  accent: string
  fragments: string[]
}

export type EditorialStoryConfig = {
  ink: string
  paper: string
  accent: string
  secondaryAccent: string
  headlineScale: number
  travel: number
  rotation: number
  cardRadius: number
  chapterHeight: number
  showProgress: boolean
}

export type IterationEntry = {
  id: string
  timestamp: string
  changes: Partial<EditorialStoryConfig>
  config: EditorialStoryConfig
}

export const defaultEditorialStoryConfig: EditorialStoryConfig = {
  ink: "#1c1c1c",
  paper: "#f3efe4",
  accent: "#ff6b35",
  secondaryAccent: "#4b64ff",
  headlineScale: 1,
  travel: 92,
  rotation: 7,
  cardRadius: 4,
  chapterHeight: 150,
  showProgress: true,
}

export const defaultEditorialChapters: EditorialChapter[] = [
  {
    eyebrow: "01 / The condition",
    title: "Work arrives as fragments.",
    body: "Notes, images, half-decisions and files compete for attention before an idea has found its shape.",
    accent: "FRENZY",
    fragments: ["brief_v7.pdf", "IMG_2048.jpg", "final-final.fig", "voice-note.wav"],
  },
  {
    eyebrow: "02 / The shift",
    title: "Movement reveals relationships.",
    body: "The pieces do not disappear. They align, overlap and begin to explain one another.",
    accent: "RHYTHM",
    fragments: ["collect", "compare", "edit", "connect"],
  },
  {
    eyebrow: "03 / The idea",
    title: "Clarity is a composition.",
    body: "A useful system preserves creative energy while giving every element a reason to be present.",
    accent: "CLARITY",
    fragments: ["signal", "space", "sequence", "meaning"],
  },
  {
    eyebrow: "04 / The outcome",
    title: "The story becomes visible.",
    body: "Not through spectacle, but through a few deliberate changes that make the concept easier to feel.",
    accent: "VISIBLE",
    fragments: ["one idea", "many forms", "shared clearly", "worth keeping"],
  },
]
