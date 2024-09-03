import styled from 'styled-components'

export const StyledLabel = styled.label<{ $variant: 'normal' | 'large' }>`
  color: ${({ theme }) => theme.color.gray[400]};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme, $variant }) =>
    $variant === 'large' ? theme.fontSize.md : theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.line.sm};

  & > :first-child {
    margin-top: ${({ theme }) => theme.space[2]};
  }
`
