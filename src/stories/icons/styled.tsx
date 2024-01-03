import { styled } from 'styled-components';
import { Typography } from '@/components/typography';

export const IconsStyled = styled.div`
  padding: 20px;
`;

export const IconsTitle = styled(Typography).attrs({ variant: 'body-l-regular' })``;

export const IconList = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 18px;
  background: ${({ theme }) => theme.colors.grayScale[800]};
  border-radius: 8px;
  padding: 20px;
`;
