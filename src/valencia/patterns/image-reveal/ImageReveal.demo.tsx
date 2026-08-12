import { ImageReveal } from './ImageReveal'
import './ImageReveal.css'

export function ImageRevealDemo() {
  return (
    <div style={{ padding: '48px 32px', maxWidth: 960 }}>
      <ImageReveal from="vertical" style="editorial" when="load">
        <div className="v-image-reveal-demo">Reveal</div>
      </ImageReveal>
    </div>
  )
}
