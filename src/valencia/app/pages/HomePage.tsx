import { Link } from 'react-router'
import { PATTERNS } from '../../registry/patterns'
import { PatternCard } from '../components/PatternCard'
import { KineticHeadline } from '../../patterns/large-heading/KineticHeadline'
import './HomePage.css'

const FEATURED_IDS = ['large-heading', 'scroll-story', 'image-zoom']

export function HomePage() {
  const featured = PATTERNS.filter(p => FEATURED_IDS.includes(p.id))

  return (
    <div className="v-home">

      <section className="v-home__hero">
        <KineticHeadline
          text="Patterns for digital experiences."
          style="editorial"
          energy="medium"
          when="load"
        />
        <p className="v-home__lede">
          A small pattern library for public-sector design work. Motion where it means something. Restraint where it doesn&apos;t.
        </p>
        <div className="v-home__ctas">
          <Link to="/build2/examples" className="v-home__cta v-home__cta--primary">Browse examples</Link>
          <Link to="/build2/use" className="v-home__cta">How it works</Link>
        </div>
      </section>

      <section className="v-home__section">
        <div className="v-home__section-head">
          <h2 className="v-home__section-title">Featured</h2>
          <Link to="/build2/examples" className="v-home__section-more">See all →</Link>
        </div>
        <div className="v-home__grid">
          {featured.map(p => <PatternCard key={p.id} pattern={p} />)}
        </div>
      </section>

      <section className="v-home__section">
        <h2 className="v-home__section-title">Collections</h2>
        <div className="v-home__collections">
          {[
            { id: 'quiet',      label: 'Quiet' },
            { id: 'clear',      label: 'Clear' },
            { id: 'bold',       label: 'Bold' },
            { id: 'playful',    label: 'Playful' },
            { id: 'editorial',  label: 'Editorial' },
            { id: 'experimental', label: 'Experimental' },
          ].map(c => (
            <Link key={c.id} to={`/build2/collections/${c.id}`} className="v-home__collection">
              {c.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
