import React from 'react';
import { ModelsDirection } from './types';
import { ModelList, ModelsStyled } from './styled';

export interface ModelsProps extends React.ComponentProps<'div'> {
  direction?: ModelsDirection;
}

export const Models: React.FC<ModelsProps> = ({
  children, direction = 'row', ...props
}) => (
  <ModelsStyled
    {...props}
  >
    <ModelList
      $direction={direction}  
    >
      {children}
    </ModelList>
  </ModelsStyled>
);

export * from './types';
