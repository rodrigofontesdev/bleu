import { Toastiny } from '@bleukit/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Overlays/Toast',
  component: Toastiny,
  args: {
    durationInMilliseconds: 4000,
  },
  decorators: [(Story) => <div style={{ width: '350px' }}>{<Story />}</div>],
} satisfies Meta<typeof Toastiny>

type Story = StoryObj<typeof Toastiny>

export const Primary: Story = {
  args: {
    type: 'primary',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
}

export const Success: Story = {
  args: {
    type: 'success',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
}

export const Danger: Story = {
  args: {
    type: 'danger',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
}

export const Warning: Story = {
  args: {
    type: 'warning',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
}

export const Info: Story = {
  args: {
    type: 'info',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
}
