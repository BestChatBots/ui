import React from 'react';
import {
  TableBody, TableContent, TableScrollbarWrapper, TableStyled 
} from './styled';
import { ScrollbarShadow } from '@/components/scrollbar';
import { useTheme } from '@/theme';

export interface TableProps extends React.ComponentProps<'table'> {
  head?: React.ReactNode;
  bgColor?: string;
}

export const Table: React.FC<TableProps> = ({ 
  head, bgColor, children, ...props 
}) => {
  const theme = useTheme();

  bgColor ??= theme.colors.grayScale[800];

  return (
    <TableStyled
      $bgColor={bgColor}
      {...props}
    >
      <TableScrollbarWrapper
        scrollShadows={{
          color: bgColor,
          left: <ScrollbarShadow side="left" />,
          right: <ScrollbarShadow side="right" />
        }}
      >
        <TableContent>
          {head}
          <TableBody>
            {children}
          </TableBody>
        </TableContent>
      </TableScrollbarWrapper>
    </TableStyled>
  );
};

export * from './styled';
export * from './row';
export * from './cell';
export * from './empty';
