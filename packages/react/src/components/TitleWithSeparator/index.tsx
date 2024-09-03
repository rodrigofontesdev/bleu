import { ReactNode } from 'react'
import { Container, Separator } from './styles'

type TitleWithSeparatorProps = {
  children: ReactNode
  orientation?: 'horizontal' | 'vertical'
  separator?: 'both' | 'right' | 'left'
  size?: number
}

export function TitleWithSeparator({
  children,
  orientation = 'horizontal',
  separator = 'both',
  size = 100,
}: TitleWithSeparatorProps) {
  return (
    <Container $orientation={orientation} $size={size}>
      <Separator $disabled={separator === 'right'}></Separator>
      {children}
      <Separator $disabled={separator === 'left'}></Separator>
    </Container>
  )
}
