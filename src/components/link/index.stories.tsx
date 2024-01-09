import type { Meta, StoryObj } from '@storybook/react';
import { Link } from '.';
import { StoryDecorator } from '@/story-decorator';
import { ArrowLeftIcon, ArrowRightIcon } from '@/icons';

export type LinkMeta = Meta<typeof Link>;

export type LinkStory = StoryObj<typeof Link>;

export const Basic: LinkStory = {
  args: {
    href: '#',
    children: 'Перейти на сайт'
  }
};

export const StartIcon: LinkStory = {
  args: {
    ...Basic.args,
    startIcon: <ArrowLeftIcon />
  }
};

export const EndIcon: LinkStory = {
  args: {
    ...Basic.args,
    endIcon: <ArrowRightIcon />
  }
};

export default {
  title: 'Components/Link',
  component: Link,
  decorators: [StoryDecorator()]
} as LinkMeta;
