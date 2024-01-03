import React from 'react';
import { ChipDeleteButton, ChipStyled, ChipText } from './styled';

export type ChipDeleteEventHandler = React.MouseEventHandler<HTMLButtonElement>;

export interface ChipProps extends React.ComponentProps<'span'> {
  onDelete?: ChipDeleteEventHandler;
}

export const Chip: React.FC<ChipProps> = ({
  children, onDelete, ...props
}) => (
  <ChipStyled
    {...props}
  >
    <ChipText>
      {children}
    </ChipText>
    <ChipDeleteButton
      onClick={onDelete}
    />
  </ChipStyled>
);
