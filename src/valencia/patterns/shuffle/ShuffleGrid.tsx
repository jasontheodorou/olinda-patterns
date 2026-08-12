import { useState, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import './ShuffleGrid.css'
import { fisherYatesShuffle, useReducedMotion } from '../../accessibility/reducedMotion'
import { motionStyles, type ValenciaStyle } from '../../styles/motionStyles'
import { speed as speedMults, type ValenciaSpeed } from '../../styles/speed'

type Item = { id: string; content: ReactNode }

type Props = {
  items: Item[]
  style?: ValenciaStyle
  speed?: ValenciaSpeed
  label?: string
  className?: string
}

export function ShuffleGrid({
  items,
  style = 'playful',
  speed = 'normal',
  label = 'Shuffle',
  className,
}: Props) {
  const [order, setOrder] = useState(items)
  const reduce = useReducedMotion()
  const base = motionStyles[style]
  const duration = base.duration * speedMults[speed]

  function onShuffle() {
    setOrder(prev => fisherYatesShuffle(prev))
  }

  return (
    <div className={`v-shuffle ${className ?? ''}`}>
      <button className="v-shuffle__button" onClick={onShuffle}>{label}</button>

      <div className="v-shuffle__grid">
        <AnimatePresence initial={false}>
          {order.map(item => (
            <motion.div
              key={item.id}
              layout={!reduce}
              transition={{ duration, ease: base.ease }}
              className="v-shuffle__item"
            >
              {item.content}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
