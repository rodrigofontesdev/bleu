import { LabelHTMLAttributes, ReactNode } from 'react'
import { StyledLabel } from './styles'

type LabelProps = {
  text: string
  children?: ReactNode
  inputId?: string
  variant?: 'normal' | 'large'
} & LabelHTMLAttributes<HTMLLabelElement>

export function Label({ text, children, inputId, variant = 'normal', ...props }: LabelProps) {
  return (
    <StyledLabel htmlFor={inputId} $variant={variant} {...props}>
      {text}
      {children}
    </StyledLabel>
  )
}
