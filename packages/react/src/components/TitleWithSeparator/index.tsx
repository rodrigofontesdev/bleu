import { ReactNode } from 'react'
import { Container, Separator } from './styles'

type TitleWithSeparatorProps = {
  children: ReactNode
  axis?: 'horizontal' | 'vertical'
  separator?: 'both' | 'right' | 'left'
  separatorSize?: number
}

export function TitleWithSeparator({
  children,
  axis = 'horizontal',
  separator = 'both',
  separatorSize = 100,
}: TitleWithSeparatorProps) {
  return (
    <Container $axis={axis} $separatorSize={separatorSize}>
      <Separator $disabled={separator === 'right'}></Separator>
      {children}
      <Separator $disabled={separator === 'left'}></Separator>
    </Container>
  )
}
