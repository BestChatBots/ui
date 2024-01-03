import React from 'react';
import { HeaderNavStyled } from './styled';
import { useHeaderMenu } from '../menu';

export type HeaderNavProps = React.PropsWithChildren;

export const HeaderNav: React.FC<HeaderNavProps> = ({
  children
}) => {
  const { isInMenu } = useHeaderMenu();

  return (
    <HeaderNavStyled
      $inMenu={isInMenu}
    >
      {children}
    </HeaderNavStyled>
  );
};

export * from './link';
