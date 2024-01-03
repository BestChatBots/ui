import React, { useCallback } from 'react';
import { HeaderLinkStyled } from './styled';
import { useHeader } from '../context';

export type HeaderLinkComponentType = keyof React.ReactHTML | React.ElementType;

export type HeaderLinkProps
  <ComponentType extends HeaderLinkComponentType = HeaderLinkComponentType> = {
    component?: ComponentType;
    as?: ComponentType;
  } & React.ComponentProps<ComponentType>;

export const HeaderLink: React.FC<HeaderLinkProps> = ({
  component, as, onClick, ...props
}) => {
  const { setIsMenuOpen } = useHeader();

  const handleClick = useCallback<React.MouseEventHandler>((event) => {
    setIsMenuOpen(false);
    onClick?.(event);
  }, [onClick]);

  return (
    <HeaderLinkStyled
      {...props}
      as={component ?? as ?? 'a'}
      onClick={handleClick}
    />
  );
};
