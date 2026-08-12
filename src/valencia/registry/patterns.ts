import type { ValenciaPattern } from './types'

import { pattern as largeHeading }    from '../patterns/large-heading'
import { pattern as textReveal }      from '../patterns/text-reveal'
import { pattern as imageReveal }     from '../patterns/image-reveal'
import { pattern as movingImage }     from '../patterns/moving-image'
import { pattern as scrollStory }     from '../patterns/scroll-story'
import { pattern as imageZoom }       from '../patterns/image-zoom'
import { pattern as shuffle }         from '../patterns/shuffle'
import { pattern as marquee }         from '../patterns/marquee'
import { pattern as magneticObject }  from '../patterns/magnetic-object'
import { pattern as expandingPanel }  from '../patterns/expanding-panel'

export const PATTERNS: ValenciaPattern[] = [
  largeHeading,
  textReveal,
  imageReveal,
  movingImage,
  scrollStory,
  imageZoom,
  shuffle,
  marquee,
  magneticObject,
  expandingPanel,
]
