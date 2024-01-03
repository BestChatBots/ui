import type { Meta, StoryObj } from '@storybook/react';
import { StoryDecorator } from '@/story-decorator';
import { Stars as BestChatBotsStars } from '@/components/stars';
import { Checkbox } from '.';
import { MjIcon } from '@/icons';

export type CheckboxMeta = Meta<typeof Checkbox>;

export type CheckboxStory = StoryObj<typeof Checkbox>;

export const Basic: CheckboxStory = {
  args: {}
};

export const Label: CheckboxStory = {
  args: {
    label: 'Label'
  }
};

export const Stars: CheckboxStory = {
  args: {
    label: <BestChatBotsStars filled={3} />
  }
};

export const Icon: CheckboxStory = {
  args: {
    icon: <MjIcon />,
    label: 'Midjourney'
  }
};

export const Disabled: CheckboxStory = {
  args: {
    ...Basic.args,
    disabled: true
  }
};

export const DisabledChecked: CheckboxStory = {
  args: {
    ...Disabled.args,
    checked: true
  }
};

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  decorators: [StoryDecorator()]
} as CheckboxMeta;
