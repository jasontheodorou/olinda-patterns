import { Spinner } from './Spinner'
import { T } from '../../tokens'

export function SpinnerDemo() {
  return (
    <div style={{ background: T.surface.offWhite, padding: '80px 40px', minHeight: '100vh' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <div style={{ marginBottom: 32 }}>
          <p style={{ fontFamily: T.font, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.fg.secondary, margin: '0 0 12px' }}>Component</p>
          <h2 style={{ fontFamily: T.font, fontSize: 32, fontWeight: 700, color: T.fg.primary, lineHeight: 1.25, margin: '0 0 12px' }}>Spinner</h2>
          <p style={{ fontFamily: T.font, fontSize: 15, color: T.fg.secondary, lineHeight: 1.6, margin: 0 }}>Inline loading indicator. Prefer Skeleton for content-shaped loading; use Spinner for actions in flight.</p>
        </div>

        <div style={{ display: 'flex', gap: 40, alignItems: 'center', padding: 32, background: T.surface.white, border: `1px solid ${T.border.default}`, borderRadius: T.radius.md }}>
          <Spinner size={16} />
          <Spinner size={24} />
          <Spinner size={40} strokeWidth={4} />
          <Spinner label="Saving progress…" />
          <Spinner color={T.teal} label="Syncing" />
        </div>
      </div>
    </div>
  )
}
