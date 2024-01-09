import type { Meta, StoryObj } from '@storybook/react';
import { Models } from '.';
import { StoryDecorator } from '@/story-decorator';
import { Model, ModelDeleteButton } from '@/components/model';
import {
  ClaudeIcon, DalleIcon, Gpt35Icon, Gpt4Icon, MjIcon 
} from '@/icons';
import { Skeleton } from '@/components/skeleton';

export type ModelsMeta = Meta<typeof Models>;

export type ModelsStory = StoryObj<typeof Models>;

export const Row: ModelsStory = {
  args: {
    children: (
      <>
        <Model
          icon={<Gpt35Icon />}
          name="ChatGPT 3.5"
        />
        <Model
          icon={<Gpt4Icon />}
          name="ChatGPT 4.0"
        />
        <Model
          icon={<DalleIcon />}
          name="DALL-E 3"
        />
        <Model
          icon={<MjIcon />}
          name="Midjourney"
        />
        <Model
          icon={<ClaudeIcon />}
          name="Claude AI"
        />
      </>
    )
  }
};

export const RowSkeleton: ModelsStory = {
  args: {
    children: (
      <>
        <Model
          icon={<Skeleton />}
        />
        <Model
          icon={<Skeleton />}
        />
        <Model
          icon={<Skeleton />}
        />
        <Model
          icon={<Skeleton />}
        />
        <Model
          icon={<Skeleton />}
        />
      </>
    )
  }
};

export const Column: ModelsStory = {
  args: {
    direction: 'column',
    children: (
      <>
        <Model
          variant="text"
          icon={<Gpt35Icon />}
          name="ChatGPT 3.5"
          delete={<ModelDeleteButton />}
        />
        <Model
          variant="text"
          icon={<Gpt4Icon />}
          name="ChatGPT 4.0"
          delete={<ModelDeleteButton />}
        />
        <Model
          variant="text"
          icon={<DalleIcon />}
          name="DALL-E 3"
          delete={<ModelDeleteButton />}
        />
        <Model
          variant="text"
          icon={<MjIcon />}
          name="Midjourney"
          delete={<ModelDeleteButton />}
        />
        <Model
          variant="text"
          icon={<ClaudeIcon />}
          name="Claude AI"
          delete={<ModelDeleteButton />}
        />
      </>
    )
  }
};

export default {
  title: 'Components/Model/List',
  component: Models,
  decorators: [StoryDecorator({ padding: '60px 50px' })]
} as ModelsMeta;
