import type { Meta, StoryObj } from '@storybook/react';
import { ExternalLink } from '.';
import { StoryDecorator } from '@/story-decorator';

export type ExternalLinkMeta = Meta<typeof ExternalLink>;

export type ExternalLinkStory = StoryObj<typeof ExternalLink>;

export const Basic: ExternalLinkStory = {
  args: {
    href: '#',
    children: 'Перейти на сайт'
  }
};

export default {
  title: 'Components/ExternalLink',
  component: ExternalLink,
  decorators: [StoryDecorator()]
} as ExternalLinkMeta;
