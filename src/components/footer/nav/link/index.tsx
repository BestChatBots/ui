import React from 'react';
import { FooterNavLinkStyled } from './styled';
import { useTheme } from '@/theme';
import { IconProvider } from '@/components/icon';

export type FooterNavLinkComponentType = keyof React.ReactHTML | React.ElementType;

export type FooterNavLinkProps
  <ComponentType extends FooterNavLinkComponentType = FooterNavLinkComponentType> = {
    component?: ComponentType;
    as?: ComponentType;
    icon: React.ReactNode;
  } & React.ComponentProps<ComponentType>;

export const FooterNavLink: React.FC<FooterNavLinkProps> = ({
  component, as, icon, children, ...props
}) => {
  const theme = useTheme();

  return (
    <FooterNavLinkStyled
      component={component ?? as ?? 'a'}
      {...props}
    >
      <IconProvider
        fill={theme.colors.accent.primary}
        size={20}
      >
        {icon}
      </IconProvider>
      {children}
    </FooterNavLinkStyled>
  );
};
