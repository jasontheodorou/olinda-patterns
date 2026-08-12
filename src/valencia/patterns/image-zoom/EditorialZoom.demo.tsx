import { EditorialZoom } from './EditorialZoom'

export function EditorialZoomDemo() {
  return (
    <EditorialZoom caption="Scroll — the image expands and settles.">
      <div style={{
        width: '100%', height: '100%',
        background: 'linear-gradient(135deg, #405748, #998848 65%, #654922)',
        display: 'grid', placeItems: 'center',
        color: '#F5F2EE', fontFamily: 'var(--v-font-display)',
        fontSize: 'clamp(32px, 5vw, 72px)', fontWeight: 600, letterSpacing: '-0.02em',
      }}>
        Editorial Zoom
      </div>
    </EditorialZoom>
  )
}
