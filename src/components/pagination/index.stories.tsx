import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from '.';
import { StoryDecorator } from '@/story-decorator';

export type PaginationMeta = Meta<typeof Pagination>;

export type PaginationStory = StoryObj<typeof Pagination>;

export const Basic: PaginationStory = {
  args: {
    page: 5,
    pageCount: 10,
    pageRangeDisplayed: 4,
    marginPagesDisplayed: 1
  }
};

export default {
  title: 'Components/Pagination',
  component: Pagination,
  decorators: [StoryDecorator()]
} as PaginationMeta;
