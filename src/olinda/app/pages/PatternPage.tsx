import { useState } from 'react'
import { Link, useParams } from 'react-router'
import { PATTERNS } from '../../registry/patterns'
import { Controls } from '../components/Controls'
import { UseWithClaude } from '../components/UseWithClaude'
import { DeveloperDetails } from '../components/DeveloperDetails'
import type { DesignerControls } from '../../registry/types'
import './PatternPage.css'

export function PatternPage() {
  const { patternId } = useParams()
  const pattern = PATTERNS.find(p => p.id === patternId)

  const [controls, setControls] = useState<DesignerControls>({
    style: pattern?.styles[0],
    energy: 'medium',
    speed: 'normal',
    when: 'scroll',
  })

  if (!pattern) {
    return (
      <div className="o-pp">
        <p className="o-pp__missing">Pattern not found. <Link to="/examples">Back to examples</Link></p>
      </div>
    )
  }

  const Demo = pattern.demo

  return (
    <div className="o-pp">

      <div className="o-pp__breadcrumb">
        <Link to="/examples">Examples</Link>
        <span> · </span>
        <span>{pattern.name}</span>
      </div>

      <header className="o-pp__head">
        <h1 className="o-pp__title">{pattern.name}</h1>
        <p className="o-pp__desc">{pattern.description}</p>
      </header>

      <section className="o-pp__demo">
        <Demo />
      </section>

      <div className="o-pp__body">

        <div className="o-pp__meta">
          <div>
            <h3 className="o-pp__meta-title">Good for</h3>
            <ul className="o-pp__meta-list">
              {pattern.goodFor.map(g => <li key={g}>{g}</li>)}
            </ul>
          </div>

          <div>
            <h3 className="o-pp__meta-title">Styles</h3>
            <ul className="o-pp__meta-list o-pp__meta-list--pills">
              {pattern.styles.map(s => <li key={s}>{s}</li>)}
            </ul>
          </div>

          <div>
            <h3 className="o-pp__meta-title">Collections</h3>
            <ul className="o-pp__meta-list o-pp__meta-list--pills">
              {pattern.collections.map(c => (
                <li key={c}>
                  <Link to={`/collections/${c.toLowerCase()}`}>{c}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="o-pp__try">
          <h3 className="o-pp__try-title">Try it</h3>
          <Controls pattern={pattern} value={controls} onChange={setControls} />
        </div>

        <div className="o-pp__use">
          <UseWithClaude pattern={pattern} controls={controls} />
        </div>

        <DeveloperDetails pattern={pattern} />
      </div>
    </div>
  )
}
