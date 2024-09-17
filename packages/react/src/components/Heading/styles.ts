import styled, { css } from 'styled-components'

interface StyledHeading {
  $size: 'small' | 'normal' | 'large'
  $align: 'left' | 'right' | 'center'
  $titleColor: 'neutral' | 'primary'
  $titleUppercase: boolean
}

export const StyledHeading = styled.header<StyledHeading>`
  color: ${({ theme }) => theme.color.gray[400]};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-style: normal;
  text-align: ${({ $align }) => $align};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme, $titleColor }) => $titleColor === 'primary' && theme.color.blue[400]};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: ${({ theme }) => theme.line.sm};
    text-transform: ${({ $titleUppercase }) => $titleUppercase && 'uppercase'};
    margin: 0;
  }

  p,
  span {
    display: block;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    line-height: ${({ theme }) => theme.line.md};
    margin: 0;
  }

  ${({ theme, $size }) => {
    switch ($size) {
      case 'large': {
        return css`
          > :last-child {
            margin-top: ${theme.space[5]};
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-size: ${theme.fontSize['5xl']};
          }

          p,
          span {
            font-size: ${theme.fontSize.md};
          }
        `
      }
      case 'small': {
        return css`
          > :last-child {
            margin-top: 0;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-size: ${theme.fontSize.xl};
          }

          p,
          span {
            font-size: ${theme.fontSize.xs};
          }
        `
      }
      case 'normal':
      default: {
        return css`
          > :last-child {
            margin-top: ${theme.space[1]};
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-size: ${theme.fontSize['2xl']};
          }

          p,
          span {
            font-size: ${theme.fontSize.sm};
          }
        `
      }
    }
  }}
`
