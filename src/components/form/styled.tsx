import { css, styled } from 'styled-components';
import { Typography } from '@/components/typography';
import { LogoStyled } from '@/components/logo';
import { FormVariant } from './types';

export interface FormStyledProps {
  $variant: FormVariant;
  $fullWidth: boolean;
}

export const FormStyled = styled.form<FormStyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: ${({ $variant, $fullWidth }) => (
    $variant === 'modal' || $fullWidth ? '100%' : '300px')};
  > ${LogoStyled} {
    margin-bottom: 24px;
  }
`;

export const FormTitle = styled(Typography).attrs({ component: 'h4', variant: 'h4' })`
  text-align: center;
  margin-bottom: 16px;
`;

export const FormText = styled(Typography).attrs({ component: 'p', variant: 'body-m-regular' })`
  white-space: pre-wrap;
`;

export interface FormContentProps {
  $variant: FormVariant;
  $spacing?: number;
}

export const FormContent = styled.div<FormContentProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  ${({ $variant, $spacing }) => {
    if (typeof $spacing === 'number') {
      return css`
        gap: ${$spacing}px;
      `;
    }
    switch ($variant) {
      case 'default':
        return css`
          gap: 16px;
        `;
      case 'modal':
        return css`
          gap: 26px;
        `;
    }
  }}
`;

export const FormButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
`;
