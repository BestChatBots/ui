import { styled, css } from 'styled-components';
import { motion } from 'framer-motion';
import { Typography } from '@/components/typography';
import { adaptive } from '@/adaptive';

export interface HeaderNavLinkStyledProps {
  $inMenu: boolean;
}

export const HeaderNavLinkStyled = styled(motion.a)<HeaderNavLinkStyledProps>`
  ${({ $inMenu }) => {
    if ($inMenu) {
      return css`
        display: inline-flex;
        text-decoration: none;
      `;
    }

    const adaptiveStyle = adaptive(({ theme }) => ({
      desktop: css`
        height: ${theme.header.height};
      `,
      tablet: css`
        height: ${theme.header.tablet.height};
      `,
      mobile: css`
        height: ${theme.header.mobile.height};
      `
    }));

    return css`
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      text-decoration: none;
      height: 100%;
      ${adaptiveStyle}
    `;
  }}
`;

export const HeaderNavLinkTop = styled.span`
  display: inline-flex;
  width: 0px;
  height: 0px;
  pointer-events: none;
`;

export interface HeaderNavLinkTextProps {
  $active: boolean;
  $hover: boolean;
}

export const HeaderNavLinkText = styled(Typography).attrs({ variant: 'body-m-regular' })<HeaderNavLinkTextProps>`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  margin-top: 3px;
  color: ${({ theme, $active, $hover }) => {
    if ($active || $hover) {
      return theme.colors.base.white;
    }

    return theme.colors.grayScale[500];
  }};
`;

export interface HeaderNavLinkLineProps {
  $active: boolean;
}

export const HeaderNavLinkLine = styled(motion.span)<HeaderNavLinkLineProps>`
  display: inline-flex;
  width: 100%;
  height: 3px;
  background: ${({ theme }) => theme.colors.accent.primary};
  ${({ $active }) => !$active && css`
    visibility: hidden;
  `}
`;
