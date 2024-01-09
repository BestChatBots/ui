import type { Meta, StoryObj } from '@storybook/react';
import {
  Table, TableCell, TableCellText, TableGrayText, TableGreenText, TableHead, TableRedText, TableRow 
} from '@/components/table';
import { StoryDecorator } from '@/story-decorator';
import {
  AndroidIcon,
  ClaudeIcon, 
  DalleIcon, 
  Gpt35Icon, 
  Gpt4Icon, 
  IosIcon, 
  MjIcon, 
  TgIcon, 
  TopIcon, 
  WebIcon 
} from '@/icons';
import { Stars } from '@/components/stars';
import { Model, Models } from '@/components/model';
import { Platform, Platforms } from '@/components/platform';
import { Avatar } from '@/components/avatar';
import { Skeleton as BestChatBotsSkeleton } from '@/components/skeleton'; 
import bothubLogo from './assets/bothub.png';
import aigptLogo from './assets/aigpt.png';
import chadgptLogo from './assets/chadgpt.png';
import pulsegptLogo from './assets/pulsegpt.png';
import ruchatgptLogo from './assets/ru-chatgpt.png';
import chatgptrusLogo from './assets/chatgptrus.png';
import gptchatbotLogo from './assets/gpt-chat-bot.png';
import chatgptruLogo from './assets/chat-gpt-ru.png';
import writesonicLogo from './assets/writesonic.png';
import rytrLogo from './assets/rytr.png';

export type TableMeta = Meta<typeof Table>;

export type TableStory = StoryObj<typeof Table>;

