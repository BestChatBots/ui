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
    placeholder: 'Поиск проектов'
  }
};

export const Start: InputStory = {
  args: {
    ...Basic.args,
    start: 'https://bestchatbots.org/project/',
    placeholder: '(Не задано)',
    width: 500
  }
};

export const StartError: InputStory = {
  args: {
    ...Start.args,
    error: 'Error message'
  }
};

export const StartDisabled: InputStory = {
  args: {
    ...Start.args,
    disabled: true
  }
};

export default {
  title: 'Components/Input',
  component: Input,
  decorators: [StoryDecorator()]
} as InputMeta;
