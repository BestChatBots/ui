import React from 'react';
import { BestChatBotsGlobalStyle, BestChatBotsGlobalStyleProps, BestChatBotsStyleSheetManager } from '@/styles';
import { ThemeProvider } from '@/theme';

export interface BestChatBotsUIProviderProps extends React.PropsWithChildren {
  globalStyle?: BestChatBotsGlobalStyleProps;
}

export const BestChatBotsUIProvider: React.FC<BestChatBotsUIProviderProps> = ({
  globalStyle, children
}) => (
  <BestChatBotsStyleSheetManager>
    <ThemeProvider>
      {children}
      <BestChatBotsGlobalStyle 
        {...globalStyle}
      />
    </ThemeProvider>
  </BestChatBotsStyleSheetManager>
);
