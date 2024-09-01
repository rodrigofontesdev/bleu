import { Button } from '@bleukit/react'
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
    'aria-label': '',
    size: 'normal',
    iconSize: '2x',
    disabled: false,
    loading: false,
  },
  argTypes: {
    icon: {
      control: {
        disable: true,
      },
    },
    variant: {
      control: {
        disable: true,
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
    },
    size: {
      options: ['small', 'normal', 'large'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    icon: faChevronRight,
    variant: 'primary',
    'aria-label': 'Próxima etapa',
  },
}

export const Success: Story = {
  args: {
    icon: faFloppyDisk,
    variant: 'success',
    'aria-label': 'Salvar perfil',
  },
}

export const Danger: Story = {
  args: {
    icon: faTimes,
    variant: 'danger',
    'aria-label': 'Cancelar',
  },
}

export const Warning: Story = {
  args: {
    icon: faKey,
    variant: 'warning',
    'aria-label': 'Atualizar palavra secreta',
  },
}

export const Info: Story = {
  args: {
    icon: faInfo,
    variant: 'info',
    'aria-label': 'Abrir menu de ajuda',
  },
}

export const Loading: Story = {
  args: {
    icon: faFloppyDisk,
    variant: 'success',
    'aria-label': 'Salvar perfil',
    loading: true,
  },
}

export const Disabled: Story = {
  args: {
    icon: faFloppyDisk,
    variant: 'success',
    'aria-label': 'Atualizar perfil',
    disabled: true,
  },
}

export const Link: Story = {
  args: {
    as: 'a',
    role: 'button',
    icon: faHouse,
    variant: 'primary',
    'aria-label': 'Voltar para Home',
  },
  argTypes: {
    disabled: {
      control: {
        disable: true,
      },
    },
  },
}
