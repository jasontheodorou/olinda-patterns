import { PATTERNS } from '../../registry/patterns'
import { PatternCard } from '../components/PatternCard'
import './ExamplesPage.css'

export function ExamplesPage() {
  const ready = PATTERNS.filter(p => p.status === 'ready')

  return (
    <div className="v-examples">
      <header className="v-examples__head">
        <h1 className="v-examples__title">Examples</h1>
        <p className="v-examples__lede">
          {ready.length} live patterns. Pick one to explore, adjust the controls, and generate a Claude prompt.
        </p>
      </header>

      <div className="v-examples__grid">
        {ready.map(p => <PatternCard key={p.id} pattern={p} />)}
      </div>
    </div>
  )
}
