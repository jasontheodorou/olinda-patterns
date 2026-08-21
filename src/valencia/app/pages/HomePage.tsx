import { Link } from 'react-router'
import './HomePage.css'

type Chapter = {
  id: string
  label: string
  description: string
  art: 'quiet' | 'clear' | 'bold' | 'playful' | 'editorial' | 'experimental'
}

const CHAPTERS: Chapter[] = [
  { id: 'quiet',        label: 'Quiet',        description: 'Barely-there motion for calm surfaces and long reads.',                 art: 'quiet' },
  { id: 'clear',        label: 'Clear',        description: 'Direct and functional. For task interfaces and dashboards.',            art: 'clear' },
  { id: 'bold',         label: 'Bold',         description: 'Louder distance, more weight. For declarative headlines.',              art: 'bold' },
  { id: 'playful',      label: 'Playful',      description: 'Springy and light. For lighter marketing touches and campaign pages.',  art: 'playful' },
  { id: 'editorial',    label: 'Editorial',    description: 'Slower rhythm, longer arcs. For story-led pages and long-form work.',   art: 'editorial' },
  { id: 'experimental', label: 'Experimental', description: 'Ideas in progress. Motion still being figured out.',                    art: 'experimental' },
]

export function HomePage() {
  return (
    <div className="v-home">

      <section className="v-home__hero">
        <h1 className="v-home__title">
          reusable patterns<br />for everyone :)
        </h1>
        <p className="v-home__lede">
          A small pattern library for public-sector design work. Motion where it means something. Restraint where it doesn&apos;t.
        </p>
      </section>

      <section className="v-home__chapters">
        {CHAPTERS.map((c) => (
          <Link to={`/collections/${c.id}`} className="v-chapter" key={c.id}>
            <div className={`v-chapter__art v-chapter__art--${c.art}`} aria-hidden="true">
              <ChapterArt variant={c.art} />
            </div>
            <div className="v-chapter__caption">
              <h2 className="v-chapter__title">{c.label}</h2>
              <p className="v-chapter__desc">{c.description}</p>
            </div>
          </Link>
        ))}
      </section>

    </div>
  )
}

function ChapterArt({ variant }: { variant: Chapter['art'] }) {
  switch (variant) {
    case 'quiet':
      return (
        <>
          <span className="v-art-shape v-art-shape--soft-a" />
          <span className="v-art-shape v-art-shape--soft-b" />
        </>
      )
    case 'clear':
      return (
        <>
          <span className="v-art-shape v-art-shape--grid-a" />
          <span className="v-art-shape v-art-shape--grid-b" />
          <span className="v-art-shape v-art-shape--grid-c" />
        </>
      )
    case 'bold':
      return (
        <>
          <span className="v-art-shape v-art-shape--bold-a" />
          <span className="v-art-shape v-art-shape--bold-b" />
        </>
      )
    case 'playful':
      return (
        <>
          <span className="v-art-shape v-art-shape--play-a" />
          <span className="v-art-shape v-art-shape--play-b" />
          <span className="v-art-shape v-art-shape--play-c" />
          <span className="v-art-shape v-art-shape--play-d" />
        </>
      )
    case 'editorial':
      return (
        <>
          <span className="v-art-shape v-art-shape--ed-a" />
          <span className="v-art-shape v-art-shape--ed-b" />
        </>
      )
    case 'experimental':
      return (
        <>
          <span className="v-art-shape v-art-shape--xp-a" />
          <span className="v-art-shape v-art-shape--xp-b" />
          <span className="v-art-shape v-art-shape--xp-c" />
        </>
      )
  }
}
