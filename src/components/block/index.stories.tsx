import type { Meta, StoryObj } from '@storybook/react';
import { StoryDecorator } from '@/story-decorator';
import { Block } from '.';
import { Typography } from '@/components/typography';
import { Form as BestChatBotsForm } from '@/components/form';
import { Input } from '@/components/input';
import { Button } from '@/components/button';
import { Logo } from '@/components/logo';

export type BlockMeta = Meta<typeof Block>;

export type BlockStory = StoryObj<typeof Block>;

export const Basic: BlockStory = {
  args: {
    children: (
      [...Array(50)].map((_, index) => (
        <Typography 
          key={index}
          component="h1"
          variant="h1"
        >
          Content
        </Typography>
      ))
    )
  }
};

export const Scrollbar: BlockStory = {
  args: {
    ...Basic.args,
    scrollbar: true
  }
};

export const Title: BlockStory = {
  args: {
    ...Basic.args,
    title: 'Title'
  }
};

export const TitleScrollbar: BlockStory = {
  args: {
    ...Title.args,
    scrollbar: true
  }
};

export const Form: BlockStory = {
  args: {
    inline: true,
    children: (
      <BestChatBotsForm
        logo={<Logo variant="admin" />}
        title="Авторизация"
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
          fullWidth
        >
          Войти
        </Button>
      </BestChatBotsForm>
    )
  }
};

export default {
  title: 'Components/Block',
  component: Block,
  decorators: [StoryDecorator()],
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as BlockMeta;
