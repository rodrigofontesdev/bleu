export const fontWeight = {
  thin: 100,
  ultraLight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  ultraBold: 800,
  heavy: 900,
} as const

export type FontWeightProps = typeof fontWeight
