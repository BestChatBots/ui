import type { Meta, StoryObj } from '@storybook/react';
import { StoryDecorator } from '@/story-decorator';
import { DrawerGroup } from '.';
import {
  AndroidIcon, IosIcon, TgIcon, WebIcon 
} from '@/icons';

export type DrawerGroupMeta = Meta<typeof DrawerGroup>;

export type DrawerGroupStory = StoryObj<typeof DrawerGroup>;

export const Basic: DrawerGroupStory = {
  args: {
    name: 'Платформы',
    data: [
      {
        icon: <WebIcon />,
        label: 'Web',
        value: 'web'
      },
      {
        icon: <TgIcon />,
        label: 'Telegram',
        value: 'tg'
      },
      {
        icon: <IosIcon />,
        label: 'iOS app',
        value: 'ios'
      },
      {
        icon: <AndroidIcon />,
        label: 'Android app',
        value: 'android'
      }
    ]
  }
};

export default {
  title: 'Components/Drawer/Group',
  component: DrawerGroup,
  decorators: [StoryDecorator()]
} as DrawerGroupMeta;
