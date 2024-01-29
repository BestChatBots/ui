import React from 'react';
import { PlatformsStyled, PlatformList } from './styled';
import { PlatformsDirection } from './types';

export interface PlatformsProps extends React.ComponentProps<'div'> {
  direction?: PlatformsDirection;
}

export const Platforms: React.FC<PlatformsProps> = ({
  direction = 'row', children, ...props
}) => (
  <PlatformsStyled
    {...props}
  >
    <PlatformList
      $direction={direction} 
    >
      {children}
    </PlatformList>
  </PlatformsStyled>
);
