import React, { useCallback, useState } from 'react';
import {
  StarsInputErrorText,
  StarsInputStars, 
  StarsInputStyled, 
  StarsInputType, 
  StarsInputTypeBadIcon, 
  StarsInputTypeGoodIcon, 
  StarsInputTypeText 
} from './styled';
import { StarsInputTypeProperty } from './types';
import { StarsHoverEventHandler, StarsSelectEventHandler } from '@/components/stars';

export type StarsInputChangeEventHandler = (filled: number) => unknown;

export type StarsInputHoverEventHandler = (filled: number) => unknown;

export type StarsInputStarsMouseLeaveEventHandler = (filled: number) => unknown;

export interface StarsInputProps extends Omit<React.ComponentProps<'div'>, 'children' | 'onChange'> {
  type?: StarsInputTypeProperty;
  filled?: number;
  fullWidth?: boolean;
  error?: string;
  onChange?: StarsInputChangeEventHandler;
  onHover?: StarsInputHoverEventHandler;
  onStarsMouseLeave?: StarsInputStarsMouseLeaveEventHandler;
}

export const StarsInput: React.FC<StarsInputProps> = ({
  type = 'good', filled: initialFilled, fullWidth = false, error, onChange, onHover, onStarsMouseLeave, ...props
}) => {
  const setInitialFilled = useCallback((filled: number) => {
    onChange?.(filled);
  }, [onChange]);

  const [filled, setFilled] = typeof initialFilled === 'number' ? [initialFilled, setInitialFilled] : useState(0);
  const [hoverFilled, setHoverFilled] = useState<number | null>(null);

  const handleStarsHover = useCallback<StarsHoverEventHandler>((filled: number) => {
    setHoverFilled(filled);
    onHover?.(filled);
  }, [onHover]);

  const handleStarsMouseLeave = useCallback(() => {
    onStarsMouseLeave?.(hoverFilled ?? 0);
    setHoverFilled(null);
  }, [onStarsMouseLeave, hoverFilled]);

  const handleStarsSelect = useCallback<StarsSelectEventHandler>((filled) => {
    setFilled(filled);
  }, [setFilled]);

  const isError = !!error;

  return (
    <StarsInputStyled
      $fullWidth={fullWidth}
      {...props}
    >
      <StarsInputStars 
        filled={hoverFilled || filled}
        onHover={handleStarsHover}
        onMouseLeave={handleStarsMouseLeave}
        onSelect={handleStarsSelect}
      />
      {filled !== 0 && (
        <>
          {type === 'good' && (
            <StarsInputType>
              <StarsInputTypeText
                $type={type}
              >
                Позитивный
              </StarsInputTypeText>
              <StarsInputTypeGoodIcon />
            </StarsInputType>
          )}
          {type === 'bad' && (
            <StarsInputType>
              <StarsInputTypeText
                $type={type}
              >
                Негативный
              </StarsInputTypeText>
              <StarsInputTypeBadIcon />
            </StarsInputType>
          )}
        </>
      )}
      {isError && (
        <StarsInputErrorText>
          {error}
        </StarsInputErrorText>
      )}
    </StarsInputStyled>
  );
};

export * from './types';
export * from './styled';
