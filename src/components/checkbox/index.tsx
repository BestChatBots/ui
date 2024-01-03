import React, { useCallback } from 'react';
import {
  CheckboxBlock, CheckboxLabel, CheckboxNative, CheckboxStyled 
} from './styled';
import { CheckboxCheckedIcon } from './icon';
import { IconProvider } from '@/components/icon';
import { useTheme } from '@/theme';

export type CheckboxChangeEventHandler = (checked: boolean) => unknown;

export interface CheckboxProps extends Omit<React.ComponentProps<'input'>, 'onChange'> {
  onChange?: CheckboxChangeEventHandler;
  icon?: React.ReactNode;
  label?: React.ReactNode; 
}

export const Checkbox: React.FC<CheckboxProps> = ({
  className, disabled = false, icon, label, onChange, ...props
}) => {
  const theme = useTheme();

  const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>((event) => {
    onChange?.(event.target.checked);
  }, [onChange]);

  return (
    <CheckboxStyled
      $disabled={disabled}
      className={className}
    >
      <CheckboxNative 
        {...props}
        type="checkbox"
        disabled={disabled}
        onChange={handleChange}
      />
      <CheckboxBlock>
        <CheckboxCheckedIcon />
      </CheckboxBlock>
      {icon && (
        <IconProvider
          size={24}
          fill={theme.colors.accent.primary}
        >
          {icon}
        </IconProvider>
      )}
      {typeof label === 'string' && (
        <CheckboxLabel>
          {label}
        </CheckboxLabel>
      )}
      {typeof label !== 'string' && label}
    </CheckboxStyled>
  );
};
