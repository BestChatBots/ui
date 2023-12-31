import type { Meta, StoryObj } from '@storybook/react';
import { StoryDecorator } from '@/story-decorator';
import { Tooltip } from '.';
import { Button } from '@/components/button';

export type TooltipMeta = Meta<typeof Tooltip>;

export type TooltipStory = StoryObj<typeof Tooltip>;

export const Basic: TooltipStory = {
  args: {
    label: 'Tooltip text',
    children: (
      <Button>
        Hover Me
      </Button>
    )
  }
};

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  decorators: [StoryDecorator({ margin: '50px 0px' })]
} as TooltipMeta;
