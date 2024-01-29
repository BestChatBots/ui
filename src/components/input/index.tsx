import React, { useCallback, useRef, useState } from 'react';
import {
  InputBlock, 
  InputClearButton, 
  InputErrorText, 
  InputLabel, 
  InputNative, 
  InputReadonly, 
  InputSearchIcon, 
  InputStart, 
  InputStartText, 
  InputStyled, 
  InputWritable
} from './styled';
import { useTheme } from '@/theme';
import { IconProvider } from '@/components/icon';

export type InputChangeEventHandler = (value: string) => unknown;

export interface InputProps extends Omit<React.ComponentProps<'input'>, 'onChange'> {
  label?: string;
  start?: React.ReactNode;
  error?: string;
  width?: number;
  fullWidth?: boolean;
  onChange?: InputChangeEventHandler;
  onInputChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input: React.FC<InputProps> = ({
  className, label, start, error, width, fullWidth = false, type, disabled = false, 
  onFocus, onBlur, onChange, onInputChange, 
  ...props
}) => {
  const theme = useTheme();

  const nativeRef = useRef<HTMLInputElement>(null);
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

  const handleClear = useCallback(() => {
    const nativeEl: HTMLInputElement | null = nativeRef.current;

    if (nativeEl !== null) {
      nativeEl.value = '';
      onChange?.('');
    }
  }, [nativeRef.current, onChange]);

  const isLabel = !!label;
  const isStart = !!start;
  const isError = !!error;

  return (
    <InputStyled
      $width={width}
      $fullWidth={fullWidth}
      className={className}
    >
      {isLabel && (
        <InputLabel>
          {label}
        </InputLabel>
      )}
      <InputBlock>
        {isStart && (
          <InputReadonly
            $disabled={disabled}
          >
            <InputStart>
              {typeof start === 'string' && (
                <InputStartText>
                  {start}
                </InputStartText>
              )}
              {typeof start !== 'string' && start}
            </InputStart>
          </InputReadonly>
        )}
        <InputWritable
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
            ref={nativeRef}
            type={type}
            disabled={disabled}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {type === 'search' && (
            <InputClearButton 
              onClick={handleClear}
            />
          )}
        </InputWritable>
      </InputBlock>
      {isError && (
        <InputErrorText>
          {error}
        </InputErrorText>
      )}
    </InputStyled>
  );
};
