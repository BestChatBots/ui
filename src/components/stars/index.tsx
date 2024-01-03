import React, { useCallback } from 'react';
import { StarSize } from './types';
import { StarList, StarsStyled } from './styled';
import { StarFilledIcon, StarOutlineIcon } from '@/icons';
import { IconProvider } from '@/components/icon';
import { useTheme } from '@/theme';

export type StarsHoverEventHandler = (filled: number) => unknown;

export type StarsSelectEventHandler = (filled: number) => unknown;

export interface StarsProps extends Omit<React.ComponentProps<'span'>, 'onSelect'> {
  filled: number;
  size?: StarSize;
  count?: number;
  onHover?: StarsHoverEventHandler;
  onSelect?: StarsSelectEventHandler;
}

export const Stars: React.FC<StarsProps> = ({
  filled = 0, size = 20, count = 5, onHover, onSelect, ...props
}) => {
  const theme = useTheme();

  const handleStarMouseEnter = useCallback((index: number) => {
    onHover?.(index + 1);
  }, [onHover]);

  const handleStarClick = useCallback((index: number) => {
    onSelect?.(index + 1);
  }, [onSelect]);

  return (
    <StarsStyled
      {...props}
    >
      <StarList
        $size={size}
      >
        <IconProvider
          size={size}
          fill={theme.colors.orange}
        >
          {[...Array(count)].map((_, index) => {
            if (index < filled) {
              return (
                <StarFilledIcon 
                  key={index}
                  onMouseEnter={handleStarMouseEnter.bind(null, index)}
                  onClick={handleStarClick.bind(null, index)}
                />
              );
            } 
            return (
              <StarOutlineIcon
                key={index}
                onMouseEnter={handleStarMouseEnter.bind(null, index)}
                onClick={handleStarClick.bind(null, index)}
              />
            );
          })}
        </IconProvider>
      </StarList>
    </StarsStyled>
  );
};

export * from './types';
