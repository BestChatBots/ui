import type { Meta, StoryObj } from '@storybook/react';
import { 
  Review, 
  ReviewActions, 
  ReviewChild, 
  ReviewChildren, 
  ReviewDeleteAction, 
  ReviewSendAction, 
  ReviewSendButton, 
  ReviewSendForm, 
  ReviewSendInput, 
  ReviewStars, 
  ReviewText, 
  ReviewerAvatar, 
  ReviewerChildAvatar,
  ReviewerChildAdminAvatar,
  ReviewChildText,
  ReviewChildActions,
  ReviewChildDeleteAction
} from '.';
import { StoryDecorator } from '@/story-decorator';

export type ReviewMeta = Meta<typeof Review>;

export type ReviewStory = StoryObj<typeof Review>;

export const Good: ReviewStory = {
  args: {
    variant: 'good',
    avatar: (
      <ReviewerAvatar
        src="https://lh3.googleusercontent.com/a/AAcHTtdrCPPVWKH7r9JfDe7l99rmfw24zPAJkPOJTXQSg8tgKcc=s96-c"
        alt="@dev2alert"
      />
    ),
    name: 'Артем Потыкун',
    stars: (
      <ReviewStars filled={5} />
    ),
    dateCreated: '5 декабря 2023 13:11',
    children: 'Этот аггрегатор нейросетей действительно заслуживает высокой оценки! Он удивительно удобен в использовании, предлагает широкий спектр функций и инструментов, что значительно упрощает работу с большими данными. Впечатляет скорость обработки запросов и точность результатов. Отличная работа команды разработчиков – это настоящий прорыв в области искусственного интеллекта!'
  }
};

export const Bad: ReviewStory = {
  args: {
    ...Good.args,
    variant: 'bad',
    stars: (
      <ReviewStars filled={2} />
    )
  }
};

export const Actions: ReviewStory = {
  args: {
    ...Good.args,
    children: (
      <>
        <ReviewText>
          Этот аггрегатор нейросетей действительно заслуживает высокой 
          оценки! Он удивительно удобен в использовании, предлагает 
          широкий спектр функций и инструментов, что значительно 
          упрощает работу с большими данными. Впечатляет скорость 
          обработки запросов и точность результатов. Отличная работа 
          команды разработчиков – это настоящий прорыв в области искусственного интеллекта!
        </ReviewText>
        <ReviewActions>
          <ReviewSendAction>
            Комментировать
          </ReviewSendAction>
          <ReviewDeleteAction>
            Удалить
          </ReviewDeleteAction>
        </ReviewActions>
        <ReviewSendForm>
          <ReviewSendInput 
            placeholder="Напишите комментарий"
          />
          <ReviewSendButton>
            Добавить комментарий
          </ReviewSendButton>
        </ReviewSendForm>
      </>
    )
  }
};

export const Children: ReviewStory = {
  args: {
    ...Good.args,
    children: (
      <>
        <ReviewText>
          Этот аггрегатор нейросетей действительно заслуживает высокой 
          оценки! Он удивительно удобен в использовании, предлагает 
          широкий спектр функций и инструментов, что значительно 
          упрощает работу с большими данными. Впечатляет скорость 
          обработки запросов и точность результатов. Отличная работа 
          команды разработчиков – это настоящий прорыв в области 
          искусственного интеллекта!
        </ReviewText>
        <ReviewChildren>
          <ReviewChild
            avatar={(
              <ReviewerChildAvatar
                src="https://lh3.googleusercontent.com/a/AAcHTtdrCPPVWKH7r9JfDe7l99rmfw24zPAJkPOJTXQSg8tgKcc=s96-c"
                alt="@dev2alert" 
              />
            )}
            name="Артем Потыкун"
            dateCreated="3 декабря 2023 22:41"
          >
            Благодарим за ваш отзыв, рады стараться. С уважением, команда Bothub.chat!
          </ReviewChild>
          <ReviewChild
            avatar={<ReviewerChildAdminAvatar />}
            name="Администратор Bothub.chat"
            dateCreated="3 декабря 2023 22:41"
          >
            <ReviewChildText>
              Благодарим за ваш отзыв, рады стараться.
              С уважением, команда Bothub.chat!
            </ReviewChildText>
            <ReviewChildActions>
              <ReviewChildDeleteAction>
                Удалить
              </ReviewChildDeleteAction>
            </ReviewChildActions>
          </ReviewChild>
        </ReviewChildren>
        <ReviewActions>
          <ReviewSendAction>
            Комментировать
          </ReviewSendAction>
        </ReviewActions>
      </>
    )
  }
};

export const Skeleton: ReviewStory = {
  args: {
    variant: 'skeleton'
  }
};

export default {
  title: 'Components/Review',
  component: Review,
  decorators: [StoryDecorator()]
} as ReviewMeta;
