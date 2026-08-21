import { Link } from 'react-router'
import type { OlindaPattern } from '../../registry/types'
import './PatternCard.css'

type Props = { pattern: OlindaPattern }

function collectionClass(pattern: OlindaPattern): string {
  const first = pattern.collections[0]?.toLowerCase() ?? 'clear'
  return `o-card__art--${first}`
}

export function PatternCard({ pattern }: Props) {
  const Demo = pattern.demo
  return (
    <Link to={`/examples/${pattern.id}`} className="o-card">
      <div className={`o-card__art ${collectionClass(pattern)}`} aria-hidden="true">
        <Demo />
      </div>
      <div className="o-card__caption">
        <h2 className="o-card__name">{pattern.name}</h2>
        <p className="o-card__desc">{pattern.description}</p>
      </div>
    </Link>
  )
}
