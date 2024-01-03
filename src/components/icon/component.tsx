import React from 'react';
import { IconProps } from '.';

export type IconComponent = React.FC<IconProps> & {
  bestchatbotsType?: 'icon';
};

export function icon<Component extends React.FC>(component: Component): IconComponent {
  (component as IconComponent).bestchatbotsType = 'icon';

  return component;
}

// eslint-disable-next-line
export function isIconComponent(component: any): boolean {
  return typeof component === 'function' && component.bestchatbotsType === 'icon';
}
