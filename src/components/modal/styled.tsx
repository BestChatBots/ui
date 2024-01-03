import { AnimationProps, motion } from 'framer-motion';
import { styled, css } from 'styled-components';
import { Scrollbar, ScrollbarShadow } from '@/components/scrollbar';
import { Typography } from '@/components/typography';
import { Button } from '@/components/button';
import { adaptive } from '@/adaptive';
import { CloseIcon } from '@/icons';

export const ModalStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: ${({ theme }) => theme.zIndex.modal};
`;

export const ModalWindow: React.FC<React.ComponentProps<'div'> & AnimationProps> = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  max-width: 460px;
  background: ${({ theme }) => theme.colors.grayScale[800]};
  border: 1px solid ${({ theme }) => theme.colors.grayScale[700]};
  border-radius: 12px;
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.modal + 1};
  ${adaptive({
    mobile: css`
      margin: 0px 10px;
    `
  })}
`;

export const ModalWindowBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  box-sizing: border-box;
  padding: 18px;
  padding-right: 9px;
`;

export const ModalWindowBodyScrollbarWrapper = styled(Scrollbar).attrs(({ theme }) => ({ variant: 'secondary', scrollShadows: { color: theme.colors.grayScale[800], top: <ScrollbarShadow side="top" />, bottom: <ScrollbarShadow side="bottom" /> } }))`
  display: flex;
  width: 100%;
  height: 100%;
  padding-right: 9px;
  max-height: 80vh;
`;

export const ModalWindowBodyContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;

export const ModalTitle = styled(Typography).attrs({ component: 'h4', variant: 'h4' })`
  margin-bottom: 26px;
  cursor: default;
`;

export const ModalCloseButton = styled(Button).attrs({ variant: 'text', iconSize: 24, children: <CloseIcon /> })`
  display: inline-flex;
  position: absolute;
  top: 19px;
  right: 18px;
`;
