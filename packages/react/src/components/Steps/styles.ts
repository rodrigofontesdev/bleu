import styled from 'styled-components'

export const StyledSteps = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[2]};
`

export const Step = styled.span<{ $active: boolean }>`
  flex: 1;
  height: 6px;
  display: block;
  background-color: ${({ theme, $active }) =>
    $active ? theme.color.blue[400] : theme.color.black.alpha[15]};
  border-radius: ${({ theme }) => theme.radius.sm};
`
