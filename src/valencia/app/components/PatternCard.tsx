import { Link } from 'react-router'
import type { ValenciaPattern } from '../../registry/types'
import './PatternCard.css'

export function PatternCard({ pattern }: { pattern: ValenciaPattern }) {
  const Demo = pattern.demo
  return (
    <Link to={`/examples/${pattern.id}`} className="v-card">
      <div className="v-card__preview" aria-hidden="true">
        <div className="v-card__demo">
          <Demo />
        </div>
        <div className="v-card__scrim" />
      </div>
      <div className="v-card__meta">
        <div className="v-card__name">{pattern.name}</div>
        <div className="v-card__desc">{pattern.description}</div>
      </div>
    </Link>
  )
}
