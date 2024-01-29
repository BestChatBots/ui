import React from 'react';
import {
  PlatformIconContainer, PlatformName, PlatformStyled, PlatformText 
} from './styled';
import { Tooltip, TooltipConsumer } from '../tooltip';
import { IconProvider } from '../icon';
import { PlatformVariant } from './types';

export interface PlatformProps extends React.ComponentProps<'span'> {
  variant?: PlatformVariant;
  icon: React.ReactNode;
  name?: string;
  delete?: React.ReactNode;
}

export const Platform: React.FC<PlatformProps> = ({
  variant = 'icon', icon, name, delete: deleteNode, ...props
}) => {
  const isIconSkeleton = React.isValidElement(icon) && (icon.type as React.FC).displayName === 'Skeleton';

  return (
    <PlatformStyled
      {...props}
    >
      {variant === 'icon' && (
        isIconSkeleton ? (
          <PlatformIconContainer>
            {icon}
          </PlatformIconContainer>
        ) : (
          <Tooltip label={name}>
            <TooltipConsumer>
              {({
                handleTooltipMouseEnter,
                handleTooltipMouseLeave,
                handleTooltipMouseDown,
                handleTooltipMouseUp
              }) => (
                <PlatformIconContainer
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
                </PlatformIconContainer>
              )}
            </TooltipConsumer>
          </Tooltip>
        )
      )}
      {variant === 'text' && (
        <PlatformText>
          <IconProvider
            size={24}
          >
            {icon}
          </IconProvider>
          {typeof name === 'string' && (
            <PlatformName>
              {name}
            </PlatformName>
          )}
          {typeof name !== 'string' && name}
          {deleteNode}
        </PlatformText>
      )}
    </PlatformStyled>
  );
};

export * from './types';
export * from './styled';
export * from './list';
