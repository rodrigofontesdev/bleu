import { Modal, Text } from '@bleukit/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Overlays/Modal',
  component: Modal.Body,
} satisfies Meta<typeof Modal.Body>

type Story = StoryObj<typeof Modal.Body>

export const Default: Story = {
  args: {
    title: 'My custom title',
    children: (
      <Text weight="semiBold" size="sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum odio ipsa vel deserunt
        aliquam debitis quisquam nisi esse voluptas, labore ea beatae aliquid tempore enim, quos
        modi vero qui. Atque?
      </Text>
    ),
  },
  decorators: [
    (Story) => (
      <Modal.Root open={true}>
        <Modal.Trigger>Abrir modal</Modal.Trigger>
        <Story />
      </Modal.Root>
    ),
  ],
}
