import React from 'react';
import {
  ModalCloseButton,
  ModalContent,
  ModalStyled, 
  ModalTitle, 
  ModalWindow,
  ModalWindowBody, 
  ModalWindowBodyContent,
  ModalWindowBodyScrollbarWrapper
} from './styled';
import { Backdrop } from '@/components/backdrop';
import { Portal } from '@/components/portal';

export type ModalCloseEventHandler = () => unknown;

export interface ModalProps extends React.PropsWithChildren {
  open: boolean;
  title?: string | null;
  scrollbar?: boolean; 
  onClose?: ModalCloseEventHandler;
}

export const Modal: React.FC<ModalProps> = ({
  open, title = null, scrollbar = false, children, onClose 
}) => (
  <Portal>
    {open && (
      <ModalStyled>
        <Backdrop open={open} onClick={onClose} />
        <ModalWindow
          initial={{
            opacity: 0,
            transform: 'scale(0.9)'
          }}
          animate={{ 
            opacity: 1,
            transform: 'scale(1)'
          }}
          transition={{
            duration: 0.15
          }}
        >
          <ModalWindowBody>
            {title ? <ModalTitle>{title}</ModalTitle> : null}
            <ModalCloseButton onClick={onClose} />
            <ModalWindowBodyContent>
              <ModalWindowBodyScrollbarWrapper
                overflow={scrollbar ? 'auto' : 'visible'}
                disabled={!scrollbar}
                disableShadows={!scrollbar}
              >
                <ModalContent>
                  {children}
                </ModalContent>
              </ModalWindowBodyScrollbarWrapper>
            </ModalWindowBodyContent>
          </ModalWindowBody>
        </ModalWindow>
      </ModalStyled>
    )}
  </Portal>
);
