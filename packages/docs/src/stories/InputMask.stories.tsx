import { InputMask } from '@bleukit/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Masked Input',
  component: InputMask,
  args: {
    type: 'text',
    variant: 'normal',
  },
  argTypes: {
    type: {
      control: { disable: true },
    },
    variant: {
      options: ['normal', 'large'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} satisfies Meta<typeof InputMask>

type Story = StoryObj<typeof InputMask>

export const Phone: Story = {
  args: {
    prefix: '+55',
    mask: '(00) 00000-0000',
    id: 'phone',
    name: 'phone',
    placeholder: 'Número de celular',
    autoComplete: 'off',
    readOnly: false,
    disabled: false,
  },
}

export const Currency: Story = {
  args: {
    prefix: 'R$',
    mask: Number,
    thousandsSeparator: '.',
    padFractionalZeros: true,
    unmask: 'typed',
    id: 'amount',
    name: 'amount',
    placeholder: '0,00',
    autoComplete: 'off',
    readOnly: false,
    disabled: false,
  },
}

export const CNPJ: Story = {
  args: {
    mask: 'S1.S2.S3/S4-N1',
    blocks: {
      S1: {
        mask: /^[0-9a-zA-Z]{0,2}$/,
      },
      S2: {
        mask: /^[0-9a-zA-Z]{0,3}$/,
      },
      S3: {
        mask: /^[0-9a-zA-Z]{0,3}$/,
      },
      S4: {
        mask: /^[0-9a-zA-Z]{0,4}$/,
      },
      N1: {
        mask: /^[0-9]{0,2}$/,
      },
    },
    prepareChar: (char) => char.toUpperCase(),
    id: 'businessCnpj',
    name: 'businessCnpj',
    placeholder: 'Número do CNPJ',
    autoComplete: 'off',
    readOnly: false,
    disabled: false,
  },
}
