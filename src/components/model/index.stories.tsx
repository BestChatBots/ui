import type { Meta, StoryObj } from '@storybook/react';
import { Model, ModelDeleteButton } from '.';
import { StoryDecorator } from '@/story-decorator';
import { MjIcon } from '@/icons';
import { Skeleton as BestChatBotsSkeleton } from '@/components/skeleton'; 

export type ModelMeta = Meta<typeof Model>;

export type ModelStory = StoryObj<typeof Model>;

export const Basic: ModelStory = {
  args: {
    icon: <MjIcon />,
    name: 'Midjourney'
  }
};

export const Skeleton: ModelStory = {
  args: {
    icon: <BestChatBotsSkeleton />
  }
};

export const Text: ModelStory = {
  args: {
    ...Basic.args,
    variant: 'text',
    delete: (
      <ModelDeleteButton />
    )
  }
};

export default {
  title: 'Components/Model',
  component: Model,
  decorators: [StoryDecorator({ padding: '60px 50px' })]
} as ModelMeta;
