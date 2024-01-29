import type { Meta, StoryObj } from '@storybook/react';
import { Platforms } from '.';
import { StoryDecorator } from '@/story-decorator';
import { Platform, PlatformDeleteButton } from '@/components/platform';
import {
  AndroidIcon, IosIcon, TgIcon, WebIcon 
} from '@/icons';
import { Skeleton as BestChatBotsSkeleton } from '@/components/skeleton'; 

export type PlatformsMeta = Meta<typeof Platforms>;

export type PlatformsStory = StoryObj<typeof Platforms>;

export const Row: PlatformsStory = {
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

export const RowSkeleton: PlatformsStory = {
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

export const Column: PlatformsStory = {
  args: {
    direction: 'column',
    children: (
      <>
        <Platform
          variant="text"
          icon={<WebIcon />}
          name="Web"
          delete={<PlatformDeleteButton />}
        />
        <Platform
          variant="text"
          icon={<TgIcon />}
          name="Telegram"
          delete={<PlatformDeleteButton />}
        />
        <Platform
          variant="text"
          icon={<IosIcon />}
          name="iOS"
          delete={<PlatformDeleteButton />}
        />
        <Platform
          variant="text"
          icon={<AndroidIcon />}
          name="Android"
          delete={<PlatformDeleteButton />}
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
