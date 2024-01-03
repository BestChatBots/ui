import { styled, css } from 'styled-components';
import { motion } from 'framer-motion';
import React from 'react';
import { adaptive } from '@/adaptive';

export interface HeaderNavStyledProps {
  $inMenu: boolean;
}

export const HeaderNavStyled = styled(motion.nav).attrs({ layout: true, layoutRoot: true })<HeaderNavStyledProps>`
  ${({ $inMenu }) => {
    if ($inMenu) {
      const adaptiveStyle = adaptive({
        desktop: css`
          display: none;
        `
      });

      return css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 30px;
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
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      gap: 20px;
      margin-right: 26px;
      ${adaptiveStyle}
    `;
  }}
` as React.FC<HeaderNavStyledProps & React.PropsWithChildren>;
