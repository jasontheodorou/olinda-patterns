import { Link } from 'react-router'
import './HomePage.css'

const COLLECTIONS = [
  { id: 'quiet',        label: 'Quiet' },
  { id: 'clear',        label: 'Clear' },
  { id: 'bold',         label: 'Bold' },
  { id: 'playful',      label: 'Playful' },
  { id: 'editorial',    label: 'Editorial' },
  { id: 'experimental', label: 'Experimental' },
]

export function HomePage() {
  return (
    <div className="v-home">

      <section className="v-home__hero">
        <p className="v-home__kicker">Valencia</p>
        <h1 className="v-home__title">Patterns for digital experiences.</h1>
        <p className="v-home__lede">
          A small pattern library for public-sector design work. Motion where it means something. Restraint where it doesn&apos;t.
        </p>
        <div className="v-home__ctas">
          <Link to="/examples" className="v-home__cta v-home__cta--primary">Browse examples</Link>
          <Link to="/use" className="v-home__cta">How it works</Link>
        </div>
      </section>

      <section className="v-home__section">
        <h2 className="v-home__section-title">Collections</h2>
        <div className="v-home__collections">
          {COLLECTIONS.map(c => (
            <Link key={c.id} to={`/collections/${c.id}`} className="v-home__collection">
              {c.label}
            </Link>
          ))}
        </div>
      </section>

    </div>
  )
}
