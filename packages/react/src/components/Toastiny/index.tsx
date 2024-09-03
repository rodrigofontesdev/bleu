import { Body, TimeBar, Toast } from './styles'

type ToastinyProps = {
  message: string
  durationInMilliseconds: number
  type?: 'primary' | 'success' | 'danger' | 'warning' | 'info'
}

export function Toastiny({ message, durationInMilliseconds, type = 'primary' }: ToastinyProps) {
  return (
    <Toast $type={type}>
      <Body>{message}</Body>
      {durationInMilliseconds !== Infinity && <TimeBar $duration={durationInMilliseconds} />}
    </Toast>
  )
}
