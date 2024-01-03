import { styled, css } from 'styled-components';
import { AnimationProps, motion } from 'framer-motion';
import React from 'react';
import { ArrowDownIcon, LangIcon } from '@/icons';
import { Typography } from '@/components/typography';

export const HeaderLangStyled = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-right: 20px;
`;

export interface HeaderLangToggleButtonProps {
  $open: boolean;
}

export const HeaderLangToggleButton = styled.button<HeaderLangToggleButtonProps>`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  padding: 0px;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  ${({ theme, $open }) => {
    const activeStyle = css`
      ${HeaderLangIcon} path {
        fill: ${theme.colors.accent.primary};
      }
      ${HeaderLangName} {
        color: ${theme.colors.base.white};
      }
      ${HeaderLangArrow} path {
        fill: ${theme.colors.accent.primary};
      }
    `;

    if ($open) {
      return activeStyle;
    }
    return css`
      &:hover {
        ${activeStyle}
      }
    `;
  }}
`;

export const HeaderLangIcon = styled(LangIcon).attrs({ size: 20 })`
  path {
    fill: ${({ theme }) => theme.colors.grayScale[400]};
  }
`;

export const HeaderLangName = styled(Typography).attrs({ variant: 'body-m-regular' })`
  color: ${({ theme }) => theme.colors.grayScale[400]};
`;

export const HeaderLangArrow = styled(ArrowDownIcon).attrs({ size: 20 })`
  path {
    fill: ${({ theme }) => theme.colors.grayScale[400]};
  }
`;

export const HeaderLangContent: React.FC<AnimationProps & React.PropsWithChildren> = styled(motion.div)`
  display: flex;
  position: fixed;
  transform-origin: top center;
  width: 78px;
  margin-top: 33px;
  background: ${({ theme }) => theme.colors.grayScale[800]};
  border: 1px solid ${({ theme }) => theme.colors.grayScale[700]};
  border-radius: 4px;
  overflow: hidden;
  padding: 8px;
`;

export const HeaderLangList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const HeaderLangListItem = styled.button`
  display: inline-flex;
  background: none;
  padding: 8px 20px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
  transition: 0.25s all;
  &:hover {
    background: ${({ theme }) => theme.colors.grayScale[700]};
  }
`;

export const HeaderLangListItemName = styled(Typography).attrs({ variant: 'body-m-regular' })`
  text-align: center;
`;
