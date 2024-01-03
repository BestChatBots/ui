import type { Meta, StoryObj } from '@storybook/react';
import { StoryDecorator } from '@/story-decorator';
import { Input } from '.';

export type InputMeta = Meta<typeof Input>;

export type InputStory = StoryObj<typeof Input>;

export const Basic: InputStory = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder'
  }
};

export const WithoutLabel: InputStory = {
  args: {
    placeholder: 'Placeholder'
  }
};

export const Error: InputStory = {
  args: {
    ...Basic.args,
    error: 'Error message'
  }
};

export const Disabled: InputStory = {
  args: {
    ...Basic.args,
    disabled: true
  }
};

export const Search: InputStory = {
  args: {
    type: 'search',
    placeholder: 'Введите название...'
  }
};

export default {
  title: 'Components/Input',
  component: Input,
  decorators: [StoryDecorator()]
} as InputMeta;
