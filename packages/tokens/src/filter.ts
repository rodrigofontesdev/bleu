export const filter = {
  blur: {
    xs: 'blur(2px)',
    sm: 'blur(4px)',
    md: 'blur(8px)',
    lg: 'blur(12px)',
    xl: 'blur(16px)',
  },
  brightness: {
    5: 'brightness(5%)',
    10: 'brightness(10%)',
    15: 'brightness(15%)',
    20: 'brightness(20%)',
    25: 'brightness(25%)',
    30: 'brightness(30%)',
    35: 'brightness(35%)',
    40: 'brightness(40%)',
    45: 'brightness(45%)',
    50: 'brightness(50%)',
    55: 'brightness(55%)',
    60: 'brightness(60%)',
    65: 'brightness(65%)',
    70: 'brightness(70%)',
    75: 'brightness(75%)',
    80: 'brightness(80%)',
    85: 'brightness(85%)',
    90: 'brightness(90%)',
    95: 'brightness(95%)',
  },
} as const

export type FilterProps = typeof filter
