import { InputHTMLAttributes, forwardRef } from 'react'
import { Container, Prefix, StyledInput } from './styles'

type InputProps = {
  prefix?: string
  variant?: 'normal' | 'large'
} & InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, name, prefix, variant = 'normal', ...props }: InputProps, ref) => {
    return (
      <Container>
        {!!prefix && <Prefix $variant={variant}>{prefix}</Prefix>}
        <StyledInput id={id} name={name ?? id} $variant={variant} ref={ref} {...props} />
      </Container>
    )
  }
)
