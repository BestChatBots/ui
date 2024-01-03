import { styled, css } from 'styled-components';
import { Typography } from '@/components/typography';
import { SearchIcon } from '@/icons';

export interface InputStyledProps {
  $fullWidth: boolean;
}

export const InputStyled = styled.label<InputStyledProps>`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  ${({ $fullWidth }) => !$fullWidth && css`
    max-width: 300px;
  `}
`;

export const InputLabel = styled(Typography).attrs({ variant: 'body-m-regular' })`
  margin-bottom: 10px;
`;

export interface InputBlockProps {
  $focus: boolean;
  $error: boolean;
  $disabled: boolean;
}

export const InputBlock = styled.div<InputBlockProps>`
  display: inline-flex;
  align-items: center;
  width: 100%;
  background: ${({ theme, $disabled }) => {
    if ($disabled) {
      return theme.colors.grayScale[700];
    }

    return theme.colors.grayScale[800];
  }};
  border: 1px solid ${({
    theme, $focus, $error, $disabled 
  }) => {
    if ($disabled) {
      return theme.colors.grayScale[500];
    }
    if ($error) {
      return theme.colors.error;
    }
    if ($focus) {
      return theme.colors.accent.primary;
    }

    return theme.colors.grayScale[600];
  }};
  border-radius: 8px;
  cursor: ${({ $disabled }) => {
    if ($disabled) {
      return 'not-allowed';
    }
    
    return 'text';
  }};
  padding: 0px 16px;
  ${({ theme, $disabled, $error }) => (!$disabled && !$error) && css`
    &:hover {
      border-color: ${theme.colors.accent.primary};
    }
  `}
`;

export const InputSearchIcon = styled(SearchIcon).attrs({ size: 20 })`
  margin-right: 10px;
`;

export interface InputNativeProps {
  $disabled: boolean;
}

export const InputNative = styled.input<InputNativeProps>`
  display: inline-flex;
  width: 100%;
  background: none;
  border: none;
  outline: none;
  padding: 12px 0px;
  color: ${({ theme, $disabled }) => {
    if ($disabled) {
      return theme.colors.grayScale[500];
    }

    return theme.colors.base.white;
  }};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.rubik.regular};
  line-height: 20px;
  cursor: inherit;
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
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:active {
    -webkit-background-clip: text;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.base.white};
    box-shadow: 0 0 0 100px ${({ theme }) => theme.colors.grayScale[800]} inset !important;
  }
  &:-webkit-autofill:focus {
    -webkit-background-clip: text;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.base.white};
    box-shadow: 0 0 0 100px ${({ theme }) => theme.colors.grayScale[800]} inset !important;
  }
  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }
`;

export const InputErrorText = styled(Typography).attrs({ variant: 'body-m-regular' })`
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.error};
`;
