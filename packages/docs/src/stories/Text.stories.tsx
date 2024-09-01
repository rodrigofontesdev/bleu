import { Text } from '@bleukit/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
} satisfies Meta<typeof Text>

type Story = StoryObj<typeof Text>

export const Default: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, illo! Doloremque vel tempora eos corporis omnis iusto iste aliquid modi accusantium sequi temporibus consequatur architecto, beatae suscipit quisquam quibusdam nesciunt.',
    as: 'p',
    size: 'md',
    weight: 'normal',
    line: 'md',
    align: 'center',
    italic: false,
    flow: 'block',
  },
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl'],
      control: {
        type: 'inline-radio',
      },
    },
    weight: {
      options: [
        'thin',
        'ultraLight',
        'light',
        'normal',
        'medium',
        'semiBold',
        'bold',
        'ultraBold',
        'heavy',
      ],
      control: {
        type: 'inline-radio',
      },
    },
    line: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: {
        type: 'inline-radio',
      },
    },
    align: {
      options: ['left', 'center', 'right'],
      control: {
        type: 'inline-radio',
      },
    },
    flow: {
      options: ['block', 'inline', 'inline-block'],
      control: {
        type: 'inline-radio',
      },
    },
  },
}
