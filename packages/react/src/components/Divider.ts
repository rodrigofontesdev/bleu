import styled from 'styled-components'

export const Divider = styled.div`
  height: 2px;
  background-color: ${({ theme }) => theme.color.blue[400]};
  opacity: ${({ theme }) => theme.opacity[15]};
`

Divider.displayName = 'Divider'
