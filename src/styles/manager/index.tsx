import React from 'react';
import { StyleSheetManager } from 'styled-components';
import { BestChatBotsStyleSheetPlugin } from './plugin';

export const BestChatBotsStyleSheetManager: React.FC<React.PropsWithChildren> = ({
  children
}) => (
  <StyleSheetManager
    stylisPlugins={[
      BestChatBotsStyleSheetPlugin
    ]}
  >
    {children}
  </StyleSheetManager>
);
