import styled, { css } from 'styled-components'

interface StyledDividerProps {
  $axis: 'horizontal' | 'vertical'
  $height: number
}

export const StyledDivider = styled.div<StyledDividerProps>`
  background-color: ${({ theme }) => theme.color.blue[400]};
  opacity: ${({ theme }) => theme.opacity[15]};

  ${({ $axis, $height }) => {
    if ($axis === 'horizontal') {
      return css`
        width: 100%;
        height: 2px;
      `
    } else {
      return css`
        width: 2px;
        height: ${$height}px;
      `
    }
  }}
`
