import React from 'react';
import {
  TableEmptyContainer,
  TableEmptyContent, 
  TableEmptyIcon, 
  TableEmptyStyled, 
  TableEmptyText, 
  TableEmptyTitle 
} from './styled';

export interface TableEmptyProps {
  title: React.ReactNode;
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const TableEmpty: React.FC<TableEmptyProps> = ({
  title, fullWidth = false, children
}) => (
  <TableEmptyStyled>
    <TableEmptyContainer
      $fullWidth={fullWidth}
    >
      <TableEmptyContent>
        <TableEmptyIcon />
        {typeof title === 'string' && (
          <TableEmptyTitle>
            {title}
          </TableEmptyTitle>
        )}
        {typeof title !== 'string' && title}
        {typeof children === 'string' && (
          <TableEmptyText>
            {children}
          </TableEmptyText>
        )}
        {typeof children !== 'string' && children}
      </TableEmptyContent>
    </TableEmptyContainer>
  </TableEmptyStyled>
);
