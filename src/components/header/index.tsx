import React, { useCallback, useState } from 'react';
import { 
  HeaderContainer,
  HeaderContainerContent,
  HeaderContent,
  HeaderLeft,
  HeaderOffset,
  HeaderRight,
  HeaderStyled 
} from './styled';
import { HeaderProvider } from './context';
import { HeaderMenu, HeaderMenuToggleButton } from './menu';

export type HeaderOpenEventHandler = (open: boolean) => unknown;

export interface HeaderProps {
  logo: React.ReactNode;
  nav: React.ReactNode;
  lang: React.ReactNode;
  buttons: React.ReactNode;
  user: React.ReactNode;
  open?: boolean;
  onOpen?: HeaderOpenEventHandler;
}

export const Header: React.FC<HeaderProps> = ({
  logo, nav, lang, buttons, user, open, onOpen
}) => {
  const initialIsMenuOpen = open;
  const setInitialIsMenuOpen = useCallback<React.Dispatch<React.SetStateAction<boolean>>>(
    (open) => {
      if (typeof open === 'boolean') {
        onOpen?.(open);
      }
    }, 
    [onOpen]
  );

  const [isMenuOpen, setIsMenuOpen] = typeof initialIsMenuOpen === 'boolean' ? [initialIsMenuOpen, setInitialIsMenuOpen] : useState(false);
  
  return (
    <HeaderProvider
      isMenuOpen={isMenuOpen}
      setIsMenuOpen={setIsMenuOpen}
    >
      <HeaderStyled>
        <HeaderContent>
          <HeaderContainer>
            <HeaderContainerContent>
              <HeaderLeft>
                {logo}
              </HeaderLeft>
              <HeaderRight>
                {nav}
                {lang}
                {buttons}
                {user}
                <HeaderMenuToggleButton />
              </HeaderRight>
            </HeaderContainerContent>
          </HeaderContainer>
        </HeaderContent>
        <HeaderOffset />
        <HeaderMenu>
          {nav}
          {buttons}
          {user}
        </HeaderMenu>
      </HeaderStyled>
    </HeaderProvider>
  );
};

export * from './context';
export * from './styled';
export * from './nav';
export * from './lang';
export * from './user-info';
export * from './menu';
export * from './buttons';
export * from './menu';
export * from './link';
