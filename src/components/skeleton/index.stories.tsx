import type { Meta, StoryObj } from '@storybook/react';
import { StoryDecorator } from '@/story-decorator';
import { Skeleton } from '.';

export type SkeletonMeta = Meta<typeof Skeleton>;

export type SkeletonStory = StoryObj<typeof Skeleton>;

export const Basic: SkeletonStory = {};

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
  decorators: [StoryDecorator()]
} as SkeletonMeta;
