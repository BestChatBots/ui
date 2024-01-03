import type { Meta, StoryObj } from '@storybook/react';
import { StoryDecorator } from '@/story-decorator';
import { Image } from '.';

export type ImageMeta = Meta<typeof Image>;

export type ImageStory = StoryObj<typeof Image>;

export const Basic: ImageStory = {
  args: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1200px-Cat_August_2010-4.jpg',
    width: 1200,
    height: 734,
    alt: 'Cat'
  }
};

export default {
  title: 'Components/Image',
  component: Image,
  decorators: [StoryDecorator()]
} as ImageMeta;
