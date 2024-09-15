import styled, { css, keyframes } from 'styled-components'

interface StyledButtonProps {
  $appearance: 'primary' | 'success' | 'danger' | 'warning' | 'info'
  $size: 'normal' | 'small' | 'large'
}

const ping = keyframes`
  75%, 100% {
      transform: scale(1.25);
      opacity: 0;
    }
`

export const StyledButton = styled.button<StyledButtonProps>`
  all: unset;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.gray[400]};
  border-radius: ${({ theme }) => theme.radius.full};
  box-shadow: ${({ theme }) => theme.shadow.inner.sm};
  cursor: pointer;
  transition: ${({ theme }) => theme.motion.transition.normal};
  transition-property: background-color;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: ${({ theme }) => theme.radius.full};
    box-shadow: ${({ theme }) => theme.shadow.inner.sm};
    opacity: ${({ theme }) => theme.opacity[75]};
    z-index: -1;
  }

  &:not(:disabled):focus::before {
    animation: ${({ theme }) => theme.motion.animation.slow};
    animation-name: ${ping};
  }

  &:not(:disabled):focus {
    outline-width: ${({ theme }) => theme.outline.width.medium};
    outline-offset: ${({ theme }) => theme.outline.width.medium};
    outline-style: ${({ theme }) => theme.outline.style.solid};
  }

  &:disabled {
    filter: ${({ theme }) => theme.filter.brightness[75]};
    cursor: not-allowed;
  }

  ${({ theme, $appearance }) => {
    switch ($appearance) {
      case 'success':
        return css`
          &,
          &::before {
            background-color: ${theme.color.green[400]};
          }

          &:hover {
            background-color: ${theme.color.green[500]};
          }

          &:not(:disabled):focus {
            outline-color: ${theme.outline.color.green};
          }
        `
      case 'danger':
        return css`
          &,
          &::before {
            background-color: ${theme.color.red[400]};
          }

          &:hover {
            background-color: ${theme.color.red[500]};
          }

          &:not(:disabled):focus {
            outline-color: ${theme.outline.color.red};
          }
        `
      case 'warning':
        return css`
          &,
          &::before {
            background-color: ${theme.color.yellow[400]};
          }

          &:hover {
            background-color: ${theme.color.yellow[500]};
          }

          &:not(:disabled):focus {
            outline-color: ${theme.outline.color.yellow};
          }
        `
      case 'info':
        return css`
          &,
          &::before {
            background-color: ${theme.color.sky[400]};
          }

          &:hover {
            background-color: ${theme.color.sky[500]};
          }

          &:not(:disabled):focus {
            outline-color: ${theme.outline.color.sky};
          }
        `
      case 'primary':
      default:
        return css`
          &,
          &::before {
            background-color: ${theme.color.blue[400]};
          }

          &:hover {
            background-color: ${theme.color.blue[500]};
          }

          &:not(:disabled):focus {
            outline-color: ${theme.outline.color.blue};
          }
        `
    }
  }}

  ${({ $size }) => {
    switch ($size) {
      case 'large':
        return css`
          width: 4.5rem;
          height: 4.5rem;
          font-size: ${({ theme }) => theme.fontSize.xl};
        `
      case 'small':
        return css`
          width: 3rem;
          height: 3rem;
          font-size: ${({ theme }) => theme.fontSize.sm};
        `
      default:
        return css`
          width: 3.75rem;
          height: 3.75rem;
          font-size: ${({ theme }) => theme.fontSize.md};
        `
    }
  }}
`
