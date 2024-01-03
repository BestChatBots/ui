import React, { useCallback, useState } from 'react';
import { ButtonStyled, ButtonStyledProps, ButtonText } from './styled';
import { IconProvider, IconProviderProps, isIconComponent } from '@/components/icon';
import { useTheme } from '@/theme';
import { ButtonSize, ButtonVariant } from './types';
import { TypographyVariant } from '@/components/typography';
import { useTooltip } from '@/components/tooltip';

export interface ButtonProps extends 
  Omit<React.ComponentProps<typeof ButtonStyled>, keyof ButtonStyledProps> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  iconSize?: number;
  fullWidth?: boolean;
  color?: string;
  hoverColor?: string;
  iconColor?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary', size = 'small', disabled = false, fullWidth = false, iconSize, color, hoverColor, iconColor, startIcon, endIcon, children, ...props
}) => {
  const theme = useTheme();

  const childrenArray: React.ReactNode[] = React.Children.toArray(children);
  const isIcon: boolean = React.isValidElement(childrenArray[0]) 
    ? isIconComponent(childrenArray[0].type) : false;
  const isText = !isIcon;

  let iconFill: string;
  if (iconColor) {
    iconFill = iconColor;
  } else if (disabled) {
    iconFill = theme.colors.grayScale[300];
  } else {
    iconFill = theme.colors.base.white;
  }
  if (typeof iconSize !== 'number') {
    switch (size) {
      case 'small':
        iconSize = 18;
        break;
      case 'medium':
        iconSize = 20;
        break;
    }
  }

  const iconProps: IconProviderProps = {
    fill: iconFill, size: iconSize
  };

  let textVariant: TypographyVariant;
  switch (variant) {
    case 'primary':
    case 'secondary':
      switch (size) {
        case 'small':
          textVariant = 'button-sm';
          break;
        case 'medium':
          textVariant = 'button-md';
          break;
      }
      break;
    case 'text':
      textVariant = 'body-m-regular';
      break;
  }

  const {
    handleTooltipMouseDown,
    handleTooltipMouseUp,
    handleTooltipMouseEnter,
    handleTooltipMouseLeave
  } = useTooltip();

  const [isPress, setIsPress] = useState(false);

  const handleMouseDown = useCallback<React.MouseEventHandler<HTMLButtonElement>>((event) => {
    setIsPress(true);
    handleTooltipMouseDown(event);
    props.onMouseDown?.(event);
  }, [handleTooltipMouseDown, props.onMouseDown]);
  const handleMouseUp = useCallback<React.MouseEventHandler<HTMLButtonElement>>((event) => {
    setIsPress(false);
    handleTooltipMouseUp(event);
    props.onMouseUp?.(event);
  }, [handleTooltipMouseUp, props.onMouseUp]);

  const handleMouseEnter = useCallback<React.MouseEventHandler<HTMLButtonElement>>((event) => {
    handleTooltipMouseEnter(event);
    props.onMouseEnter?.(event);
  }, [handleTooltipMouseEnter, props.onMouseEnter]);
  const handleMouseLeave = useCallback<React.MouseEventHandler<HTMLButtonElement>>((event) => {
    setIsPress(false);
    handleTooltipMouseLeave(event);
    props.onMouseLeave?.(event);
  }, [handleTooltipMouseLeave, props.onMouseLeave]);

  return (
    <ButtonStyled
      $variant={variant}
      $size={size}
      $icon={isIcon}
      $press={isPress}
      $disabled={disabled}
      $fullWidth={fullWidth}
      $color={color}
      $hoverColor={hoverColor}
      {...props}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {startIcon ? (
        <IconProvider {...iconProps}>
          {startIcon}
        </IconProvider>
      ) : null}
      {isText && (
        <ButtonText
          $disabled={disabled}
          variant={textVariant}
        >
          {children}
        </ButtonText>
      )}
      {isIcon && (
        <IconProvider
          {...iconProps}
        >
          {children}
        </IconProvider>
      )}
      {endIcon ? (
        <IconProvider {...iconProps}>
          {endIcon}
        </IconProvider>
      ) : null}
    </ButtonStyled>
  );
};

export * from './types';
export * from './styled';
