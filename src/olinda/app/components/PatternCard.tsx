import { Link } from 'react-router'
import type { OlindaPattern } from '../../registry/types'
import './PatternCard.css'

export function PatternCard({ pattern }: { pattern: OlindaPattern }) {
  const Demo = pattern.demo
  return (
    <Link to={`/examples/${pattern.id}`} className="o-card">
      <div className="o-card__preview" aria-hidden="true">
        <div className="o-card__demo">
          <Demo />
        </div>
        <div className="o-card__scrim" />
      </div>
      <div className="o-card__meta">
        <div className="o-card__name">{pattern.name}</div>
        <div className="o-card__desc">{pattern.description}</div>
      </div>
    </Link>
  )
}
