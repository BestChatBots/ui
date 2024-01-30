import { styled, css } from 'styled-components';
import { Typography } from '@/components/typography';
import { CloseIcon, Loader2Icon, SearchIcon } from '@/icons';
import { Button } from '@/components/button';

export interface InputStyledProps {
  $width?: number;
  $fullWidth: boolean;
}

export const InputStyled = styled.label<InputStyledProps>`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  ${({ $fullWidth, $width }) => !$fullWidth && css`
    max-width: ${$width ?? 300}px;
  `}
`;

export const InputLabel = styled(Typography).attrs({ variant: 'body-m-regular' })`
  margin-bottom: 10px;
`;

export const InputBlock = styled.div`
  display: inline-flex;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  ${() => css`
    ${InputClearButton} {
      display: none;
    }
    &:hover {
      ${InputNative}[type="search"] {
        &:not(:placeholder-shown) + ${InputClearButton} {
          display: inline-flex;
        }
      }
    }
    ${InputNative}[type="search"]:focus {
      &:not(:placeholder-shown) + ${InputClearButton} {
        display: inline-flex;
      }
    }
  `}
  ${() => css`
    > ${InputReadonly},
    > ${InputWritable} {
      &:not(:last-child) {
        border-right: none;
      }
      &:first-child {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
      }
      &:last-child {
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
      }
    }
  `}
`;

export interface InputReadonlyProps {
  $disabled: boolean;
}

export const InputReadonly = styled.span<InputReadonlyProps>`
  display: inline-flex;
  align-items: center;
  width: auto;
  padding: 0px 16px;
  background: ${({ theme }) => theme.colors.grayScale[700]};
  border: 1px solid ${({ theme, $disabled }) => {
    if ($disabled) {
      return theme.colors.grayScale[500];
    }

    return theme.colors.grayScale[600];
  }};
  cursor: ${({ $disabled }) => {
    if ($disabled) {
      return 'not-allowed';
    }
    
    return 'default';
  }};
`;

export const InputStart = styled.span`
  display: inline-flex;
  padding: 12px 0px;
`;

export const InputStartText = styled(Typography).attrs({ variant: 'body-m-regular' })`
  color: ${({ theme }) => theme.colors.grayScale[400]};
`;

export interface InputWritableProps {
  $focus: boolean;
  $error: boolean;
  $disabled: boolean;
}

export const InputWritable = styled.span<InputWritableProps>`
  display: inline-flex;
  align-items: center;
  padding: 0px 16px;
  cursor: ${({ $disabled }) => {
    if ($disabled) {
      return 'not-allowed';
    }
    
    return 'text';
  }};
  ${({ theme, $disabled, $error }) => (!$disabled && !$error) && css`
    &:hover {
      border-color: ${theme.colors.accent.primary};
    }
  `}
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
  width: 100%;
`;

export const InputLoadingIcon = styled(Loader2Icon).attrs({ size: 20 })`
  margin-right: 10px;
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

export const InputClearButton = styled(Button).attrs({ variant: 'text', iconSize: 16, children: <CloseIcon /> })`
  margin-left: 10px;
`;

export const InputErrorText = styled(Typography).attrs({ variant: 'body-m-regular' })`
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.error};
`;
