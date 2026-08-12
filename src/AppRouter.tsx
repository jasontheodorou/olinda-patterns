import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import { MotionConfig } from 'motion/react'
import { HomePage } from './valencia/app/pages/HomePage'
import { ExamplesPage } from './valencia/app/pages/ExamplesPage'
import { PatternPage } from './valencia/app/pages/PatternPage'
import { CollectionPage } from './valencia/app/pages/CollectionPage'
import { StylesPage } from './valencia/app/pages/StylesPage'
import { UsePage } from './valencia/app/pages/UsePage'
import { AboutPage } from './valencia/app/pages/AboutPage'
import { NotFoundPage } from './valencia/app/pages/NotFoundPage'

const LegacyShell = lazy(() => import('./legacy'))

function LegacyFallback() {
  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: "'Inter', arial, sans-serif", color: '#654922',
    }}>
      Loading legacy patterns…
    </div>
  )
}

export function AppRouter() {
  return (
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/examples" element={<ExamplesPage />} />
          <Route path="/examples/:patternId" element={<PatternPage />} />
          <Route path="/collections/:collectionId" element={<CollectionPage />} />
          <Route path="/styles" element={<StylesPage />} />
          <Route path="/styles/:styleId" element={<StylesPage />} />
          <Route path="/use" element={<UsePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/legacy/*"
            element={
              <Suspense fallback={<LegacyFallback />}>
                <LegacyShell />
              </Suspense>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MotionConfig>
    </BrowserRouter>
  )
}
