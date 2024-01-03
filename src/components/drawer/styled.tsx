import { styled } from 'styled-components';
import { AnimationProps, motion } from 'framer-motion';
import React from 'react';
import { Typography } from '@/components/typography';
import { Button } from '@/components/button';
import { Backdrop } from '@/components/backdrop';
import { CloseIcon } from '@/icons';
import { Scrollbar, ScrollbarShadow, ScrollbarStyled } from '@/components/scrollbar';

export const DrawerStyled = styled.div``;

export const DrawerBackdrop = styled(Backdrop)``;

export const DrawerWindow: React.FC<AnimationProps & React.PropsWithChildren> = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
  top: 0px;
  bottom: 0px;
  right: 0px;
  z-index: ${({ theme }) => theme.zIndex.drawer};
  width: 100%;
  max-width: ${({ theme }) => theme.drawer.width};
  background: ${({ theme }) => theme.colors.grayScale[800]};
  border-left: 1px solid ${({ theme }) => theme.colors.grayScale[700]};
  padding: 22px 16px;
`;

export const DrawerHead = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const DrawerTitle = styled(Typography).attrs({ component: 'h4', variant: 'body-l-regular' })`
  cursor: default;
  user-select: none;
`;

export const DrawerCloseButton = styled(Button).attrs({ variant: 'text', iconSize: 24, children: <CloseIcon /> })``;

export const DrawerBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 24px;
  overflow: hidden;
  > ${ScrollbarStyled} {
    width: 100%;
    height: 100%;
  }
`;

export const DrawerBodyScrollbarWrapper = styled(Scrollbar).attrs(() => ({ variant: 'secondary', scrollShadows: { top: <ScrollbarShadow side="top" />, bottom: <ScrollbarShadow side="bottom" /> } }))`
  display: flex;
  width: 100%;
  overflow: auto;
`;

export const DrawerBodyContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const DrawerButtons = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  margin-top: 24px;
`;
