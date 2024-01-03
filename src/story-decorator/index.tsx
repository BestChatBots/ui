import 'normalize.css';
import 'nprogress/nprogress.css';
import './style.css';
import { StoryFn } from '@storybook/react';
import { PortalElement } from '@/components/portal';
import { BestChatBotsUIProvider } from '@/provider';

export interface StoryDecoratorOptions {
  margin?: string;
  padding?: string;
}

export const StoryDecorator = ({
  margin, padding = '20px'
}: StoryDecoratorOptions = {}) => (Story: StoryFn) => (
  <BestChatBotsUIProvider
    globalStyle={{
      margin, padding
    }}
  >
    <Story />
    <PortalElement />
  </BestChatBotsUIProvider>
);
