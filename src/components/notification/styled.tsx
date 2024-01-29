import { css, styled } from 'styled-components';
import { motion } from 'framer-motion';
import { CloseIcon, InfoIcon } from '@/icons';
import { Typography } from '@/components/typography';
import { Button } from '@/components/button';
import { NotificationVariant } from './types';

export interface NotificationStyledProps {
  $variant: NotificationVariant;
}

export const NotificationStyled = styled(motion.div)<NotificationStyledProps>`
  display: flex;
  background: ${({ theme }) => theme.colors.grayScale[700]};
  border: 1px solid ${({ theme, $variant }) => {
    switch ($variant) {
      case 'info':
      case 'loader':
        return theme.colors.info;
      case 'warn':
        return theme.colors.orange;
      case 'error':
        return theme.colors.error;
      case 'success':
        return theme.colors.successDark;
    }
  }};
  border-radius: 8px;
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  max-width: 412px;
  padding: 16px;
  flex-shrink: 0;
  pointer-events: auto;
  cursor: ${({ $variant }) => {
    switch ($variant) {
      case 'loader':
        return 'progress';
      default:
        return 'default';
    }
  }};
`;

export interface NotificationContentProps {
  $text: boolean;
}

export const NotificationContent = styled.div<NotificationContentProps>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: ${({ $text }) => ($text ? 'flex-start' : 'center')};
  gap: 8px;
`;

export interface NotificationLeftProps {
  $text: boolean;
}

export const NotificationLeft = styled.div<NotificationLeftProps>`
  display: flex;
  gap: 10px;
  align-items: ${({ $text }) => ($text ? 'flex-start' : 'center')};
`;

export const NotificationRight = styled.div`
  display: flex;
`;

export interface NotificationIconProps {
  $text: boolean;
}

export const NotificationIcon = styled(InfoIcon)<NotificationIconProps>`
  ${({ $text }) => $text && css`
    margin-top: 2px;
  `}
`;

export const NotificationInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export interface NotificationTitleProps {
  $variant: NotificationVariant;
}

export const NotificationTitle = styled(Typography).attrs({ component: 'h3', variant: 'body-l-semibold' })<NotificationTitleProps>`
  color: ${({ theme, $variant }) => {
    switch ($variant) {
      case 'info':
      case 'loader':
        return theme.colors.info;
      case 'success':
        return theme.colors.success;
      case 'error':
        return theme.colors.error;
      case 'warn':
        return theme.colors.orange;
    }
  }};
`;

export interface NotificationTextProps {
  $variant: NotificationVariant;
}

export const NotificationText = styled(Typography).attrs({ component: 'p', variant: 'body-s-regular' })<NotificationTextProps>`
  margin-top: 8px;
  color: ${({ theme, $variant }) => {
    switch ($variant) {
      case 'info':
      case 'loader':
        return theme.colors.info;
      case 'success':
        return theme.colors.success;
      case 'error':
        return theme.colors.error;
      case 'warn':
        return theme.colors.orange;
    }
  }};
`;

export const NotificationCloseButton = styled(Button).attrs({ variant: 'text', children: <CloseIcon /> })``;
