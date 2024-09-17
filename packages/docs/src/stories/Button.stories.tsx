import { Button, Text, theme } from '@bleukit/react'
import {
  faChevronRight,
  faFloppyDisk,
  faHouse,
  faInfo,
  faKey,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Buttons/Button',
  component: Button,
  args: {
    appearance: 'primary',
    size: 'normal',
    iconSize: '2x',
    loading: false,
    disabled: false,
  },
  argTypes: {
    appearance: {
      options: ['primary', 'success', 'danger', 'warning', 'info'],
      control: {
        type: 'inline-radio',
      },
      table: {
        defaultValue: {
          summary: 'primary',
        },
        type: {
          summary: 'primary | success | danger | warning | info',
        },
      },
    },
    size: {
      options: ['small', 'normal', 'large'],
      control: {
        type: 'inline-radio',
      },
      table: {
        defaultValue: {
          summary: 'normal',
        },
        type: {
          summary: 'small | normal | large',
        },
      },
    },
    iconSize: {
      options: [
        '2xs',
        'xs',
        'sm',
        'lg',
        'xl',
        '2xl',
        '1x',
        '2x',
        '3x',
        '4x',
        '5x',
        '6x',
        '7x',
        '8x',
        '9x',
        '10x',
      ],
      control: {
        type: 'inline-radio',
      },
      table: {
        type: {
          summary:
            '2xs | xs | sm | lg | xl | 2xl | 1x | 2x | 3x | 4x | 5x | 6x | 7x | 8x | 9x | 10x',
        },
        defaultValue: {
          summary: '2x',
        },
      },
    },
    loading: {
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    disabled: {
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
  },
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof Button>

export const Default: Story = {
  render: (args) => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: theme.space[5],
      }}
    >
      <Text style={{ gridColumn: '1 / -1' }} align="center" weight="bold" size="sm">
        Active state
      </Text>

      <Button {...args} {...Primary.args} />
      <Button {...args} {...Success.args} />
      <Button {...args} {...Danger.args} />
      <Button {...args} {...Warning.args} />
      <Button {...args} {...Info.args} />

      <Text style={{ gridColumn: '1 / -1' }} align="center" weight="bold" size="sm">
        Loading state
      </Text>

      <Button {...args} {...Primary.args} loading />
      <Button {...args} {...Success.args} loading />
      <Button {...args} {...Danger.args} loading />
      <Button {...args} {...Warning.args} loading />
      <Button {...args} {...Info.args} loading />

      <Text style={{ gridColumn: '1 / -1' }} align="center" weight="bold" size="sm">
        Disabled state
      </Text>

      <Button {...args} {...Primary.args} disabled />
      <Button {...args} {...Success.args} disabled />
      <Button {...args} {...Danger.args} disabled />
      <Button {...args} {...Warning.args} disabled />
      <Button {...args} {...Info.args} disabled />
    </div>
  ),
  args: {
    icon: faChevronRight,
  },
  argTypes: {
    icon: {
      control: { disable: true },
    },
    iconSize: {
      control: { disable: true },
    },
    appearance: {
      control: { disable: true },
    },
    size: {
      control: { disable: true },
    },
    loading: {
      control: { disable: true },
    },
    disabled: {
      control: { disable: true },
    },
    as: {
      control: { disable: true },
      table: {
        type: {
          summary: 'button | a',
        },
        defaultValue: {
          summary: 'button',
        },
      },
    },
  },
  tags: ['!dev', '!test'],
}

export const Primary: Story = {
  args: {
    appearance: 'primary',
    'aria-label': 'Próxima etapa',
    icon: faChevronRight,
  },
}

export const Success: Story = {
  args: {
    appearance: 'success',
    'aria-label': 'Salvar perfil',
    icon: faFloppyDisk,
  },
}

export const Danger: Story = {
  args: {
    appearance: 'danger',
    'aria-label': 'Cancelar',
    icon: faTimes,
  },
}

export const Warning: Story = {
  args: {
    appearance: 'warning',
    'aria-label': 'Atualizar palavra secreta',
    icon: faKey,
  },
}

export const Info: Story = {
  args: {
    appearance: 'info',
    'aria-label': 'Abrir menu de ajuda',
    icon: faInfo,
  },
}

export const Loading: Story = {
  args: {
    ...Success.args,
    loading: true,
  },
}

export const Disabled: Story = {
  args: {
    ...Success.args,
    disabled: true,
  },
}

export const Link: Story = {
  args: {
    appearance: 'primary',
    as: 'a',
    href: 'https://example.com',
    'aria-label': 'Voltar para Home',
    role: 'button',
    icon: faHouse,
  },
  parameters: {
    controls: {
      exclude: ['disabled'],
    },
  },
}

export const Small: Story = {
  args: {
    ...Primary.args,
    size: 'small',
  },
}

export const Normal: Story = {
  args: {
    ...Primary.args,
    size: 'normal',
  },
}

export const Large: Story = {
  args: {
    ...Primary.args,
    size: 'large',
  },
}
