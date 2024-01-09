import React from 'react';
import { PlatformIcon, PlatformStyled } from './styled';
import { Tooltip, TooltipConsumer } from '../tooltip';
import { IconProvider } from '../icon';

export interface PlatformProps extends React.ComponentProps<'span'> {
  icon: React.ReactNode;
  name?: string;
}

export const Platform: React.FC<PlatformProps> = ({
  icon, name, ...props
}) => {
  const isIconSkeleton = React.isValidElement(icon) && (icon.type as React.FC).displayName === 'Skeleton';

  return (
    <PlatformStyled
      {...props}
    >
      {isIconSkeleton && (
        <PlatformIcon>
          {icon}
        </PlatformIcon>
      )}
      {!isIconSkeleton && (
        <Tooltip label={name}>
          <TooltipConsumer>
            {({
              handleTooltipMouseEnter,
              handleTooltipMouseLeave,
              handleTooltipMouseDown,
              handleTooltipMouseUp
            }) => (
              <PlatformIcon
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
              </PlatformIcon>
            )}
          </TooltipConsumer>
        </Tooltip>
      )}
    </PlatformStyled>
  );
};

export * from './styled';
export * from './list';
