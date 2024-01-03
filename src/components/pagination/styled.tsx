import { styled, css } from 'styled-components';
import { ArrowLeftIcon, ArrowRightIcon } from '@/icons';

export const PaginationStyled = styled.div`
  display: inline-flex;
  align-items: center;
  > .container {
    display: flex;
    align-items: center;
    list-style-type: none;
    margin: 0px;
    padding: 0px;
    user-select: none;
    overflow: hidden;
    > .action {
      display: inline-flex;
      > .link {
        display: inline-flex;
        padding: 7px 12px;
        cursor: pointer;
      }
    }
    > .page {
      display: inline-flex;
      > .link {
        display: inline-flex;
        padding: 6px 12px;
        color: white;
        font-family: ${({ theme }) => theme.fonts.rubik.regular};
        font-size: 16px;
        font-style: normal;
        line-height: 20px;
        cursor: pointer;
        color: ${({ theme }) => theme.colors.grayScale[500]};
      }
      &.active {
        > .link {
          border-top: none;
          border-bottom: none;
          padding: 7px 12px;
          background: ${({ theme }) => theme.colors.accent.primary};
          color: ${({ theme }) => theme.colors.base.white};
          border-color: ${({ theme }) => theme.colors.accent.primary};
        }
      }
    }
    > .break {
      display: inline-flex;
      > .link {
        display: inline-flex;
        padding: 6px 12px;
        color: white;
        font-family: ${({ theme }) => theme.fonts.rubik.regular};
        font-size: 16px;
        font-style: normal;
        line-height: 20px;
        cursor: pointer;
        color: ${({ theme }) => theme.colors.grayScale[500]};
      }
    }
    > .action,
    > .page,
    > .break {
      > .link {
        border: 1px solid ${({ theme }) => theme.colors.grayScale[600]};
        background: ${({ theme }) => theme.colors.grayScale[700]};
      }
      &:not(:first-child) {
        margin-left: -1px;
      }
      &:not(.disabled):not(.active):hover {
        > .link {
          position: relative;
          color: ${({ theme }) => theme.colors.base.white};
          border-color: ${({ theme }) => theme.colors.accent.primary};
          ${() => css`
            ${PaginationArrowLeftIcon},
            ${PaginationArrowRightIcon} {
              path {
                fill: ${({ theme }) => theme.colors.base.white};
              }
            }
          `}
        }
      }
      &.disabled {
        > .link {
          cursor: not-allowed;
          background: ${({ theme }) => theme.colors.grayScale[600]};
          border-color: ${({ theme }) => theme.colors.grayScale[600]};
        }
      }
    }
    > .action {
      &.prev > .link {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
      &.next > .link {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    }
  }
`;

export const PaginationArrowLeftIcon = styled(ArrowLeftIcon)``;

export const PaginationArrowRightIcon = styled(ArrowRightIcon)``;
