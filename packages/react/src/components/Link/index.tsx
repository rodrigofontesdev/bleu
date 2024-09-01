import { FontSizeProps, FontWeightProps, LineProps } from '@bleukit/tokens'
import { AnchorHTMLAttributes, ReactNode } from 'react'
import { StyledLink } from './styles'

type LinkProps = {
  children: ReactNode
  size?: keyof FontSizeProps
  weight?: keyof FontWeightProps
  line?: keyof LineProps
  italic?: boolean
} & AnchorHTMLAttributes<HTMLAnchorElement>

export function Link({
  children,
  size = 'md',
  weight = 'normal',
  line = 'md',
  italic = false,
  ...props
}: LinkProps) {
  return (
    <StyledLink $size={size} $weight={weight} $line={line} $italic={italic} {...props}>
      {children}
    </StyledLink>
  )
}
