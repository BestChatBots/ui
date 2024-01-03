import React from 'react';
import {
  HeaderUserInfoContent, HeaderUserInfoSide, HeaderUserInfoStyled, HeaderUserName 
} from './styled';
import { useHeaderMenu } from '../menu';

export interface HeaderUserInfoProps {
  avatar: React.ReactNode;
  name: string;
  logout: React.ReactNode;
}

export const HeaderUserInfo: React.FC<HeaderUserInfoProps> = ({
  avatar, name, logout
}) => {
  const { isInMenu } = useHeaderMenu();

  return (
    <HeaderUserInfoStyled
      $inMenu={isInMenu}
    >
      <HeaderUserInfoContent>
        <HeaderUserInfoSide>
          {avatar}
          <HeaderUserName>
            {name}
          </HeaderUserName>
        </HeaderUserInfoSide>
        <HeaderUserInfoSide>
          {logout}
        </HeaderUserInfoSide>
      </HeaderUserInfoContent>
    </HeaderUserInfoStyled>
  );
};

export * from './styled';
