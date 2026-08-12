import { NavLink, Link } from 'react-router'
import './SiteChrome.css'

const NAV = [
  { to: '/examples',    label: 'Examples' },
  { to: '/collections/editorial', label: 'Collections' },
  { to: '/styles',      label: 'Styles' },
  { to: '/use',         label: 'Use' },
  { to: '/about',       label: 'About' },
]

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="v-chrome">
      <header className="v-chrome__header">
        <div className="v-chrome__row">
          <Link to="/" className="v-chrome__brand">Valencia</Link>
          <nav className="v-chrome__nav" aria-label="Primary">
            {NAV.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `v-chrome__link ${isActive ? 'v-chrome__link--active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="v-chrome__main">{children}</main>

      <footer className="v-chrome__footer">
        <div className="v-chrome__row">
          <span className="v-chrome__muted">Valencia · Patterns for digital experiences</span>
        </div>
      </footer>
    </div>
  )
}