export const Basic: TableStory = {
  args: {
    head: (
      <TableHead>
        <TableRow>
          <TableCell align="center">
            #
          </TableCell>
          <TableCell>
            Название
          </TableCell>
          <TableCell>
            Рейтинг
          </TableCell>
          <TableCell>
            Модели
          </TableCell>
          <TableCell>
            Отзывы
          </TableCell>
          <TableCell>
            Платформы
          </TableCell>
        </TableRow>
      </TableHead>
    ),
    children: (
      <>
        <TableRow clickable>
          <TableCell align="center">
            <TopIcon />
          </TableCell>
          <TableCell>
            <Avatar
              src={bothubLogo}
              size={24}
            />
            <TableCellText
              as="a"
              href="#"
            >
              Bothub.chat
            </TableCellText>
          </TableCell>
          <TableCell>
            <Stars filled={5} />
          </TableCell>
          <TableCell>
            <Models>
              <Model
                icon={<Gpt35Icon />}
                name="ChatGPT 3.5"
              />
              <Model
                icon={<Gpt4Icon />}
                name="ChatGPT 4.0"
              />
              <Model
                icon={<DalleIcon />}
                name="DALL-E 3"
              />
              <Model
                icon={<MjIcon />}
                name="Midjourney"
              />
              <Model
                icon={<ClaudeIcon />}
                name="Claude AI"
              />
            </Models>
          </TableCell>
          <TableCell>
            <TableCellText>
              7513
              {' '}
              <TableGrayText>
                (
                <TableGreenText>6531</TableGreenText>
                {' '}
                |
                {' '}
                <TableRedText>500</TableRedText>
                )
              </TableGrayText>
            </TableCellText>
          </TableCell>
          <TableCell>
            <Platforms>
              <Platform
                icon={<WebIcon />}
                name="Web"
              />
              <Platform
                icon={<TgIcon />}
                name="Telegram"
              />
              <Platform
                icon={<IosIcon />}
                name="iOS"
              />
              <Platform
                icon={<AndroidIcon />}
                name="Android"
              />
            </Platforms>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center">
            2
          </TableCell>
          <TableCell>
            <Avatar
              src={aigptLogo}
              size={24}
            />
            <TableCellText
              as="a"
              href="#"
            >
              AIgpt.pro
            </TableCellText>
          </TableCell>
          <TableCell>
            <Stars filled={4} />
          </TableCell>
          <TableCell>
            <Models>
              <Model
                icon={<Gpt35Icon />}
                name="ChatGPT 3.5"
              />
              <Model
                icon={<Gpt4Icon />}
                name="ChatGPT 4.0"
              />
              <Model
                icon={<MjIcon />}
                name="Midjourney"
              />
            </Models>
          </TableCell>
          <TableCell>
            <TableCellText>
              6157
              {' '}
              <TableGrayText>
                (
                <TableGreenText>6531</TableGreenText>
                {' '}
                |
                {' '}
                <TableRedText>500</TableRedText>
                )
              </TableGrayText>
            </TableCellText>
          </TableCell>
          <TableCell>
            <Platforms>
              <Platform
                icon={<WebIcon />}
                name="Web"
              />
              <Platform
                icon={<TgIcon />}
                name="Telegram"
              />
            </Platforms>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center">
            3
          </TableCell>
          <TableCell>
            <Avatar
              src={chadgptLogo}
              size={24}
            />
            <TableCellText
              as="a"
              href="#"
            >
              Chadgpt.ru
            </TableCellText>
          </TableCell>
          <TableCell>
            <Stars filled={4} />
          </TableCell>
          <TableCell>
            <Models>
              <Model
                icon={<Gpt35Icon />}
                name="ChatGPT 3.5"
              />
              <Model
                icon={<Gpt4Icon />}
                name="ChatGPT 4.0"
              />
              <Model
                icon={<DalleIcon />}
                name="DALL-E 3"
              />
            </Models>
          </TableCell>
          <TableCell>
            <TableCellText>
              6113
              {' '}
              <TableGrayText>
                (
                <TableGreenText>6531</TableGreenText>
                {' '}
                |
                {' '}
                <TableRedText>500</TableRedText>
                )
              </TableGrayText>
            </TableCellText>
          </TableCell>
          <TableCell>
            <Platforms>
              <Platform
                icon={<WebIcon />}
                name="Web"
              />
              <Platform
                icon={<TgIcon />}
                name="Telegram"
              />
              <Platform
                icon={<IosIcon />}
                name="iOS"
              />
            </Platforms>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center">
            4
          </TableCell>
          <TableCell>
            <Avatar
              src={pulsegptLogo}
              size={24}
            />
            <TableCellText
              as="a"
              href="#"
            >
              Pulsegpt.pro
            </TableCellText>
          </TableCell>
          <TableCell>
            <Stars filled={4} />
          </TableCell>
          <TableCell>
            <Models>
              <Model
                icon={<Gpt35Icon />}
                name="ChatGPT 3.5"
              />
              <Model
                icon={<Gpt4Icon />}
                name="ChatGPT 4.0"
              />
              <Model
                icon={<MjIcon />}
                name="Midjourney"
              />
              <Model
                icon={<ClaudeIcon />}
                name="Claude AI"
              />
            </Models>
          </TableCell>
          <TableCell>
            <TableCellText>
              6094
              {' '}
              <TableGrayText>
                (
                <TableGreenText>6531</TableGreenText>
                {' '}
                |
                {' '}
                <TableRedText>500</TableRedText>
                )
              </TableGrayText>
            </TableCellText>
          </TableCell>
          <TableCell>
            <Platforms>
              <Platform
                icon={<WebIcon />}
                name="Web"
              />
            </Platforms>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center">
            5
          </TableCell>
          <TableCell>
            <Avatar
              src={ruchatgptLogo}
              size={24}
            />
            <TableCellText
              as="a"
              href="#"
            >
              Ru-chatgpt.ru
            </TableCellText>
          </TableCell>
          <TableCell>
            <Stars filled={4} />
          </TableCell>
          <TableCell>
            <Models>
              <Model
                icon={<Gpt35Icon />}
                name="ChatGPT 3.5"
              />
              <Model
                icon={<Gpt4Icon />}
                name="ChatGPT 4.0"
              />
              <Model
                icon={<DalleIcon />}
                name="DALL-E 3"
              />
            </Models>
          </TableCell>
          <TableCell>
            <TableCellText>
              6011
              {' '}
              <TableGrayText>
                (
                <TableGreenText>6531</TableGreenText>
                {' '}
                |
                {' '}
                <TableRedText>500</TableRedText>
                )
              </TableGrayText>
            </TableCellText>
          </TableCell>
          <TableCell>
            <Platforms>
              <Platform
                icon={<WebIcon />}
                name="Web"
              />
              <Platform
                icon={<TgIcon />}
                name="Telegram"
              />
            </Platforms>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center">
            6
          </TableCell>
          <TableCell>
            <Avatar
              src={chatgptrusLogo}
              size={24}
            />
            <TableCellText
              as="a"
              href="#"
            >
              ChatGPTrus.ru
            </TableCellText>
          </TableCell>
          <TableCell>
            <Stars filled={4} />
          </TableCell>
          <TableCell>
            <Models>
              <Model
                icon={<Gpt35Icon />}
                name="ChatGPT 3.5"
              />
              <Model
                icon={<Gpt4Icon />}
                name="ChatGPT 4.0"
              />
              <Model
                icon={<MjIcon />}
                name="Midjourney"
              />
            </Models>
          </TableCell>
          <TableCell>
            <TableCellText>
              6157
              {' '}
              <TableGrayText>
                (
                <TableGreenText>6531</TableGreenText>
                {' '}
                |
                {' '}
                <TableRedText>500</TableRedText>
                )
              </TableGrayText>
            </TableCellText>
          </TableCell>
          <TableCell>
            <Platforms>
              <Platform
                icon={<WebIcon />}
                name="Web"
              />
              <Platform
                icon={<TgIcon />}
                name="Telegram"
              />
            </Platforms>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center">
            7
          </TableCell>
          <TableCell>
            <Avatar
              src={gptchatbotLogo}
              size={24}
            />
            <TableCellText
              as="a"
              href="#"
            >
              gpt-chat-bot.ru
            </TableCellText>
          </TableCell>
          <TableCell>
            <Stars filled={4} />
          </TableCell>
          <TableCell>
            <Models>
              <Model
                icon={<Gpt35Icon />}
                name="ChatGPT 3.5"
              />
              <Model
                icon={<Gpt4Icon />}
                name="ChatGPT 4.0"
              />
              <Model
                icon={<DalleIcon />}
                name="DALL-E 3"
              />
            </Models>
          </TableCell>
          <TableCell>
            <TableCellText>
              7513
              {' '}
              <TableGrayText>
                (
                <TableGreenText>6531</TableGreenText>
                {' '}
                |
                {' '}
                <TableRedText>500</TableRedText>
                )
              </TableGrayText>
            </TableCellText>
          </TableCell>
          <TableCell>
            <Platforms>
              <Platform
                icon={<WebIcon />}
                name="Web"
              />
              <Platform
                icon={<TgIcon />}
                name="Telegram"
              />
              <Platform
                icon={<IosIcon />}
                name="iOS"
              />
            </Platforms>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center">
            8
          </TableCell>
          <TableCell>
            <Avatar
              src={chatgptruLogo}
              size={24}
            />
            <TableCellText
              as="a"
              href="#"
            >
              chat-gpt.ru
            </TableCellText>
          </TableCell>
          <TableCell>
            <Stars filled={5} />
          </TableCell>
          <TableCell>
            <Models>
              <Model
                icon={<Gpt35Icon />}
                name="ChatGPT 3.5"
              />
              <Model
                icon={<Gpt4Icon />}
                name="ChatGPT 4.0"
              />
              <Model
                icon={<DalleIcon />}
                name="DALL-E 3"
              />
              <Model
                icon={<MjIcon />}
                name="Midjourney"
              />
              <Model
                icon={<ClaudeIcon />}
                name="Claude AI"
              />
            </Models>
          </TableCell>
          <TableCell>
            <TableCellText>
              7513
              {' '}
              <TableGrayText>
                (
                <TableGreenText>6531</TableGreenText>
                {' '}
                |
                {' '}
                <TableRedText>500</TableRedText>
                )
              </TableGrayText>
            </TableCellText>
          </TableCell>
          <TableCell>
            <Platforms>
              <Platform
                icon={<WebIcon />}
                name="Web"
              />
              <Platform
                icon={<TgIcon />}
                name="Telegram"
              />
              <Platform
                icon={<IosIcon />}
                name="iOS"
              />
              <Platform
                icon={<AndroidIcon />}
                name="Android"
              />
            </Platforms>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center">
            9
          </TableCell>
          <TableCell>
            <Avatar
              src={writesonicLogo}
              size={24}
            />
            <TableCellText
              as="a"
              href="#"
            >
              writesonic.com
            </TableCellText>
          </TableCell>
          <TableCell>
            <Stars filled={5} />
          </TableCell>
          <TableCell>
            <Models>
              <Model
                icon={<Gpt35Icon />}
                name="ChatGPT 3.5"
              />
              <Model
                icon={<Gpt4Icon />}
                name="ChatGPT 4.0"
              />
              <Model
                icon={<DalleIcon />}
                name="DALL-E 3"
              />
              <Model
                icon={<MjIcon />}
                name="Midjourney"
              />
              <Model
                icon={<ClaudeIcon />}
                name="Claude AI"
              />
            </Models>
          </TableCell>
          <TableCell>
            <TableCellText>
              7513
              {' '}
              <TableGrayText>
                (
                <TableGreenText>6531</TableGreenText>
                {' '}
                |
                {' '}
                <TableRedText>500</TableRedText>
                )
              </TableGrayText>
            </TableCellText>
          </TableCell>
          <TableCell>
            <Platforms>
              <Platform
                icon={<WebIcon />}
                name="Web"
              />
              <Platform
                icon={<TgIcon />}
                name="Telegram"
              />
              <Platform
                icon={<IosIcon />}
                name="iOS"
              />
              <Platform
                icon={<AndroidIcon />}
                name="Android"
              />
            </Platforms>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center">
            10
          </TableCell>
          <TableCell>
            <Avatar
              src={rytrLogo}
              size={24}
            />
            <TableCellText
              as="a"
              href="#"
            >
              Rytr.me
            </TableCellText>
          </TableCell>
          <TableCell>
            <Stars filled={5} />
          </TableCell>
          <TableCell>
            <Models>
              <Model
                icon={<Gpt35Icon />}
                name="ChatGPT 3.5"
              />
              <Model
                icon={<Gpt4Icon />}
                name="ChatGPT 4.0"
              />
              <Model
                icon={<DalleIcon />}
                name="DALL-E 3"
              />
              <Model
                icon={<MjIcon />}
                name="Midjourney"
              />
              <Model
                icon={<ClaudeIcon />}
                name="Claude AI"
              />
            </Models>
          </TableCell>
          <TableCell>
            <TableCellText>
              7513
              {' '}
              <TableGrayText>
                (
                <TableGreenText>6531</TableGreenText>
                {' '}
                |
                {' '}
                <TableRedText>500</TableRedText>
                )
              </TableGrayText>
            </TableCellText>
          </TableCell>
          <TableCell>
            <Platforms>
              <Platform
                icon={<WebIcon />}
                name="Web"
              />
              <Platform
                icon={<TgIcon />}
                name="Telegram"
              />
              <Platform
                icon={<IosIcon />}
                name="iOS"
              />
              <Platform
                icon={<AndroidIcon />}
                name="Android"
              />
            </Platforms>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center">
            11
          </TableCell>
          <TableCell>
            <Avatar
              src={bothubLogo}
              size={24}
            />
            <TableCellText
              as="a"
              href="#"
            >
              Bothub.chat
            </TableCellText>
          </TableCell>
          <TableCell>
            <Stars filled={5} />
          </TableCell>
          <TableCell>
            <Models>
              <Model
                icon={<Gpt35Icon />}
                name="ChatGPT 3.5"
              />
              <Model
                icon={<Gpt4Icon />}
                name="ChatGPT 4.0"
              />
              <Model
                icon={<DalleIcon />}
                name="DALL-E 3"
              />
              <Model
                icon={<MjIcon />}
                name="Midjourney"
              />
              <Model
                icon={<ClaudeIcon />}
                name="Claude AI"
              />
            </Models>
          </TableCell>
          <TableCell>
            <TableCellText>
              7513
              {' '}
              <TableGrayText>
                (
                <TableGreenText>6531</TableGreenText>
                {' '}
                |
                {' '}
                <TableRedText>500</TableRedText>
                )
              </TableGrayText>
            </TableCellText>
          </TableCell>
          <TableCell>
            <Platforms>
              <Platform
                icon={<WebIcon />}
                name="Web"
              />
              <Platform
                icon={<TgIcon />}
                name="Telegram"
              />
              <Platform
                icon={<IosIcon />}
                name="iOS"
              />
              <Platform
                icon={<AndroidIcon />}
                name="Android"
              />
            </Platforms>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center">
            12
          </TableCell>
          <TableCell>
            <Avatar
              src={aigptLogo}
              size={24}
            />
            <TableCellText
              as="a"
              href="#"
            >
              AIgpt.pro
            </TableCellText>
          </TableCell>
          <TableCell>
            <Stars filled={4} />
          </TableCell>
          <TableCell>
            <Models>
              <Model
                icon={<Gpt35Icon />}
                name="ChatGPT 3.5"
              />
              <Model
                icon={<Gpt4Icon />}
                name="ChatGPT 4.0"
              />
              <Model
                icon={<MjIcon />}
                name="Midjourney"
              />
            </Models>
          </TableCell>
          <TableCell>
            <TableCellText>
              6157
              {' '}
              <TableGrayText>
                (
                <TableGreenText>6531</TableGreenText>
                {' '}
                |
                {' '}
                <TableRedText>500</TableRedText>
                )
              </TableGrayText>
            </TableCellText>
          </TableCell>
          <TableCell>
            <Platforms>
              <Platform
                icon={<WebIcon />}
                name="Web"
              />
              <Platform
                icon={<TgIcon />}
                name="Telegram"
              />
            </Platforms>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center">
            13
          </TableCell>
          <TableCell>
            <Avatar
              src={chadgptLogo}
              size={24}
            />
            <TableCellText
              as="a"
              href="#"
            >
              Chadgpt.ru
            </TableCellText>
          </TableCell>
          <TableCell>
            <Stars filled={4} />
          </TableCell>
          <TableCell>
            <Models>
              <Model
                icon={<Gpt35Icon />}
                name="ChatGPT 3.5"
              />
              <Model
                icon={<Gpt4Icon />}
                name="ChatGPT 4.0"
              />
              <Model
                icon={<DalleIcon />}
                name="DALL-E 3"
              />
            </Models>
          </TableCell>
          <TableCell>
            <TableCellText>
              6113
              {' '}
              <TableGrayText>
                (
                <TableGreenText>6531</TableGreenText>
                {' '}
                |
                {' '}
                <TableRedText>500</TableRedText>
                )
              </TableGrayText>
            </TableCellText>
          </TableCell>
          <TableCell>
            <Platforms>
              <Platform
                icon={<WebIcon />}
                name="Web"
              />
              <Platform
                icon={<TgIcon />}
                name="Telegram"
              />
              <Platform
                icon={<IosIcon />}
                name="iOS"
              />
            </Platforms>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center">
            14
          </TableCell>
          <TableCell>
            <Avatar
              src={pulsegptLogo}
              size={24}
            />
            <TableCellText
              as="a"
              href="#"
            >
              Pulsegpt.pro
            </TableCellText>
          </TableCell>
          <TableCell>
            <Stars filled={4} />
          </TableCell>
          <TableCell>
            <Models>
              <Model
                icon={<Gpt35Icon />}
                name="ChatGPT 3.5"
              />
              <Model
                icon={<Gpt4Icon />}
                name="ChatGPT 4.0"
              />
              <Model
                icon={<MjIcon />}
                name="Midjourney"
              />
              <Model
                icon={<ClaudeIcon />}
                name="Claude AI"
              />
            </Models>
          </TableCell>
          <TableCell>
            <TableCellText>
              6094
              {' '}
              <TableGrayText>
                (
                <TableGreenText>6531</TableGreenText>
                {' '}
                |
                {' '}
                <TableRedText>500</TableRedText>
                )
              </TableGrayText>
            </TableCellText>
          </TableCell>
          <TableCell>
            <Platforms>
              <Platform
                icon={<WebIcon />}
                name="Web"
              />
            </Platforms>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center">
            15
          </TableCell>
          <TableCell>
            <Avatar
              src={ruchatgptLogo}
              size={24}
            />
            <TableCellText
              as="a"
              href="#"
            >
              Ru-chatgpt.ru
            </TableCellText>
          </TableCell>
          <TableCell>
            <Stars filled={4} />
          </TableCell>
          <TableCell>
            <Models>
              <Model
                icon={<Gpt35Icon />}
                name="ChatGPT 3.5"
              />
              <Model
                icon={<Gpt4Icon />}
                name="ChatGPT 4.0"
              />
              <Model
                icon={<DalleIcon />}
                name="DALL-E 3"
              />
            </Models>
          </TableCell>
          <TableCell>
            <TableCellText>
              6011
              {' '}
              <TableGrayText>
                (
                <TableGreenText>6531</TableGreenText>
                {' '}
                |
                {' '}
                <TableRedText>500</TableRedText>
                )
              </TableGrayText>
            </TableCellText>
          </TableCell>
          <TableCell>
            <Platforms>
              <Platform
                icon={<WebIcon />}
                name="Web"
              />
              <Platform
                icon={<TgIcon />}
                name="Telegram"
              />
            </Platforms>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center">
            16
          </TableCell>
          <TableCell>
            <Avatar
              src={chatgptrusLogo}
              size={24}
            />
            <TableCellText
              as="a"
              href="#"
            >
              ChatGPTrus.ru
            </TableCellText>
          </TableCell>
          <TableCell>
            <Stars filled={4} />
          </TableCell>
          <TableCell>
            <Models>
              <Model
                icon={<Gpt35Icon />}
                name="ChatGPT 3.5"
              />
              <Model
                icon={<Gpt4Icon />}
                name="ChatGPT 4.0"
              />
              <Model
                icon={<MjIcon />}
                name="Midjourney"
              />
            </Models>
          </TableCell>
          <TableCell>
            <TableCellText>
              6157
              {' '}
              <TableGrayText>
                (
                <TableGreenText>6531</TableGreenText>
                {' '}
                |
                {' '}
                <TableRedText>500</TableRedText>
                )
              </TableGrayText>
            </TableCellText>
          </TableCell>
          <TableCell>
            <Platforms>
              <Platform
                icon={<WebIcon />}
                name="Web"
              />
              <Platform
                icon={<TgIcon />}
                name="Telegram"
              />
            </Platforms>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center">
            17
          </TableCell>
          <TableCell>
            <Avatar
              src={gptchatbotLogo}
              size={24}
            />
            <TableCellText
              as="a"
              href="#"
            >
              gpt-chat-bot.ru
            </TableCellText>
          </TableCell>
          <TableCell>
            <Stars filled={4} />
          </TableCell>
          <TableCell>
            <Models>
              <Model
                icon={<Gpt35Icon />}
                name="ChatGPT 3.5"
              />
              <Model
                icon={<Gpt4Icon />}
                name="ChatGPT 4.0"
              />
              <Model
                icon={<DalleIcon />}
                name="DALL-E 3"
              />
            </Models>
          </TableCell>
          <TableCell>
            <TableCellText>
              7513
              {' '}
              <TableGrayText>
                (
                <TableGreenText>6531</TableGreenText>
                {' '}
                |
                {' '}
                <TableRedText>500</TableRedText>
                )
              </TableGrayText>
            </TableCellText>
          </TableCell>
          <TableCell>
            <Platforms>
              <Platform
                icon={<WebIcon />}
                name="Web"
              />
              <Platform
                icon={<TgIcon />}
                name="Telegram"
              />
              <Platform
                icon={<IosIcon />}
                name="iOS"
              />
            </Platforms>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center">
            18
          </TableCell>
          <TableCell>
            <Avatar
              src={chatgptruLogo}
              size={24}
            />
            <TableCellText
              as="a"
              href="#"
            >
              chat-gpt.ru
            </TableCellText>
          </TableCell>
          <TableCell>
            <Stars filled={5} />
          </TableCell>
          <TableCell>
            <Models>
              <Model
                icon={<Gpt35Icon />}
                name="ChatGPT 3.5"
              />
              <Model
                icon={<Gpt4Icon />}
                name="ChatGPT 4.0"
              />
              <Model
                icon={<DalleIcon />}
                name="DALL-E 3"
              />
              <Model
                icon={<MjIcon />}
                name="Midjourney"
              />
              <Model
                icon={<ClaudeIcon />}
                name="Claude AI"
              />
            </Models>
          </TableCell>
          <TableCell>
            <TableCellText>
              7513
              {' '}
              <TableGrayText>
                (
                <TableGreenText>6531</TableGreenText>
                {' '}
                |
                {' '}
                <TableRedText>500</TableRedText>
                )
              </TableGrayText>
            </TableCellText>
          </TableCell>
          <TableCell>
            <Platforms>
              <Platform
                icon={<WebIcon />}
                name="Web"
              />
              <Platform
                icon={<TgIcon />}
                name="Telegram"
              />
              <Platform
                icon={<IosIcon />}
                name="iOS"
              />
              <Platform
                icon={<AndroidIcon />}
                name="Android"
              />
            </Platforms>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center">
            19
          </TableCell>
          <TableCell>
            <Avatar
              src={writesonicLogo}
              size={24}
            />
            <TableCellText
              as="a"
              href="#"
            >
              writesonic.com
            </TableCellText>
          </TableCell>
          <TableCell>
            <Stars filled={5} />
          </TableCell>
          <TableCell>
            <Models>
              <Model
                icon={<Gpt35Icon />}
                name="ChatGPT 3.5"
              />
              <Model
                icon={<Gpt4Icon />}
                name="ChatGPT 4.0"
              />
              <Model
                icon={<DalleIcon />}
                name="DALL-E 3"
              />
              <Model
                icon={<MjIcon />}
                name="Midjourney"
              />
              <Model
                icon={<ClaudeIcon />}
                name="Claude AI"
              />
            </Models>
          </TableCell>
          <TableCell>
            <TableCellText>
              7513
              {' '}
              <TableGrayText>
                (
                <TableGreenText>6531</TableGreenText>
                {' '}
                |
                {' '}
                <TableRedText>500</TableRedText>
                )
              </TableGrayText>
            </TableCellText>
          </TableCell>
          <TableCell>
            <Platforms>
              <Platform
                icon={<WebIcon />}
                name="Web"
              />
              <Platform
                icon={<TgIcon />}
                name="Telegram"
              />
              <Platform
                icon={<IosIcon />}
                name="iOS"
              />
              <Platform
                icon={<AndroidIcon />}
                name="Android"
              />
            </Platforms>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center">
            20
          </TableCell>
          <TableCell>
            <Avatar
              src={rytrLogo}
              size={24}
            />
            <TableCellText
              as="a"
              href="#"
            >
              Rytr.me
            </TableCellText>
          </TableCell>
          <TableCell>
            <Stars filled={5} />
          </TableCell>
          <TableCell>
            <Models>
              <Model
                icon={<Gpt35Icon />}
                name="ChatGPT 3.5"
              />
              <Model
                icon={<Gpt4Icon />}
                name="ChatGPT 4.0"
              />
              <Model
                icon={<DalleIcon />}
                name="DALL-E 3"
              />
              <Model
                icon={<MjIcon />}
                name="Midjourney"
              />
              <Model
                icon={<ClaudeIcon />}
                name="Claude AI"
              />
            </Models>
          </TableCell>
          <TableCell>
            <TableCellText>
              7513
              {' '}
              <TableGrayText>
                (
                <TableGreenText>6531</TableGreenText>
                {' '}
                |
                {' '}
                <TableRedText>500</TableRedText>
                )
              </TableGrayText>
            </TableCellText>
          </TableCell>
          <TableCell>
            <Platforms>
              <Platform
                icon={<WebIcon />}
                name="Web"
              />
              <Platform
                icon={<TgIcon />}
                name="Telegram"
              />
              <Platform
                icon={<IosIcon />}
                name="iOS"
              />
              <Platform
                icon={<AndroidIcon />}
                name="Android"
              />
            </Platforms>
          </TableCell>
        </TableRow>
      </>
    )
  }
};

