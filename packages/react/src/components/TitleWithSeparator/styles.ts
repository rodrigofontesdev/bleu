import styled, { css } from 'styled-components'

export const Separator = styled.div<{ $disabled: boolean }>`
  width: 100%;
  height: 2px;
  display: ${({ $disabled }) => ($disabled ? 'none' : 'block')};
  background-color: ${({ theme }) => theme.color.blue[400]};
  border-radius: ${({ theme }) => theme.radius.xs};
  opacity: ${({ theme }) => theme.opacity[15]};
`

export const Container = styled.div<{
  $axis: 'horizontal' | 'vertical'
  $separatorSize: number
}>`
  display: flex;
  align-items: center;

  ${({ theme, $axis, $separatorSize }) => {
    if ($axis === 'horizontal') {
      return css`
        column-gap: ${theme.space[5]};
      `
    } else {
      return css`
        flex-direction: column;
        row-gap: ${theme.space[2]};

        ${Separator} {
          width: 2px;
          height: ${$separatorSize}px;
        }
      `
    }
  }}

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span {
    display: block;
    flex: 1 0 auto;
    color: ${({ theme }) => theme.color.blue[400]};
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-style: normal;
    line-height: ${({ theme }) => theme.line.xs};
    text-align: center;
    margin: 0;
  }
`
