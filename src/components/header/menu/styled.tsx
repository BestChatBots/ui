import { AnimationProps, motion } from 'framer-motion';
import { styled, css } from 'styled-components';
import React from 'react';
import { adaptive } from '@/adaptive';
import { Container } from '@/components/container';

export const HeaderMenuStyled: React.FC<AnimationProps & React.PropsWithChildren> = styled(motion.div)`
  display: flex;
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.headerMenu};
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.grayScale[800]};
  ${adaptive({
    desktop: css`
      display: none;
    `
  })}
`;

export const HeaderMenuContainer = styled(Container)`
  margin: 0px;
`;

export const HeaderMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
  padding-top: calc(${({ theme }) => theme.header.tablet.height} + 20px);
  width: 100%;
  ${adaptive({
    mobile: css`
      padding: 16px 0px;
      padding-top: calc(${({ theme }) => theme.header.mobile.height} + 16px);
    `
  })}
`;
