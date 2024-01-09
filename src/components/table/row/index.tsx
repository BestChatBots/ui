import React from 'react';
import { TableRowStyled } from './styled';

export interface TableRowProps extends React.ComponentProps<'tr'> {
  clickable?: boolean;
}

export const TableRow: React.FC<TableRowProps> = ({
  clickable, ...props
}) => (
  <TableRowStyled
    $clickable={clickable ?? !!props.onClick}
    {...props}
  />
);

export * from './styled';
