import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router'
import { MotionConfig } from 'motion/react'
import { ValenciaThemeProvider } from './valencia/theme/ValenciaThemeProvider'
import { defaultTheme } from './valencia/theme/defaultTheme'
import { SiteChrome } from './valencia/app/components/SiteChrome'
import { HomePage as V2HomePage } from './valencia/app/pages/HomePage'
import { ExamplesPage } from './valencia/app/pages/ExamplesPage'
import { PatternPage } from './valencia/app/pages/PatternPage'
import { CollectionPage } from './valencia/app/pages/CollectionPage'
import { StylesPage } from './valencia/app/pages/StylesPage'
import { UsePage } from './valencia/app/pages/UsePage'
import { AboutPage } from './valencia/app/pages/AboutPage'
import { NotFoundPage } from './valencia/app/pages/NotFoundPage'
import { NewHomePage } from './newsite'

const LegacyShell = lazy(() => import('./legacy'))

function ValenciaLayout() {
  return (
    <ValenciaThemeProvider theme={defaultTheme}>
      <MotionConfig reducedMotion="user">
        <SiteChrome>
          <Outlet />
        </SiteChrome>
      </MotionConfig>
    </ValenciaThemeProvider>
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
        <Route path="/" element={<NewHomePage />} />

        <Route
          path="/build1/*"
          element={
            <Suspense fallback={<LegacyFallback />}>
              <LegacyShell />
            </Suspense>
          }
        />

        <Route path="/build2" element={<ValenciaLayout />}>
          <Route index element={<V2HomePage />} />
          <Route path="examples" element={<ExamplesPage />} />
          <Route path="examples/:patternId" element={<PatternPage />} />
          <Route path="collections/:collectionId" element={<CollectionPage />} />
          <Route path="styles" element={<StylesPage />} />
          <Route path="styles/:styleId" element={<StylesPage />} />
          <Route path="use" element={<UsePage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>

        <Route path="*" element={
          <ValenciaThemeProvider theme={defaultTheme}>
            <NotFoundPage />
          </ValenciaThemeProvider>
        } />
      </Routes>
    </BrowserRouter>
  )
}
