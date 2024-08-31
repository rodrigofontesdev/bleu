export const transition = {
  fast: 'all 250ms cubic-bezier(0.25,0.1,0.25,1)',
  normal: 'all 500ms cubic-bezier(0.25,0.1,0.25,1)',
  slow: 'all 750ms cubic-bezier(0.25,0.1,0.25,1)',
} as const

export type TransitionProps = typeof transition
