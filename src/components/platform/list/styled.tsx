import { css, styled } from 'styled-components';
import { PlatformsDirection } from './types';

export const PlatformsStyled = styled.div`
  display: inline-flex;
`;

export interface PlatformListProps {
  $direction: PlatformsDirection;
}

export const PlatformList = styled.div<PlatformListProps>`
  display: inline-flex;
  ${({ $direction }) => {
    switch ($direction) {
      case 'row':
        return css`
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        `;
      case 'column':
        return css`
          flex-direction: column;
          gap: 12px;
          align-items: flex-start;
        `;
    }
  }}
`;
