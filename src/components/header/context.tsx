import React, { useContext } from 'react';

export interface HeaderContextValue {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HeaderContext = React.createContext<HeaderContextValue>({
  isMenuOpen: false,
  setIsMenuOpen: () => {}
});

export const HeaderProvider: React.FC<HeaderContextValue & React.PropsWithChildren
> = ({
  children,
  ...value
}) => (
  <HeaderContext.Provider value={value}>
    {children}
  </HeaderContext.Provider>
);

export const useHeader = () => useContext(HeaderContext);
