import type { Meta, StoryObj } from '@storybook/react';
import { Form } from '.';
import { StoryDecorator } from '@/story-decorator';
import { Input } from '@/components/input';
import { Button } from '@/components/button';
import { Logo as BestChatBotsLogo } from '@/components/logo';

export type FormMeta = Meta<typeof Form>;

export type FormStory = StoryObj<typeof Form>;

export const Basic: FormStory = {
  args: {
    children: (
      <>
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
          fullWidth
        >
          Войти
        </Button>
      </>
    )
  }
};

export const Title: FormStory = {
  args: {
    ...Basic.args,
    title: 'Авторизация'
  }
};

export const Logo: FormStory = {
  args: {
    ...Title.args,
    logo: <BestChatBotsLogo variant="admin" />
  }
};

export default {
  title: 'Components/Form',
  component: Form,
  decorators: [StoryDecorator()]
} as FormMeta;
