import React, { useCallback, useState } from 'react';
import {
  HeaderNavLinkLine, HeaderNavLinkStyled, HeaderNavLinkText, HeaderNavLinkTop 
} from './styled';
import { IconProvider } from '@/components/icon';
import { useTheme } from '@/theme';
import { useHeaderMenu } from '../../menu';
import { useHeader } from '../../context';

export type HeaderNavLinkComponentType = keyof React.ReactHTML | React.ElementType;

export type HeaderNavLinkProps
  <ComponentType extends HeaderNavLinkComponentType = HeaderNavLinkComponentType> = {
    component?: ComponentType;
    icon?: React.ReactNode;
    active?: boolean;
    children?: React.ReactNode;
    onMouseEnter?: React.MouseEventHandler;
    onMouseLeave?: React.MouseEventHandler;
    onClick?: React.MouseEventHandler;
  } & React.ComponentProps<ComponentType>;

export const HeaderNavLink: React.FC<HeaderNavLinkProps> = ({
  component, icon, active = false, children, onMouseEnter, onMouseLeave, onClick, ...props
}) => {
  const theme = useTheme();
  const { setIsMenuOpen } = useHeader();
  const { isInMenu } = useHeaderMenu();

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = useCallback<React.MouseEventHandler>((event) => {
    setIsHover(true);
    onMouseEnter?.(event);
  }, [onMouseEnter]);
  const handleMouseLeave = useCallback<React.MouseEventHandler>((event) => {
    setIsHover(false);
    onMouseLeave?.(event);
  }, [onMouseLeave]);

  const handleClick = useCallback<React.MouseEventHandler>((event) => {
    setIsMenuOpen(false);
    onClick?.(event);
  }, [onClick]);

  return (
    <HeaderNavLinkStyled
      $inMenu={isInMenu}
      {...props}
      as={component}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {!isInMenu && <HeaderNavLinkTop />}
      <HeaderNavLinkText
        $active={active}
        $hover={isHover}
      >
        <IconProvider
          fill={!isHover && !active ? theme.colors.grayScale[500] : theme.colors.accent.primary}
          size={20}
        >
          {icon}
        </IconProvider>
        {children}
      </HeaderNavLinkText>
      {!isInMenu && (
        <>
          {active && (
            <HeaderNavLinkLine
              $active
              layoutId="underline"
            />
          )}
          {!active && (
            <HeaderNavLinkLine
              $active={false}
            />
          )}
        </>
      )}
    </HeaderNavLinkStyled>
  );
};
