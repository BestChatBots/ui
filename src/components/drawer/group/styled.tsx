import { styled } from 'styled-components';
import { Typography } from '@/components/typography';

export const DrawerGroupStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

export const DrawerGroupName = styled(Typography).attrs({ variant: 'body-m-regular' })`
  user-select: none;
`;

export const DrawerGroupContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;
