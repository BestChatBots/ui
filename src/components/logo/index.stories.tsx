import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from '.';
import { StoryDecorator } from '@/story-decorator';

export type LogoMeta = Meta<typeof Logo>;

export type LogoStory = StoryObj<typeof Logo>;

export const Basic: LogoStory = {};

export const Admin: LogoStory = {
  args: {
    variant: 'admin'
  }
};

export default {
  title: 'Components/Logo',
  component: Logo,
  decorators: [StoryDecorator()]
} as LogoMeta;
