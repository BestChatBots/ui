import { styled } from 'styled-components';
import { ModelVariant } from './types';
import { Typography } from '@/components/typography';
import { Button } from '@/components/button';
import { CloseIcon } from '@/icons';

export interface ModelStyledProps {
  $variant: ModelVariant;
}

export const ModelStyled = styled.span<ModelStyledProps>`
  display: inline-flex;
`;

export const ModelIcon = styled.span`
  display: inline-flex;
  --bestchatbots-skeleton-width: 24px;
  --bestchatbots-skeleton-height: 24px;
  --bestchatbots-skeleton-radius: 50%;
`;

export const ModelText = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 12px;
`;

export const ModelName = styled(Typography).attrs({ variant: 'body-m-regular' })`
  cursor: default;
  min-width: 120px;
`;

export const ModelDeleteButton = styled(Button).attrs({ variant: 'text', iconSize: 18, children: <CloseIcon /> })``;
