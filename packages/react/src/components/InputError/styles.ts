import styled from 'styled-components'

export const StyledInputError = styled.div`
  min-height: 1.125rem;
  color: ${({ theme }) => theme.color.red[400]};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  line-height: ${({ theme }) => theme.line.sm};
`
