import React from 'react';
import { DrawerGroupContent, DrawerGroupName, DrawerGroupStyled } from './styled';

export interface DrawerGroupProps extends React.ComponentProps<'div'> {
  name: string;
}

export const DrawerGroup: React.FC<DrawerGroupProps> = ({
  name, children, ...props
}) => (
  <DrawerGroupStyled
    {...props}
  >
    <DrawerGroupName>
      {name}
    </DrawerGroupName>
    <DrawerGroupContent>
      {children}
    </DrawerGroupContent>
  </DrawerGroupStyled>
);

export * from './list';
