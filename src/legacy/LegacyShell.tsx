import { useCallback } from 'react'
import { MantineProvider } from '@mantine/core'
import { Routes, Route, useNavigate, useParams } from 'react-router'
import '@mantine/core/styles.css'
import { transformTheme } from '../theme'
import { Layout } from '../Layout'
import { HomePage } from '../pages/HomePage'
import { PatternsPage } from '../pages/PatternsPage'
import { PatternPage } from '../pages/PatternPage'
import { EmptyPage } from '../pages/EmptyPage'
import { PATTERNS } from '../patterns'

type LegacySection = 'home' | 'patterns' | 'templates' | 'themes'

function sectionFor(pathname: string): LegacySection {
  if (pathname.startsWith('/legacy/templates')) return 'templates'
  if (pathname.startsWith('/legacy/themes')) return 'themes'
  if (pathname.startsWith('/legacy/patterns')) return 'patterns'
  if (pathname === '/legacy' || pathname === '/legacy/') return 'home'
  return 'patterns'
}

function useLegacyNavigate() {
  const navigate = useNavigate()
  return useCallback((id: string) => {
    if (id === 'home') return navigate('/legacy')
    if (id === 'patterns') return navigate('/legacy/patterns')
    if (id === 'templates') return navigate('/legacy/templates')
    if (id === 'themes') return navigate('/legacy/themes')
    if (PATTERNS.find(p => p.id === id)) return navigate(`/legacy/${id}`)
    navigate('/legacy')
  }, [navigate])
}

function LegacyHome() {
  const onNavigate = useLegacyNavigate()
  return <HomePage onNavigate={onNavigate} />
}

function LegacyPatternIndex() {
  const onNavigate = useLegacyNavigate()
  return <PatternsPage onSelectPattern={onNavigate} />
}

function LegacyPatternDetail() {
  const { patternId } = useParams()
  const onNavigate = useLegacyNavigate()
  const pattern = PATTERNS.find(p => p.id === patternId)
  if (!pattern) return <EmptyPage title="Not found" />
  return <PatternPage pattern={pattern} onNavigate={onNavigate} />
}

function LegacyLayout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate()
  const currentSection = sectionFor(window.location.pathname)
  return (
    <Layout currentSection={currentSection} onNavigate={(id) => {
      if (id === 'home') return navigate('/legacy')
      navigate(`/legacy/${id}`)
    }}>
      {children}
    </Layout>
  )
}

export default function LegacyShell() {
  return (
    <MantineProvider theme={transformTheme} defaultColorScheme="light">
      <LegacyLayout>
        <Routes>
          <Route index element={<LegacyHome />} />
          <Route path="patterns" element={<LegacyPatternIndex />} />
          <Route path="templates" element={<EmptyPage title="Templates" />} />
          <Route path="themes" element={<EmptyPage title="Themes" />} />
          <Route path=":patternId" element={<LegacyPatternDetail />} />
        </Routes>
      </LegacyLayout>
    </MantineProvider>
  )
}
