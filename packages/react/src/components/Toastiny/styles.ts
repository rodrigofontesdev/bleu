import styled, { css, keyframes } from 'styled-components'

const shrink = keyframes`
  from {
    width: 100%;
  } to {
    width: 0;
  }
`

export const Toast = styled.div<{ $type: 'primary' | 'success' | 'danger' | 'warning' | 'info' }>`
  position: relative;
  overflow: hidden;
  padding: ${({ theme }) => theme.space[5]};
  border-radius: ${({ theme }) => theme.radius.sm};
  box-shadow: ${({ theme }) => theme.shadow.outer.sm};

  ${({ theme, $type }) => {
    switch ($type) {
      case 'success':
        return css`
          background-color: ${theme.color.green[400]};
          color: ${({ theme }) => theme.color.gray[400]};
        `
      case 'danger':
        return css`
          background-color: ${theme.color.red[400]};
          color: ${({ theme }) => theme.color.gray[400]};
        `
      case 'warning':
        return css`
          background-color: ${theme.color.yellow[400]};
          color: ${({ theme }) => theme.color.black.pure};
        `
      case 'info':
        return css`
          background-color: ${theme.color.sky[400]};
          color: ${({ theme }) => theme.color.gray[400]};
        `
      case 'primary':
      default:
        return css`
          background-color: ${theme.color.blue[400]};
          color: ${({ theme }) => theme.color.gray[400]};
        `
    }
  }}
`

export const Body = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  line-height: ${({ theme }) => theme.line.sm};
  margin: 0;
`

export const TimeBar = styled.span<{ $duration: number }>`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 5px;
  display: block;
  background-color: ${({ theme }) => theme.color.black.alpha[30]};
  border-radius: ${({ theme }) => theme.radius.sm};
  border-top-left-radius: 0;
  animation: ${shrink} ${({ $duration }) => $duration}ms linear;
`
