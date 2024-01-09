import { css, styled } from 'styled-components';
import { Avatar } from '@/components/avatar';
import { Typography } from '@/components/typography';
import { OfficialProfileIcon } from '@/icons';
import { Button } from '@/components/button';
import { adaptive } from '@/adaptive';

export const CommentChildStyled = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  background: ${({ theme }) => theme.colors.grayScale[800]};
  border-radius: 16px;
  border-top-left-radius: 0px;
  overflow: hidden;
  padding: 14px;
`;

export const CommentChildHead = styled.div`
  display: flex;
  gap: 4px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  ${adaptive({
    mobile: css`
      flex-direction: column;
      align-items: flex-start;
    `
  })}
`;

export const CommentatorChild = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: default;
`;

export const CommentatorChildAvatar = styled(Avatar).attrs({ size: 20 })``;

export const CommentatorChildAdminAvatar = styled(OfficialProfileIcon).attrs({ size: 20 })``;

export const CommentatorChildName = styled(Typography).attrs({ variant: 'body-m-medium' })`
  width: auto;
`;

export const CommentChildDateCreated = styled(Typography).attrs({ variant: 'body-m-regular' })`
  width: auto;
  color: ${({ theme }) => theme.colors.grayScale[500]};
`;

export const CommentChildBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const CommentChildText = styled(Typography).attrs({ variant: 'body-s-regular' })``;

export const CommentChildActions = styled.div`
  display: flex;
  gap: 16px;
`;

export const CommentChildAction = styled(Button).attrs({ variant: 'text', textVariant: 'body-s-medium' })``;

export const CommentChildSendAction = styled(CommentChildAction).attrs(({ theme }) => ({ color: theme.colors.accent.primary, hoverColor: theme.colors.accent.primary }))``;

export const CommentChildDeleteAction = styled(CommentChildAction).attrs(({ theme }) => ({ color: theme.colors.error, hoverColor: theme.colors.error }))``;
