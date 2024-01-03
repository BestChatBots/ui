import { styled, css } from 'styled-components';
import { Stars } from '@/components/stars';
import { Typography } from '@/components/typography';
import { ThumbDownIcon, ThumbUpIcon } from '@/icons';
import { StarsInputTypeProperty } from './types';

export interface StarsInputStyledProps {
  $fullWidth: boolean;
}

export const StarsInputStyled = styled.div<StarsInputStyledProps>`
  ${({ $fullWidth }) => {
    if ($fullWidth) {
      return css`
        display: flex;
        width: 100%;
      `;
    }

    return css`
      display: inline-flex;
    `;
  }}
  flex-direction: column;
  align-items: center;
`;

export const StarsInputStars = styled(Stars).attrs({ size: 34 })`
  cursor: pointer;
`;

export const StarsInputType = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px; 
  margin-top: 6px;
  cursor: default;
`;

export interface StarsInputTypeTextProps {
  $type: StarsInputTypeProperty;
}

export const StarsInputTypeText = styled(Typography).attrs({ variant: 'body-s-regular' })<StarsInputTypeTextProps>`
  color: ${({ theme, $type }) => {
    switch ($type) {
      case 'good':
        return theme.colors.success;
      case 'bad':
        return theme.colors.error;
    }
  }};
`;

export const StarsInputTypeGoodIcon = styled(ThumbUpIcon).attrs({ size: 16 })`
  path {
    fill: ${({ theme }) => theme.colors.success};
  }
`;

export const StarsInputTypeBadIcon = styled(ThumbDownIcon).attrs({ size: 16 })`
  path {
    fill: ${({ theme }) => theme.colors.error};
  }
`;

export const StarsInputErrorText = styled(Typography).attrs({ variant: 'body-m-regular' })`
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.error};
  text-align: center;
`;
