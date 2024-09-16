import { ReactNode } from 'react'
import { WebTarget } from 'styled-components'
import { StyledHeading } from './styles'

type HeadingProps = {
  children: ReactNode
  titleColor?: 'neutral' | 'primary'
  size?: 'small' | 'normal' | 'large'
  align?: 'left' | 'center' | 'right'
  as?: WebTarget
}

export function Heading({
  children,
  titleColor = 'neutral',
  size = 'large',
  align = 'center',
  as,
}: HeadingProps) {
  return (
    <StyledHeading $size={size} $align={align} $titleColor={titleColor} as={as}>
      {children}
    </StyledHeading>
  )
}
