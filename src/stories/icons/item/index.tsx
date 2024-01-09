import React, { useCallback } from 'react';
import { IconItemStyled } from './styled';
import { IconComponent, IconProps } from '@/components/icon';
import { Tooltip, TooltipConsumer } from '@/components/tooltip';

export interface IconItemProps extends Omit<IconProps, 'children'> {
  name: string;
  children: IconComponent;
}

export const IconItem: React.FC<IconItemProps> = ({ name, children, ...props }) => {
  const handleClick = useCallback(() => {
    window.navigator.clipboard.writeText(name);
    alert('Copied to clipboard.');
  }, [name]);
  
  return (
    <Tooltip
      label={name}
    >
      <TooltipConsumer>
        {({
          handleTooltipMouseEnter,
          handleTooltipMouseLeave,
          handleTooltipMouseDown,
          handleTooltipMouseUp
        }) => (
          <IconItemStyled
            onClick={handleClick}
            onMouseEnter={handleTooltipMouseEnter}
            onMouseLeave={handleTooltipMouseLeave}
            onMouseDown={handleTooltipMouseDown}
            onMouseUp={handleTooltipMouseUp}
          >
            {React.createElement(children, props)}
          </IconItemStyled>
        )}
      </TooltipConsumer>
    </Tooltip>
  );
};
