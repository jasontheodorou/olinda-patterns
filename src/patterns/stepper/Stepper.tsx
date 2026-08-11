import { motion } from 'motion/react'
import { Check } from 'lucide-react'
import { T } from '../../tokens'

export type StepStatus = 'active' | 'completed' | 'upcoming'

export interface Step {
  label: string
  detail?: string
}

interface StepperProps {
  steps: Step[]
  activeStep: number
  orientation?: 'horizontal' | 'vertical'
  onStepClick?: (index: number) => void
  linear?: boolean
}

const EASE = [0.2, 0.8, 0.2, 1] as const

export function Stepper({
  steps, activeStep, orientation = 'horizontal', onStepClick, linear = false,
}: StepperProps) {
  const isHorizontal = orientation === 'horizontal'
  const statusFor = (i: number): StepStatus => i < activeStep ? 'completed' : i === activeStep ? 'active' : 'upcoming'
  const canClick = (i: number) => onStepClick ? (linear ? i <= activeStep + 1 : true) : false

  return (
    <div style={{
      display: 'flex',
      flexDirection: isHorizontal ? 'row' : 'column',
      alignItems: isHorizontal ? 'flex-start' : 'stretch',
    }}>
      {steps.map((step, i) => {
        const status = statusFor(i)
        const isLast = i === steps.length - 1
        const clickable = canClick(i)

        return (
          <div
            key={i}
            style={{
              display: 'flex', flexDirection: isHorizontal ? 'column' : 'row',
              alignItems: isHorizontal ? 'center' : 'flex-start',
              flex: isHorizontal ? 1 : 'unset', position: 'relative',
              gap: isHorizontal ? 12 : 16,
              paddingBottom: !isHorizontal && !isLast ? 32 : 0,
            }}
          >
            <StepMarker status={status} index={i} onClick={clickable ? () => onStepClick!(i) : undefined} />
            <StepDetail step={step} status={status} orientation={orientation} />
            {!isLast && <Connector orientation={orientation} status={status} />}
          </div>
        )
      })}
    </div>
  )
}

function StepMarker({ status, index, onClick }: { status: StepStatus; index: number; onClick?: () => void }) {
  const isDone   = status === 'completed'
  const isActive = status === 'active'

  const bg     = isActive ? T.navy : isDone ? T.navy : 'transparent'
  const border = isActive ? T.navy : isDone ? T.navy : T.border.default
  const color  = (isActive || isDone) ? '#fff' : T.fg.secondary

  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={!onClick}
      whileTap={onClick ? { scale: 0.94 } : undefined}
      animate={{ backgroundColor: bg, borderColor: border }}
      transition={{ duration: 0.25, ease: EASE }}
      style={{
        width: 32, height: 32,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: '50%',
        border: `2px solid ${border}`,
        cursor: onClick ? 'pointer' : 'default', padding: 0,
        color, fontFamily: T.font, fontSize: 13, fontWeight: 700,
        zIndex: 1, flexShrink: 0,
      }}
    >
      {isDone ? <Check size={16} strokeWidth={3} /> : index + 1}
    </motion.button>
  )
}

function StepDetail({ step, status, orientation }: { step: Step; status: StepStatus; orientation: 'horizontal' | 'vertical' }) {
  const isHorizontal = orientation === 'horizontal'
  const isDim = status === 'upcoming'
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 4,
      textAlign: isHorizontal ? 'center' : 'left',
      maxWidth: isHorizontal ? 140 : 'none',
      paddingTop: isHorizontal ? 0 : 4,
    }}>
      <div style={{ fontFamily: T.font, fontSize: 14, fontWeight: 700, color: isDim ? T.fg.secondary : T.fg.primary, transition: `color ${T.motion.base} ${T.motion.ease}` }}>
        {step.label}
      </div>
      {step.detail && (
        <div style={{ fontFamily: T.font, fontSize: 12, color: isDim ? T.fg.muted : T.fg.secondary, transition: `color ${T.motion.base} ${T.motion.ease}`, lineHeight: 1.5 }}>
          {step.detail}
        </div>
      )}
    </div>
  )
}

function Connector({ orientation, status }: { orientation: 'horizontal' | 'vertical'; status: StepStatus }) {
  const isHorizontal = orientation === 'horizontal'
  const filled = status === 'completed' || status === 'active'

  return (
    <div style={{
      position: 'absolute', background: T.border.default,
      ...(isHorizontal
        ? { top: 15, left: 'calc(50% + 16px)', height: 2, width: 'calc(100% - 32px)' }
        : { top: 32, bottom: 0, left: 15, width: 2 }),
    }}>
      <motion.div
        animate={isHorizontal ? { scaleX: filled ? 1 : 0 } : { scaleY: filled ? 1 : 0 }}
        transition={{ duration: 0.3, ease: EASE }}
        style={{ position: 'absolute', inset: 0, background: T.navy, transformOrigin: isHorizontal ? 'left' : 'top' }}
      />
    </div>
  )
}
