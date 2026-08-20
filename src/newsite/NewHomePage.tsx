import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import { CATALOGUE, FILTERS, filterCatalogue, type Build } from './catalogue'
import './NewHomePage.css'

const BUILDS: { label: string; value: Build | null }[] = [
  { label: 'All',     value: null },
  { label: 'Build 1', value: 'build1' },
  { label: 'Build 2', value: 'build2' },
]

export function NewHomePage() {
  const [query, setQuery] = useState('')
  const [tag, setTag] = useState<string | null>(null)
  const [build, setBuild] = useState<Build | null>(null)

  const results = useMemo(() => filterCatalogue(query, tag, build), [query, tag, build])
  const total = CATALOGUE.length

  return (
    <div className="ns">
      <header className="ns-header">
        <div className="ns-container ns-header__row">
          <Link to="/" className="ns-brand">Valencia</Link>
          <nav className="ns-header__nav" aria-label="Primary">
            <a className="ns-navlink" href="#catalogue">Catalogue</a>
            <Link className="ns-navlink" to="/build1">Build 1</Link>
            <Link className="ns-navlink" to="/build2">Build 2</Link>
          </nav>
        </div>
      </header>

      <section className="ns-hero">
        <div className="ns-container">
          <div className="ns-hero__kicker">A quiet catalogue</div>
          <h1 className="ns-hero__title">
            <em>Valencia</em>
          </h1>
          <p className="ns-hero__lede">
            A directory of {total} patterns across two builds — the earlier UI library and the current motion set. Small, considered, useful.
          </p>
        </div>
      </section>

      <div className="ns-filters" id="catalogue">
        <div className="ns-container ns-filters__row">
          <label className="ns-search">
            <span className="ns-search__label">Search</span>
            <input
              type="search"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search patterns…"
              className="ns-search__input"
              aria-label="Search patterns"
            />
          </label>

          <div className="ns-chips" role="tablist" aria-label="Filter by tag">
            <button
              className={`ns-chip ${tag === null ? 'ns-chip--active' : ''}`}
              onClick={() => setTag(null)}
              type="button"
            >
              All
            </button>
            {FILTERS.map(f => (
              <button
                key={f.tag}
                className={`ns-chip ${tag === f.tag ? 'ns-chip--active' : ''}`}
                onClick={() => setTag(tag === f.tag ? null : f.tag)}
                type="button"
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="ns-builds" role="tablist" aria-label="Filter by build">
            {BUILDS.map(b => (
              <button
                key={b.label}
                className={`ns-build ${build === b.value ? 'ns-build--active' : ''}`}
                onClick={() => setBuild(b.value)}
                type="button"
              >
                {b.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="ns-main">
        <div className="ns-container">
          <div className="ns-count">
            <span>{results.length} of {total} patterns</span>
            {(tag || build || query) && (
              <button
                className="ns-clear"
                onClick={() => { setTag(null); setBuild(null); setQuery('') }}
                type="button"
              >
                Clear filters
              </button>
            )}
          </div>

          {results.length === 0 ? (
            <div className="ns-empty">
              <p>Nothing matches. Try a different filter.</p>
            </div>
          ) : (
            <ul className="ns-grid">
              {results.map(entry => (
                <li key={entry.id} className="ns-card-wrap">
                  <Link to={entry.href} className="ns-card">
                    <div className="ns-card__meta">
                      <span className="ns-card__build">{entry.buildLabel}</span>
                      {entry.status !== 'ready' && (
                        <span className="ns-card__status">{entry.status}</span>
                      )}
                    </div>
                    <h2 className="ns-card__title">{entry.name}</h2>
                    <p className="ns-card__desc">{entry.description}</p>
                    <ul className="ns-card__tags">
                      {entry.tags.slice(0, 3).map(t => (
                        <li key={t} className="ns-card__tag">{t}</li>
                      ))}
                    </ul>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>

      <footer className="ns-footer">
        <div className="ns-container ns-footer__row">
          <span className="ns-footer__mark"><em>Valencia</em></span>
          <span className="ns-footer__muted">Two builds. One catalogue.</span>
        </div>
      </footer>
    </div>
  )
}
