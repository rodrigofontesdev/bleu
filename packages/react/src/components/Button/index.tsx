import { IconDefinition, SizeProp } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { WebTarget } from 'styled-components'
import { StyledButton } from './styles'

type ButtonProps = {
  icon: IconDefinition
  iconSize?: SizeProp
  variant?: 'primary' | 'success' | 'danger' | 'warning' | 'info'
  size?: 'normal' | 'small' | 'large'
  loading?: boolean
  as?: WebTarget
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>

export function Button({
  icon,
  iconSize = '2x',
  variant = 'primary',
  size = 'normal',
  loading = false,
  as,
  ...props
}: ButtonProps) {
  return (
    <StyledButton $variant={variant} $size={size} as={as} {...props}>
      {loading ? (
        <FontAwesomeIcon icon={faSpinner} size={iconSize} spin />
      ) : (
        <FontAwesomeIcon icon={icon} size={iconSize} />
      )}
    </StyledButton>
  )
}
