import { ComponentProps } from 'react'
import styled, { WebTarget } from 'styled-components'

export type BoxProps = {
  as?: WebTarget
} & ComponentProps<typeof Box>

export const Box = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.color.black.alpha[15]};
  border-radius: ${({ theme }) => theme.radius.sm};
  box-shadow: ${({ theme }) => theme.shadow.outer.sm};
`

Box.displayName = 'Box'
