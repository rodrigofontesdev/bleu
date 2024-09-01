import { FontSizeProps, FontWeightProps, LineProps } from '@bleukit/tokens'
import styled from 'styled-components'

interface StyledLinkProps {
  $size: keyof FontSizeProps
  $weight: keyof FontWeightProps
  $line: keyof LineProps
  $italic: boolean
}

export const StyledLink = styled.a<StyledLinkProps>`
  all: unset;
  color: ${({ theme }) => theme.color.gray[400]};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: ${({ theme, $weight }) => theme.fontWeight[$weight]};
  font-size: ${({ theme, $size }) => theme.fontSize[$size]};
  font-style: ${({ $italic }) => ($italic ? 'italic' : 'normal')};
  line-height: ${({ theme, $line }) => theme.line[$line]};
  text-decoration: none;
  cursor: pointer;
  transition: ${({ theme }) => theme.motion.transition.fast};
  transition-property: color;

  &:hover {
    color: ${({ theme }) => theme.color.blue[400]};
  }

  &:focus {
    outline-width: ${({ theme }) => theme.outline.width.medium};
    outline-style: ${({ theme }) => theme.outline.style.solid};
    outline-color: ${({ theme }) => theme.color.blue[400]};
  }
`
