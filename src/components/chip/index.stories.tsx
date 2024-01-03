import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from '.';
import { StoryDecorator } from '@/story-decorator';

export type ChipMeta = Meta<typeof Chip>;

export type ChipStory = StoryObj<typeof Chip>;

export const Basic: ChipStory = {
  args: {
    children: 'Text'
  }
};

export default {
  title: 'Components/Chip',
  component: Chip,
  decorators: [StoryDecorator()]
} as ChipMeta;
