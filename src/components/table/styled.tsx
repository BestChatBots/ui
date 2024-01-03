import { styled } from 'styled-components';
import { Scrollbar } from '@/components/scrollbar';
import { TableCellStyled, TableCellText } from './cell';

export interface TableStyledProps {
  $bgColor: string;
}

export const TableStyled = styled.div<TableStyledProps>`
  display: inline-flex;
  width: 100%;
  background: ${({ $bgColor }) => $bgColor};
`;

export const TableScrollbarWrapper = styled(Scrollbar).attrs({ variant: 'secondary' })``;

export const TableContent = styled.table`
  width: 100%;
  max-width: 1040px;
  min-width: 830px;
  border-spacing: 0px 8px;
`;

export const TableRow = styled.tr`
  transition: 0.25s all;
  ${TableCellStyled}:first-child {
    border-left: 2px solid rgba(0, 0, 0, 0.0);
  }
  &:not(:first-child) {
    margin-top: 8px;
  }
`;

export const TableHead = styled.thead`
  ${TableCellStyled} {
    ${TableCellText} {
      font-family: ${({ theme }) => theme.fonts.rubik.regular};
      font-size: 14px;
      font-style: normal;
      line-height: 18px;
      color: ${({ theme }) => theme.colors.grayScale[500]};
    }
  }
`;

export const TableBody = styled.tbody`
  ${TableRow} {
    &:hover {
      background: ${({ theme }) => theme.colors.grayScale[700]};
      ${TableCellStyled}:first-child {
        border-left: 2px solid ${({ theme }) => theme.colors.accent.primary};
      }
    }
  }
  ${TableCellStyled} {
    cursor: pointer;
    ${TableCellText} {
      font-family: ${({ theme }) => theme.fonts.rubik.regular};
      font-size: 16px;
      font-style: normal;
      line-height: 20px;
      color: ${({ theme }) => theme.colors.base.white};
    }
  }
`;