export const Skeleton: TableStory = {
  args: {
    ...Basic.args,
    children: [...Array(20)].map((_, index) => (
      <TableRow
        key={index}
      >
        <TableCell
          align="center"
        >
          <BestChatBotsSkeleton 
            width={24}
          />
        </TableCell>
        <TableCell>
          <Avatar size={24}>
            <BestChatBotsSkeleton />
          </Avatar>
          <BestChatBotsSkeleton 
            width={120}
          />
        </TableCell>
        <TableCell>
          <BestChatBotsSkeleton 
            width={116}
          />
        </TableCell>
        <TableCell>
          <Models>
            {[...Array(5)].map((_, index) => (
              <Model 
                key={index}
                icon={<BestChatBotsSkeleton />}
              />
            ))}
          </Models>
        </TableCell>
        <TableCell>
          <BestChatBotsSkeleton 
            width={120}
          />
        </TableCell>
        <TableCell>
          <Platforms>
            {[...Array(4)].map((_, index) => (
              <Platform
                key={index}
                icon={<BestChatBotsSkeleton />}
              />
            ))}
          </Platforms>
        </TableCell>
      </TableRow>
    ))
  }
};

export default {
  title: 'Components/Table',
  component: Table,
  decorators: [StoryDecorator()]
} as TableMeta;
