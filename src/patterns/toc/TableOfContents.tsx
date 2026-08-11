import { useState, useEffect } from 'react'
import { T } from '../../tokens'

export interface TocItem {
  id: string
  label: string
  level?: 1 | 2 | 3
}

interface TableOfContentsProps {
  items: TocItem[]
  activeId?: string
  onNavigate?: (id: string) => void
}

export function TableOfContents({ items, activeId, onNavigate }: TableOfContentsProps) {
  const [internalActive, setInternalActive] = useState(items[0]?.id ?? '')
  const currentId = activeId ?? internalActive

  // Auto-track active heading based on scroll
  useEffect(() => {
    if (activeId) return
    const els = items.map(i => document.getElementById(i.id)).filter(Boolean) as HTMLElement[]
    const obs = new IntersectionObserver(entries => {
      const visible = entries.filter(e => e.isIntersecting).sort((a,b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
      if (visible) setInternalActive(visible.target.id)
    }, { rootMargin: '-40% 0px -50% 0px' })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [items, activeId])

  return (
    <nav aria-label="On this page" style={{ fontFamily: T.font }}>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: T.fg.secondary, marginBottom: 12 }}>
        On this page
      </div>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, borderLeft: `1px solid ${T.border.default}` }}>
        {items.map(item => {
          const isActive = item.id === currentId
          const level = item.level ?? 1
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={e => { if (onNavigate) { e.preventDefault(); onNavigate(item.id) } }}
                style={{
                  display: 'block',
                  padding: `6px 12px 6px ${12 + (level - 1) * 12}px`,
                  fontSize: 13,
                  fontWeight: isActive ? 700 : 400,
                  color: isActive ? T.navy : T.fg.secondary,
                  textDecoration: 'none',
                  borderLeft: `2px solid ${isActive ? T.navy : 'transparent'}`,
                  marginLeft: -1,
                  transition: `color ${T.motion.fast} ${T.motion.ease}, border-color ${T.motion.fast} ${T.motion.ease}`,
                  lineHeight: 1.5,
                }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = T.fg.primary }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = T.fg.secondary }}
              >
                {item.label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
