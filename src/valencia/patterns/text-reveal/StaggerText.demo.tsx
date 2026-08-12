import { StaggerText } from './StaggerText'

export function StaggerTextDemo() {
  return (
    <div style={{ padding: '48px 32px', maxWidth: 720 }}>
      <StaggerText
        style="quiet"
        energy="medium"
        when="load"
        lines={[
          'A pattern library, not a framework.',
          'Small, considered, useful.',
          'Motion where it means something.',
        ]}
      />
    </div>
  )
}
