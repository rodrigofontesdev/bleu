import { Box, type BoxProps, Text } from '@bleukit/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
} satisfies Meta<BoxProps>

type Story = StoryObj<BoxProps>

export const Default: Story = {
  args: {
    as: 'div',
  },
  render: (props) => (
    <Box {...props}>
      <Text>Testando...</Text>
    </Box>
  ),
}
