import React from 'react';
import { HeaderButtonsStyled } from './styled';
import { useHeaderMenu } from '../menu';

export const HeaderButtons: React.FC<React.PropsWithChildren> = ({
  children
}) => {
  const { isInMenu } = useHeaderMenu();

  return (
    <HeaderButtonsStyled
      $inMenu={isInMenu}
    >
      {children}
    </HeaderButtonsStyled>
  );
};

export * from './styled';
