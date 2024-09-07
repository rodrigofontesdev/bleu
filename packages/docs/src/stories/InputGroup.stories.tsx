import { InputGroup } from '@bleukit/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Input Group',
  component: InputGroup.Root,
} satisfies Meta<typeof InputGroup.Root>

type Story = StoryObj<typeof InputGroup.Root>

export const Default: Story = {
  args: {
    children: (
      <>
        <InputGroup.Label inputId="email" text="Enviamos um e-mail para:" variant="large" />
        <InputGroup.Control id="email" defaultValue="ma**@example.com" variant="large" disabled />
      </>
    ),
  },
}
