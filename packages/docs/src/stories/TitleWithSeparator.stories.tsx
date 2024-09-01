import { TitleWithSeparator } from '@bleukit/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Title With Separator',
  component: TitleWithSeparator,
  args: {
    children: 'Fancy Title',
    separator: 'both',
  },
  argTypes: {
    separator: {
      options: ['both', 'left', 'right'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  render: ({ children, ...props }) => (
    <div style={{ width: '480px' }}>
      <TitleWithSeparator {...props}>
        <h2>{children}</h2>
      </TitleWithSeparator>
    </div>
  ),
} satisfies Meta<typeof TitleWithSeparator>

type Story = StoryObj<typeof TitleWithSeparator>

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
  argTypes: {
    orientation: {
      options: ['horizontal'],
      control: {
        type: 'inline-radio',
      },
    },
  },
}

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    size: 100,
  },
  argTypes: {
    orientation: {
      options: ['vertical'],
      control: {
        type: 'inline-radio',
      },
    },
  },
}
