import { Select } from '@bleukit/react'
import type { Meta, StoryObj } from '@storybook/react'

const STATES = [
  { value: 'AC', label: 'Acre' },
  { value: 'AL', label: 'Alagoas' },
  { value: 'AP', label: 'Amapá' },
  { value: 'AM', label: 'Amazonas' },
  { value: 'BA', label: 'Bahia' },
  { value: 'CE', label: 'Ceará' },
  { value: 'DF', label: 'Distrito Federal' },
  { value: 'ES', label: 'Espírito Santo' },
  { value: 'GO', label: 'Goiás' },
  { value: 'MA', label: 'Maranhão' },
  { value: 'MT', label: 'Mato Grosso' },
  { value: 'MS', label: 'Mato Grosso do Sul' },
  { value: 'MG', label: 'Minas Gerais' },
  { value: 'PA', label: 'Pará' },
  { value: 'PB', label: 'Paraíba' },
  { value: 'PR', label: 'Paraná' },
  { value: 'PE', label: 'Pernambuco' },
  { value: 'PI', label: 'Piauí' },
  { value: 'RJ', label: 'Rio de Janeiro' },
  { value: 'RN', label: 'Rio Grande do Norte' },
  { value: 'RS', label: 'Rio Grande do Sul' },
  { value: 'RO', label: 'Rondônia' },
  { value: 'RR', label: 'Roraima' },
  { value: 'SC', label: 'Santa Catarina' },
  { value: 'SP', label: 'São Paulo' },
  { value: 'SE', label: 'Sergipe' },
  { value: 'TO', label: 'Tocantins' },
]

export default {
  title: 'Form/Select',
  component: Select,
  args: {
    variant: 'normal',
    id: 'state',
    name: 'state',
    placeholder: 'Selecionar estado',
    options: STATES,
  },
  argTypes: {
    variant: {
      options: ['normal', 'large'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  decorators: [(Story) => <div style={{ width: '300px' }}>{<Story />}</div>],
} satisfies Meta<typeof Select>

type Story = StoryObj<typeof Select>

export const Default: Story = {
  args: {
    isSearchable: false,
  },
}

export const Searchable: Story = {
  args: {
    isSearchable: true,
    isClearable: true,
  },
}

export const Disabled: Story = {
  args: {
    defaultValue: STATES[24],
    isDisabled: true,
  },
}
