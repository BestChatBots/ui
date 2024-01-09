import type { Meta, StoryObj } from '@storybook/react';
import { StoryDecorator } from '@/story-decorator';
import { Notification } from '.';

export type NotificationMeta = Meta<typeof Notification>;

export type NotificationStory = StoryObj<typeof Notification>;

export const Basic: NotificationStory = {
  args: {
    title: 'Титул сообщения',
    autoClose: false
  }
};

export const Text: NotificationStory = {
  args: {
    ...Basic.args,
    children: 'Текстовое сопровождение для подсказки'
  }
};

export const Error: NotificationStory = {
  args: {
    ...Text.args,
    variant: 'error'
  }
};

export const Success: NotificationStory = {
  args: {
    ...Text.args,
    variant: 'success'
  }
};

export const Warning: NotificationStory = {
  args: {
    ...Text.args,
    variant: 'warn'
  }
};

export default {
  title: 'Components/Notification',
  component: Notification,
  decorators: [StoryDecorator()]
} as NotificationMeta;
