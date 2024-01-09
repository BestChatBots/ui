import type { Meta, StoryObj } from '@storybook/react';
import { Stars } from '.';
import { StoryDecorator } from '@/story-decorator';
import { Skeleton as BestChatBotsSkeleton } from '@/components/skeleton'; 

export type StarsMeta = Meta<typeof Stars>;

export type StarsStory = StoryObj<typeof Stars>;

export const Basic: StarsStory = {
  args: {
    filled: 3
  }
};

export const Skeleton: StarsStory = {
  args: {
    children: (
      <BestChatBotsSkeleton />
    )
  }
};

export default {
  title: 'Components/Stars',
  component: Stars,
  decorators: [StoryDecorator()]
} as StarsMeta;
