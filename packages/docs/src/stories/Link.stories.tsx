import { Link } from '@bleukit/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Link',
  component: Link,
} satisfies Meta<typeof Link>

type Story = StoryObj<typeof Link>

export const Default: Story = {
  args: {
    href: 'https://github.com/rodrigofontesdev/bleu',
    children: 'Não tem uma conta? Clique aqui.',
    size: 'md',
    weight: 'normal',
    line: 'md',
    italic: false,
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
  },
  render: ({ children, ...props }) => (
    <Link target="_blank" {...props}>
      {children}
    </Link>
  ),
}
