import { Link } from 'react-router'
import './NewHomePage.css'

export function NewHomePage() {
  return (
    <div className="v-newsite">
      <main className="v-newsite__main">
        <div className="v-newsite__brand">Valencia</div>
        <h1 className="v-newsite__title">New site — pending design</h1>
        <p className="v-newsite__lede">
          The next Valencia is being designed. Prior versions of the pattern
          library are archived below.
        </p>
        <nav className="v-newsite__nav" aria-label="Archived builds">
          <Link to="/build1" className="v-newsite__card">
            <span className="v-newsite__card-label">Build 1</span>
            <span className="v-newsite__card-desc">Original UI-pattern library — 32 patterns behind Mantine.</span>
          </Link>
          <Link to="/build2" className="v-newsite__card">
            <span className="v-newsite__card-label">Build 2</span>
            <span className="v-newsite__card-desc">Valencia V2 — motion patterns, semantic styles, Use with Claude.</span>
          </Link>
        </nav>
      </main>
    </div>
  )
}
