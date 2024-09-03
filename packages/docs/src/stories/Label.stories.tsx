import { Input, Label } from '@bleukit/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Input',
  component: Label,
} satisfies Meta<typeof Label>

type Story = StoryObj<typeof Label>

export const WithLabel: Story = {
  args: {
    text: 'E-mail',
    inputId: 'userEmail',
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
  render: ({ variant, ...props }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
      <Label variant={variant} {...props} />
      <Input
        type="mail"
        id="userEmail"
        name="userEmail"
        placeholder="Seu melhor e-mail"
        variant={variant}
      />
    </div>
  ),
}
