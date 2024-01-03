import type { Meta, StoryObj } from '@storybook/react';
import { Comment, CommentStars, CommentatorAvatar } from '.';
import { StoryDecorator } from '@/story-decorator';

export type CommentMeta = Meta<typeof Comment>;

export type CommentStory = StoryObj<typeof Comment>;

export const Good: CommentStory = {
  args: {
    variant: 'good',
    avatar: (
      <CommentatorAvatar
        src="https://lh3.googleusercontent.com/a/AAcHTtdrCPPVWKH7r9JfDe7l99rmfw24zPAJkPOJTXQSg8tgKcc=s96-c"
        alt="@dev2alert"
      />
    ),
    name: 'Артем Потыкун',
    stars: (
      <CommentStars filled={5} />
    ),
    dateCreated: '5 декабря 2023 13:11',
    children: 'Этот аггрегатор нейросетей действительно заслуживает высокой оценки! Он удивительно удобен в использовании, предлагает широкий спектр функций и инструментов, что значительно упрощает работу с большими данными. Впечатляет скорость обработки запросов и точность результатов. Отличная работа команды разработчиков – это настоящий прорыв в области искусственного интеллекта!'
  }
};

export const Bad: CommentStory = {
  args: {
    ...Good.args,
    variant: 'bad',
    stars: (
      <CommentStars filled={2} />
    )
  }
};

export default {
  title: 'Components/Comment',
  component: Comment,
  decorators: [StoryDecorator()]
} as CommentMeta;
