import React from 'react';
import {
  TextAreaErrorText, TextAreaLabel, TextAreaNative, TextAreaStyled 
} from './styled';

export interface TextAreaProps extends React.ComponentProps<'textarea'> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

export const TextArea: React.FC<TextAreaProps> = ({
  className, label, error, disabled = false, fullWidth = false, ...props
}) => {
  const isLabel = !!label;
  const isError = !!error;

  return (
    <TextAreaStyled
      $fullWidth={fullWidth}
      className={className}
    >
      {isLabel && (
        <TextAreaLabel>
          {label}
        </TextAreaLabel>
      )}
      <TextAreaNative
        $disabled={disabled}
        $error={isError}
        {...props}
        disabled={disabled}
      />
      {isError && (
        <TextAreaErrorText>
          {error}
        </TextAreaErrorText>
      )}
    </TextAreaStyled>
  );
};
