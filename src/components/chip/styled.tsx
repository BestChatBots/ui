import { styled } from 'styled-components';
import { Typography } from '@/components/typography';
import { Button } from '@/components/button';
import { CloseIcon } from '@/icons';

export const ChipStyled = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: ${({ theme }) => theme.colors.grayScale[600]};
  padding: 5px 6px;
  border-radius: 6px;
  cursor: default;
`;

export const ChipText = styled(Typography).attrs({ variant: 'body-s-regular' })`
  user-select: none;
`;

export const ChipDeleteButton = styled(Button).attrs(({ theme }) => ({ 
  variant: 'text', 
  iconSize: 12,
  color: theme.colors.base.white,
  hoverColor: theme.colors.base.white,
  children: <CloseIcon /> 
}))``;
