import { Text } from '@bleukit/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
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
} satisfies Meta<typeof Text>

type Story = StoryObj<typeof Text>

export const Default: Story = {
  render: (props) => (
    <div>
      <Text {...props}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at magna tempus, ultricies
        dolor non, tempus lorem. In et orci ut elit pellentesque vestibulum. Etiam blandit ex lorem,
        ac vestibulum tellus feugiat quis. Duis lacus felis, fermentum a ex a, tempus auctor metus.
        Nam mollis mauris quis dictum pharetra. Etiam mauris enim, dignissim id lobortis id,
        lobortis et felis. Aenean luctus enim id libero scelerisque, sit amet venenatis elit
        lobortis. Integer purus augue, rhoncus ac nibh sed, facilisis ultricies urna. Nunc a elit
        nec magna cursus consectetur. Duis cursus eleifend mauris fermentum congue. Quisque non
        metus massa.
      </Text>

      <Text {...props}>
        Nullam et porta dui, vel tristique erat. Curabitur ut pretium mauris, lobortis pulvinar
        orci. Pellentesque ullamcorper commodo sollicitudin. Cras justo lectus, mollis vitae euismod
        eget, consectetur eu mauris. Etiam et commodo dolor, ut facilisis nisi. Morbi in felis
        commodo, lobortis tellus vitae, pretium dolor. Suspendisse potenti. Suspendisse elit nunc,
        sagittis non ipsum sagittis, porta facilisis libero. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Maecenas faucibus ullamcorper metus
        eu tincidunt. Suspendisse non orci quis nunc ornare rhoncus in a neque. Sed condimentum mi
        porta, rutrum nisl at, pellentesque lorem.
      </Text>

      <Text {...props}>
        Mauris eros eros, pulvinar nec iaculis non, tincidunt vel urna. Vivamus a nisl posuere,
        rutrum orci tempus, feugiat quam. Aliquam fermentum vulputate faucibus. Aliquam ultrices
        nisl eros, id consectetur libero pulvinar ac. Etiam pretium, turpis quis semper iaculis,
        arcu leo convallis orci, ac sollicitudin orci ante non tortor. Quisque a faucibus est, eget
        faucibus ex. Pellentesque sagittis feugiat sapien in auctor. Donec dapibus, libero vel
        luctus vulputate, sapien lectus elementum dui, ac bibendum purus sapien tristique ligula.
        Sed nibh nulla, egestas sit amet nibh sed, aliquet venenatis lorem. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam quis pretium
        orci. Aliquam erat volutpat. Suspendisse aliquet tellus eget fermentum ornare. Donec
        viverra, sapien sit amet tristique laoreet, elit mauris semper lacus, et tristique erat
        turpis quis nisi. Nullam sodales ut odio ut fringilla.
      </Text>
    </div>
  ),
  args: {
    as: 'p',
    italic: false,
  },
  argTypes: {
    as: {
      control: { disable: true },
      table: {
        type: {
          summary: 'p | span | strong | b | i | em | code',
        },
        defaultValue: {
          summary: 'p',
        },
      },
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
    align: {
      control: { disable: true },
      table: {
        type: {
          summary: 'left | center | right | string',
        },
        defaultValue: { summary: 'left' },
      },
    },
    flow: {
      control: { disable: true },
      table: {
        type: {
          summary: 'block | inline | inline-block | string',
        },
        defaultValue: { summary: 'block' },
      },
    },
    italic: {
      control: { disable: true },
      defaultValue: {
        summary: 'false',
      },
    },
  },
  tags: ['!dev', '!test'],
}

export const Neutral: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat, purus tempor efficitur luctus, dolor nisi pretium metus, eu facilisis tellus tellus at odio. Duis luctus id ante malesuada malesuada. Nam eu cursus magna. Sed tempor accumsan arcu a fermentum. Ut dignissim justo nec laoreet luctus. In venenatis tempor nibh, ac auctor velit laoreet hendrerit. Cras imperdiet orci condimentum sollicitudin bibendum. Nam aliquam efficitur lacus quis varius. Nam dapibus elementum dui, eget vestibulum neque imperdiet non.',
    size: 'md',
    weight: 'normal',
    line: 'md',
    align: 'center',
    italic: false,
    flow: 'block',
  },
}
