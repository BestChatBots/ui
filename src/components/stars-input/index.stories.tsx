import type { Meta, StoryObj } from '@storybook/react';
import { StarsInput } from '.';
import { StoryDecorator } from '@/story-decorator';

export type StarsInputMeta = Meta<typeof StarsInput>;

export type StarsInputStory = StoryObj<typeof StarsInput>;

export const Basic: StarsInputStory = {};

export const Bad: StarsInputStory = {
  args: {
    type: 'bad'
  }
};

export const Error: StarsInputStory = {
  args: {
    error: 'Оцените проект'
  }
};

export default {
  title: 'Components/Stars/Input',
  component: StarsInput,
  decorators: [StoryDecorator()]
} as StarsInputMeta;
