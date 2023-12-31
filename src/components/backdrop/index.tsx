import React, { useCallback, useEffect, useRef } from 'react';
import { BackdropStyled } from './styled';

export type BackdropClickEventHandler = (event: React.MouseEvent<HTMLDivElement>) => unknown;

export interface BackdropProps extends React.ComponentProps<typeof BackdropStyled> {
  open: boolean;
  onClick?: BackdropClickEventHandler;
}

export const Backdrop: React.FC<BackdropProps> = ({
  open, onClick, children, ...props 
}) => {
  const backdropRef = useRef<HTMLDivElement>(null);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target === backdropRef.current) {
        onClick?.(event);
      }
    },
    [onClick, backdropRef]
  );

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.removeProperty('overflow');
    }

    return () => {
      document.body.style.removeProperty('overflow');
    };
  }, [open]);

  if (!open) {
    return null;
  }
  return (
    <BackdropStyled
      {...props}
      variants={{
        visible: {
          background: 'rgba(0, 0, 0, 0.55)',
          backdropFilter: 'blur(5px)'
        },
        hidden: {
          background: 'rgba(0, 0, 0, 0)',
          backdropFilter: 'blur(0px)'
        }
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
      ref={backdropRef}
      onClick={handleClick}
    >
      {children}
    </BackdropStyled>
  );
};
