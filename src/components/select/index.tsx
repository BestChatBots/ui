import React, {
  useCallback, useEffect, useRef, useState 
} from 'react';
import { SelectDataItem, SelectVariant } from './types';
import {
  SelectArrow,
  SelectInput, 
  SelectOption, 
  SelectOptionList, 
  SelectOptionText, 
  SelectOptions, 
  SelectPlaceholder, 
  SelectStyled, 
  SelectValue, 
  SelectValueList, 
  SelectValueListItem, 
  SelectValues,
  SelectContent,
  SelectLabel,
  SelectErrorText,
  SelectCheckboxes,
  SelectCheckboxList,
  SelectCheckbox,
  SelectIndicator,
  SelectContentScrollbarWrapper,
  SelectContentContent,
  SelectLoadingIcon
} from './styled';
import { Portal } from '@/components/portal';
import { IconProvider } from '@/components/icon';
import { useTheme } from '@/theme';

export type SelectChangeEventHandler = (value: string) => unknown;

export type SelectMultiChangeEventHandler = (value: string[]) => unknown;

export interface SelectDefaultProps {
  multiple?: false;
  value?: string;
  onChange?: SelectChangeEventHandler;
}

export interface SelectMultiProps {
  multiple: true;
  value?: string[];
  onChange?: SelectMultiChangeEventHandler;
}

export type SelectProps = (SelectDefaultProps | SelectMultiProps) & {
  className?: string;
  variant?: SelectVariant;
  label?: string;
  error?: string;
  valueLabel?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  data: SelectDataItem[];
  placeholder?: string;
  fullWidth?: boolean;
};

