import type { Meta, StoryObj } from '@storybook/react';
import { TableEmpty } from '.';
import { StoryDecorator } from '@/story-decorator';

export type TableEmptyMeta = Meta<typeof TableEmpty>;

export type TableEmptyStory = StoryObj<typeof TableEmpty>;

export const Basic: TableEmptyStory = {
  args: {
    title: 'По вашему запросу ничего не найдено',
    children: 'Проекты по вашему запросу не найдены, попробуйте изменить запрос'
  }
};

export default {
  title: 'Components/Table/Empty',
  component: TableEmpty,
  decorators: [StoryDecorator()]
} as TableEmptyMeta;
