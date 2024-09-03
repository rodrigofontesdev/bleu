import { forwardRef } from 'react'
import Select, { GroupBase, Props, SelectInstance } from 'react-select'
import { ClearIndicator } from './ClearIndicator'
import { DropdownIndicator } from './DropdownIndicator'
import { StyledComboBox } from './styles'

type ComboBoxProps<
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> = {
  id: string
  variant?: 'normal' | 'large'
} & Omit<
  Props<Option, IsMulti, Group>,
  'id' | 'instanceId' | 'classNamePrefix' | 'noOptionsMessage' | 'components'
>

export const ComboBox = forwardRef<SelectInstance, ComboBoxProps>(
  ({ id, name, variant = 'normal', ...props }: ComboBoxProps, ref) => {
    return (
      <StyledComboBox $variant={variant}>
        <Select
          inputId={id}
          instanceId={id}
          name={name ?? id}
          classNamePrefix="selectControl"
          noOptionsMessage={() => 'Sem opções'}
          components={{ DropdownIndicator, ClearIndicator }}
          ref={ref}
          {...props}
        />
      </StyledComboBox>
    )
  }
)
