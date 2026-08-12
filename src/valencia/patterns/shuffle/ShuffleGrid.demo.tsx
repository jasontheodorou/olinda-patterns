import { ShuffleGrid } from './ShuffleGrid'

const swatchColours = ['#405748', '#998848', '#654922', '#3E7070', '#673D8A', '#619CBA', '#F1D46E', '#EC671B']

export function ShuffleGridDemo() {
  const items = swatchColours.map((c, i) => ({
    id: `s-${i}`,
    content: (
      <div style={{
        width: '100%', height: '100%', background: c,
        display: 'grid', placeItems: 'center',
        color: '#F5F2EE', fontSize: 32, fontWeight: 700,
        fontFamily: 'var(--v-font-display)', borderRadius: 'inherit',
      }}>
        {i + 1}
      </div>
    ),
  }))

  return (
    <div style={{ padding: '48px 32px', maxWidth: 720 }}>
      <ShuffleGrid items={items} style="playful" label="Shuffle" />
    </div>
  )
}
