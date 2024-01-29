import type { Meta, StoryObj } from '@storybook/react';
import { ReviewsEmpty } from '@/components/review';
import { StoryDecorator } from '@/story-decorator';

export type ReviewsEmptyMeta = Meta<typeof ReviewsEmpty>;

export type ReviewsEmptyStory = StoryObj<typeof ReviewsEmpty>;

export const Basic: ReviewsEmptyStory = {
  args: {
    children: 'Пока никто не оставлял отзывов, станьте первым!'
  }
};

export default {
  title: 'Components/Review/List/Empty',
  component: ReviewsEmpty,
  decorators: [StoryDecorator()]
} as ReviewsEmptyMeta;
