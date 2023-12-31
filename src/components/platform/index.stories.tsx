import type { Meta, StoryObj } from '@storybook/react';
import { StoryDecorator } from '@/story-decorator';
import { WebIcon } from '@/icons';
import { Skeleton as BestChatBotsSkeleton } from '@/components/skeleton'; 
import { Platform } from '.';

export type PlatformMeta = Meta<typeof Platform>;

export type PlatformStory = StoryObj<typeof Platform>;

export const Basic: PlatformStory = {
  args: {
    icon: <WebIcon />,
    name: 'Web'
  }
};

export const Skeleton: PlatformStory = {
  args: {
    icon: <BestChatBotsSkeleton />
  }
};

export default {
  title: 'Components/Platform',
  component: Platform,
  decorators: [StoryDecorator({ padding: '60px 50px' })]
} as PlatformMeta;
