import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router'
import { MotionConfig } from 'motion/react'
import { OlindaThemeProvider } from './olinda/theme/OlindaThemeProvider'
import { defaultTheme } from './olinda/theme/defaultTheme'
import { SiteChrome } from './olinda/app/components/SiteChrome'
import { HomePage } from './olinda/app/pages/HomePage'
import { ExamplesPage } from './olinda/app/pages/ExamplesPage'
import { PatternPage } from './olinda/app/pages/PatternPage'
import { CollectionPage } from './olinda/app/pages/CollectionPage'
import { StylesPage } from './olinda/app/pages/StylesPage'
import { UsePage } from './olinda/app/pages/UsePage'
import { AboutPage } from './olinda/app/pages/AboutPage'
import { NotFoundPage } from './olinda/app/pages/NotFoundPage'

const LegacyShell = lazy(() => import('./legacy'))

function OlindaLayout() {
  return (
    <OlindaThemeProvider theme={defaultTheme}>
      <MotionConfig reducedMotion="user">
        <SiteChrome>
          <Outlet />
        </SiteChrome>
      </MotionConfig>
    </OlindaThemeProvider>
  )
}

function LegacyFallback() {
  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: "'Inter', arial, sans-serif", color: '#654922',
    }}>
      Loading build 1…
    </div>
  )
}

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/build1/*"
          element={
            <Suspense fallback={<LegacyFallback />}>
              <LegacyShell />
            </Suspense>
          }
        />

        <Route path="/" element={<OlindaLayout />}>
          <Route index element={<HomePage />} />
          <Route path="examples" element={<ExamplesPage />} />
          <Route path="examples/:patternId" element={<PatternPage />} />
          <Route path="collections/:collectionId" element={<CollectionPage />} />
          <Route path="styles" element={<StylesPage />} />
          <Route path="styles/:styleId" element={<StylesPage />} />
          <Route path="use" element={<UsePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
