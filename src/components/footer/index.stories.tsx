import type { Meta, StoryObj } from '@storybook/react';
import { StoryDecorator } from '@/story-decorator';
import { 
  Footer, 
  FooterLink, 
  FooterLinks, 
  FooterLogoLink, 
  FooterNav, 
  FooterNavLink, 
  FooterRights 
} from '.';
import { Logo } from '@/components/logo';
import {
  InfoIcon, MailIcon, RatingIcon, StarFilledIcon 
} from '@/icons';

export type FooterMeta = Meta<typeof Footer>;

export type FooterStory = StoryObj<typeof Footer>;

export const Basic: FooterStory = {
  args: {
    logo: (
      <FooterLogoLink href="#">
        <Logo />
      </FooterLogoLink>
    ),
    rights: (
      <FooterRights>
        © 2023 bestchatbots.org. Все права защищены.
      </FooterRights>
    ),
    links: (
      <FooterLinks>
        <FooterLink href="#">
          Политика конфиденциальности
        </FooterLink>
        <FooterLink href="#">
          Условия использования
        </FooterLink>
      </FooterLinks>
    ),
    nav: (
      <FooterNav>
        <FooterNavLink
          href="#"
          icon={<RatingIcon />}
        >
          Рейтинг
        </FooterNavLink>
        <FooterNavLink
          href="#"
          icon={<StarFilledIcon />}
        >
          Избранное
        </FooterNavLink>
        <FooterNavLink
          href="#"
          icon={<InfoIcon />}
        >
          Информация
        </FooterNavLink>
        <FooterNavLink
          href="#"
          icon={<MailIcon />}
        >
          Контакты
        </FooterNavLink>
      </FooterNav>
    )
  }
};

export default {
  title: 'Components/Footer',
  component: Footer,
  decorators: [StoryDecorator({ padding: '50px 0px' })]
} as FooterMeta;
