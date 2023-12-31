import { css } from 'styled-components';

export const ScrollbarStyle = css`
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.accent.primary};
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.grayScale[600]};
  }
  &::-webkit-scrollbar-corner {
    display: none;
  }
`;
