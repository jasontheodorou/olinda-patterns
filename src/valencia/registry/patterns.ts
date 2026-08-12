import type { ValenciaPattern } from './types'

import { metadata as largeHeading }    from '../patterns/large-heading'
import { metadata as textReveal }      from '../patterns/text-reveal'
import { metadata as imageReveal }     from '../patterns/image-reveal'
import { metadata as movingImage }     from '../patterns/moving-image'
import { metadata as scrollStory }     from '../patterns/scroll-story'
import { metadata as imageZoom }       from '../patterns/image-zoom'
import { metadata as shuffle }         from '../patterns/shuffle'
import { metadata as marquee }         from '../patterns/marquee'
import { metadata as magneticObject }  from '../patterns/magnetic-object'
import { metadata as expandingPanel }  from '../patterns/expanding-panel'

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
