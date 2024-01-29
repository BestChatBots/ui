import type { Meta, StoryObj } from '@storybook/react';
import { StoryDecorator } from '@/story-decorator';
import { Notifications } from '.';
import { Notification } from '@/components/notification';

export type NotificationsMeta = Meta<typeof Notifications>;

export type NotificationsStory = StoryObj<typeof Notifications>;

export const Basic: NotificationsStory = {
  args: {
    children: (
      <>
        <Notification
          variant="success"
          title="Титул сообщения"
          autoClose={1000}
        >
          Текстовое сопровождение для подсказки
        </Notification>
        <Notification
          variant="info"
          title="Титул сообщения"
          autoClose={1500}
        >
          Текстовое сопровождение для подсказки
        </Notification>
        <Notification
          variant="error"
          title="Титул сообщения"
          autoClose={2000}
        >
          Текстовое сопровождение для подсказки
        </Notification>
        <Notification
          variant="warn"
          title="Титул сообщения"
          autoClose={2500}
        >
          Текстовое сопровождение для подсказки
        </Notification>
        <Notification
          variant="loader"
          title="Титул сообщения"
          autoClose={3000}
        >
          Текстовое сопровождение для подсказки
        </Notification>
      </>
    )
  }
};

export default {
  title: 'Components/Notification/List',
  component: Notifications,
  decorators: [StoryDecorator()]
} as NotificationsMeta;
