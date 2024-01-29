import type { Meta, StoryObj } from '@storybook/react';
import {
  Review, ReviewStars, ReviewerAvatar, Reviews 
} from '@/components/review';
import { StoryDecorator } from '@/story-decorator';

export type ReviewsMeta = Meta<typeof Reviews>;

export type ReviewsStory = StoryObj<typeof Reviews>;

export const Basic: ReviewsStory = {
  args: {
    children: (
      <>
        <Review
          variant="good"
          avatar={(
            <ReviewerAvatar
              src="https://lh3.googleusercontent.com/a/AAcHTtdrCPPVWKH7r9JfDe7l99rmfw24zPAJkPOJTXQSg8tgKcc=s96-c"
              alt="@dev2alert"
            />
          )}
          name="Артем (The2Alert)"
          stars={<ReviewStars filled={5} />}
          dateCreated="5 декабря 2023 13:11"
        >
          Этот аггрегатор нейросетей действительно заслуживает высокой оценки! 
          Он удивительно удобен в использовании, предлагает широкий спектр 
          функций и инструментов, что значительно упрощает работу с большими 
          данными. Впечатляет скорость обработки запросов и точность 
          результатов. Отличная работа команды разработчиков – это настоящий 
          прорыв в области искусственного интеллекта!
        </Review>
        <Review
          variant="bad"
          avatar={(
            <ReviewerAvatar
              src="https://lh3.googleusercontent.com/a/AAcHTtdrCPPVWKH7r9JfDe7l99rmfw24zPAJkPOJTXQSg8tgKcc=s96-c"
              alt="@dev2alert"
            />
          )}
          name="Артем (The2Alert)"
          stars={<ReviewStars filled={2} />}
          dateCreated="5 декабря 2023 13:11"
        >
          Этот аггрегатор нейросетей действительно заслуживает высокой оценки! 
          Он удивительно удобен в использовании, предлагает широкий спектр 
          функций и инструментов, что значительно упрощает работу с большими 
          данными. Впечатляет скорость обработки запросов и точность 
          результатов. Отличная работа команды разработчиков – это настоящий 
          прорыв в области искусственного интеллекта!
        </Review>
        <Review
          variant="good"
          avatar={(
            <ReviewerAvatar
              src="https://lh3.googleusercontent.com/a/AAcHTtdrCPPVWKH7r9JfDe7l99rmfw24zPAJkPOJTXQSg8tgKcc=s96-c"
              alt="@dev2alert"
            />
          )}
          name="Артем (The2Alert)"
          stars={<ReviewStars filled={5} />}
          dateCreated="5 декабря 2023 13:11"
        >
          Этот аггрегатор нейросетей действительно заслуживает высокой оценки! 
          Он удивительно удобен в использовании, предлагает широкий спектр 
          функций и инструментов, что значительно упрощает работу с большими 
          данными. Впечатляет скорость обработки запросов и точность 
          результатов. Отличная работа команды разработчиков – это настоящий 
          прорыв в области искусственного интеллекта!
        </Review>
        <Review
          variant="bad"
          avatar={(
            <ReviewerAvatar
              src="https://lh3.googleusercontent.com/a/AAcHTtdrCPPVWKH7r9JfDe7l99rmfw24zPAJkPOJTXQSg8tgKcc=s96-c"
              alt="@dev2alert"
            />
          )}
          name="Артем (The2Alert)"
          stars={<ReviewStars filled={2} />}
          dateCreated="5 декабря 2023 13:11"
        >
          Этот аггрегатор нейросетей действительно заслуживает высокой оценки! 
          Он удивительно удобен в использовании, предлагает широкий спектр 
          функций и инструментов, что значительно упрощает работу с большими 
          данными. Впечатляет скорость обработки запросов и точность 
          результатов. Отличная работа команды разработчиков – это настоящий 
          прорыв в области искусственного интеллекта!
        </Review>
        <Review
          variant="good"
          avatar={(
            <ReviewerAvatar
              src="https://lh3.googleusercontent.com/a/AAcHTtdrCPPVWKH7r9JfDe7l99rmfw24zPAJkPOJTXQSg8tgKcc=s96-c"
              alt="@dev2alert"
            />
          )}
          name="Артем (The2Alert)"
          stars={<ReviewStars filled={5} />}
          dateCreated="5 декабря 2023 13:11"
        >
          Этот аггрегатор нейросетей действительно заслуживает высокой оценки! 
          Он удивительно удобен в использовании, предлагает широкий спектр 
          функций и инструментов, что значительно упрощает работу с большими 
          данными. Впечатляет скорость обработки запросов и точность 
          результатов. Отличная работа команды разработчиков – это настоящий 
          прорыв в области искусственного интеллекта!
        </Review>
        <Review
          variant="bad"
          avatar={(
            <ReviewerAvatar
              src="https://lh3.googleusercontent.com/a/AAcHTtdrCPPVWKH7r9JfDe7l99rmfw24zPAJkPOJTXQSg8tgKcc=s96-c"
              alt="@dev2alert"
            />
          )}
          name="Артем (The2Alert)"
          stars={<ReviewStars filled={2} />}
          dateCreated="5 декабря 2023 13:11"
        >
          Этот аггрегатор нейросетей действительно заслуживает высокой оценки! 
          Он удивительно удобен в использовании, предлагает широкий спектр 
          функций и инструментов, что значительно упрощает работу с большими 
          данными. Впечатляет скорость обработки запросов и точность 
          результатов. Отличная работа команды разработчиков – это настоящий 
          прорыв в области искусственного интеллекта!
        </Review>
      </>
    )
  }
};

export const Skeleton: ReviewsStory = {
  args: {
    children: [...Array(6)].map((_, index) => (
      <Review
        key={index}
        variant="skeleton"
      />
    ))
  }
};

export default {
  title: 'Components/Review/List',
  component: Reviews,
  decorators: [StoryDecorator()]
} as ReviewsMeta;
