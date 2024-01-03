import { styled, css } from 'styled-components';
import { Typography } from '@/components/typography';

export interface TextAreaStyledProps {
  $fullWidth: boolean;
}

export const TextAreaStyled = styled.label<TextAreaStyledProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 200px;
  ${({ $fullWidth }) => !$fullWidth && css`
    max-width: 300px;
  `}
`;

export const TextAreaLabel = styled(Typography).attrs({ variant: 'body-m-regular' })`
  margin-bottom: 10px;
`;

export interface TextAreaNativeProps {
  $disabled: boolean;
  $error: boolean;
}

export const TextAreaNative = styled.textarea<TextAreaNativeProps>`
  display: flex;
  width: 100%;
  height: inherit;
  box-sizing: border-box;
  resize: none;
  outline: none;
  background: ${({ theme, $disabled }) => {
    if ($disabled) {
      return theme.colors.grayScale[700];
    }

    return theme.colors.grayScale[800];
  }};
  border: 1px solid ${({ theme, $error, $disabled }) => {
    if ($disabled) {
      return theme.colors.grayScale[500];
    }
    if ($error) {
      return theme.colors.error;
    }

    return theme.colors.grayScale[600];
  }};
  border-radius: 8px;
  padding: 14px;
  color: ${({ theme, $disabled }) => {
    if ($disabled) {
      return theme.colors.grayScale[500];
    }

    return theme.colors.base.white;
  }};
  font-family: ${({ theme }) => theme.fonts.rubik.regular};
  font-size: 16px;
  line-height: 20px;
  cursor: ${({ $disabled }) => {
    if ($disabled) {
      return 'not-allowed';
    }

    return 'text';
  }};
  &::selection {
    color: ${({ theme }) => theme.colors.base.white};
    background: ${({ theme }) => theme.colors.accent.primary};
  }
  &::placeholder {
    color: ${({ theme, $disabled }) => {
    if ($disabled) {
      return theme.colors.grayScale[500];
    }

    return theme.colors.grayScale[500];
  }};
  }
  &::-webkit-scrollbar {
    display: none;
  }
  ${({ theme, $disabled, $error }) => (!$disabled && !$error) && css`
    &:hover,
    &:focus {
      border-color: ${theme.colors.accent.primary};
    }
  `}
`;

export const TextAreaErrorText = styled(Typography).attrs({ variant: 'body-m-regular' })`
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.error};
`;
