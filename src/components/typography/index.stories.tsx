import type { Meta, StoryObj } from '@storybook/react';
import { StoryDecorator } from '@/story-decorator';
import { Typography } from '.';

export type TypographyMeta = Meta<typeof Typography>;

export type TypographyStory = StoryObj<typeof Typography>;

export const Basic: TypographyStory = {
  args: {
    variant: 'h1',
    children: 'Typography'
  }
};

export default {
  title: 'Components/Typography',
  component: Typography,
  decorators: [StoryDecorator()],
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as TypographyMeta;
