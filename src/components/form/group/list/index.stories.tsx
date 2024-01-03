import type { Meta, StoryObj } from '@storybook/react';
import { FormGroups } from '.';
import { StoryDecorator } from '@/story-decorator';
import { Form, FormGroup, FormGroupDivider } from '@/components/form';
import { Input } from '@/components/input';
import { ImageInput } from '@/components/image-input';
import { Button } from '@/components/button';
import { Model, ModelDeleteButton, Models } from '@/components/model';
import {
  ClaudeIcon, DalleIcon, Gpt35Icon, Gpt4Icon, MjIcon 
} from '@/icons';
import { TextArea } from '@/components/textarea';
import { Select } from '@/components/select';

export type FormGroupsMeta = Meta<typeof FormGroups>;

export type FormGroupsStory = StoryObj<typeof FormGroups>;

export const ModelSettings: FormGroupsStory = {
  args: {
    children: (
      <>
        <FormGroup
          name="Текущие модели"
          spacing={16}
        >
          <Models
            direction="column"
          >
            <Model
              variant="text"
              icon={<Gpt35Icon />}
              name="ChatGPT 3.5"
              delete={<ModelDeleteButton />}
            />
            <Model
              variant="text"
              icon={<Gpt4Icon />}
              name="ChatGPT 4.0"
              delete={<ModelDeleteButton />}
            />
            <Model
              variant="text"
              icon={<DalleIcon />}
              name="DALL-E 3"
              delete={<ModelDeleteButton />}
            />
            <Model
              variant="text"
              icon={<MjIcon />}
              name="Midjourney"
              delete={<ModelDeleteButton />}
            />
            <Model
              variant="text"
              icon={<ClaudeIcon />}
              name="Claude AI"
              delete={<ModelDeleteButton />}
            />
          </Models>
        </FormGroup>
        <FormGroupDivider />
        <FormGroup
          name="Добавить новую"
        >
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
        </FormGroup>
      </>
    )
  }
};

export const ProjectSettings: FormGroupsStory = {
  args: {
    width: 600,
    spacing: 20,
    children: (
      <>
        <FormGroup name="Администратор" spacing={12} fullWidth>
          <Form spacing={12} fullWidth>
            <Input value="adminpochta.gmail.com" fullWidth />
            <Button>
              Сохранить
            </Button>
          </Form>
        </FormGroup>
        <FormGroup name="Описание" spacing={12} fullWidth>
          <Form spacing={12} fullWidth>
            <TextArea
              value="Экспериментируйте с ChatGPT-4, Midjourney и Claude в одном месте. Без VPN и абонентской платы. Создавайте контент, обрабатывайте данные и получайте ответы на вопросы через удобный интерфейс!"
              fullWidth
            />
            <Button>
              Сохранить
            </Button>
          </Form>
        </FormGroup>
        <FormGroup name="Модели" spacing={12} fullWidth>
          <Form spacing={12} fullWidth>
            <Select
              multiple
              placeholder="Выберите модели"
              value={['gpt-3', 'gpt-4', 'dalle', 'mj', 'claude']}
              data={[
                {
                  label: 'ChatGPT 3.5',
                  value: 'gpt-3'
                },
                {
                  label: 'ChatGPT 4.0',
                  value: 'gpt-4'
                },
                {
                  label: 'DALL-E 3',
                  value: 'dalle'
                },
                {
                  label: 'Midjourney',
                  value: 'mj'
                },
                {
                  label: 'Claude AI',
                  value: 'claude'
                }
              ]}
              fullWidth
            />
          </Form>
          <Button>
            Сохранить
          </Button>
        </FormGroup>
        <FormGroup name="Платформы" spacing={12} fullWidth>
          <Form spacing={12} fullWidth>
            <Select
              multiple
              placeholder="Выберите платформу"
              value={['web', 'tg', 'ios', 'android']}
              data={[
                {
                  label: 'Web',
                  value: 'web'
                },
                {
                  label: 'Telegram',
                  value: 'tg'
                },
                {
                  label: 'iOS app',
                  value: 'ios'
                },
                {
                  label: 'Android app',
                  value: 'android'
                }
              ]}
              fullWidth
            />
            <Button>
              Сохранить
            </Button>
          </Form>
        </FormGroup>
      </>
    )
  }
};

export default {
  title: 'Components/Form/Group/List',
  component: FormGroups,
  decorators: [StoryDecorator()]
} as FormGroupsMeta;
