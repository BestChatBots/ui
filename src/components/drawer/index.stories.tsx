import type { Meta, StoryObj } from '@storybook/react';
import {
  Drawer, DrawerButtons, DrawerGroup, DrawerGroups 
} from '.';
import { StoryDecorator } from '@/story-decorator';
import { Checkbox } from '@/components/checkbox';
import { Stars } from '@/components/stars';
import {
  AndroidIcon,
  ClaudeIcon, DalleIcon, Gpt35Icon, Gpt4Icon, IosIcon, MjIcon, TgIcon, WebIcon 
} from '@/icons';
import { Button } from '@/components/button';

export type DrawerMeta = Meta<typeof Drawer>;

export type DrawerStory = StoryObj<typeof Drawer>;

export const Basic: DrawerStory = {
  args: {
    open: true,
    title: 'Фильтры',
    buttons: (
      <DrawerButtons>
        <Button fullWidth>
          Сбросить
        </Button>
      </DrawerButtons>
    ),
    children: (
      <DrawerGroups>
        <DrawerGroup name="Рейтинг">
          <Checkbox 
            label={<Stars filled={5} />}
          />
          <Checkbox 
            label={<Stars filled={4} />}
          />
          <Checkbox 
            label={<Stars filled={3} />}
          />
          <Checkbox 
            label={<Stars filled={2} />}
          />
          <Checkbox 
            label={<Stars filled={1} />}
          />
          <Checkbox 
            label={<Stars filled={0} />}
          />
        </DrawerGroup>
        <DrawerGroup name="Модели">
          <Checkbox
            icon={<Gpt35Icon />}
            label="ChatGPT 3.5"
          />
          <Checkbox
            icon={<Gpt4Icon />}
            label="ChatGPT 4.0"
          />
          <Checkbox
            icon={<DalleIcon />}
            label="DALL-E 3"
          />
          <Checkbox
            icon={<MjIcon />}
            label="Midjourney"
          />
          <Checkbox
            icon={<ClaudeIcon />}
            label="Claude AI"
          />
        </DrawerGroup>
        <DrawerGroup name="Платформы">
          <Checkbox
            icon={<WebIcon />}
            label="Web"
          />
          <Checkbox
            icon={<TgIcon />}
            label="Telegram"
          />
          <Checkbox
            icon={<IosIcon />}
            label="iOS app"
          />
          <Checkbox
            icon={<AndroidIcon />}
            label="Android app"
          />
        </DrawerGroup>
      </DrawerGroups>
    )
  }
};

export const Item: DrawerStory = {
  args: {
    open: true,
    title: 'Item',
    buttons: (
      <DrawerButtons>
        <Button fullWidth>
          Item #1
        </Button>
        <Button variant="secondary" fullWidth>
          Item #2
        </Button>
      </DrawerButtons>
    ),
    children: (
      <DrawerGroups>
        {[...Array(5)].map((_, index) => (
          <DrawerGroup
            key={index}
            name={`Item #${index + 1}`}
          >
            {[...Array(30)].map((_, index) => (
              <Checkbox
                key={index}
                label={`Item #${index + 1}`}
              />
            ))}
          </DrawerGroup>
        ))}
      </DrawerGroups>
    )
  }
};

export default {
  title: 'Components/Drawer',
  component: Drawer,
  decorators: [StoryDecorator()]
} as DrawerMeta;
