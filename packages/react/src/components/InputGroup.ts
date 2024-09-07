import styled from 'styled-components'
import { Input } from './Input'
import { InputError } from './InputError'
import { InputMask } from './InputMask'
import { Label } from './Label'

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.space[2]};
  flex: 1;
`

export const InputGroup = {
  Root: Root,
  Label: Label,
  Control: Input,
  MaskControl: InputMask,
  Error: InputError,
}

InputGroup.Root.displayName = 'InputGroup.Root'
InputGroup.Label.displayName = 'InputGroup.Label'
InputGroup.Control.displayName = 'InputGroup.Control'
InputGroup.MaskControl.displayName = 'InputGroup.MaskControl'
InputGroup.Error.displayName = 'InputGroup.Error'
