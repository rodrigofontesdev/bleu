import { StyledDivider } from './styles'

type DividerProps = {
  axis?: 'horizontal' | 'vertical'
  height?: number
}

export function Divider({ axis = 'horizontal', height = 0 }: DividerProps) {
  return <StyledDivider $axis={axis} $height={height} />
}
