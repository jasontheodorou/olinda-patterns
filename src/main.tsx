import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { PasswordGate, isGateOpen } from './PasswordGate'
import { AppRouter } from './AppRouter'
import './index.css'

function Root() {
  const [unlocked, setUnlocked] = useState(() => isGateOpen())
  if (!unlocked) return <PasswordGate onUnlock={() => setUnlocked(true)} />
  return <AppRouter />
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
