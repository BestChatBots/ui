import React from 'react';
import { ExternalLinkIcon, ExternalLinkStyled, ExternalLinkText } from './styled';

export type ExternalLinkComponentType = keyof React.ReactHTML | React.ElementType;

export type ExternalLinkProps
  <ComponentType extends ExternalLinkComponentType = ExternalLinkComponentType> = {
    component?: ComponentType;
    as?: ComponentType;
  } & React.ComponentProps<ComponentType>;

export const ExternalLink: React.FC<ExternalLinkProps> = ({
  component, as, children, ...props
}) => (
  <ExternalLinkStyled
    {...props}
    as={as ?? component}
  >
    {typeof children === 'string' && (
      <ExternalLinkText>
        {children}
      </ExternalLinkText>
    )}
    {typeof children !== 'string' && children}
    <ExternalLinkIcon />
  </ExternalLinkStyled>
);
