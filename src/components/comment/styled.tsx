import { styled, css } from 'styled-components';
import { Avatar } from '@/components/avatar';
import { Typography } from '@/components/typography';
import { Stars } from '@/components/stars';
import { ThumbDownIcon, ThumbUpIcon } from '@/icons';
import { CommentVariant } from './types';
import { adaptive } from '@/adaptive';

export interface CommentStyledProps {
  $variant: CommentVariant;
}

export const CommentStyled = styled.div<CommentStyledProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 1020px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.grayScale[700]};
  border-left: 4px solid ${({ theme, $variant }) => {
    switch ($variant) {
      case 'good':
        return theme.colors.success;
      case 'bad':
        return theme.colors.error;
    }
  }};
  border-radius: 12px;
  ${adaptive({
    merge: true,
    desktop: css`
      padding: 19px 16px;
    `,
    mobile: css`
      padding: 16px;
    `
  })}
`;

export const CommentHead = styled.div`
  display: flex;
  width: 100%;
  ${adaptive({
    desktop: css`
      justify-content: space-between;
    `,
    tablet: css`
      justify-content: space-between;
    `,
    mobile: css`
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    `
  })}
`;

export const CommentHeadSide = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  ${adaptive({
    mobile: css`
      justify-content: space-between;
      width: 100%;
    `
  })}
`;

export const Commentator = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CommentatorAvatar = styled(Avatar).attrs({ size: 24 })``;

export const CommentatorName = styled(Typography).attrs({ variant: 'body-m-medium' })`
  cursor: default;
`;

export const CommentStars = styled(Stars).attrs({ size: 18 })``;

export const CommentDateCreated = styled(Typography).attrs({ variant: 'body-m-regular' })`
  color: ${({ theme }) => theme.colors.grayScale[500]};
  cursor: default;
`;

export const CommentGoodIcon = styled(ThumbUpIcon).attrs({ size: 18 })`
  path {
    fill: ${({ theme }) => theme.colors.success};
  }
`;

export const CommentBadIcon = styled(ThumbDownIcon).attrs({ size: 18 })`
  path {
    fill: ${({ theme }) => theme.colors.error};
  }
`;

export const CommentBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 10px;
`;

export const CommentText = styled(Typography).attrs({ variant: 'body-s-regular' })``;
