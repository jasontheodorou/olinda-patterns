import { NavLink, Link } from 'react-router'
import './SiteChrome.css'

const NAV = [
  { to: '/examples',              label: 'Patterns' },
  { to: '/collections/editorial', label: 'Collections' },
  { to: '/use',                   label: 'Use' },
  { to: '/about',                 label: 'About' },
]

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="t-chrome">
      <header className="t-chrome__header">
        <div className="t-chrome__row">
          <Link to="/" className="t-chrome__brand">Tarocco</Link>
          <nav className="t-chrome__nav" aria-label="Primary">
            {NAV.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `t-chrome__link ${isActive ? 'v-chrome__link--active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="t-chrome__main">{children}</main>

      <footer className="t-chrome__footer">
        <div className="t-chrome__row">
          <span className="t-chrome__muted">Tarocco · Reusable patterns for everyone</span>
        </div>
      </footer>
    </div>
  )
}
