import { useParams } from 'react-router'

export function StylesPage() {
  const { styleId } = useParams()
  return (
    <div style={{ padding: 48, fontFamily: "'Inter', arial, sans-serif" }}>
      <h1 style={{ margin: 0, fontSize: 32, fontWeight: 700, textTransform: 'capitalize' }}>
        {styleId ?? 'Styles'}
      </h1>
      <p style={{ marginTop: 12, opacity: 0.7 }}>Coming in Phase 5.</p>
    </div>
  )
}
