import React from 'react';
import { LayoutGroup } from 'framer-motion';
import { HeaderNavStyled } from './styled';
import { useHeaderMenu } from '../menu';

export type HeaderNavProps = React.PropsWithChildren;

export const HeaderNav: React.FC<HeaderNavProps> = ({
  children
}) => {
  const { isInMenu } = useHeaderMenu();

  return (
    <LayoutGroup>
      <HeaderNavStyled
        $inMenu={isInMenu}
        layout="position"
        layoutRoot
      >
        {children}
      </HeaderNavStyled>
    </LayoutGroup>
  );
};

export * from './link';
