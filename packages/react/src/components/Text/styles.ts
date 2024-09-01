import { FontSizeProps, FontWeightProps, LineProps } from '@bleukit/tokens'
import styled from 'styled-components'

interface StyledTextProps {
  $size: keyof FontSizeProps
  $weight: keyof FontWeightProps
  $line: keyof LineProps
  $italic: boolean
  $align?: 'left' | 'right' | 'center'
  $flow?: 'inline' | 'inline-block' | 'block' | string
}

export const StyledText = styled.p<StyledTextProps>`
  display: ${({ $flow }) => $flow ?? ''};
  color: ${({ theme }) => theme.color.gray[400]};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: ${({ theme, $weight }) => theme.fontWeight[$weight]};
  font-size: ${({ theme, $size }) => theme.fontSize[$size]};
  font-style: ${({ $italic }) => ($italic ? 'italic' : 'normal')};
  line-height: ${({ theme, $line }) => theme.line[$line]};
  text-align: ${({ $align }) => $align ?? ''};
  margin: 0;
`
