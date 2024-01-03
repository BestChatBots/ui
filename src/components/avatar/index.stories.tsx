import type { Meta, StoryObj } from '@storybook/react';
import { StoryDecorator } from '@/story-decorator';
import { Avatar } from '.';

export type AvatarMeta = Meta<typeof Avatar>;

export type AvatarStory = StoryObj<typeof Avatar>;

export const Basic: AvatarStory = {
  args: {
    src: 'https://lh3.googleusercontent.com/a/AAcHTtdrCPPVWKH7r9JfDe7l99rmfw24zPAJkPOJTXQSg8tgKcc=s96-c',
    alt: '@dev2alert'
  }
};

export const Default: AvatarStory = {
  args: {
    alt: '@dev2alert'
  }
};

export default {
  title: 'Components/Avatar',
  component: Avatar,
  decorators: [StoryDecorator()]
} as AvatarMeta;
