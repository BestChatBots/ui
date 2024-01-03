import type { Meta, StoryObj } from '@storybook/react';
import { StoryDecorator } from '@/story-decorator';
import { TextArea } from '.';

export type TextAreaMeta = Meta<typeof TextArea>;

export type TextAreaStory = StoryObj<typeof TextArea>;

export const Basic: TextAreaStory = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder'
  }
};

export const WithoutLabel: TextAreaStory = {
  args: {
    placeholder: 'Placeholder'
  }
};

export const Error: TextAreaStory = {
  args: {
    ...Basic.args,
    error: 'Error message'
  }
};

export const Disabled: TextAreaStory = {
  args: {
    ...Basic.args,
    disabled: true
  }
};

export default {
  title: 'Components/TextArea',
  component: TextArea,
  decorators: [StoryDecorator()]
} as TextAreaMeta;
