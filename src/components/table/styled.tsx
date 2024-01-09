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
  ${TableCellStyled} {
    --bestchatbots-skeleton-width: 200px;
    --bestchatbots-skeleton-height: 20px;
    ${TableCellText} {
      font-family: ${({ theme }) => theme.fonts.rubik.regular};
      font-size: 16px;
      font-style: normal;
      line-height: 20px;
      color: ${({ theme }) => theme.colors.base.white};
    }
  }
`;
