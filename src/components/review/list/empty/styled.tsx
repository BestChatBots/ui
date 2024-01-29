import { styled } from 'styled-components';
import { ReviewBigIcon } from '@/icons';
import { Typography } from '@/components/typography';

export const ReviewsEmptyStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 24px 0px;
`;

export const ReviewsEmptyIcon = styled(ReviewBigIcon).attrs({ size: 64 })``;

export const ReviewsText = styled(Typography).attrs({ component: 'p', variant: 'body-l-regular' })`
  text-align: center;
  color: ${({ theme }) => theme.colors.grayScale[400]};
  margin-top: 14px;
`;
