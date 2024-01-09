import { styled } from 'styled-components';
import { Typography } from '@/components/typography';

export const IconsStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 32px;
`;

export const IconsGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const IconsGroupName = styled(Typography).attrs({ variant: 'body-l-regular' })``;

export const IconsGroupContent = styled.div`
  display: flex;
  width: 100%;
  gap: 24px;
  flex-wrap: wrap;
  align-items: center;
  background: ${({ theme }) => theme.colors.grayScale[800]};
  border-radius: 8px;
  padding: 20px;
  margin-top: 18px;
`;
