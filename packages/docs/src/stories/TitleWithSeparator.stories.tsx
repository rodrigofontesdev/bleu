import { TitleWithSeparator } from '@bleukit/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Title With Separator',
  component: TitleWithSeparator,
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
    separator: {
      options: ['both', 'right', 'left'],
      control: {
        type: 'inline-radio',
      },
      table: {
        type: {
          summary: 'both | right | left',
        },
        defaultValue: {
          summary: 'both',
        },
      },
    },
    separatorSize: {
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: {
          summary: '100',
        },
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '480px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TitleWithSeparator>

type Story = StoryObj<typeof TitleWithSeparator>

export const Default: Story = {
  render: ({ children, ...props }) => (
    <TitleWithSeparator {...props}>
      <h2>{children}</h2>
    </TitleWithSeparator>
  ),
  args: {
    children: 'Awesome Title',
    axis: 'horizontal',
    separator: 'both',
  },
  argTypes: {
    children: {
      table: { disable: true },
    },
    axis: {
      control: { disable: true },
    },
    separator: {
      control: { disable: true },
    },
    separatorSize: {
      control: { disable: true },
    },
  },
  tags: ['!dev', '!test'],
}

export const Horizontal: Story = {
  render: Default.render,
  decorators: Default.decorators,
  args: {
    ...Default.args,
    separatorSize: 100,
  },
  argTypes: {
    separatorSize: {
      if: {
        arg: 'axis',
        eq: 'vertical',
      },
    },
  },
}

export const Vertical: Story = {
  render: Horizontal.render,
  args: {
    ...Horizontal.args,
    axis: 'vertical',
  },
  argTypes: {
    ...Horizontal.argTypes,
  },
}
