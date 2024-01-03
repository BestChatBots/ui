import React from 'react';
import { PlatformsStyled, PlatformList } from './styled';

export interface PlatformsProps extends React.ComponentProps<'div'> {}

export const Platforms: React.FC<PlatformsProps> = ({
  children, ...props
}) => (
  <PlatformsStyled
    {...props}
  >
    <PlatformList>
      {children}
    </PlatformList>
  </PlatformsStyled>
);
