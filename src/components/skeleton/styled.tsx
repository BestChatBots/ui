import { styled, css } from 'styled-components';
import { motion } from 'framer-motion';
import { SkeletonVariant } from './types';

export interface SkeletonStyledProps {
  $variant?: SkeletonVariant;
  $width?: number | string;
  $height?: number | string;
  $fullWidth: boolean;
}

export const SkeletonStyled = styled(motion.span)<SkeletonStyledProps>`
  display: inline-flex;
  flex-shrink: 0;
  vertical-align: middle;
  width: ${({ $fullWidth, $width }) => {
    if ($fullWidth) {
      return '100%';
    }
    if (typeof $width === 'number') {
      return `${$width}px`;
    }

    return 'var(--bestchatbots-skeleton-width, 40px)';
  }};
  height: ${({ $height }) => {
    if (typeof $height === 'number') {
      return `${$height}px`;
    }

    return 'var(--bestchatbots-skeleton-height, 40px)';
  }};
  background: ${({ theme }) => theme.colors.grayScale[700]};
  cursor: progress;
  ${({ $variant }) => {
    switch ($variant) {
      case 'rectangular':
        return css`
          border-radius: 0px;
        `;
      case 'circular':
        return css`
          border-radius: 50%;
        `;
      default:
        return css`
          border-radius: var(--bestchatbots-skeleton-radius, 4px);
        `;
    }
  }}
  overflow: hidden;
`;
