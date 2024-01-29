import type { Meta, StoryObj } from '@storybook/react';
import { StoryDecorator } from '@/story-decorator';
import { WebIcon } from '@/icons';
import { Skeleton as BestChatBotsSkeleton } from '@/components/skeleton'; 
import { Platform, PlatformDeleteButton } from '.';

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

export const Text: PlatformStory = {
  args: {
    ...Basic.args,
    variant: 'text',
    delete: (
      <PlatformDeleteButton />
    )
  }
};

export default {
  title: 'Components/Platform',
  component: Platform,
  decorators: [StoryDecorator({ padding: '60px 50px' })]
} as PlatformMeta;
