import { styled, css } from 'styled-components';
import { Button } from '@/components/button';
import { Typography } from '@/components/typography';
import { Avatar } from '@/components/avatar';
import { LogoutIcon } from '@/icons';
import { adaptive } from '@/adaptive';

export interface HeaderUserInfoStyledProps {
  $inMenu: boolean;
}

export const HeaderUserInfoStyled = styled.div<HeaderUserInfoStyledProps>`
  display: inline-flex;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.grayScale[600]};
  border-radius: 8px;
  ${({ $inMenu }) => {
    if ($inMenu) {
      const adaptiveStyle = adaptive({
        tablet: css`
          margin-top: 20px;
          padding: 10px 18px;
        `,
        mobile: css`
          margin-top: 16px;
        `
      });

      return css`
        ${adaptiveStyle}
      `;
    }

    const adaptiveStyle = adaptive({
      merge: true,
      tablet: css`
        display: none;
      `
    });

    return css`
      ${adaptiveStyle}
    `;
  }}
`;

export const HeaderUserInfoContent = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  justify-content: space-between;
  width: 100%;
`;

export const HeaderUserInfoSide = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

export const HeaderUserAvatar = styled(Avatar).attrs({ size: 24 })``;

export const HeaderUserName = styled(Typography).attrs({ variant: 'body-s-regular' })`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
  cursor: default;
`;

export const HeaderLogoutButton = styled(Button).attrs(({ theme }) => ({ 
  variant: 'text', 
  iconSize: 20,
  color: theme.colors.accent.primary,
  hoverColor: theme.colors.accent.strong,
  children: <LogoutIcon /> 
}))``;
