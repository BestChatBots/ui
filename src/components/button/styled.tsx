import { styled, css } from 'styled-components';
import { ButtonSize, ButtonVariant } from './types';
import { Typography } from '@/components/typography';

export interface ButtonStyledProps {
  $variant: ButtonVariant;
  $size: ButtonSize;
  $icon: boolean;
  $press: boolean;
  $disabled: boolean;
  $fullWidth: boolean;
  $color?: string;
  $hoverColor?: string;
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: none;
  outline: none;
  transition: all 0.25s;
  cursor: ${({ $disabled }) => {
    if ($disabled) {
      return 'not-allowed';
    }

    return 'pointer';
  }};
  ${({
    theme, $variant, $press, $disabled, $color, $hoverColor
  }) => {
    switch ($variant) {
      case 'primary': {
        let bgColor: string;
        if ($disabled) {
          bgColor = theme.colors.grayScale[600];
        } else if ($press) {
          bgColor = theme.colors.accent.strongDown;
        } else {
          bgColor = theme.colors.accent.primary;
        }

        return css`
          border: 1px solid rgba(0, 0, 0, 0.0);
          border-radius: 8px;
          background: ${bgColor};
          ${bgColor === theme.colors.accent.primary && css`
            &:hover {
              background: ${theme.colors.accent.strong};
            }
          `}
          ${(!$disabled && $press) && css`
            transform: translateY(1px);
          `}
        `;
      }
      case 'secondary': {
        let borderColor: string;
        let bgColor: string | null;
        if ($disabled) {
          borderColor = theme.colors.grayScale[600];
          bgColor = theme.colors.grayScale[800];
        } else if ($press) {
          borderColor = theme.colors.accent.strongDown;
          bgColor = theme.colors.accent.strongDown;
        } else {
          borderColor = theme.colors.accent.primary;
          bgColor = null;
        }

        return css`
          border: 1px solid ${borderColor};
          border-radius: 8px;
          background: ${bgColor};
          ${bgColor === null && css`
            &:hover {
              background: ${theme.colors.accent.primary};
            }
          `}
          ${(!$disabled && $press) && css`
            transform: translateY(1px);
          `}
        `;
      }
      case 'text': {
        return css`
          border: none;
          ${$color && css`
            ${ButtonText} {
              color: ${$color};
            }
            svg path {
              fill: ${$color};
            }
          `}
          ${!$disabled && css`
            &:hover {
              ${ButtonText} {
                color: ${$hoverColor ?? theme.colors.accent.primary};
              }
              svg path {
                fill: ${$hoverColor ?? theme.colors.accent.primary};
              }
            }
          `}
        `;
      }
    }
  }}
  ${({ $variant, $size }) => {
    switch ($variant) {
      case 'primary':
      case 'secondary': {
        switch ($size) {
          case 'small':
            return css`
              padding: 10px 14px;
            `;
          case 'medium':
            return css`
              padding: 12px 16px;
            `;
        }
        break;
      }
      case 'text':
        return css`
          padding: 0px;
        `;
    }
  }}
  ${({ $fullWidth }) => $fullWidth && css`
    width: 100%;
  `}
`;

export interface ButtonTextProps {
  $disabled: boolean;
}

export const ButtonText = styled(Typography)<ButtonTextProps>`
  display: inline-flex;
  width: auto;
  color: ${({ theme, $disabled }) => {
    if ($disabled) {
      return theme.colors.grayScale[300];
    }
    
    return theme.colors.base.white;
  }};
`;
