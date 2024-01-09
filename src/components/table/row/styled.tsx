import { styled, css } from 'styled-components';
import { TableCellStyled } from '../cell';

export interface TableRowStyledProps {
  $clickable: boolean;
}

export const TableRowStyled = styled.tr<TableRowStyledProps>`
  transition: 0.25s all;
  ${TableCellStyled}:first-child {
    border-left: 2px solid rgba(0, 0, 0, 0.0);
  }
  &:not(:first-child) {
    margin-top: 8px;
  }
  ${({ $clickable }) => $clickable && css`
    ${TableCellStyled} {
      cursor: pointer;
    }
    &:hover {
      background: ${({ theme }) => theme.colors.grayScale[700]};
      ${TableCellStyled}:first-child {
        border-left: 2px solid ${({ theme }) => theme.colors.accent.primary};
      }
    }
  `}
`;
