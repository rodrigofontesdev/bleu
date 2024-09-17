import { Heading } from '@bleukit/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
} satisfies Meta<typeof Heading>

type Story = StoryObj<typeof Heading>

export const Default: Story = {
  args: {
    children: (
      <>
        <h1>Página não encontrada</h1>
        <p>Ops! A página que você está procurando não existe ou foi desativada temporariamente.</p>
      </>
    ),
    titleUppercase: false,
  },
  argTypes: {
    children: {
      table: { disable: true },
    },
    titleColor: {
      control: { disable: true },
      table: {
        type: {
          summary: 'neutral | primary',
        },
        defaultValue: {
          summary: 'neutral',
        },
      },
    },
    titleUppercase: {
      control: { disable: true },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    size: {
      control: { disable: true },
      table: {
        type: {
          summary: 'small | normal | large',
        },
        defaultValue: {
          summary: 'large',
        },
      },
    },
    align: {
      control: { disable: true },
      table: {
        type: {
          summary: 'left | center | right',
        },
        defaultValue: {
          summary: 'center',
        },
      },
    },
    as: {
      control: { disable: true },
      table: {
        type: {
          summary: 'header | div',
        },
        defaultValue: {
          summary: 'header',
        },
      },
    },
  },
  tags: ['!dev', '!test'],
}

export const Large: Story = {
  args: {
    children: (
      <>
        <h2>Criar conta</h2>
        <p>
          Crie sua conta grátis em três minutos, diga adeus à planilha e fique em dia com a Receita
          Federal.
        </p>
      </>
    ),
    titleColor: 'primary',
    titleUppercase: true,
    size: 'large',
    align: 'center',
  },
  argTypes: {
    children: {
      table: { disable: true },
    },
    titleColor: {
      options: ['neutral', 'primary'],
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['small', 'normal', 'large'],
      control: { type: 'inline-radio' },
    },
    align: {
      if: {
        arg: 'size',
        neq: 'large',
      },
      options: ['left', 'center', 'right'],
      control: { type: 'inline-radio' },
    },
  },
  decorators: [(Story) => <div style={{ width: '28rem' }}>{<Story />}</div>],
}

export const Normal: Story = {
  args: {
    ...Large.args,
    children: (
      <>
        <h2>Maio/2024</h2>
        <span>R$ 6.250,00</span>
      </>
    ),
    titleUppercase: false,
    size: 'normal',
  },
  argTypes: {
    ...Large.argTypes,
  },
}

export const Small: Story = {
  args: {
    ...Large.args,
    children: (
      <>
        <h2>Comércio</h2>
        <p>Revenda de mercadorias</p>
      </>
    ),
    titleUppercase: false,
    size: 'small',
    align: 'left',
  },
  argTypes: {
    ...Large.argTypes,
  },
}

export const Inverse: Story = {
  args: {
    ...Large.args,
    children: (
      <>
        <p>Período de apuração</p>
        <h2>Janeiro/2024</h2>
      </>
    ),
    titleUppercase: false,
    size: 'normal',
    align: 'left',
  },
  argTypes: {
    ...Large.argTypes,
  },
}

export const Neutral: Story = {
  args: {
    ...Large.args,
    children: (
      <>
        <h2>Acessar conta</h2>
        <p>Acesse sua conta utilizando o CNPJ da empresa.</p>
      </>
    ),
    titleColor: 'neutral',
  },
  argTypes: {
    ...Large.argTypes,
  },
  decorators: Large.decorators,
}
