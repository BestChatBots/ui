import type { Meta, StoryObj } from '@storybook/react';
import { StoryDecorator } from '@/story-decorator';
import { CircularProgress } from '.';

export type CircularProgressMeta = Meta<typeof CircularProgress>;

export type CircularProgressStory = StoryObj<typeof CircularProgress>;

export const Logo: CircularProgressStory = {
  args: {
    variant: 'logo'
  }
};

export default {
  title: 'Components/Progress/Circular',
  component: CircularProgress,
  decorators: [StoryDecorator()]
} as CircularProgressMeta;
