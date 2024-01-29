import React, { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, AnimationProps, LayoutProps } from 'framer-motion';
import {
  NotificationCloseButton,
  NotificationContent, 
  NotificationIcon, 
  NotificationInfo, 
  NotificationLeft, 
  NotificationRight, 
  NotificationStyled, 
  NotificationText, 
  NotificationTitle 
} from './styled';
import {
  CircleCheckIcon, ErrorIcon, InfoCircleIcon, LoaderIcon, WarningIcon 
} from '@/icons';
import { NotificationVariant } from './types';
import { useNotifications } from './list';
import { useTheme } from '@/theme';
import { IconProvider } from '@/components/icon';

export type NotificationCloseEventHandler = (notificationId: string) => unknown;

export interface NotificationProps {
  className?: string;
  variant?: NotificationVariant;
  autoClose?: number | false;
  notificationId?: string;
  title?: string;
  children?: string;
  onClose?: NotificationCloseEventHandler;
}

export const Notification: React.FC<NotificationProps> = ({ 
  className,
  variant = 'info', 
  autoClose = 5000, 
  notificationId = 'unknown',
  title, 
  children,
  onClose
}) => {
  const theme = useTheme();

  const [isOpen, setIsOpen] = useState(true);
  const { isInNotificationList } = useNotifications();
  const isText = !!children && !!title;

  let iconComponent: React.FC;
  let iconColor: string;
  switch (variant) {
    case 'info':
      iconComponent = InfoCircleIcon;
      iconColor = theme.colors.info;
      break;
    case 'warn':
      iconComponent = WarningIcon;
      iconColor = theme.colors.orange;
      break;
    case 'error':
      iconComponent = ErrorIcon;
      iconColor = theme.colors.error;
      break;
    case 'success':
      iconComponent = CircleCheckIcon;
      iconColor = theme.colors.success;
      break;
    case 'loader':
      iconComponent = LoaderIcon;
      iconColor = theme.colors.info;
      break;
  }

  let animationProps: AnimationProps & LayoutProps;
  if (isInNotificationList) {
    animationProps = {
      layout: 'position',
      initial: { opacity: 0, x: 412 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 412 },
      transition: { duration: 0.25 }
    };
  } else {
    animationProps = {};
  }

  const handleExitComplete = useCallback(() => {
    if (!isOpen) {
      onClose?.(notificationId);
    }
  }, [isOpen, onClose, notificationId]);

  useEffect(() => {
    let closeTimeout: number | null;
    
    if (isOpen && autoClose) {
      closeTimeout = window.setTimeout(() => {
        setIsOpen(false);
      }, autoClose);
    } else {
      closeTimeout = null;
    }

    return () => {
      if (closeTimeout !== null) {
        window.clearTimeout(closeTimeout);
      }
    };
  }, [autoClose]);
  
  return (
    <AnimatePresence
      onExitComplete={handleExitComplete}
    >
      {isOpen && (
        <NotificationStyled
          {...animationProps}
          $variant={variant}
          className={className}
        >
          <NotificationContent
            $text={isText}
          >
            <NotificationLeft
              $text={isText}
            >
              <IconProvider
                size={18}
                fill={iconColor}
              >
                <NotificationIcon
                  $text={isText}
                  as={iconComponent}
                />
              </IconProvider>
              <NotificationInfo>
                <NotificationTitle
                  $variant={variant}
                >
                  {title ?? children}
                </NotificationTitle>
                {isText && (
                  <NotificationText
                    $variant={variant}
                  >
                    {children}
                  </NotificationText>
                )}
              </NotificationInfo>
            </NotificationLeft>
            <NotificationRight>
              <NotificationCloseButton 
                onClick={setIsOpen.bind(null, false)}
              />
            </NotificationRight>
          </NotificationContent>
        </NotificationStyled>
      )}
    </AnimatePresence>
  );
};

export * from './types';
export * from './styled';
export * from './list';
