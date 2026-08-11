import { ToastProvider, useToast } from './Toast'
import { Button } from '../button/Button'
import { T } from '../../tokens'

export function ToastDemo() {
  return (
    <ToastProvider>
      <div style={{ background: T.surface.offWhite, padding: '80px 40px', minHeight: '100vh' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{ marginBottom: 32 }}>
            <p style={{ fontFamily: T.font, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.fg.secondary, margin: '0 0 12px' }}>Component</p>
            <h2 style={{ fontFamily: T.font, fontSize: 32, fontWeight: 700, color: T.fg.primary, lineHeight: 1.25, margin: '0 0 12px' }}>Toast</h2>
            <p style={{ fontFamily: T.font, fontSize: 15, color: T.fg.secondary, lineHeight: 1.6, margin: 0 }}>
              Transient notifications for progress, achievements, and system feedback. Bottom-right stack.
            </p>
          </div>
          <Triggers />
        </div>
      </div>
    </ToastProvider>
  )
}

function Triggers() {
  const { push } = useToast()

  return (
    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
      <Button onClick={() => push({ tone: 'achievement', title: 'Module complete', body: 'You finished "Discovery foundations"' })}>Achievement</Button>
      <Button variant="outline" onClick={() => push({ tone: 'success', title: 'Card marked complete', body: 'Progress saved' })}>Success</Button>
      <Button variant="outline" onClick={() => push({ tone: 'info',    title: 'New module available', body: '"Component architecture" is now in your library' })}>Info</Button>
      <Button variant="outline" onClick={() => push({ tone: 'warning', title: 'Session expiring soon', body: 'You\'ll be signed out in 5 minutes' })}>Warning</Button>
      <Button variant="danger"  onClick={() => push({ tone: 'danger',  title: 'Sync failed', body: 'Progress may not be saved' })}>Danger</Button>
    </div>
  )
}
