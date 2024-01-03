import React from 'react';
import { DrawerGroupList, DrawerGroupsStyled } from './styled';

export const DrawerGroups: React.FC<React.PropsWithChildren> = ({
  children
}) => (
  <DrawerGroupsStyled>
    <DrawerGroupList>
      {children}
    </DrawerGroupList>
  </DrawerGroupsStyled>
);
