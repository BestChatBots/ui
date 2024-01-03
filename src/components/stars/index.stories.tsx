import type { Meta, StoryObj } from '@storybook/react';
import { Stars } from '.';
import { StoryDecorator } from '@/story-decorator';

export type StarsMeta = Meta<typeof Stars>;

export type StarsStory = StoryObj<typeof Stars>;

export const Basic: StarsStory = {
  args: {
    filled: 3
  }
};

export default {
  title: 'Components/Stars',
  component: Stars,
  decorators: [StoryDecorator()]
} as StarsMeta;
