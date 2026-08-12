import { motion } from 'motion/react'
import './KineticHeadline.css'
import { motionStyles, type ValenciaStyle } from '../../styles/motionStyles'
import { energy as energyMults, type ValenciaEnergy } from '../../styles/energy'
import { speed as speedMults, type ValenciaSpeed } from '../../styles/speed'
import { useReducedMotion } from '../../accessibility/reducedMotion'

type Props = {
  text: string
  style?: ValenciaStyle
  energy?: ValenciaEnergy
  speed?: ValenciaSpeed
  when?: 'load' | 'scroll'
  as?: 'h1' | 'h2' | 'h3'
  className?: string
}

export function KineticHeadline({
  text,
  style = 'editorial',
  energy = 'medium',
  speed = 'normal',
  when = 'scroll',
  as: Tag = 'h1',
  className,
}: Props) {
  const reduce = useReducedMotion()
  const base = motionStyles[style]
  const em = energyMults[energy]
  const words = text.split(/(\s+)/)
  const duration = base.duration * speedMults[speed]
  const distance = base.distance * em.distance
  const staggerGap = base.stagger * em.stagger
  const trigger = when === 'load' ? 'animate' : 'whileInView'

  if (reduce) {
    return <Tag className={`v-kh ${className ?? ''}`}>{text}</Tag>
  }

  return (
    <Tag className={`v-kh ${className ?? ''}`}>
      <motion.span
        className="v-kh__inner"
        initial="hidden"
        {...(trigger === 'animate'
          ? { animate: 'visible' }
          : { whileInView: 'visible', viewport: { once: true, amount: 0.3 } })}
        variants={{
          hidden:  {},
          visible: { transition: { staggerChildren: staggerGap, delayChildren: 0.05 } },
        }}
      >
        {words.map((word, i) =>
          word.trim() === '' ? (
            <span key={i} className="v-kh__space">{word}</span>
          ) : (
            <span key={i} className="v-kh__mask">
              <motion.span
                className="v-kh__word"
                variants={{
                  hidden:  { y: distance, opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { duration, ease: base.ease } },
                }}
              >
                {word}
              </motion.span>
            </span>
          ),
        )}
      </motion.span>
    </Tag>
  )
}
