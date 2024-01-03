import React, {
  useCallback, useEffect, useRef, useState 
} from 'react';
import { AnimatePresence } from 'framer-motion';
import { 
  HeaderLangArrow, 
  HeaderLangContent, 
  HeaderLangIcon, 
  HeaderLangList, 
  HeaderLangListItem, 
  HeaderLangListItemName, 
  HeaderLangName, 
  HeaderLangStyled, 
  HeaderLangToggleButton 
} from './styled';

export type HeaderLangChangeEventHandler = (value: string) => void;

export type HeaderLangValue = string;

export interface HeaderLangProps {
  value: HeaderLangValue;
  onChange?: HeaderLangChangeEventHandler;
  data: HeaderLangValue[];
}

export const HeaderLang: React.FC<HeaderLangProps> = ({
  value, onChange, data
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const handleChange = useCallback((value: string) => {
    onChange?.(value);
    setIsOpen(false);
  }, [onChange]);

  useEffect(() => {
    const element: HTMLDivElement | null = elementRef.current;

    if (element !== null) {
      const clickListener = (event: Event) => {
        if (!element.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };
      const blurListener = () => setIsOpen(false);

      document.addEventListener('click', clickListener);
      window.addEventListener('blur', blurListener);

      return () => {
        document.removeEventListener('click', clickListener);
        window.removeEventListener('blur', blurListener);
      };
    }
  }, []);

  return (
    <HeaderLangStyled
      ref={elementRef}
    >
      <HeaderLangToggleButton
        $open={isOpen}
        onClick={handleToggleClick}
      >
        <HeaderLangIcon />
        <HeaderLangName>
          {value.toUpperCase()}
        </HeaderLangName>
        <HeaderLangArrow 
          initial={{
            transform: `rotateZ(${isOpen ? -180 : 0}deg)`
          }}
          animate={{
            transform: `rotateZ(${isOpen ? -180 : 0}deg)`,
            transition: {
              duration: 0.15
            }
          }}
        />
      </HeaderLangToggleButton>
      <AnimatePresence>
        {isOpen && (
          <HeaderLangContent
            animate={{
              opacity: isOpen ? 1 : 0.5,
              transform: `scale(${isOpen ? 1 : 0.999})`,
              transition: {
                duration: 0.15
              }
            }}
            exit={{
              opacity: 0,
              transform: 'scale(0.999)'
            }}
          >
            <HeaderLangList>
              {data.map((value) => (
                <HeaderLangListItem
                  key={value}
                  onClick={handleChange.bind(null, value)}
                >
                  <HeaderLangListItemName>
                    {value.toUpperCase()}
                  </HeaderLangListItemName>
                </HeaderLangListItem>
              ))}
            </HeaderLangList>
          </HeaderLangContent>
        )}
      </AnimatePresence>
    </HeaderLangStyled>
  );
};

export * from './styled';
