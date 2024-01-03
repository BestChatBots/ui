import type { Meta, StoryObj } from '@storybook/react';
import { StoryDecorator } from '@/story-decorator';
import { Button } from '.';
import { ArrowDownIcon } from '@/icons';

export type ButtonMeta = Meta<typeof Button>;

export type ButtonStory = StoryObj<typeof Button>;

export const Basic: ButtonStory = {
  args: {
    children: 'Button text'
  },
  argTypes: {
    children: {
      type: 'string'
    }
  }
};

export const StartIcon: ButtonStory = {
  args: {
    ...Basic.args,
    startIcon: <ArrowDownIcon />
  }
};

export const EndIcon: ButtonStory = {
  args: {
    ...Basic.args,
    endIcon: <ArrowDownIcon />
  }
};

export const Icon: ButtonStory = {
  args: {
    children: (
      <ArrowDownIcon />
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
};

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [StoryDecorator()],
  args: {
    variant: 'primary',
    size: 'small'
  }
} as ButtonMeta;
