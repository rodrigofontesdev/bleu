export const shadow = {
  outer: {
    xs: '0 2px 2px 0 rgb(0 0 0 / 0.25)',
    sm: '0 4px 4px 0 rgb(0 0 0 / 0.25)',
    md: '0 8px 8px 0 rgb(0 0 0 / 0.25)',
    lg: '0 12px 12px 0 rgb(0 0 0 / 0.25)',
    xl: '0 16px 16px 0 rgb(0 0 0 / 0.25)',
  },
  inner: {
    xs: 'inset 0 2px 2px 0 rgb(0 0 0 / 0.25)',
    sm: 'inset 0 4px 4px 0 rgb(0 0 0 / 0.25)',
    md: 'inset 0 8px 8px 0 rgb(0 0 0 / 0.25)',
    lg: 'inset 0 12px 12px 0 rgb(0 0 0 / 0.25)',
    xl: 'inset 0 16px 16px 0 rgb(0 0 0 / 0.25)',
  },
} as const

export type ShadowProps = typeof shadow
