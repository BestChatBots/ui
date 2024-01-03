import React, { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useHeader } from '../context';
import { HeaderMenuProvider } from './context';
import { HeaderMenuContainer, HeaderMenuContent, HeaderMenuStyled } from './styled';

export const HeaderMenu: React.FC<React.PropsWithChildren> = ({
  children
}) => {
  const { isMenuOpen } = useHeader();

  useEffect(() => {
    if (isMenuOpen) {
      window.scrollTo({
        top: 0
      });
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.removeProperty('overflow');
    }

    return () => {
      document.body.style.removeProperty('overflow');
    };
  }, [isMenuOpen]);

  return (
    <HeaderMenuProvider
      isInMenu
    >
      <AnimatePresence>
        {isMenuOpen && (
          <HeaderMenuStyled
            initial={{
              opacity: 0,
              top: -window.innerHeight
            }}
            animate={{
              opacity: 1,
              top: 0
            }}
            exit={{
              opacity: 0,
              top: -window.innerHeight
            }}
            transition={{
              duration: 0.15
            }}
          >
            <HeaderMenuContainer>
              <HeaderMenuContent>
                {children}
              </HeaderMenuContent>
            </HeaderMenuContainer>
          </HeaderMenuStyled>
        )}
      </AnimatePresence>
    </HeaderMenuProvider>
  );
};

export * from './toggle-button';
export * from './context';
