import React from 'react';
import {
  IconsGroup, IconsGroupContent, IconsStyled, IconsGroupName 
} from './styled';
import { IconItem } from './item';
import { IconImage, IconProvider, IconProviderProps } from '@/components/icon';
import { 
  AndroidIcon,
  ArrowDownIcon,
  ArrowFilterIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  AttachIcon,
  CircleCheckIcon,
  ClaudeIcon,
  CloseIcon,
  CommentsIcon,
  DalleIcon,
  ErrorIcon,
  EyeIcon,
  FilterIcon,
  FlagEngIcon,
  FlagRusIcon,
  GearIcon,
  Gpt35Icon,
  Gpt4Icon,
  InfoCircle2Icon,
  InfoCircleIcon,
  InfoIcon,
  IosIcon,
  LangIcon,
  LinkOutIcon,
  Loader2Icon,
  LoaderIcon,
  LogoutIcon,
  MailIcon,
  MenuIcon,
  MjIcon,
  ModelIcon,
  NoimgIcon,
  OfficialProfileIcon,
  PlatformIcon,
  PlusIcon,
  ProjectsIcon,
  RatingIcon, 
  ReviewBigIcon, 
  SearchIcon, 
  StarFilledIcon,
  StarOutlineIcon,
  TgBasicIcon,
  TgIcon,
  ThumbDownIcon,
  ThumbUpIcon,
  TopIcon,
  TrashIcon,
  UploadIcon,
  WarningIcon,
  WebIcon
} from '@/icons';

export type IconsProps = IconProviderProps;

export const Icons: React.FC<IconsProps> = ({ ...props }) => (
  <IconProvider {...props}>
    <IconsStyled>
      <IconsGroup>
        <IconsGroupName>Icons</IconsGroupName>
        <IconsGroupContent>
          <IconItem name="RatingIcon">{RatingIcon}</IconItem>
          <IconItem name="InfoIcon">{InfoIcon}</IconItem>
          <IconItem name="MailIcon">{MailIcon}</IconItem>
          <IconItem name="StarFilledIcon">{StarFilledIcon}</IconItem>
          <IconItem name="StarOutlineIcon">{StarOutlineIcon}</IconItem>
          <IconItem name="Gpt35Icon">{Gpt35Icon}</IconItem>
          <IconItem name="Gpt4Icon">{Gpt4Icon}</IconItem>
          <IconItem name="DalleIcon">{DalleIcon}</IconItem>
          <IconItem name="MjIcon">{MjIcon}</IconItem>
          <IconItem name="ClaudeIcon">{ClaudeIcon}</IconItem>
          <IconItem name="WebIcon">{WebIcon}</IconItem>
          <IconItem name="TgIcon">{TgIcon}</IconItem>
          <IconItem name="IosIcon">{IosIcon}</IconItem>
          <IconItem name="AndroidIcon">{AndroidIcon}</IconItem>
          <IconItem name="ArrowFilterIcon">{ArrowFilterIcon}</IconItem>
          <IconItem name="SearchIcon">{SearchIcon}</IconItem>
          <IconItem name="ArrowDownIcon">{ArrowDownIcon}</IconItem>
          <IconItem name="ArrowUpIcon">{ArrowUpIcon}</IconItem>
          <IconItem name="ArrowLeftIcon">{ArrowLeftIcon}</IconItem>
          <IconItem name="ArrowRightIcon">{ArrowRightIcon}</IconItem>
          <IconItem name="TopIcon">{TopIcon}</IconItem>
          <IconItem name="MenuIcon">{MenuIcon}</IconItem>
          <IconItem name="FilterIcon">{FilterIcon}</IconItem>
          <IconItem name="InfoCircleIcon">{InfoCircleIcon}</IconItem>
          <IconItem name="CloseIcon">{CloseIcon}</IconItem>
          <IconItem name="EyeIcon">{EyeIcon}</IconItem>
          <IconItem name="CommentsIcon">{CommentsIcon}</IconItem>
          <IconItem name="LinkOutIcon">{LinkOutIcon}</IconItem>
          <IconItem name="ThumbUpIcon">{ThumbUpIcon}</IconItem>
          <IconItem name="ThumbDownIcon">{ThumbDownIcon}</IconItem>
          <IconItem name="CircleCheckIcon">{CircleCheckIcon}</IconItem>
          <IconItem name="GearIcon">{GearIcon}</IconItem>
          <IconItem name="ProjectsIcon">{ProjectsIcon}</IconItem>
          <IconItem name="LangIcon">{LangIcon}</IconItem>
          <IconItem name="OfficialProfileIcon">{OfficialProfileIcon}</IconItem>
          <IconItem name="LogoutIcon">{LogoutIcon}</IconItem>
          <IconItem name="UploadIcon">{UploadIcon}</IconItem>
          <IconItem name="FlagRusIcon">{FlagRusIcon}</IconItem>
          <IconItem name="FlagEngIcon">{FlagEngIcon}</IconItem>
          <IconItem name="InfoCircle2Icon">{InfoCircle2Icon}</IconItem>
          <IconItem name="TgBasicIcon">{TgBasicIcon}</IconItem>
          <IconItem name="TrashIcon">{TrashIcon}</IconItem>
          <IconItem name="AttachIcon">{AttachIcon}</IconItem>
          <IconItem name="NoimgIcon">{NoimgIcon}</IconItem>
          <IconItem name="ErrorIcon">{ErrorIcon}</IconItem>
          <IconItem name="WarningIcon">{WarningIcon}</IconItem>
          <IconItem name="PlusIcon">{PlusIcon}</IconItem>
          <IconItem name="ModelIcon">{ModelIcon}</IconItem>
          <IconItem name="PlatformIcon">{PlatformIcon}</IconItem>
          <IconItem name="LoaderIcon">{LoaderIcon}</IconItem>
          <IconItem name="Loader2Icon">{Loader2Icon}</IconItem>
          <IconItem name="ReviewBigIcon">{ReviewBigIcon}</IconItem>
        </IconsGroupContent>
      </IconsGroup>
      <IconsGroup>
        <IconsGroupName>
          Images
        </IconsGroupName>
        <IconsGroupContent>
          <IconImage 
            src="https://bothub.chat/favicon.png"
            alt="Bothub Chat"
          />
        </IconsGroupContent>
      </IconsGroup>
    </IconsStyled>
  </IconProvider>
);
