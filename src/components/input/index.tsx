import React, { useCallback, useState } from 'react';
import {
  InputBlock, InputErrorText, InputLabel, InputNative, InputSearchIcon, InputStyled 
} from './styled';
import { useTheme } from '@/theme';
import { IconProvider } from '@/components/icon';

export interface InputProps extends React.ComponentProps<'input'> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

export const Input: React.FC<InputProps> = ({
  className, label, error, fullWidth = false, type, disabled = false, onFocus, onBlur, ...props
}) => {
  const theme = useTheme();

  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    onFocus?.(event);
    setIsFocus(true);
  }, [onFocus]);
  const handleBlur = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    onBlur?.(event);
    setIsFocus(false);
  }, [onBlur]);

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
