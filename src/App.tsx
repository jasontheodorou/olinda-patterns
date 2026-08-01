import { useState } from 'react'
import { PasswordGate, isGateOpen } from './PasswordGate'
import { Layout } from './Layout'
import { HomePage } from './pages/HomePage'
import { PatternsPage } from './pages/PatternsPage'
import { PatternPage } from './pages/PatternPage'
import { EmptyPage } from './pages/EmptyPage'
import { PATTERNS } from './patterns'

type Section = 'home' | 'patterns' | 'templates' | 'themes'

function sectionFor(view: string): Section {
  if (view === 'templates') return 'templates'
  if (view === 'themes') return 'themes'
  if (view === 'patterns' || PATTERNS.find(p => p.id === view)) return 'patterns'
  return 'home'
}

function App() {
  const [unlocked, setUnlocked] = useState(() => isGateOpen())
  const [view, setView] = useState<string>('home')

  if (!unlocked) return <PasswordGate onUnlock={() => setUnlocked(true)} />

  const pattern = PATTERNS.find(p => p.id === view)

  return (
    <Layout currentSection={sectionFor(view)} onNavigate={setView}>
      {view === 'home'      && <HomePage onNavigate={setView} />}
      {view === 'templates' && <EmptyPage title="Templates" />}
      {view === 'themes'    && <EmptyPage title="Themes" />}
      {view === 'patterns' && !pattern && <PatternsPage onSelectPattern={setView} />}
      {pattern && <PatternPage pattern={pattern} onNavigate={setView} />}
    </Layout>
  )
}

export default App
