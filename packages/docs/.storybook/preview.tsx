import { theme } from '@bleukit/react'
import type { Preview } from '@storybook/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
    backgrounds: {
      default: 'navy',
      values: [
        {
          name: 'light',
          value: '#F2F2F2',
        },
        {
          name: 'dark',
          value: '#131313',
        },
        {
          name: 'navy',
          value: theme.color.navyBlue[400],
        },
      ],
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export default preview
