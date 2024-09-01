import { Steps } from '@bleukit/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Steps',
  component: Steps,
} satisfies Meta<typeof Steps>

type Story = StoryObj<typeof Steps>

export const Default: Story = {
  args: {
    steps: 3,
    current: 1,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '600px' }}>
        <Story />
      </div>
    ),
  ],
}
