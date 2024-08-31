import { FontSizeProps, FontWeightProps, LineProps } from '@bleukit/tokens'
import styled from 'styled-components'

type FontSizes = keyof FontSizeProps
type FontWeights = keyof FontWeightProps
type LineHeights = keyof LineProps
type TextAligns = 'left' | 'right' | 'center'

export const Text = styled.p<{
  $size?: FontSizes
  $weight?: FontWeights
  $line?: LineHeights
  $align?: TextAligns
  $italic?: boolean
}>`
  color: ${({ theme }) => theme.color.gray[400]};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: ${({ theme, $weight }) => theme.fontWeight[$weight ?? 'semiBold']};
  font-size: ${({ theme, $size }) => theme.fontSize[$size ?? 'md']};
  font-style: ${({ $italic }) => ($italic ? 'italic' : 'normal')};
  line-height: ${({ theme, $line }) => theme.line[$line ?? 'md']};
  text-align: ${({ $align }) => $align};
  margin: 0;
`
