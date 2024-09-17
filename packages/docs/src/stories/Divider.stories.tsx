import { Button, Divider, InputGroup, Link, theme } from '@bleukit/react'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/Divider',
  component: Divider,
  argTypes: {
    axis: {
      options: ['horizontal', 'vertical'],
      control: {
        type: 'inline-radio',
      },
      table: {
        type: {
          summary: 'horizontal | vertical',
        },
        defaultValue: {
          summary: 'horizontal',
        },
      },
    },
    height: {
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: {
          summary: '0',
        },
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{ width: '30rem', display: 'flex', justifyContent: 'center', padding: '1.25rem' }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Divider>

type Story = StoryObj<typeof Divider>

export const Default: Story = {
  render: (args) => (
    <div style={{ width: '40rem', display: 'flex', flexDirection: 'column' }}>
      <form
        style={{
          display: 'flex',
          alignItems: 'end',
          gap: theme.space[5],
          marginTop: theme.space[5],
          marginBottom: theme.space[10],
        }}
        onSubmit={(e) => e.preventDefault()}
      >
        <InputGroup.Root>
          <InputGroup.Label inputId="cnpj" text="CNPJ" variant="large" />
          <InputGroup.Control
            id="cnpj"
            name="cnpj"
            placeholder="00.000.000/0001-00"
            variant="large"
          />
        </InputGroup.Root>

        <Button icon={faChevronRight} appearance="success" aria-label="Acessar conta" />
      </form>

      <Divider {...args} />

      <Link size="sm" weight="semiBold" style={{ marginTop: theme.space[2], textAlign: 'center' }}>
        Não tem uma conta? Clique aqui.
      </Link>
    </div>
  ),
  argTypes: {
    axis: {
      control: { disable: true },
    },
    height: {
      control: { disable: true },
    },
  },
  tags: ['!dev', '!test'],
}

export const Horizontal: Story = {
  args: {
    axis: 'horizontal',
    height: 300,
  },
  argTypes: {
    height: {
      if: {
        arg: 'axis',
        eq: 'vertical',
      },
    },
  },
}

export const Vertical: Story = {
  args: {
    ...Horizontal.args,
    axis: 'vertical',
  },
  argTypes: {
    ...Horizontal.argTypes,
  },
}
