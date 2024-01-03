import type { Meta, StoryObj } from '@storybook/react';
import { StoryDecorator } from '@/story-decorator';
import { Background } from '.';

export type BackgroundMeta = Meta<typeof Background>;

export type BackgroundStory = StoryObj<typeof Background>;

export const Lines: BackgroundStory = {
  args: {
    variant: 'lines'
  }
};

export default {
  title: 'Components/Background',
  component: Background,
  decorators: [StoryDecorator()]
} as BackgroundMeta;
