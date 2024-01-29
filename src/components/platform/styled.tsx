import { styled } from 'styled-components';
import { Typography } from '@/components/typography';
import { Button } from '@/components/button';
import { CloseIcon } from '@/icons';

export const PlatformStyled = styled.span`
  display: inline-flex;
`;

export const PlatformIconContainer = styled.span`
  display: inline-flex;
  --bestchatbots-skeleton-width: 24px;
  --bestchatbots-skeleton-height: 24px;
  --bestchatbots-skeleton-radius: 50%;
`;

export const PlatformText = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 12px;
`;

export const PlatformName = styled(Typography).attrs({ variant: 'body-m-regular' })`
  cursor: default;
  min-width: 120px;
`;

export const PlatformDeleteButton = styled(Button).attrs({ variant: 'text', iconSize: 18, children: <CloseIcon /> })``;
