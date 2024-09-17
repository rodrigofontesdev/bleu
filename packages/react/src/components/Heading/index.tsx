import { ReactNode } from 'react'
import { WebTarget } from 'styled-components'
import { StyledHeading } from './styles'

type HeadingProps = {
  children: ReactNode
  titleColor?: 'neutral' | 'primary'
  size?: 'small' | 'normal' | 'large'
  align?: 'left' | 'center' | 'right'
  titleUppercase?: boolean
  as?: WebTarget
}

export function Heading({
  children,
  titleColor = 'neutral',
  size = 'large',
  align = 'center',
  titleUppercase = false,
  as,
}: HeadingProps) {
  return (
    <StyledHeading
      $size={size}
      $align={align}
      $titleColor={titleColor}
      $titleUppercase={titleUppercase}
      as={as}
    >
      {children}
    </StyledHeading>
  )
}
