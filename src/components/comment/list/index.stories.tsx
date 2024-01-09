import type { Meta, StoryObj } from '@storybook/react';
import {
  Comment, CommentStars, CommentatorAvatar, Comments 
} from '@/components/comment';
import { StoryDecorator } from '@/story-decorator';

export type CommentsMeta = Meta<typeof Comments>;

export type CommentsStory = StoryObj<typeof Comments>;

export const Basic: CommentsStory = {
  args: {
    children: (
      <>
        <Comment
          variant="good"
          avatar={(
            <CommentatorAvatar
              src="https://lh3.googleusercontent.com/a/AAcHTtdrCPPVWKH7r9JfDe7l99rmfw24zPAJkPOJTXQSg8tgKcc=s96-c"
              alt="@dev2alert"
            />
          )}
          name="Артем (The2Alert)"
          stars={<CommentStars filled={5} />}
          dateCreated="5 декабря 2023 13:11"
        >
          Этот аггрегатор нейросетей действительно заслуживает высокой оценки! 
          Он удивительно удобен в использовании, предлагает широкий спектр 
          функций и инструментов, что значительно упрощает работу с большими 
          данными. Впечатляет скорость обработки запросов и точность 
          результатов. Отличная работа команды разработчиков – это настоящий 
          прорыв в области искусственного интеллекта!
        </Comment>
        <Comment
          variant="bad"
          avatar={(
            <CommentatorAvatar
              src="https://lh3.googleusercontent.com/a/AAcHTtdrCPPVWKH7r9JfDe7l99rmfw24zPAJkPOJTXQSg8tgKcc=s96-c"
              alt="@dev2alert"
            />
          )}
          name="Артем (The2Alert)"
          stars={<CommentStars filled={2} />}
          dateCreated="5 декабря 2023 13:11"
        >
          Этот аггрегатор нейросетей действительно заслуживает высокой оценки! 
          Он удивительно удобен в использовании, предлагает широкий спектр 
          функций и инструментов, что значительно упрощает работу с большими 
          данными. Впечатляет скорость обработки запросов и точность 
          результатов. Отличная работа команды разработчиков – это настоящий 
          прорыв в области искусственного интеллекта!
        </Comment>
        <Comment
          variant="good"
          avatar={(
            <CommentatorAvatar
              src="https://lh3.googleusercontent.com/a/AAcHTtdrCPPVWKH7r9JfDe7l99rmfw24zPAJkPOJTXQSg8tgKcc=s96-c"
              alt="@dev2alert"
            />
          )}
          name="Артем (The2Alert)"
          stars={<CommentStars filled={5} />}
          dateCreated="5 декабря 2023 13:11"
        >
          Этот аггрегатор нейросетей действительно заслуживает высокой оценки! 
          Он удивительно удобен в использовании, предлагает широкий спектр 
          функций и инструментов, что значительно упрощает работу с большими 
          данными. Впечатляет скорость обработки запросов и точность 
          результатов. Отличная работа команды разработчиков – это настоящий 
          прорыв в области искусственного интеллекта!
        </Comment>
        <Comment
          variant="bad"
          avatar={(
            <CommentatorAvatar
              src="https://lh3.googleusercontent.com/a/AAcHTtdrCPPVWKH7r9JfDe7l99rmfw24zPAJkPOJTXQSg8tgKcc=s96-c"
              alt="@dev2alert"
            />
          )}
          name="Артем (The2Alert)"
          stars={<CommentStars filled={2} />}
          dateCreated="5 декабря 2023 13:11"
        >
          Этот аггрегатор нейросетей действительно заслуживает высокой оценки! 
          Он удивительно удобен в использовании, предлагает широкий спектр 
          функций и инструментов, что значительно упрощает работу с большими 
          данными. Впечатляет скорость обработки запросов и точность 
          результатов. Отличная работа команды разработчиков – это настоящий 
          прорыв в области искусственного интеллекта!
        </Comment>
        <Comment
          variant="good"
          avatar={(
            <CommentatorAvatar
              src="https://lh3.googleusercontent.com/a/AAcHTtdrCPPVWKH7r9JfDe7l99rmfw24zPAJkPOJTXQSg8tgKcc=s96-c"
              alt="@dev2alert"
            />
          )}
          name="Артем (The2Alert)"
          stars={<CommentStars filled={5} />}
          dateCreated="5 декабря 2023 13:11"
        >
          Этот аггрегатор нейросетей действительно заслуживает высокой оценки! 
          Он удивительно удобен в использовании, предлагает широкий спектр 
          функций и инструментов, что значительно упрощает работу с большими 
          данными. Впечатляет скорость обработки запросов и точность 
          результатов. Отличная работа команды разработчиков – это настоящий 
          прорыв в области искусственного интеллекта!
        </Comment>
        <Comment
          variant="bad"
          avatar={(
            <CommentatorAvatar
              src="https://lh3.googleusercontent.com/a/AAcHTtdrCPPVWKH7r9JfDe7l99rmfw24zPAJkPOJTXQSg8tgKcc=s96-c"
              alt="@dev2alert"
            />
          )}
          name="Артем (The2Alert)"
          stars={<CommentStars filled={2} />}
          dateCreated="5 декабря 2023 13:11"
        >
          Этот аггрегатор нейросетей действительно заслуживает высокой оценки! 
          Он удивительно удобен в использовании, предлагает широкий спектр 
          функций и инструментов, что значительно упрощает работу с большими 
          данными. Впечатляет скорость обработки запросов и точность 
          результатов. Отличная работа команды разработчиков – это настоящий 
          прорыв в области искусственного интеллекта!
        </Comment>
      </>
    )
  }
};

export const Skeleton: CommentsStory = {
  args: {
    children: [...Array(6)].map((_, index) => (
      <Comment
        key={index}
        variant="skeleton"
      />
    ))
  }
};

export default {
  title: 'Components/Comment/List',
  component: Comments,
  decorators: [StoryDecorator()]
} as CommentsMeta;
