import styled, { css } from 'styled-components'

interface StyledInputProps {
  $variant: 'normal' | 'large'
}

export const StyledInput = styled.input<StyledInputProps>`
  all: unset;
  width: 100%;
  position: relative;
  background-color: transparent;
  color: ${({ theme }) => theme.color.gray[400]};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.line.sm};
  border-radius: inherit;

  &::placeholder {
    color: ${({ theme }) => theme.color.gray[400]};
    opacity: ${({ theme }) => theme.opacity[100]};
  }

  &:not(:disabled):focus {
    outline-style: none;
  }

  &:read-only {
    cursor: default;
  }

  ${({ theme, $variant }) => {
    switch ($variant) {
      case 'large':
        return css`
          font-size: ${theme.fontSize.md};
          padding: ${theme.space[4]};
        `
      default:
        return css`
          font-size: ${theme.fontSize.sm};
          padding: ${theme.space[2]};
        `
    }
  }}
`

export const Prefix = styled.span<StyledInputProps>`
  position: relative;
  color: ${({ theme }) => theme.color.gray[400]};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  border-right: 2px solid ${({ theme }) => theme.color.white.alpha[25]};
  pointer-events: none;

  ${({ theme, $variant }) => {
    switch ($variant) {
      case 'large':
        return css`
          font-size: ${theme.fontSize.md};
          padding-left: ${({ theme }) => theme.space[4]};
          padding-right: ${({ theme }) => theme.space[4]};
        `
      default:
        return css`
          font-size: ${theme.fontSize.sm};
          padding-left: ${({ theme }) => theme.space[2]};
          padding-right: ${({ theme }) => theme.space[2]};
        `
    }
  }}

  & ~ ${StyledInput} {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background-color: ${({ theme }) => theme.color.blue[400]};
  border-radius: ${({ theme }) => theme.radius.sm};
  box-shadow: ${({ theme }) => theme.shadow.inner.sm};

  &:focus-within {
    outline-width: ${({ theme }) => theme.outline.width.medium};
    outline-style: ${({ theme }) => theme.outline.style.solid};
    outline-color: ${({ theme }) => theme.outline.color.blue};
  }

  &:has(input:read-only),
  &:has(input:disabled) {
    background-color: ${({ theme }) => theme.color.navyBlue[400]};

    &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: ${({ theme }) => theme.color.black.alpha[25]};
      border-radius: inherit;
    }
  }
`
