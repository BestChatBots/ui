import type { Meta, StoryObj } from '@storybook/react';
import { 
  Comment, 
  CommentActions, 
  CommentChild, 
  CommentChildren, 
  CommentDeleteAction, 
  CommentSendAction, 
  CommentSendButton, 
  CommentSendForm, 
  CommentSendInput, 
  CommentStars, 
  CommentText, 
  CommentatorAvatar, 
  CommentatorChildAvatar,
  CommentatorChildAdminAvatar,
  CommentChildText,
  CommentChildActions,
  CommentChildDeleteAction
} from '.';
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

export const Actions: CommentStory = {
  args: {
    ...Good.args,
    children: (
      <>
        <CommentText>
          Этот аггрегатор нейросетей действительно заслуживает высокой 
          оценки! Он удивительно удобен в использовании, предлагает 
          широкий спектр функций и инструментов, что значительно 
          упрощает работу с большими данными. Впечатляет скорость 
          обработки запросов и точность результатов. Отличная работа 
          команды разработчиков – это настоящий прорыв в области искусственного интеллекта!
        </CommentText>
        <CommentActions>
          <CommentSendAction>
            Комментировать
          </CommentSendAction>
          <CommentDeleteAction>
            Удалить
          </CommentDeleteAction>
        </CommentActions>
        <CommentSendForm>
          <CommentSendInput 
            placeholder="Напишите комментарий"
          />
          <CommentSendButton>
            Добавить комментарий
          </CommentSendButton>
        </CommentSendForm>
      </>
    )
  }
};

export const Children: CommentStory = {
  args: {
    ...Good.args,
    children: (
      <>
        <CommentText>
          Этот аггрегатор нейросетей действительно заслуживает высокой 
          оценки! Он удивительно удобен в использовании, предлагает 
          широкий спектр функций и инструментов, что значительно 
          упрощает работу с большими данными. Впечатляет скорость 
          обработки запросов и точность результатов. Отличная работа 
          команды разработчиков – это настоящий прорыв в области 
          искусственного интеллекта!
        </CommentText>
        <CommentChildren>
          <CommentChild
            avatar={(
              <CommentatorChildAvatar
                src="https://lh3.googleusercontent.com/a/AAcHTtdrCPPVWKH7r9JfDe7l99rmfw24zPAJkPOJTXQSg8tgKcc=s96-c"
                alt="@dev2alert" 
              />
            )}
            name="Артем Потыкун"
            dateCreated="3 декабря 2023 22:41"
          >
            Благодарим за ваш отзыв, рады стараться. С уважением, команда Bothub.chat!
          </CommentChild>
          <CommentChild
            avatar={<CommentatorChildAdminAvatar />}
            name="Администратор Bothub.chat"
            dateCreated="3 декабря 2023 22:41"
          >
            <CommentChildText>
              Благодарим за ваш отзыв, рады стараться.
              С уважением, команда Bothub.chat!
            </CommentChildText>
            <CommentChildActions>
              <CommentChildDeleteAction>
                Удалить
              </CommentChildDeleteAction>
            </CommentChildActions>
          </CommentChild>
        </CommentChildren>
        <CommentActions>
          <CommentSendAction>
            Комментировать
          </CommentSendAction>
        </CommentActions>
      </>
    )
  }
};

export const Skeleton: CommentStory = {
  args: {
    variant: 'skeleton'
  }
};

export default {
  title: 'Components/Comment',
  component: Comment,
  decorators: [StoryDecorator()]
} as CommentMeta;
