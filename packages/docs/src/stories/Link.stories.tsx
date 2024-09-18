import { Link } from '@bleukit/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Link',
  component: Link,
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
} satisfies Meta<typeof Link>

type Story = StoryObj<typeof Link>

export const Default: Story = {
  render: ({ children, ...props }) => (
    <Link target="_blank" {...props}>
      {children}
    </Link>
  ),
  args: {
    children: 'Não tem uma conta? Clique aqui.',
    href: 'https://github.com/rodrigofontesdev/bleu',
    size: 'md',
    weight: 'normal',
    line: 'md',
    italic: false,
  },
  argTypes: {
    href: {
      control: { disable: true },
    },
    children: {
      table: { disable: true },
    },
    size: {
      control: { disable: true },
      table: {
        type: {
          summary: 'xs | sm | md | lg | xl | 2xl | 3xl | 4xl | 5xl | 6xl | 7xl | 8xl',
        },
        defaultValue: {
          summary: 'md',
        },
      },
    },
    weight: {
      control: { disable: true },
      table: {
        type: {
          summary:
            'thin | ultraLight | light | normal | medium | semiBold | bold | ultraBold | heavy',
        },
        defaultValue: {
          summary: 'normal',
        },
      },
    },
    line: {
      control: { disable: true },
      table: {
        type: {
          summary: 'xs | sm | md | lg | xl',
        },
        defaultValue: { summary: 'md' },
      },
    },
    italic: {
      control: { disable: true },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
  tags: ['!dev', '!test'],
}

export const Neutral: Story = {
  render: Default.render,
  args: {
    ...Default.args,
  },
}
