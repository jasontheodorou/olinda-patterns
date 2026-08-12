import { MagneticObject } from './MagneticObject'
import './MagneticObject.css'

export function MagneticObjectDemo() {
  return (
    <div style={{
      padding: '96px 32px', display: 'flex',
      justifyContent: 'center', alignItems: 'center', minHeight: 320,
    }}>
      <MagneticObject mode="magnetic" strength={0.35}>
        <span className="v-mag-demo">Hover me</span>
      </MagneticObject>
    </div>
  )
}
