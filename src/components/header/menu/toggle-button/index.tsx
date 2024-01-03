import React, { useCallback } from 'react';
import { useHeader } from '../../context';
import { HeaderMenuToggleButtonStyled } from './styled';
import { HeaderMenuToggleIcon } from './icon';

export const HeaderMenuToggleButton: React.FC = () => {
  const { isMenuOpen, setIsMenuOpen } = useHeader();

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  return (
    <HeaderMenuToggleButtonStyled
      aria-label="Menu Toggle Button" 
      onClick={toggleMenu}
    >
      <HeaderMenuToggleIcon />
    </HeaderMenuToggleButtonStyled>
  );
};
