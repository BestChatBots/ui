import React from 'react';
import { ImageProps } from '@/components/image';
import { useIconOrNull } from '../context';
import { IconImageStyled } from './styled';

export interface IconImageProps extends Omit<ImageProps, 'ref'> {
  size?: number;
  round?: boolean;
}

export const IconImage: React.FC<IconImageProps> = ({
  size: defaultSize = 18, round = false, ...props
}) => {
  const { size = 18 } = useIconOrNull() ?? { size: defaultSize };

  return (
    <IconImageStyled
      $round={round}
      width={size}
      height={size}
      {...props}
    />
  );
};