export const Select: React.FC<SelectProps> = ({
  className, 
  variant = 'default', disabled = false, loading = false, fullWidth = false, 
  ...props
}) => {
  const theme = useTheme();

  const setInitialValue = useCallback((value: string[]) => {
    if (props.multiple) {
      props.onChange?.(value);
    } else {
      props.onChange?.(value[0] ?? '');
    }
  }, [props.onChange]);

  const [value, setValue] = typeof props.value !== 'undefined' ? [typeof props.value === 'string' ? [props.value] : props.value, setInitialValue] : useState<string[]>([]);
  const [label, setLabel] = typeof props.valueLabel !== 'undefined' ? [props.valueLabel ?? null, () => {}] : useState<React.ReactNode>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [width, setWidth] = useState(0);

  const isMultiple = !!props.multiple;
  const isLabel = !!label;
  const isValue = value.length !== 0;
  const isPlaceholder = !!props.placeholder;
  const isError = !!props.error;
  const isLoading = loading;

  const inputRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleInputClick = useCallback(() => {
    const inputEl: HTMLDivElement | null = inputRef.current;

    if (inputEl !== null && !disabled) {
      const rect = inputEl.getBoundingClientRect();
      const { width, height } = rect;

      const x: number = rect.left + window.scrollX;
      const y: number = rect.top + window.scrollY + height;

      setX(x);
      setY(y);
      setWidth(width);
      
      setIsOpen(!isOpen);
    }
  }, [disabled, isOpen]);

  const handleOptionClick = useCallback((item: SelectDataItem) => {
    if (props.multiple) {
      switch (variant) {
        case 'default':
          setValue([...new Set([...value, item.value])]);
          setLabel(null);
          break;
        case 'checkbox':
          if (value.some((value) => value === item.value)) {
            setValue(value.filter((value) => value !== item.value));
          } else {
            setValue([...new Set([...value, item.value])]);
          }

          setLabel(null);
          break;
      }
    } else {
      setValue([item.value]);
      setLabel(item.label);
    }

    if (variant === 'default') {
      setIsOpen(false);
    }
  }, [value, setValue, setLabel, props.multiple, variant, isOpen]);

  const handleValueDelete = useCallback((item: SelectDataItem, event: React.MouseEvent) => {
    event.stopPropagation();
    
    setValue(
      value.filter((value) => value !== item.value)
    );
    setIsOpen(false);
  }, [value]);

  useEffect(() => {
    if (isOpen) {
      const clickListener = (event: Event) => {
        const inputEl: HTMLDivElement | null = inputRef.current;
        const contentEl: HTMLDivElement | null = contentRef.current;

        if (inputEl === null || contentEl === null) {
          return;
        }
        if (
          inputEl.contains(event.target as Element) 
          || contentEl.contains(event.target as Element)
        ) {
          return;
        }

        setIsOpen(false);
      };
      
      document.addEventListener('click', clickListener);

      return () => {
        document.removeEventListener('click', clickListener);
      };
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      const scrollListener = () => {
        setIsOpen(false);
      };

      document.addEventListener('scroll', scrollListener);

      return () => {
        document.removeEventListener('scroll', scrollListener);
      };
    }
  }, [isOpen]);

  return (
    <SelectStyled
      $fullWidth={fullWidth}
      className={className}
    >
      {props.label && (
        <SelectLabel>
          {props.label}
        </SelectLabel>
      )}
      <SelectInput
        $open={isOpen}
        $multiple={isMultiple}
        $variant={variant}
        $value={isValue}
        $error={isError}
        $fullWidth={fullWidth}
        ref={inputRef}
        onClick={handleInputClick}
      >
        {isLabel ? (
          <SelectValue>
            {label}
          </SelectValue>
        ) : isValue ? (
          !props.multiple ? (
            <SelectValue>
              {value[0]}
            </SelectValue>
          ) : (
            <SelectValues>
              <SelectValueList>
                {value.map((value) => {
                  const item: SelectDataItem | null = props.data.find((item) => (
                    item.value === value)) ?? null;

                  if (item === null) {
                    return null;
                  }
                  return (
                    <SelectValueListItem
                      key={item.value}
                      onDelete={handleValueDelete.bind(null, item)}
                    >
                      {item.label ?? item.value}
                    </SelectValueListItem>
                  );
                })}
              </SelectValueList>
            </SelectValues>
          )
        ) : isPlaceholder ? (
          <SelectPlaceholder>
            {props.placeholder}
          </SelectPlaceholder>
        ) : null}
        {isLoading && (
          <SelectLoadingIcon />
        )}
        {!isLoading && (
          <>
            {(props.multiple && variant === 'checkbox' && value.length !== 0) && (
              <SelectIndicator>
                {value.length}
              </SelectIndicator>
            )}
          </>
        )}
        <SelectArrow 
          initial={{
            transform: `rotateZ(${isOpen ? 180 : 0}deg)`
          }}
          animate={{
            transform: `rotateZ(${isOpen ? 180 : 0}deg)`
          }}
        />
      </SelectInput>
      {isOpen && (
        <Portal>
          <SelectContent
            ref={contentRef}
            style={{
              left: x,
              top: y,
              width
            }}
          >
            <SelectContentScrollbarWrapper>
              <SelectContentContent>
                {variant === 'default' && (
                  <SelectOptions>
                    <SelectOptionList>
                      {props.data.map((item) => {
                        const isActive = value.some((value) => value === item.value);

                        return (
                          <SelectOption
                            $active={isActive}
                            $multiple={isMultiple}
                            key={item.value}
                            onClick={handleOptionClick.bind(null, item)}
                          >
                            <IconProvider
                              size={24}
                              fill={theme.colors.accent.primary}
                            >
                              {item.icon}
                            </IconProvider>
                            <SelectOptionText>
                              {item.label}
                            </SelectOptionText>
                          </SelectOption>
                        );
                      })}
                    </SelectOptionList>
                  </SelectOptions>
                )}
                {variant === 'checkbox' && (
                  <SelectCheckboxes>
                    <SelectCheckboxList>
                      {props.data.map((item) => {
                        const isActive = value.some((value) => value === item.value);
                    
                        return (
                          <SelectCheckbox
                            key={item.value}
                            checked={isActive}
                            icon={item.icon}
                            label={item.label}
                            onChange={handleOptionClick.bind(null, item)}
                          />
                        );
                      })}
                    </SelectCheckboxList>
                  </SelectCheckboxes>
                )}
              </SelectContentContent>
            </SelectContentScrollbarWrapper>
          </SelectContent>
        </Portal>
      )}
      {props.error && (
        <SelectErrorText>
          {props.error}
        </SelectErrorText>
      )}
    </SelectStyled>
  );
};

export * from './types';
