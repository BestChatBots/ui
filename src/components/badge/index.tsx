import React from 'react';
import { TypographyVariant } from '@/components/typography';
import { BadgeSize } from './types';
import { BadgeStyled, BadgeText } from './styled';

export interface BadgeProps extends React.ComponentProps<'span'> {
  size?: BadgeSize;
}

export const Badge: React.FC<BadgeProps> = ({
  size = 'xs', children, ...props
}) => {
  let textVariant: TypographyVariant;
  switch (size) {
    case 'xs':
      textVariant = 'body-s-medium';
      break;
    case 'md':
      textVariant = 'body-m-medium';
      break;
  }

  return (
    <BadgeStyled
      {...props}
    >
      <BadgeText
        variant={textVariant}
      >
        {children}
      </BadgeText>
    </BadgeStyled>
  );
};

export * from './types';
