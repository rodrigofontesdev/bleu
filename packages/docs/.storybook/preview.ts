import { bleu } from '@bleukit/react'
import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import type { Preview } from '@storybook/react'
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
          value: bleu.color.navyBlue[400],
        },
      ],
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        default: bleu,
      },
      Provider: ThemeProvider,
    }),
  ],
}

export default preview
