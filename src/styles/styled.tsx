import { createGlobalStyle, css } from 'styled-components';
import { ScrollbarStyle } from '@/components/scrollbar';

export interface BestChatBotsGlobalStyleProps {
  $margin?: string;
  $padding?: string;
}

export const BestChatBotsGlobalStyleStyled = createGlobalStyle<BestChatBotsGlobalStyleProps>`
  html {
    @media (max-width: 1600px) {
      --bestchatbots-scale: 0.85;
    }
    @media (max-width: 1200px) {
      --bestchatbots-scale: 0.8;
    }
    @media (max-width: 1100px) {
      --bestchatbots-scale: 0.75;
    }
    @media (max-width: 1060px) {
      --bestchatbots-scale: 0.9;
    }
    @media (max-width: 800px) {
      --bestchatbots-scale: 0.85;
    }
    @media (max-width: 600px) {
      --bestchatbots-scale: 0.8;
    }
    @media (max-width: 550px) {
      --bestchatbots-scale: 0.9;
    }
    @media (max-width: 380px) {
      --bestchatbots-scale: 0.8;
    }
    @media (max-width: 360px) {
      --bestchatbots-scale: 0.7;
    }
    @media (max-width: 320px) {
      --bestchatbots-scale: 0.7;
    }
    @media (max-width: 290px) {
      --bestchatbots-scale: 0.6;
    }
    @media (max-width: 250px) {
      --bestchatbots-scale: 0.5;
    }
    @media (max-width: 220px) {
      --bestchatbots-scale: 0.45;
    }
    @media (max-width: 220px) {
      --bestchatbots-scale: 0.35;
    }
  }
  
  body {
    transition: background 0.3s;
    background: ${({ theme }) => theme.colors.base.black};
    ${({ $margin }) => typeof $margin === 'string' && css`
      margin: ${$margin} !important;
    `}
    padding: ${({ $padding }) => $padding ?? '0px'} !important;
    ${ScrollbarStyle}
  }

  * {
    box-sizing: border-box;
  }

  #nprogress .bar {
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.colors.accent.primary} !important;
  }
  #nprogress .peg {
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.accent.primary}, 0 0 5px ${({ theme }) => theme.colors.accent.primary} !important;
  }
`;
