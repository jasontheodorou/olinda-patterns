import { motion } from 'motion/react'
import './StaggerText.css'
import { motionStyles, type ValenciaStyle } from '../../styles/motionStyles'
import { energy as energyMults, type ValenciaEnergy } from '../../styles/energy'
import { speed as speedMults, type ValenciaSpeed } from '../../styles/speed'
import { useReducedMotion } from '../../accessibility/reducedMotion'

type Props = {
  lines: string[]
  style?: ValenciaStyle
  energy?: ValenciaEnergy
  speed?: ValenciaSpeed
  when?: 'load' | 'scroll'
  className?: string
}

export function StaggerText({
  lines,
  style = 'quiet',
  energy = 'medium',
  speed = 'normal',
  when = 'scroll',
  className,
}: Props) {
  const reduce = useReducedMotion()
  const base = motionStyles[style]
  const em = energyMults[energy]
  const duration = base.duration * speedMults[speed]
  const distance = base.distance * em.distance
  const gap = base.stagger * em.stagger

  if (reduce) {
    return (
      <div className={`v-stt ${className ?? ''}`}>
        {lines.map((line, i) => <p key={i} className="v-stt__line">{line}</p>)}
      </div>
    )
  }

  const trigger = when === 'load'
    ? { animate: 'visible' as const }
    : { whileInView: 'visible' as const, viewport: { once: true, amount: 0.3 } }

  return (
    <motion.div
      className={`v-stt ${className ?? ''}`}
      initial="hidden"
      {...trigger}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: gap, delayChildren: 0.05 } } }}
    >
      {lines.map((line, i) => (
        <p key={i} className="v-stt__line">
          <span className="v-stt__mask">
            <motion.span
              className="v-stt__word"
              variants={{
                hidden:  { y: distance, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration, ease: base.ease } },
              }}
            >
              {line}
            </motion.span>
          </span>
        </p>
      ))}
    </motion.div>
  )
}
