import { ParallaxMedia } from './ParallaxMedia'
import './ParallaxMedia.css'

export function ParallaxMediaDemo() {
  return (
    <div style={{ padding: '128px 32px', maxWidth: 960 }}>
      <ParallaxMedia amount="small">
        <div className="v-parallax-demo">Scroll to move</div>
      </ParallaxMedia>
    </div>
  )
}
