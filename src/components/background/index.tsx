import React from 'react';
import { BackgroundVariant } from './types';
import { BackgroundStyled } from './styled';

export interface BackgroundProps extends React.ComponentProps<'div'> {
  variant: BackgroundVariant;
  position?: string;
}

export const Background: React.FC<BackgroundProps> = ({ 
  variant, position,
  ...props 
}) => (
  <BackgroundStyled 
    $variant={variant}
    $position={position}
    {...props}
  />
);

export * from './types';
