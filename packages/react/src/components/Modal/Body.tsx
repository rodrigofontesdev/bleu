import * as Dialog from '@radix-ui/react-dialog'
import { ReactNode } from 'react'
import { Box } from '../Box'
import { Body, Close, Content, Header, Overlay } from './styles'

type ModalProps = {
  children: ReactNode
  title: string
  hideCloseButton?: boolean
  disableOutsideClick?: boolean
}

export function ModalBody({
  children,
  title,
  hideCloseButton = false,
  disableOutsideClick = false,
}: ModalProps) {
  return (
    <Dialog.Portal>
      <Overlay>
        <Dialog.Content
          aria-describedby={undefined}
          onPointerDownOutside={disableOutsideClick ? (e) => e.preventDefault() : undefined}
          onEscapeKeyDown={disableOutsideClick ? (e) => e.preventDefault() : undefined}
          asChild
        >
          <Content>
            <Box>
              <Header>
                <Dialog.Title asChild>
                  <h3>{title}</h3>
                </Dialog.Title>

                {!hideCloseButton && (
                  <Close>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                      <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </svg>
                  </Close>
                )}
              </Header>

              <Body>{children}</Body>
            </Box>
          </Content>
        </Dialog.Content>
      </Overlay>
    </Dialog.Portal>
  )
}
