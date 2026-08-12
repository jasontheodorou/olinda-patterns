import type { PatternMetadata } from './types'

import { metadata as largeHeading }    from '../patterns/large-heading/metadata'
import { metadata as textReveal }      from '../patterns/text-reveal/metadata'
import { metadata as imageReveal }     from '../patterns/image-reveal/metadata'
import { metadata as movingImage }     from '../patterns/moving-image/metadata'
import { metadata as scrollStory }     from '../patterns/scroll-story/metadata'
import { metadata as imageZoom }       from '../patterns/image-zoom/metadata'
import { metadata as shuffle }         from '../patterns/shuffle/metadata'
import { metadata as marquee }         from '../patterns/marquee/metadata'
import { metadata as magneticObject }  from '../patterns/magnetic-object/metadata'
import { metadata as expandingPanel }  from '../patterns/expanding-panel/metadata'

export const PATTERN_METADATA: PatternMetadata[] = [
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
