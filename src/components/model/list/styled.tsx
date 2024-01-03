import { styled, css } from 'styled-components';
import { ModelsDirection } from './types';

export const ModelsStyled = styled.div`
  display: inline-flex;
`;

export interface ModelListProps {
  $direction: ModelsDirection;
}

export const ModelList = styled.div<ModelListProps>`
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
