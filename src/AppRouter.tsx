import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router'
import { MotionConfig } from 'motion/react'
import { TaroccoThemeProvider } from './tarocco/theme/TaroccoThemeProvider'
import { defaultTheme } from './tarocco/theme/defaultTheme'
import { SiteChrome } from './tarocco/app/components/SiteChrome'
import { HomePage } from './tarocco/app/pages/HomePage'
import { ExamplesPage } from './tarocco/app/pages/ExamplesPage'
import { PatternPage } from './tarocco/app/pages/PatternPage'
import { CollectionPage } from './tarocco/app/pages/CollectionPage'
import { StylesPage } from './tarocco/app/pages/StylesPage'
import { UsePage } from './tarocco/app/pages/UsePage'
import { AboutPage } from './tarocco/app/pages/AboutPage'
import { NotFoundPage } from './tarocco/app/pages/NotFoundPage'

const LegacyShell = lazy(() => import('./legacy'))

function TaroccoLayout() {
  return (
    <TaroccoThemeProvider theme={defaultTheme}>
      <MotionConfig reducedMotion="user">
        <SiteChrome>
          <Outlet />
        </SiteChrome>
      </MotionConfig>
    </TaroccoThemeProvider>
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

        <Route path="/" element={<TaroccoLayout />}>
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
