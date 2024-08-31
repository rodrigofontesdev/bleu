import styled from 'styled-components'

export const Box = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.color.black.alpha[15]};
  border-radius: ${({ theme }) => theme.radius.sm};
  box-shadow: ${({ theme }) => theme.shadow.outer.sm};
`
