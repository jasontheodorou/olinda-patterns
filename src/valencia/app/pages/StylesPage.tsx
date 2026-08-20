import { Link, useParams } from 'react-router'
import { motionStyles, type ValenciaStyle } from '../../styles/motionStyles'
import { KineticHeadline } from '../../patterns/large-heading/KineticHeadline'
import './StylesPage.css'

const STYLES: { id: ValenciaStyle; name: string; description: string }[] = [
  { id: 'quiet',     name: 'Quiet',     description: 'Barely-there movement. For calm surfaces and long reads.' },
  { id: 'clear',     name: 'Clear',     description: 'Direct and functional. For task interfaces and dashboards.' },
  { id: 'editorial', name: 'Editorial', description: 'Slower rhythm, longer arcs. For story-led pages.' },
  { id: 'bold',      name: 'Bold',      description: 'Louder distance, more weight. For declarative headlines.' },
  { id: 'playful',   name: 'Playful',   description: 'Springy and light. For lighter marketing touches.' },
]

export function StylesPage() {
  const { styleId } = useParams()
  const active = styleId ? STYLES.find(s => s.id === styleId) : null

  if (active) {
    return (
      <div className="v-styles v-styles--detail">
        <div className="v-styles__crumb">
          <Link to="/build2/styles">Styles</Link> · {active.name}
        </div>
        <h1 className="v-styles__title">{active.name}</h1>
        <p className="v-styles__lede">{active.description}</p>

        <section className="v-styles__preview">
          <KineticHeadline
            key={active.id}
            text="A large heading, in this style."
            style={active.id}
            energy="medium"
            when="load"
          />
        </section>

        <dl className="v-styles__tokens">
          <div><dt>Duration</dt><dd>{motionStyles[active.id].duration}s</dd></div>
          <div><dt>Distance</dt><dd>{motionStyles[active.id].distance}px</dd></div>
          <div><dt>Stagger</dt><dd>{motionStyles[active.id].stagger}s</dd></div>
          <div><dt>Spring</dt><dd>k {motionStyles[active.id].spring.stiffness} · c {motionStyles[active.id].spring.damping}</dd></div>
        </dl>
      </div>
    )
  }

  return (
    <div className="v-styles">
      <header className="v-styles__head">
        <h1 className="v-styles__title">Styles</h1>
        <p className="v-styles__lede">
          Five semantic motion styles. Pick a mood; the numbers behind it are the same everywhere.
        </p>
      </header>

      <div className="v-styles__grid">
        {STYLES.map(s => (
          <Link key={s.id} to={`/build2/styles/${s.id}`} className="v-styles__card">
            <div className="v-styles__card-name">{s.name}</div>
            <div className="v-styles__card-desc">{s.description}</div>
            <div className="v-styles__card-nums">
              {motionStyles[s.id].duration}s · {motionStyles[s.id].distance}px
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
