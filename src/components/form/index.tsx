import React from 'react';
import {
  FormContent, FormStyled, FormText, FormTitle 
} from './styled';
import { FormVariant } from './types';

export interface FormProps extends React.ComponentProps<'form'> {
  variant?: FormVariant;
  logo?: React.ReactNode;
  title?: string;
  fullWidth?: boolean;
  spacing?: number;
}

export const Form: React.FC<FormProps> = ({ 
  variant = 'default', logo, title, fullWidth = false, spacing, children, ...props
}) => (
  <FormStyled
    $variant={variant}
    $fullWidth={fullWidth}
    {...props}
  >
    {logo}
    {title && (
      <FormTitle>
        {title}
      </FormTitle>
    )}
    <FormContent
      $variant={variant}
      $spacing={spacing}
    >
      {typeof children === 'string' && (
        <FormText>
          {children}
        </FormText>
      )}
      {typeof children !== 'string' && children}
    </FormContent>
  </FormStyled>
);

export * from './styled';
export * from './group';
