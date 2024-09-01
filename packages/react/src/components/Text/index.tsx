import { FontSizeProps, FontWeightProps, LineProps } from '@bleukit/tokens'
import { HTMLAttributes, ReactNode } from 'react'
import { WebTarget } from 'styled-components'
import { StyledText } from './styles'

export type TextProps = {
  children: ReactNode
  size?: keyof FontSizeProps
  weight?: keyof FontWeightProps
  line?: keyof LineProps
  italic?: boolean
  align?: 'left' | 'center' | 'right'
  flow?: 'inline' | 'inline-block' | 'block' | string
  as?: WebTarget
} & HTMLAttributes<HTMLElement>

export function Text({
  children,
  size = 'md',
  weight = 'normal',
  line = 'md',
  italic = false,
  align,
  flow,
  as,
  ...props
}: TextProps) {
  return (
    <StyledText
      $size={size}
      $weight={weight}
      $line={line}
      $italic={italic}
      $align={align}
      $flow={flow}
      as={as}
      {...props}
    >
      {children}
    </StyledText>
  )
}
