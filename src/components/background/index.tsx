import React from 'react';
import { BackgroundVariant } from './types';
import { BackgroundStyled } from './styled';

export interface BackgroundProps extends React.ComponentProps<'div'> {
  variant: BackgroundVariant;
}

export const Background: React.FC<BackgroundProps> = ({ 
  variant,
  ...props 
}) => (
  <BackgroundStyled 
    $variant={variant}
    {...props}
  />
);

export * from './types';
