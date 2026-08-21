import { Link } from 'react-router'
import './HomePage.css'

type Chapter = {
  id: string
  label: string
  description: string
  art: 'quiet' | 'clear' | 'bold' | 'playful' | 'editorial' | 'experimental'
}

const CHAPTERS: Chapter[] = [
  { id: 'clear',        label: 'Clear',        description: 'Direct and functional. For task interfaces and dashboards.',          art: 'clear' },
  { id: 'editorial',    label: 'Editorial',    description: 'Slower rhythm, longer arcs. For story-led pages and long-form work.', art: 'editorial' },
  { id: 'experimental', label: 'Experimental', description: 'Ideas in progress. Motion still being figured out.',                  art: 'experimental' },
]

export function HomePage() {
  return (
    <div className="t-home">

      <section className="t-home__hero">
        <h1 className="t-home__title">
          reusable patterns<br />for everyone
        </h1>
        <p className="t-home__lede">
          A small pattern library for public-sector design work. Motion where it means something. Restraint where it doesn&apos;t.
        </p>
      </section>

      <section className="t-home__chapters">
        {CHAPTERS.map((c) => (
          <Link to={`/collections/${c.id}`} className="t-chapter" key={c.id}>
            <div className={`t-chapter__art t-chapter__art--${c.art}`} aria-hidden="true">
              <ChapterArt variant={c.art} />
            </div>
            <div className="t-chapter__caption">
              <h2 className="t-chapter__title">{c.label}</h2>
              <p className="t-chapter__desc">{c.description}</p>
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
          <span className="t-art-shape t-art-shape--soft-a" />
          <span className="t-art-shape t-art-shape--soft-b" />
        </>
      )
    case 'clear':
      return (
        <>
          <span className="t-art-shape t-art-shape--grid-a" />
          <span className="t-art-shape t-art-shape--grid-b" />
          <span className="t-art-shape t-art-shape--grid-c" />
        </>
      )
    case 'bold':
      return (
        <>
          <span className="t-art-shape t-art-shape--bold-a" />
          <span className="t-art-shape t-art-shape--bold-b" />
        </>
      )
    case 'playful':
      return (
        <>
          <span className="t-art-shape t-art-shape--play-a" />
          <span className="t-art-shape t-art-shape--play-b" />
          <span className="t-art-shape t-art-shape--play-c" />
          <span className="t-art-shape t-art-shape--play-d" />
        </>
      )
    case 'editorial':
      return (
        <>
          <span className="t-art-shape t-art-shape--ed-a" />
          <span className="t-art-shape t-art-shape--ed-b" />
        </>
      )
    case 'experimental':
      return (
        <>
          <span className="t-art-shape t-art-shape--xp-a" />
          <span className="t-art-shape t-art-shape--xp-b" />
          <span className="t-art-shape t-art-shape--xp-c" />
        </>
      )
  }
}
