import type { Meta, StoryObj } from '@storybook/react';
import { ImageInput } from '.';
import { StoryDecorator } from '@/story-decorator';

export type ImageInputMeta = Meta<typeof ImageInput>;

export type ImageInputStory = StoryObj<typeof ImageInput>;

export const Basic: ImageInputStory = {
  args: {
    label: 'Изображение проекта'
  }
};

export const Icon: ImageInputStory = {
  args: {
    type: 'icon',
    label: 'Иконка модели'
  }
};

export const Error: ImageInputStory = {
  args: {
    ...Icon.args,
    error: 'Недопустимый формат изображения'
  }
};

export default {
  title: 'Components/Image/Input',
  component: ImageInput,
  decorators: [StoryDecorator()]
} as ImageInputMeta;
