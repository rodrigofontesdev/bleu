import { Step, StyledSteps } from './styles'

type StepsProps = {
  steps: number
  current: number
}

export function Steps({ steps, current }: StepsProps) {
  return (
    <StyledSteps>
      {Array.from({ length: steps }, (_, i) => i + 1).map((step) => (
        <Step key={step} $active={step === current} />
      ))}
    </StyledSteps>
  )
}
