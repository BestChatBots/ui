import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Portal } from '@/components/portal';
import {
  DrawerBackdrop, 
  DrawerBody, 
  DrawerBodyContent, 
  DrawerBodyScrollbarWrapper, 
  DrawerCloseButton, 
  DrawerHead, 
  DrawerStyled, 
  DrawerTitle, 
  DrawerWindow 
} from './styled';
import { useTheme } from '@/theme';

export type DrawerCloseEventHandler = () => unknown;

export interface DrawerProps extends React.ComponentProps<'div'> {
  open: boolean;
  title?: string;
  buttons?: React.ReactNode;
  onClose?: DrawerCloseEventHandler;
}

export const Drawer: React.FC<DrawerProps> = ({
  open, title, buttons, children, onClose, ...props
}) => {
  const theme = useTheme();

  return (
    <Portal>
      <AnimatePresence>
        {open && (
          <DrawerStyled
            {...props}
          >
            <DrawerBackdrop
              open={open}
              onClick={onClose}
            />
            <DrawerWindow
              variants={{
                open: {
                  right: 0,
                  opacity: 1
                },
                close: {
                  right: `-${theme.drawer.width}`,
                  opacity: 0.5
                }
              }}
              initial="close"
              animate="open"
              exit="close"
            >
              <DrawerHead>
                <DrawerTitle>
                  {title}
                </DrawerTitle>
                <DrawerCloseButton
                  onClick={onClose}
                />
              </DrawerHead>
              <DrawerBody>
                <DrawerBodyScrollbarWrapper>
                  <DrawerBodyContent>
                    {children}
                  </DrawerBodyContent>
                </DrawerBodyScrollbarWrapper>
              </DrawerBody>
              {buttons}
            </DrawerWindow>
          </DrawerStyled>
        )}
      </AnimatePresence>
    </Portal>
  );
};

export * from './styled';
export * from './group';
