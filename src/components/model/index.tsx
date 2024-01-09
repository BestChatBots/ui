import React from 'react';
import { ModelVariant } from './types';
import {
  ModelIcon, ModelName, ModelStyled, ModelText 
} from './styled';
import { Tooltip, TooltipConsumer } from '@/components/tooltip';
import { IconProvider } from '@/components/icon';

export type ModelDeleteEventHandler = () => unknown;

export interface ModelProps extends React.ComponentProps<'span'> {
  variant?: ModelVariant;
  icon: React.ReactNode;
  name?: string;
  delete?: React.ReactNode;
}

export const Model: React.FC<ModelProps> = ({
  variant = 'icon', icon, name, delete: deleteNode, ...props
}) => {
  const isIconSkeleton = React.isValidElement(icon) && (icon.type as React.FC).displayName === 'Skeleton';

  return (
    <ModelStyled
      $variant={variant}
      {...props}
    >
      {variant === 'icon' && (
        isIconSkeleton ? (
          <ModelIcon>
            {icon}
          </ModelIcon>
        ) : (
          <Tooltip label={name}>
            <TooltipConsumer>
              {({
                handleTooltipMouseEnter,
                handleTooltipMouseLeave,
                handleTooltipMouseDown,
                handleTooltipMouseUp
              }) => (
                <ModelIcon
                  onMouseEnter={handleTooltipMouseEnter}
                  onMouseLeave={handleTooltipMouseLeave}
                  onMouseDown={handleTooltipMouseDown}
                  onMouseUp={handleTooltipMouseUp}
                >
                  <IconProvider
                    size={24}
                  >
                    {icon}
                  </IconProvider>
                </ModelIcon>
              )}
            </TooltipConsumer>
          </Tooltip>
        )
      )}
      {variant === 'text' && (
        <ModelText>
          <IconProvider
            size={24}
          >
            {icon}
          </IconProvider>
          {typeof name === 'string' && (
            <ModelName>
              {name}
            </ModelName>
          )}
          {typeof name !== 'string' && name}
          {deleteNode}
        </ModelText>
      )}
    </ModelStyled>
  );
};

export * from './types';
export * from './styled';
export * from './list';
