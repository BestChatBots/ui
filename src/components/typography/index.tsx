import React from 'react';
import { TypographyStyled } from './styled';
import { TypographyAlign, TypographyVariant } from './types';

export type TypographyComponentType = keyof React.ReactHTML | React.ElementType;

export type TypographyProps
  <ComponentType extends TypographyComponentType = TypographyComponentType> = {
    component?: ComponentType;
    as?: ComponentType;
    variant?: TypographyVariant;
    align?: TypographyAlign;
    fullWidth?: boolean;
  } & React.ComponentProps<ComponentType>;

export const Typography: React.FC<TypographyProps> = ({
  component, as, variant = 'body-l-regular', align = 'left', fullWidth = true, ...props
}) => (
  <TypographyStyled 
    {...props}
    $variant={variant}
    $align={align}
    $fullWidth={fullWidth}
    as={as ?? component}
  />
);

export * from './types';
