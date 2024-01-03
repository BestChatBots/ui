import type { Meta, StoryObj } from '@storybook/react';
import { FormGroup } from '.';
import { StoryDecorator } from '@/story-decorator';
import { Form } from '@/components/form';
import { Input } from '@/components/input';
import { ImageInput } from '@/components/image-input';
import { Button } from '@/components/button';

export type FormGroupMeta = Meta<typeof FormGroup>;

export type FormGroupStory = StoryObj<typeof FormGroup>;

export const Basic: FormGroupStory = {
  args: {
    name: 'Добавить новую',
    children: (
      <Form spacing={18}>
        <Input
          name="name"
          label="Название модели"
          placeholder="Введите название"
        />
        <ImageInput
          name="icon"
          label="Иконка модели"
          type="icon"
        />
        <Button>
          Добавить
        </Button>
      </Form>
    )
  }
};

export default {
  title: 'Components/Form/Group',
  component: FormGroup,
  decorators: [StoryDecorator()]
} as FormGroupMeta;
