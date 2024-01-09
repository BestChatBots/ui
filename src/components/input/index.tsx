import React, { useCallback, useState } from 'react';
import {
  InputBlock, InputErrorText, InputLabel, InputNative, InputSearchIcon, InputStyled 
} from './styled';
import { useTheme } from '@/theme';
import { IconProvider } from '@/components/icon';

export type InputChangeEventHandler = (value: string) => unknown;

export interface InputProps extends Omit<React.ComponentProps<'input'>, 'onChange'> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  onChange?: InputChangeEventHandler;
  onInputChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input: React.FC<InputProps> = ({
  className, label, error, fullWidth = false, type, disabled = false, 
  onFocus, onBlur, onChange, onInputChange, 
  ...props
}) => {
  const theme = useTheme();

  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = useCallback<React.FocusEventHandler<HTMLInputElement>>((event) => {
    onFocus?.(event);
    setIsFocus(true);
  }, [onFocus]);
  const handleBlur = useCallback<React.FocusEventHandler<HTMLInputElement>>((event) => {
    onBlur?.(event);
    setIsFocus(false);
  }, [onBlur]);

  const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>((event) => {
    onChange?.(event.target.value);
    onInputChange?.(event);
  }, [onChange, onInputChange]);

  const isLabel = !!label;
  const isError = !!error;

  return (
    <InputStyled
      $fullWidth={fullWidth}
      className={className}
    >
      {isLabel && (
        <InputLabel>
          {label}
        </InputLabel>
      )}
      <InputBlock
        $focus={isFocus}
        $error={isError}
        $disabled={disabled}
      >
        <IconProvider
          fill={isFocus ? theme.colors.base.white : theme.colors.grayScale[500]}
        >
          {type === 'search' && (
            <InputSearchIcon />
          )}
        </IconProvider>
        <InputNative
          $disabled={disabled}
          {...props}
          type={type}
          disabled={disabled}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </InputBlock>
      {isError && (
        <InputErrorText>
          {error}
        </InputErrorText>
      )}
    </InputStyled>
  );
};
