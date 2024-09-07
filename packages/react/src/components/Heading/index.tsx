import { ReactNode } from 'react'
import { WebTarget } from 'styled-components'
import { StyledHeading } from './styles'

type HeadingProps = {
  children: ReactNode
  variant?: 'small' | 'normal' | 'large'
  align?: 'left' | 'center' | 'right'
  titleColor: 'neutral' | 'primary'
  as?: WebTarget
}

export function Heading({
  children,
  variant = 'large',
  align = 'center',
  titleColor,
  as,
}: HeadingProps) {
  return (
    <StyledHeading $variant={variant} $align={align} $titleColor={titleColor} as={as}>
      {children}
    </StyledHeading>
  )
}
