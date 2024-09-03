import { ReactNode } from 'react'
import { StyledHeading } from './styles'

type HeadingProps = {
  children: ReactNode
  variant?: 'small' | 'normal' | 'large'
  align?: 'left' | 'center' | 'right'
  titleColor: 'neutral' | 'primary'
}

export function Heading({
  children,
  variant = 'large',
  align = 'center',
  titleColor,
}: HeadingProps) {
  return (
    <StyledHeading $variant={variant} $align={align} $titleColor={titleColor}>
      {children}
    </StyledHeading>
  )
}
