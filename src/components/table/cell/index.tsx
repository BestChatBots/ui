import React from 'react';
import { TableCellContent, TableCellStyled, TableCellText } from './styled';

export type TableCellProps = React.ComponentProps<'td'>;

export const TableCell: React.FC<TableCellProps> = ({
  align, children, ...props
}) => (
  <TableCellStyled
    {...props}
    align={align}
  >
    {typeof children === 'string' && (
      <TableCellText>
        {children}
      </TableCellText>
    )}
    {(typeof children !== 'string') && (
      <TableCellContent
        $align={align}
      >
        {children}
      </TableCellContent>
    )}
  </TableCellStyled>
);

export * from './styled';
