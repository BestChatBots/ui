import type { Meta, StoryObj } from '@storybook/react';
import { StoryDecorator } from '@/story-decorator';
import { NavigationProgressBasic } from '.';

export type NavigationProgressMeta = Meta<typeof NavigationProgressBasic>;

export type NavigationProgressStory = StoryObj<typeof NavigationProgressBasic>;

export const Basic: NavigationProgressStory = {};

export default {
  title: 'Components/NavigationProgress',
  component: NavigationProgressBasic,
  decorators: [StoryDecorator({ margin: '50px 0px' })]
} as NavigationProgressMeta;
