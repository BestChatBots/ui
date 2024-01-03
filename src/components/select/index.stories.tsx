import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '.';
import { StoryDecorator } from '@/story-decorator';
import { Stars } from '@/components/stars';
import {
  ClaudeIcon, DalleIcon, Gpt35Icon, Gpt4Icon, MjIcon 
} from '@/icons';

export type SelectMeta = Meta<typeof Select>;

export type SelectStory = StoryObj<typeof Select>;

export const Basic: SelectStory = {
  args: {
    label: 'Платформы',
    placeholder: 'Выберите платформу',    
    data: [
      {
        label: 'Web',
        value: 'web'
      },
      {
        label: 'Telegram',
        value: 'tg'
      },
      {
        label: 'iOS app',
        value: 'ios'
      },
      {
        label: 'Android app',
        value: 'android'
      }
    ]
  }
};

export const Item: SelectStory = {
  args: {
    label: 'Item',
    placeholder: 'Select item',
    data: [...Array(100)].map((_, index) => ({
      label: `Item #${index}`,
      value: index.toString()
    }))
  }
};

export const Error: SelectStory = {
  args: {
    ...Basic.args,
    error: 'Выберите платформу'
  }
};

export const Chip: SelectStory = {
  args: {
    label: 'Модель',
    multiple: true,
    placeholder: 'Выберите модели',
    data: [
      {
        icon: <Gpt35Icon />,
        label: 'ChatGPT 3.5',
        value: 'gpt-3'
      },
      {
        icon: <Gpt4Icon />,
        label: 'ChatGPT 4.0',
        value: 'gpt-4'
      },
      {
        icon: <DalleIcon />,
        label: 'DALL-E 3',
        value: 'dalle'
      },
      {
        icon: <MjIcon />,
        label: 'Midjourney',
        value: 'mj'
      },
      {
        icon: <ClaudeIcon />,
        label: 'Claude AI',
        value: 'claude'
      }
    ]
  }
};

export const CheckboxRating: SelectStory = {
  args: {
    variant: 'checkbox',
    valueLabel: 'Рейтинг',
    multiple: true,
    data: [
      {
        label: <Stars filled={5} />,
        value: '5'
      },
      {
        label: <Stars filled={4} />,
        value: '4'
      },
      {
        label: <Stars filled={3} />,
        value: '3'
      },
      {
        label: <Stars filled={2} />,
        value: '2'
      },
      {
        label: <Stars filled={1} />,
        value: '1'
      }
    ]
  }
};

export const CheckboxModel: SelectStory = {
  args: {
    variant: 'checkbox',
    valueLabel: 'Модель',
    multiple: true,
    data: [
      {
        icon: <Gpt35Icon />,
        label: 'ChatGPT 3.5',
        value: 'gpt-3'
      },
      {
        icon: <Gpt4Icon />,
        label: 'ChatGPT 4.0',
        value: 'gpt-4'
      },
      {
        icon: <DalleIcon />,
        label: 'DALL-E 3',
        value: 'dalle'
      },
      {
        icon: <MjIcon />,
        label: 'Midjourney',
        value: 'mj'
      },
      {
        icon: <ClaudeIcon />,
        label: 'Claude AI',
        value: 'claude'
      }
    ]
  }
};

export default {
  title: 'Components/Select',
  component: Select,
  decorators: [StoryDecorator()]
} as SelectMeta;
