export const backdrop = {
  blur: {
    xs: 'blur(2px)',
    sm: 'blur(4px)',
    md: 'blur(8px)',
    lg: 'blur(12px)',
    xl: 'blur(16px)',
  },
} as const

export type BackdropProps = typeof backdrop
