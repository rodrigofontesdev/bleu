import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  z-index: 499;
  background-color: ${({ theme }) => theme.color.black.alpha[75]};
  backdrop-filter: ${({ theme }) => theme.backdrop.blur.sm};
`

export const Content = styled.div`
  width: calc(100% - ${({ theme }) => theme.space[10]});
  max-height: calc(100% - ${({ theme }) => theme.space[10]});
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 500;
  background-color: ${({ theme }) => theme.color.navyBlue[400]};
  border-radius: ${({ theme }) => theme.radius.sm};

  @media (min-width: ${({ theme }) => theme.screen.md}) {
    width: 40rem;
  }
`

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
  position: relative;
  padding: ${({ theme }) => theme.space[5]};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-color: ${({ theme }) => theme.color.blue[400]};
    opacity: ${({ theme }) => theme.opacity[15]};
  }

  h3 {
    color: ${({ theme }) => theme.color.blue[400]};
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-style: normal;
    line-height: ${({ theme }) => theme.line.sm};
    margin: 0;

    @media (min-width: ${({ theme }) => theme.screen.md}) {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
  }
`

export const Close = styled(Dialog.Close)`
  all: unset;
  line-height: 0;
  cursor: pointer;

  &:focus {
    outline-width: ${({ theme }) => theme.outline.width.medium};
    outline-style: ${({ theme }) => theme.outline.style.solid};
    outline-color: ${({ theme }) => theme.color.blue[400]};
  }

  &:hover {
    transition: ${({ theme }) => theme.motion.transition.normal};
    transition-property: filter;

    svg {
      filter: ${({ theme }) => theme.filter.brightness[75]};
    }
  }

  svg {
    fill: ${({ theme }) => theme.color.red[400]};
    height: 1.75rem;
  }
`

export const Body = styled.div`
  height: calc(100% - 8rem);
  color: ${({ theme }) => theme.color.gray[400]};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-style: normal;
  line-height: ${({ theme }) => theme.line.md};
  padding: ${({ theme }) => theme.space[5]};
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => `${theme.color.blue[400]} ${theme.color.black.alpha[50]}`};
`
