import type { Meta, StoryObj } from '@storybook/react';
import { ExternalLink } from '.';
import { StoryDecorator } from '@/story-decorator';

export type ExternalLinkMeta = Meta<typeof ExternalLink>;

export type ExternalLinkStory = StoryObj<typeof ExternalLink>;

export const Basic: ExternalLinkStory = {
  args: {
    href: '#',
    children: 'Страница в ретинге'
  }
};

export default {
  title: 'Components/Link/External',
  component: ExternalLink,
  decorators: [StoryDecorator()]
} as ExternalLinkMeta;
