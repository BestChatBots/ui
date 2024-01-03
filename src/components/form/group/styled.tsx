import { styled, css } from 'styled-components';
import { Typography } from '@/components/typography';

export interface FormGroupStyledProps {
  $fullWidth: boolean;
}

export const FormGroupStyled = styled.div<FormGroupStyledProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${({ $fullWidth }) => $fullWidth && css`
    width: 100%;
  `}
`;

export interface FormGroupNameProps {
  $spacing?: number;
}

export const FormGroupName = styled(Typography).attrs({ variant: 'body-l-semibold' })<FormGroupNameProps>`
  cursor: default;
  margin-bottom: ${({ $spacing }) => {
    if (typeof $spacing === 'number') {
      return `${$spacing}px`;
    }

    return '18px';
  }};
`;

export interface FormGroupContentProps {
  $spacing?: number;
  $fullWidth: boolean;
}

export const FormGroupContent = styled.div<FormGroupContentProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ $spacing }) => {
    if (typeof $spacing === 'number') {
      return `${$spacing}px`;
    }

    return '18px';
  }};
  ${({ $fullWidth }) => $fullWidth && css`
    width: 100%;
  `}
`;

export const FormGroupDivider = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.grayScale[600]};
`;
