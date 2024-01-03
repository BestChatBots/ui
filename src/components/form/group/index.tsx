import React from 'react';
import { FormGroupContent, FormGroupName, FormGroupStyled } from './styled';

export interface FormGroupProps extends React.ComponentProps<'div'> {
  name?: string;
  fullWidth?: boolean;
  spacing?: number;
}

export const FormGroup: React.FC<FormGroupProps> = ({
  name, fullWidth = false, spacing, children, ...props
}) => (
  <FormGroupStyled
    $fullWidth={fullWidth}
    {...props}
  >
    {name && (
      <FormGroupName
        $spacing={spacing}
      >
        {name}
      </FormGroupName>
    )}
    <FormGroupContent
      $spacing={spacing}
      $fullWidth={fullWidth}
    >
      {children}
    </FormGroupContent>
  </FormGroupStyled>
);

export * from './styled';
export * from './list';
