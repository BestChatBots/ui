import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '.';
import { StoryDecorator } from '@/story-decorator';
import { Form, FormButtons, FormText } from '@/components/form';
import { Button } from '@/components/button';
import { TgBasicIcon } from '@/icons';
import { Input } from '@/components/input';
import { StarsInput } from '@/components/stars-input';
import { TextArea } from '@/components/textarea';

export type ModalMeta = Meta<typeof Modal>;

export type ModalStory = StoryObj<typeof Modal>;

export const Basic: ModalStory = {
  args: {
    open: true,
    title: 'Добавить новый проект',
    children: (
      <Form
        variant="modal"
      >
        <FormText>
          {'Если у вас есть свой AI сервис, вы можете добавить его в наш рейтинг. Чтобы это сделать вам необходимо связаться с нашим менеджером и оставить заявку в которой необходимо указать:\n\n1.  Название проекта;\n2.  URL проекта;\n3.  Описание;\n4.  Используемые модели;\n5.  Поддерживаемые платформы.'}
        </FormText>
        <Button
          size="medium"
          startIcon={<TgBasicIcon />}
          fullWidth
        >
          Написать в Telegram
        </Button>
      </Form>
    )
  }
};

export const Auth: ModalStory = {
  args: {
    open: true,
    title: 'Авторизация',
    children: (
      <Form
        variant="modal"
      >
        <Input
          label="Логин"
          placeholder="Введите логин"
          fullWidth
        />
        <Input
          label="Пароль"
          type="password"
          placeholder="Введите пароль"
          fullWidth
        />
        <Button
          type="submit"
          size="medium"
          fullWidth
        >
          Войти
        </Button>
      </Form>
    )
  }
};

export const Comment: ModalStory = {
  args: {
    open: true,
    title: 'Оставить отзыв',
    children: (
      <Form
        variant="modal"
      >
        <StarsInput 
          fullWidth
        />
        <TextArea
          label="Отзыв"
          placeholder="Напишите ваше мнение"
          fullWidth
        />
        <FormButtons>
          <Button
            variant="secondary"
            fullWidth
          >
            Отменить
          </Button>
          <Button
            fullWidth
          >
            Добавить отзыв
          </Button>
        </FormButtons>
      </Form>
    )
  }
};

export default {
  title: 'Components/Modal',
  component: Modal,
  decorators: [StoryDecorator()],
  args: {
    open: true
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as ModalMeta;
