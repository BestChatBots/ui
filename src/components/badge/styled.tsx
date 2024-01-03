import { styled } from 'styled-components';
import { Typography } from '@/components/typography';

export const BadgeStyled = styled.span`
  display: inline-flex;
  background: ${({ theme }) => theme.colors.accent.primary};
  cursor: default;
  padding: 8px;
  border-radius: 6px;
`;

export const BadgeText = styled(Typography)``;
