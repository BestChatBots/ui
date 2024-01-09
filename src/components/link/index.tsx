import React from 'react';
import { LinkStyled, LinkText } from './styled';
import { IconProvider } from '@/components/icon';

export type LinkComponentType = keyof React.ReactHTML | React.ElementType;

export type LinkProps
  <ComponentType extends LinkComponentType = LinkComponentType> = {
    component?: ComponentType;
    as?: ComponentType;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
  } & React.ComponentProps<ComponentType>;

export const Link: React.FC<LinkProps> = ({
  component, as, startIcon, endIcon, children, ...props
}) => (
  <LinkStyled
    {...props}
    as={as ?? component}
  >
    {startIcon && (
      <IconProvider
        size={18}
      >
        {startIcon}
      </IconProvider>
    )}
    {typeof children === 'string' && (
      <LinkText>
        {children}
      </LinkText>
    )}
    {typeof children !== 'string' && children}
    {endIcon && (
      <IconProvider
        size={18}
      >
        {endIcon}
      </IconProvider>
    )}
  </LinkStyled>
);

export * from './external';
