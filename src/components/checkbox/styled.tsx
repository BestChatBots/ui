import { styled, css } from 'styled-components';
import { CheckboxCheckedIconStyled } from './icon';
import { Typography } from '@/components/typography';

export interface CheckboxStyledProps {
  $disabled: boolean;
}

export const CheckboxStyled = styled.label<CheckboxStyledProps>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  user-select: none;
  ${({ $disabled }) => {
    if ($disabled) {
      return css`
        cursor: not-allowed;
      `;
    }

    return css`
      cursor: pointer;
    `;
  }}
  ${({ theme }) => css`
    &:hover {
      ${CheckboxBlock} {
        border-color: ${theme.colors.accent.primary};
      }
    }
  `}
`;

export const CheckboxBlock = styled.span`
  display: inline-flex;
  width: 16px;
  height: 16px;
  background: ${({ theme }) => theme.colors.grayScale[700]};
  border: 1px solid ${({ theme }) => theme.colors.grayScale[600]};
  border-radius: 2px;
  cursor: inherit;
  overflow: hidden;
  flex-shrink: 0;
`;

export const CheckboxNative = styled.input`
  display: none;
  &:checked + ${CheckboxBlock} {
    border-color: ${({ theme }) => theme.colors.accent.primary};
    background: ${({ theme }) => theme.colors.accent.primary};
    ${CheckboxCheckedIconStyled} {
      visibility: visible;
    }
  }
  &:checked:not(:disabled) + ${CheckboxBlock}:hover {
    border-color: ${({ theme }) => theme.colors.accent.strong};
    background: ${({ theme }) => theme.colors.accent.strong};
  }
  &:disabled + ${CheckboxBlock} {
    border-color: ${({ theme }) => theme.colors.grayScale[600]};
    background: ${({ theme }) => theme.colors.grayScale[600]};
    cursor: not-allowed;
    ${CheckboxCheckedIconStyled} {
      path {
        fill: ${({ theme }) => theme.colors.grayScale[400]};
      }
    }
  }
`;

export const CheckboxLabel = styled(Typography).attrs({ variant: 'body-m-regular' })``;
