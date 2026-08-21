import { Link } from 'react-router'
import type { TaroccoPattern } from '../../registry/types'
import './PatternCard.css'

export function PatternCard({ pattern }: { pattern: TaroccoPattern }) {
  const Demo = pattern.demo
  return (
    <Link to={`/examples/${pattern.id}`} className="t-card">
      <div className="t-card__preview" aria-hidden="true">
        <div className="t-card__demo">
          <Demo />
        </div>
        <div className="t-card__scrim" />
      </div>
      <div className="t-card__meta">
        <div className="t-card__name">{pattern.name}</div>
        <div className="t-card__desc">{pattern.description}</div>
      </div>
    </Link>
  )
}
