import React, { useEffect } from 'react';
import { BestChatBotsGlobalStyleStyled } from './styled';

export interface BestChatBotsGlobalStyleProps {
  margin?: string;
  padding?: string;
}

export const BestChatBotsGlobalStyle: React.FC<BestChatBotsGlobalStyleProps> = ({
  margin, padding
}) => {
  useEffect(() => {
    const resizeListener = () => {
      const height = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--bestchatbots-vh', `${height}px`);
    };

    resizeListener();
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return (
    <BestChatBotsGlobalStyleStyled
      $margin={margin}
      $padding={padding}
    />
  );
};

export * from './manager';
