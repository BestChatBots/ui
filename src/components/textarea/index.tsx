import React, { useCallback } from 'react';
import {
  TextAreaErrorText, TextAreaLabel, TextAreaNative, TextAreaStyled 
} from './styled';

export type TextAreaChangeEventHandler = (value: string) => unknown;

export interface TextAreaProps extends Omit<React.ComponentProps<'textarea'>, 'onChange'> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  onChange?: TextAreaChangeEventHandler;
  onTextAreaChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

export const TextArea: React.FC<TextAreaProps> = ({
  className, label, error, disabled = false, fullWidth = false, 
  onChange, onTextAreaChange,
  ...props
}) => {
  const isLabel = !!label;
  const isError = !!error;

  const handleChange = useCallback<React.ChangeEventHandler<HTMLTextAreaElement>>((event) => {
    onChange?.(event.target.value);
    onTextAreaChange?.(event);
  }, [onChange, onTextAreaChange]);

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
        onChange={handleChange}
      />
      {isError && (
        <TextAreaErrorText>
          {error}
        </TextAreaErrorText>
      )}
    </TextAreaStyled>
  );
};
