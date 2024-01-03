import { styled } from 'styled-components';
import { StarSize } from './types';

export const StarsStyled = styled.span`
  display: inline-flex;
`;

export interface StarListProps {
  $size: StarSize;
}

export const StarList = styled.span<StarListProps>`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  gap: ${({ $size }) => {
    switch ($size) {
      case 18:
        return 6;
      case 20:
        return 4;
      case 24:
        return 6;
      case 34:
        return 12;
    }
  }}px;
`;
