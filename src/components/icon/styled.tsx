import { AnimationProps, motion } from 'framer-motion';
import React from 'react';
import { css, styled } from 'styled-components';

export const IconStyled: React.FC<React.ComponentProps<'svg'> & AnimationProps> = styled(motion.svg)`
  display: inline-flex;
  flex-shrink: 0;
  ${({ width }) => {
    if (typeof width === 'undefined') {
      return css``;
    }
    if (typeof width === 'number') {
      return css`
        width: var(--bestchatbots-icon-size, ${width}px);
      `;
    }

    return css`
      width: var(--bestchatbots-icon-size, ${width});
    `;
  }}
  ${({ height }) => {
    if (typeof height === 'undefined') {
      return css``;
    }
    if (typeof height === 'number') {
      return css`
        height: var(--bestchatbots-icon-size, ${height}px);
      `;
    }

    return css`
      height: var(--bestchatbots-icon-size, ${height});
    `;
  }}
`;
