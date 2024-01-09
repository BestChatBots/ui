import { styled, css } from 'styled-components';
import { Avatar } from '@/components/avatar';
import { Typography } from '@/components/typography';
import { Stars } from '@/components/stars';
import { ThumbDownIcon, ThumbUpIcon } from '@/icons';
import { CommentVariant } from './types';
import { adaptive } from '@/adaptive';
import { SkeletonStyled } from '@/components/skeleton';
import { Button } from '@/components/button';
import { Form } from '@/components/form';
import { TextArea } from '@/components/textarea';

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

export const CommentTextSkeleton = styled.div`
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

export const CommentActions = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
`;

export const CommentAction = styled(Button).attrs({ variant: 'text', textVariant: 'body-m-medium' })``;

export const CommentSendAction = styled(CommentAction).attrs(({ theme }) => ({ color: theme.colors.accent.primary, hoverColor: theme.colors.accent.primary }))``;

export const CommentDeleteAction = styled(CommentAction).attrs(({ theme }) => ({ color: theme.colors.error, hoverColor: theme.colors.error }))``;

export const CommentSendForm = styled(Form).attrs({ spacing: 12, fullWidth: true })`
  margin-top: 10px;
`;

export const CommentSendInput = styled(TextArea).attrs({ fullWidth: true })`
  max-height: 106px;
`;

export const CommentSendButton = styled(Button).attrs({ type: 'submit' })``;

export const CommentChildren = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  margin-top: 10px;
  width: 100%;
`;
