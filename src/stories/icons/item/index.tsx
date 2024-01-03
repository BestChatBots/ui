import React, { useCallback } from 'react';
import { IconItemStyled } from './styled';
import { IconComponent, IconProps } from '@/components/icon';

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
    <IconItemStyled
      title={name}
      onClick={handleClick}
    >
      {React.createElement(children, props)}
    </IconItemStyled>
  );
};
