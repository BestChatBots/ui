import { styled, css } from 'styled-components';

export const TableCellStyled = styled.td`
  cursor: default;
  padding: 8px;
`;

export interface TableCellContentProps {
  $align?: string;
}

export const TableCellContent = styled.span<TableCellContentProps>`
  display: flex;
  ${({ $align }) => $align && css`
    justify-content: ${() => {
    switch ($align) {
      case 'left':
        return 'flex-start';
      case 'center':
        return 'center';
      case 'right':
        return 'flex-end';
      default:
        return 'flex-start';
    }
  }};
  `}
  align-items: center;
  gap: 10px;
`;

export const TableCellText = styled.span`
  text-decoration: none;
  &::selection {
    color: ${({ theme }) => theme.colors.base.white};
    background: ${({ theme }) => theme.colors.accent.primary};
  }
`;

export const TableGrayText = styled(TableCellText)`
  color: ${({ theme }) => theme.colors.grayScale[500]} !important;
`;

export const TableGreenText = styled(TableCellText)`
  color: ${({ theme }) => theme.colors.success} !important;
`;

export const TableRedText = styled(TableCellText)`
  color: ${({ theme }) => theme.colors.error} !important;
`;
