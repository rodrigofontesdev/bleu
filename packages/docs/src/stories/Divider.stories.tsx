import { Divider } from '@bleukit/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/Divider',
  component: Divider,
} satisfies Meta<typeof Divider>

type Story = StoryObj<typeof Divider>

export const Default: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: '480px' }}>
        <Story />
      </div>
    ),
  ],
}
