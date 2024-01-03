import React from 'react';
import { FormGroupList, FormGroupsStyled } from './styled';

export interface FormGroupsProps extends React.ComponentProps<'div'> {
  spacing?: number;
  width?: number;
}

export const FormGroups: React.FC<FormGroupsProps> = ({
  children, spacing, width, ...props
}) => (
  <FormGroupsStyled
    {...props}
  >
    <FormGroupList
      $spacing={spacing}
      $width={width}
    >
      {children}
    </FormGroupList>
  </FormGroupsStyled>
);
