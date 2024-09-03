import styled from 'styled-components'

export const StyledComboBox = styled.div<{ $variant: 'normal' | 'large' }>`
  .selectControl__control {
    width: 100%;
    min-height: auto;
    position: relative;
    background-color: ${({ theme }) => theme.color.blue[400]};
    color: ${({ theme }) => theme.color.gray[400]};
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme, $variant }) =>
      $variant === 'large' ? theme.fontSize.md : theme.fontSize.sm};
    padding: ${({ theme, $variant }) => ($variant === 'large' ? theme.space[4] : theme.space[2])};
    border: none;
    border-radius: ${({ theme }) => theme.radius.sm};
    box-shadow: ${({ theme }) => theme.shadow.inner.sm};
    transition: none;

    &.selectControl__control--is-focused {
      outline-width: ${({ theme }) => theme.outline.width.medium} !important;
      outline-style: ${({ theme }) => theme.outline.style.solid} !important;
      outline-color: ${({ theme }) => theme.outline.color.blue} !important;
    }

    &.selectControl__control--is-disabled {
      background-color: ${({ theme }) => theme.color.navyBlue[400]};
      cursor: default;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: ${({ theme }) => theme.color.black.alpha[25]};
        border-radius: inherit;
      }
    }

    .selectControl__value-container {
      padding: 0;

      .selectControl__placeholder,
      .selectControl__single-value,
      .selectControl__input-container {
        color: ${({ theme }) => theme.color.gray[400]};
        padding: 0;
        margin: 0;
      }

      .selectControl__placeholder {
        color: ${({ theme }) => theme.color.gray[400]};
      }
    }

    .selectControl__indicators {
      align-items: center;
      position: relative;

      .selectControl__indicator-separator {
        display: none;
      }

      .selectControl__indicator {
        font-size: ${({ theme, $variant }) =>
          $variant === 'large' ? theme.fontSize.xl : theme.fontSize.md};
        padding: 0;
        margin-left: ${({ theme }) => theme.space[2]};
        cursor: pointer;
        transition: ${({ theme }) => theme.motion.transition.normal};
        transition-property: filter;

        &:hover {
          filter: ${({ theme }) => theme.filter.brightness[75]};
        }
      }

      .selectControl__dropdown-indicator {
        fill: ${({ theme }) => theme.color.gray[400]};
        height: 1em;
      }

      .selectControl__clear-indicator {
        fill: ${({ theme }) => theme.color.red[400]};
        height: 1em;
      }
    }
  }

  .selectControl__menu {
    background-color: ${({ theme }) => theme.color.blue[400]};
    margin-top: ${({ theme }) => theme.space[1]};
    border-radius: ${({ theme }) => theme.radius.xs};
    overflow: hidden;

    .selectControl__menu-list {
      padding: 0;
      scrollbar-width: thin;
      scrollbar-color: ${({ theme }) =>
        `${theme.color.black.alpha[35]} ${theme.color.black.alpha[25]}`};

      .selectControl__option {
        color: ${({ theme }) => theme.color.gray[400]};
        font-family: ${({ theme }) => theme.fontFamily.primary};
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        font-size: ${({ theme, $variant }) =>
          $variant === 'large' ? theme.fontSize.md : theme.fontSize.sm};
        padding-top: ${({ theme, $variant }) =>
          $variant === 'large' ? theme.space[3] : theme.space[2]};
        padding-bottom: ${({ theme, $variant }) =>
          $variant === 'large' ? theme.space[3] : theme.space[2]};
        padding-left: ${({ theme, $variant }) =>
          $variant === 'large' ? theme.space[4] : theme.space[2]};
        padding-right: ${({ theme, $variant }) =>
          $variant === 'large' ? theme.space[4] : theme.space[2]};

        &:hover {
          background: linear-gradient(
              0deg,
              ${({ theme }) => theme.color.black.alpha[25]} 0%,
              ${({ theme }) => theme.color.black.alpha[25]} 100%
            ),
            ${({ theme }) => theme.color.blue[400]};
        }
      }

      .selectControl__option--is-focused,
      .selectControl__option--is-selected {
        background: linear-gradient(
            0deg,
            ${({ theme }) => theme.color.black.alpha[25]} 0%,
            ${({ theme }) => theme.color.black.alpha[25]} 100%
          ),
          ${({ theme }) => theme.color.blue[400]};
      }

      .selectControl__menu-notice {
        color: ${({ theme }) => theme.color.gray[400]};
        font-family: ${({ theme }) => theme.fontFamily.primary};
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        font-size: ${({ theme, $variant }) =>
          $variant === 'large' ? theme.fontSize.md : theme.fontSize.sm};
        padding-top: ${({ theme, $variant }) =>
          $variant === 'large' ? theme.space[3] : theme.space[2]};
        padding-bottom: ${({ theme, $variant }) =>
          $variant === 'large' ? theme.space[3] : theme.space[2]};
        padding-left: ${({ theme, $variant }) =>
          $variant === 'large' ? theme.space[4] : theme.space[2]};
        padding-right: ${({ theme, $variant }) =>
          $variant === 'large' ? theme.space[4] : theme.space[2]};
      }
    }
  }
`
