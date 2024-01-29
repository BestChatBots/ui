import type { Meta, StoryObj } from '@storybook/react';
import { StoryDecorator } from '@/story-decorator';
import { 
  Header, 
  HeaderButton, 
  HeaderButtons, 
  HeaderLang, 
  HeaderLink, 
  HeaderLogoutButton, 
  HeaderNav, 
  HeaderNavLink,
  HeaderUserAvatar,
  HeaderUserInfo
} from '.';
import { Logo } from '@/components/logo';
import {
  InfoIcon, MailIcon, ModelIcon, PlatformIcon, ProjectsIcon, RatingIcon, StarFilledIcon 
} from '@/icons';

export type HeaderMeta = Meta<typeof Header>;

export type HeaderStory = StoryObj<typeof Header>;

export const Basic: HeaderStory = {
  args: {
    logo: (
      <HeaderLink href="#">
        <Logo />
      </HeaderLink>
    ),
    nav: (
      <HeaderNav>
        <HeaderNavLink
          href="#"
          icon={<RatingIcon />}
          active
        >
          Рейтинг
        </HeaderNavLink>
        <HeaderNavLink 
          href="#"
          icon={<StarFilledIcon />}  
        >
          Избранные
        </HeaderNavLink>
        <HeaderNavLink 
          href="#"
          icon={<InfoIcon />}  
        >
          Информация
        </HeaderNavLink>
        <HeaderNavLink 
          href="#"
          icon={<MailIcon />}  
        >
          Контакты
        </HeaderNavLink>
      </HeaderNav>
    ),
    lang: (
      <HeaderLang
        value="ru"
        data={[
          'ru',
          'en'
        ]}
      />
    ),
    buttons: (
      <HeaderButtons>
        <HeaderButton>
          Добавить проект
        </HeaderButton>
        <HeaderButton
          variant="secondary"
        >
          Авторизация
        </HeaderButton>
      </HeaderButtons>
    )
  }
};

export const Authorized: HeaderStory = {
  args: {
    ...Basic.args,
    buttons: (
      <HeaderButtons>
        <HeaderButton>
          Добавить проект
        </HeaderButton>
      </HeaderButtons>
    ),
    user: (
      <HeaderUserInfo
        avatar={<HeaderUserAvatar src="https://lh3.googleusercontent.com/a/AAcHTtdrCPPVWKH7r9JfDe7l99rmfw24zPAJkPOJTXQSg8tgKcc=s96-c" alt="@dev2alert" />}
        name="Артем Потыкун Длинное имя Длинное имя Длинное имя Длинное имя Длинное имя"
        logout={<HeaderLogoutButton />}
      />
    )
  }
};

export const Admin: HeaderStory = {
  args: {
    ...Authorized.args,
    logo: (
      <HeaderLink href="#">
        <Logo variant="admin" />
      </HeaderLink>
    ),
    lang: null,
    buttons: null,
    nav: (
      <HeaderNav>
        <HeaderNavLink
          href="#"
          icon={<ProjectsIcon />}
          active
        >
          Проекты
        </HeaderNavLink>
        <HeaderNavLink 
          href="#"
          icon={<ModelIcon />}  
        >
          Модели
        </HeaderNavLink>
        <HeaderNavLink
          href="#"
          icon={<PlatformIcon />}
        >
          Платформы
        </HeaderNavLink>
      </HeaderNav>
    )
  }
};

export default {
  title: 'Components/Header',
  component: Header,
  decorators: [StoryDecorator({ padding: '0px' })],
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as HeaderMeta;
