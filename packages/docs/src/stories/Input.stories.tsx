import { Input } from '@bleukit/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Input',
  component: Input,
  args: {
    type: 'text',
    variant: 'normal',
  },
  argTypes: {
    variant: {
      options: ['normal', 'large'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} satisfies Meta<typeof Input>

type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    id: 'fullName',
    name: 'fullName',
    placeholder: 'Nome completo',
    autoComplete: 'off',
  },
}

export const WithPrefix: Story = {
  args: {
    prefix: '@',
    id: 'username',
    name: 'username',
    placeholder: 'Nome de usuário',
    autoComplete: 'off',
  },
}

export const ReadOnly: Story = {
  args: {
    type: 'tel',
    id: 'phone',
    name: 'phone',
    placeholder: 'Seu celular',
    prefix: '+55',
    defaultValue: '(11) 99999-9999',
    readOnly: true,
  },
  argTypes: {
    readOnly: {
      control: { disable: true },
    },
  },
}

export const Disabled: Story = {
  args: {
    type: 'email',
    id: 'userEmail',
    name: 'userEmail',
    placeholder: 'Seu melhor e-mail',
    defaultValue: 'mail@example.com',
    disabled: true,
  },
  argTypes: {
    disabled: {
      control: { disable: true },
    },
  },
}
