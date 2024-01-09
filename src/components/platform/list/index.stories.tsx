import type { Meta, StoryObj } from '@storybook/react';
import { Platforms } from '.';
import { StoryDecorator } from '@/story-decorator';
import { Platform } from '@/components/platform';
import {
  AndroidIcon, IosIcon, TgIcon, WebIcon 
} from '@/icons';
import { Skeleton as BestChatBotsSkeleton } from '@/components/skeleton'; 

export type PlatformsMeta = Meta<typeof Platforms>;

export type PlatformsStory = StoryObj<typeof Platforms>;

export const Basic: PlatformsStory = {
  args: {
    children: (
      <>
        <Platform
          icon={<WebIcon />}
          name="Web"
        />
        <Platform
          icon={<TgIcon />}
          name="Telegram"
        />
        <Platform
          icon={<IosIcon />}
          name="iOS"
        />
        <Platform
          icon={<AndroidIcon />}
          name="Android"
        />
      </>
    )
  }
};

export const Skeleton: PlatformsStory = {
  args: {
    children: (
      <>
        <Platform
          icon={<BestChatBotsSkeleton />}
        />
        <Platform
          icon={<BestChatBotsSkeleton />}
        />
        <Platform
          icon={<BestChatBotsSkeleton />}
        />
        <Platform
          icon={<BestChatBotsSkeleton />}
        />
      </>
    )
  }
};

export default {
  title: 'Components/Platform/List',
  component: Platforms,
  decorators: [StoryDecorator({ padding: '60px 50px' })]
} as PlatformsMeta;
