import type { Meta, StoryObj } from '@storybook/react';
import { StoryDecorator } from '@/story-decorator';
import { Badge } from '.';

export type BadgeMeta = Meta<typeof Badge>;

export type BadgeStory = StoryObj<typeof Badge>;

export const Basic: BadgeStory = {
  args: {
    children: 'Badge'
  }
};

export default {
  title: 'Components/Badge',
  component: Badge,
  decorators: [StoryDecorator()]
} as BadgeMeta;
