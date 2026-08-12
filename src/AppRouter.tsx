import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import { MotionConfig } from 'motion/react'
import { ValenciaThemeProvider } from './valencia/theme/ValenciaThemeProvider'
import { defaultTheme } from './valencia/theme/defaultTheme'
import { SiteChrome } from './valencia/app/components/SiteChrome'
import { HomePage } from './valencia/app/pages/HomePage'
import { ExamplesPage } from './valencia/app/pages/ExamplesPage'
import { PatternPage } from './valencia/app/pages/PatternPage'
import { CollectionPage } from './valencia/app/pages/CollectionPage'
import { StylesPage } from './valencia/app/pages/StylesPage'
import { UsePage } from './valencia/app/pages/UsePage'
import { AboutPage } from './valencia/app/pages/AboutPage'
import { NotFoundPage } from './valencia/app/pages/NotFoundPage'

const LegacyShell = lazy(() => import('./legacy'))

function ValenciaLayout({ children }: { children: React.ReactNode }) {
  return (
    <ValenciaThemeProvider theme={defaultTheme}>
      <MotionConfig reducedMotion="user">
        <SiteChrome>{children}</SiteChrome>
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
      Loading legacy patterns…
    </div>
  )
}

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ValenciaLayout><HomePage /></ValenciaLayout>} />
        <Route path="/examples" element={<ValenciaLayout><ExamplesPage /></ValenciaLayout>} />
        <Route path="/examples/:patternId" element={<ValenciaLayout><PatternPage /></ValenciaLayout>} />
        <Route path="/collections/:collectionId" element={<ValenciaLayout><CollectionPage /></ValenciaLayout>} />
        <Route path="/styles" element={<ValenciaLayout><StylesPage /></ValenciaLayout>} />
        <Route path="/styles/:styleId" element={<ValenciaLayout><StylesPage /></ValenciaLayout>} />
        <Route path="/use" element={<ValenciaLayout><UsePage /></ValenciaLayout>} />
        <Route path="/about" element={<ValenciaLayout><AboutPage /></ValenciaLayout>} />
        <Route
          path="/legacy/*"
          element={
            <Suspense fallback={<LegacyFallback />}>
              <LegacyShell />
            </Suspense>
          }
        />
        <Route path="*" element={<ValenciaLayout><NotFoundPage /></ValenciaLayout>} />
      </Routes>
    </BrowserRouter>
  )
}
