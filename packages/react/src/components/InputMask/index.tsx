import { forwardRef } from 'react'
import { IMaskInputProps, IMaskMixin } from 'react-imask'
import { Container, Prefix, StyledInput } from './styles'

type InputMaskProps = {
  prefix?: string
  variant?: 'normal' | 'large'
} & IMaskInputProps<HTMLInputElement>

type InputProps = Pick<InputMaskProps, 'variant'> & IMaskInputProps<HTMLInputElement>

const Input = IMaskMixin<HTMLInputElement, InputProps>(({ variant, inputRef, ...props }) => {
  return <StyledInput $variant={variant!} ref={inputRef} {...props} />
})

export const InputMask = forwardRef<HTMLInputElement, InputMaskProps>(
  ({ id, name, prefix, variant = 'normal', ...props }: InputMaskProps, ref) => {
    return (
      <Container>
        {!!prefix && <Prefix $variant={variant}>{prefix}</Prefix>}
        <Input id={id} name={name ?? id} variant={variant} inputRef={ref} {...props} />
      </Container>
    )
  }
)
