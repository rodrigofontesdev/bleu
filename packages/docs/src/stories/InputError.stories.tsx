import { Input, InputError } from '@bleukit/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Input',
  component: InputError,
} satisfies Meta<typeof InputError>

type Story = StoryObj<typeof InputError>

export const WithError: Story = {
  args: {
    message: 'O e-mail está sendo utilizado.',
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
        <Input
          type="mail"
          id="email"
          name="email"
          placeholder="Seu melhor e-mail"
          defaultValue="mail@example.com"
          autoFocus
        />
        <Story />
      </div>
    ),
  ],
}
