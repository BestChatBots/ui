import type { Meta, StoryObj } from '@storybook/react';
import { StoryDecorator } from '@/story-decorator';
import { Section } from '@/components/section';
import { SectionInfo, SectionLogo, SectionText } from './styled';
import { Background } from '@/components/background';

export type SectionMeta = Meta<typeof Section>;

export type SectionStory = StoryObj<typeof Section>;

export const Basic: SectionStory = {
  args: {
    fullHeight: true,
    bg: <Background variant="lines" />,
    children: (
      <SectionInfo>
        <SectionLogo />
        <SectionText>
          Рейтинг AI Сервисов
        </SectionText>
      </SectionInfo>
    )
  }
};

export default {
  title: 'Components/Section',
  component: Section,
  decorators: [StoryDecorator({ padding: '0px' })]
} as SectionMeta;
