import type { Preview } from '@storybook/react';

export const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#161619'
        }
      ]
    },
    actions: { 
      argTypesRegex: '^on[A-Z].*' 
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      }
    }
  }
};

export default preview;
