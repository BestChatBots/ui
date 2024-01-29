import { css, styled } from 'styled-components';
import { Avatar } from '@/components/avatar';
import { Typography } from '@/components/typography';
import { OfficialProfileIcon } from '@/icons';
import { Button } from '@/components/button';
import { adaptive } from '@/adaptive';

export const ReviewChildStyled = styled.div`
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

export const ReviewChildHead = styled.div`
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

export const ReviewerChild = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: default;
`;

export const ReviewerChildAvatar = styled(Avatar).attrs({ size: 20 })``;

export const ReviewerChildAdminAvatar = styled(OfficialProfileIcon).attrs({ size: 20 })``;

export const ReviewerChildName = styled(Typography).attrs({ variant: 'body-m-medium' })`
  cursor: default;
  width: auto;
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
      max-width: 260px;
    `
  })}
`;

export const ReviewChildDateCreated = styled(Typography).attrs({ variant: 'body-m-regular' })`
  width: auto;
  color: ${({ theme }) => theme.colors.grayScale[500]};
`;

export const ReviewChildBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const ReviewChildText = styled(Typography).attrs({ variant: 'body-s-regular' })`
  white-space: pre-wrap;
`;

export const ReviewChildActions = styled.div`
  display: flex;
  gap: 16px;
`;

export const ReviewChildAction = styled(Button).attrs({ variant: 'text', textVariant: 'body-s-medium' })``;

export const ReviewChildSendAction = styled(ReviewChildAction).attrs(({ theme }) => ({ color: theme.colors.accent.primary, hoverColor: theme.colors.accent.primary }))``;

export const ReviewChildDeleteAction = styled(ReviewChildAction).attrs(({ theme }) => ({ color: theme.colors.error, hoverColor: theme.colors.error }))``;
