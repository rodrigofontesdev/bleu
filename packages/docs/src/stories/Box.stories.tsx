import { Box, BoxProps, Button, Heading, InputGroup, Text, theme } from '@bleukit/react'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  argTypes: {
    children: {
      control: { disable: true },
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    as: {
      table: {
        type: {
          summary: 'article | aside | div | section ',
        },
        defaultValue: {
          summary: 'div',
        },
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '50rem' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<BoxProps>

type Story = StoryObj<BoxProps>

export const Transparent: Story = {
  args: {
    children: (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: theme.space[5],
          padding: theme.space[10],
        }}
      >
        <Heading titleColor="primary">
          <h1>Verificar E-mail</h1>
          <p>
            Acesse a caixa de entrada ou spam do e-mail, uma mensagem foi enviada, dentro você
            encontra um link para confirmar a criação da conta. É super rápido!
          </p>
        </Heading>

        <form
          style={{
            display: 'flex',
            alignItems: 'end',
            gap: theme.space[5],
            marginTop: theme.space[5],
          }}
        >
          <InputGroup.Root>
            <InputGroup.Label inputId="email" text="Enviamos um e-mail para:" variant="large" />
            <InputGroup.Control
              id="email"
              defaultValue="ma**@example.com"
              variant="large"
              disabled
            />
          </InputGroup.Root>

          <Button icon={faEnvelope} variant="success" aria-label="Reenviar e-mail" disabled />
        </form>

        <Text size="xs" weight="semiBold">
          Se não recebeu o e-mail, você pode enviar outro dentro de 2 minutos.
        </Text>
      </div>
    ),
  },
}
