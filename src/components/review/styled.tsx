import { styled, css } from 'styled-components';
import { Avatar } from '@/components/avatar';
import { Typography } from '@/components/typography';
import { Stars } from '@/components/stars';
import { OfficialProfileIcon, ThumbDownIcon, ThumbUpIcon } from '@/icons';
import { ReviewVariant } from './types';
import { adaptive } from '@/adaptive';
import { SkeletonStyled } from '@/components/skeleton';
import { Button } from '@/components/button';
import { Form } from '@/components/form';
import { TextArea } from '@/components/textarea';

export interface ReviewStyledProps {
  $variant: ReviewVariant;
}

export const ReviewStyled = styled.div<ReviewStyledProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 1020px;
  overflow: hidden;
  background: ${({ theme, $variant }) => {
    if ($variant === 'skeleton') {
      return theme.colors.grayScale[800];
    }

    return theme.colors.grayScale[700];
  }};
  ${({ theme, $variant }) => {
    let borderColor: string;
    switch ($variant) {
      case 'good':
        borderColor = theme.colors.success;
        break;
      case 'bad':
        borderColor = theme.colors.error;
        break;
      case 'skeleton':
        borderColor = theme.colors.grayScale[700];
        break;
    }

    if ($variant === 'skeleton') {
      return css`
        border: 1px solid ${borderColor};
      `;
    } 

    return css`
      border-left: 4px solid ${borderColor};
    `;
  }}
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

export const ReviewHead = styled.div`
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

export const ReviewHeadSide = styled.div`
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

export const Reviewer = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ReviewerAvatar = styled(Avatar).attrs({ size: 24 })``;

export const ReviewerAdminAvatar = styled(OfficialProfileIcon).attrs({ size: 24 })``;

export const ReviewerName = styled(Typography).attrs({ variant: 'body-m-medium' })`
  cursor: default;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  ${adaptive({
    desktop: css`
      max-width: 340px;
    `,
    tablet: css`
      max-width: 240px;
    `,
    mobile: css`
      max-width: 180px;
    `
  })}
`;

export const ReviewStars = styled(Stars).attrs({ size: 18 })``;

export const ReviewDateCreated = styled(Typography).attrs({ variant: 'body-m-regular' })`
  color: ${({ theme }) => theme.colors.grayScale[500]};
  cursor: default;
`;

export const ReviewGoodIcon = styled(ThumbUpIcon).attrs({ size: 18 })`
  path {
    fill: ${({ theme }) => theme.colors.success};
  }
`;

export const ReviewBadIcon = styled(ThumbDownIcon).attrs({ size: 18 })`
  path {
    fill: ${({ theme }) => theme.colors.error};
  }
`;

export const ReviewBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 10px;
`;

export const ReviewText = styled(Typography).attrs({ variant: 'body-s-regular' })`
  white-space: pre-wrap;
`;

export const ReviewTextSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  ${SkeletonStyled} {
    height: 18px;
  }
  ${SkeletonStyled}:nth-child(n + 1) {
    width: 100%;
  }
  ${SkeletonStyled}:nth-child(n + 2) {
    width: 70%;
  }
  ${SkeletonStyled}:nth-child(n + 3) {
    width: 40%;
  }
`;

export const ReviewActions = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
`;

export const ReviewAction = styled(Button).attrs({ variant: 'text', textVariant: 'body-m-medium' })``;

export const ReviewSendAction = styled(ReviewAction).attrs(({ theme }) => ({ color: theme.colors.accent.primary, hoverColor: theme.colors.accent.primary }))``;

export const ReviewDeleteAction = styled(ReviewAction).attrs(({ theme }) => ({ color: theme.colors.error, hoverColor: theme.colors.error }))``;

export const ReviewSendForm = styled(Form).attrs({ spacing: 12, fullWidth: true })`
  margin-top: 10px;
`;

export const ReviewSendInput = styled(TextArea).attrs({ fullWidth: true })`
  max-height: 106px;
`;

export const ReviewSendButton = styled(Button).attrs({ type: 'submit' })``;

export const ReviewChildren = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  margin-top: 10px;
  width: 100%;
`;
