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
    <div className="o-chrome">
      <header className="o-chrome__header">
        <div className="o-chrome__row">
          <Link to="/" className="o-chrome__brand">Olinda</Link>
          <nav className="o-chrome__nav" aria-label="Primary">
            {NAV.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `o-chrome__link ${isActive ? 'v-chrome__link--active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="o-chrome__main">{children}</main>

      <footer className="o-chrome__footer">
        <div className="o-chrome__row">
          <span className="o-chrome__muted">Olinda · Reusable patterns for everyone</span>
        </div>
      </footer>
    </div>
  )
}
