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
    <div className="o-home">

      <section className="o-home__hero">
        <h1 className="o-home__title">
          reusable patterns<br />for everyone
        </h1>
        <p className="o-home__lede">
          A small pattern library for public-sector design work. Motion where it means something. Restraint where it doesn&apos;t.
        </p>
      </section>

      <section className="o-home__chapters">
        {CHAPTERS.map((c) => (
          <Link to={`/collections/${c.id}`} className="o-chapter" key={c.id}>
            <div className={`o-chapter__art o-chapter__art--${c.art}`} aria-hidden="true">
              <ChapterArt variant={c.art} />
            </div>
            <div className="o-chapter__caption">
              <h2 className="o-chapter__title">{c.label}</h2>
              <p className="o-chapter__desc">{c.description}</p>
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
          <span className="o-art-shape o-art-shape--soft-a" />
          <span className="o-art-shape o-art-shape--soft-b" />
        </>
      )
    case 'clear':
      return (
        <>
          <span className="o-art-shape o-art-shape--grid-a" />
          <span className="o-art-shape o-art-shape--grid-b" />
          <span className="o-art-shape o-art-shape--grid-c" />
        </>
      )
    case 'bold':
      return (
        <>
          <span className="o-art-shape o-art-shape--bold-a" />
          <span className="o-art-shape o-art-shape--bold-b" />
        </>
      )
    case 'playful':
      return (
        <>
          <span className="o-art-shape o-art-shape--play-a" />
          <span className="o-art-shape o-art-shape--play-b" />
          <span className="o-art-shape o-art-shape--play-c" />
          <span className="o-art-shape o-art-shape--play-d" />
        </>
      )
    case 'editorial':
      return (
        <>
          <span className="o-art-shape o-art-shape--ed-a" />
          <span className="o-art-shape o-art-shape--ed-b" />
        </>
      )
    case 'experimental':
      return (
        <>
          <span className="o-art-shape o-art-shape--xp-a" />
          <span className="o-art-shape o-art-shape--xp-b" />
          <span className="o-art-shape o-art-shape--xp-c" />
        </>
      )
  }
}
