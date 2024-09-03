import { Heading } from '@bleukit/react'
import type { Meta, StoryObj } from '@storybook/react'
import { Fragment } from 'react/jsx-runtime'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    titleColor: 'primary',
  },
  argTypes: {
    children: {
      control: { disable: true },
    },
    align: {
      options: ['left', 'center', 'right'],
      control: { type: 'inline-radio' },
    },
    titleColor: {
      options: ['neutral', 'primary'],
      control: { type: 'inline-radio' },
    },
  },
} satisfies Meta<typeof Heading>

type Story = StoryObj<typeof Heading>

export const Large: Story = {
  args: {
    children: (
      <Fragment>
        <h2>Criar conta</h2>
        <p>
          Crie sua conta grátis em três minutos, diga adeus à planilha e fique em dia com a Receita
          Federal.
        </p>
      </Fragment>
    ),
    variant: 'large',
    titleColor: 'neutral',
  },
  argTypes: {
    align: {
      control: { disable: true },
    },
  },
  decorators: [(Story) => <div style={{ width: '420px' }}>{<Story />}</div>],
}

export const Normal: Story = {
  args: {
    children: (
      <Fragment>
        <h2>Maio/2024</h2>
        <span>R$ 6.250,00</span>
      </Fragment>
    ),
    variant: 'normal',
    align: 'center',
  },
}

export const Small: Story = {
  args: {
    children: (
      <Fragment>
        <h2>Comércio</h2>
        <p>Revenda de mercadorias</p>
      </Fragment>
    ),
    variant: 'small',
    align: 'left',
  },
}

export const Inverse: Story = {
  args: {
    children: (
      <Fragment>
        <p>Período de apuração</p>
        <h2>Janeiro/2024</h2>
      </Fragment>
    ),
    variant: 'normal',
    align: 'left',
  },
  argTypes: {
    variant: {
      options: ['small', 'normal'],
      control: { type: 'inline-radio' },
    },
  },
}
