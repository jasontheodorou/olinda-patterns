import type { ReactNode } from 'react'
import { Parallax, type ParallaxAmount } from '../../core/parallax/Parallax'

type Props = {
  children: ReactNode
  amount?: ParallaxAmount
  className?: string
}

export function ParallaxMedia({ children, amount = 'small', className }: Props) {
  return (
    <Parallax amount={amount} className={className}>
      {children}
    </Parallax>
  )
}
