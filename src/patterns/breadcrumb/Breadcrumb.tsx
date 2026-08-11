import type { ReactNode } from 'react'
import { ChevronRight, Home } from 'lucide-react'
import { T } from '../../tokens'

export interface Crumb {
  label: string
  href?: string
  onClick?: () => void
  icon?: ReactNode
}

interface BreadcrumbProps {
  items: Crumb[]
  separator?: ReactNode
  showHome?: boolean
  onHome?: () => void
}

export function Breadcrumb({ items, separator, showHome, onHome }: BreadcrumbProps) {
  const sep = separator ?? <ChevronRight size={14} color={T.fg.secondary} />
  const chain: (Crumb & { isHome?: boolean })[] = showHome
    ? [{ label: 'Home', onClick: onHome, icon: <Home size={13} />, isHome: true }, ...items]
    : items

  return (
    <nav aria-label="Breadcrumb" style={{ fontFamily: T.font }}>
      <ol style={{ display: 'flex', alignItems: 'center', gap: 6, listStyle: 'none', padding: 0, margin: 0, flexWrap: 'wrap' }}>
        {chain.map((c, i) => {
          const isLast = i === chain.length - 1
          const clickable = !isLast && (c.href || c.onClick)
          return (
            <li key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              {clickable ? (
                <a
                  href={c.href}
                  onClick={e => { if (c.onClick) { e.preventDefault(); c.onClick() } }}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 4,
                    fontSize: 13, color: T.fg.secondary, textDecoration: 'none',
                    padding: '2px 4px', borderRadius: 3,
                    transition: `color ${T.motion.fast} ${T.motion.ease}`,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = T.navy }}
                  onMouseLeave={e => { e.currentTarget.style.color = T.fg.secondary }}
                >
                  {c.icon}
                  {c.label}
                </a>
              ) : (
                <span
                  aria-current={isLast ? 'page' : undefined}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 4,
                    fontSize: 13, fontWeight: isLast ? 700 : 400,
                    color: isLast ? T.fg.primary : T.fg.secondary,
                    padding: '2px 4px',
                  }}
                >
                  {c.icon}
                  {c.label}
                </span>
              )}
              {!isLast && <span style={{ display: 'inline-flex' }}>{sep}</span>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
