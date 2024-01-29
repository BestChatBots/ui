import React, { useCallback, useState } from 'react';
import { DrawerGroupContent, DrawerGroupName, DrawerGroupStyled } from './styled';
import { DrawerGroupDataItem } from './types';
import { Checkbox } from '@/components/checkbox';

export type DrawerGroupChangeEventHandler = (value: string[]) => unknown;

export interface DrawerGroupProps extends Omit<React.ComponentProps<'div'>, 'onChange'> {
  name: string;
  value?: string[];
  data?: DrawerGroupDataItem[];
  onChange?: DrawerGroupChangeEventHandler;
}

export const DrawerGroup: React.FC<DrawerGroupProps> = ({
  name, value: initialValue, data, children, onChange, ...props
}) => {
  const setInitialValue = useCallback((value: string[]) => {
    onChange?.(value);
  }, [onChange]);

  const [value, setValue] = typeof initialValue !== 'undefined' ? [initialValue, setInitialValue] : useState<string[]>([]);

  const handleItemClick = useCallback((item: DrawerGroupDataItem) => {
    if (value.some((value) => value === item.value)) {
      setValue(value.filter((value) => value !== item.value));
    } else {
      setValue([...new Set([...value, item.value])]);
    }
  }, [value, setValue]);

  return (
    <DrawerGroupStyled
      {...props}
    >
      <DrawerGroupName>
        {name}
      </DrawerGroupName>
      <DrawerGroupContent>
        {Array.isArray(data) && data.map((item) => {
          const isActive = value.some((value) => value === item.value);

          return (
            <Checkbox
              key={item.value}
              checked={isActive}
              icon={item.icon}
              label={item.label}
              onChange={handleItemClick.bind(null, item)}
            />
          );
        })}
        {!Array.isArray(data) && children}
      </DrawerGroupContent>
    </DrawerGroupStyled>
  );
};

export * from './types';
export * from './list';
