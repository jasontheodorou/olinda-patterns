import './AboutPage.css'

export function AboutPage() {
  return (
    <div className="t-about">
      <header className="t-about__head">
        <h1 className="t-about__title">About Tarocco</h1>
      </header>

      <div className="t-about__body">
        <p>
          Tarocco is a small pattern library for public-sector design work. It gives designers
          a set of considered, motion-aware building blocks they can hand to Claude in another
          project — with the confidence that motion is applied only where it means something.
        </p>
        <p>
          The library is opinionated about restraint. It ships three collections —
          Clear, Editorial, Experimental — and a handful of composed patterns.
          It does not want to be your component framework.
        </p>
        <p>
          Every Ready pattern respects <code>prefers-reduced-motion</code>, works from the
          keyboard, and adapts to mobile. If a pattern needs a UI text field or a colour,
          it reads from CSS variables — you can drop it into any theme.
        </p>
        <p className="t-about__meta">
          Made at Transform. React 19 · Vite · Motion for React · TypeScript.
        </p>
      </div>
    </div>
  )
}
