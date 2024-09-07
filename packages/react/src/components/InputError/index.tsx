import { StyledInputError } from './styles'

type InputErrorProps = {
  message: string
}

export function InputError({ message }: InputErrorProps) {
  return <StyledInputError role="alert">{message}</StyledInputError>
}

InputError.displayName = 'InputError'
