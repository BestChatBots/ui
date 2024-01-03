import React from 'react';
import { 
  FooterContainer, 
  FooterContent, 
  FooterInfo,
  FooterStyled 
} from './styled';

export interface FooterProps {
  logo: React.ReactNode;
  rights: React.ReactNode;
  links: React.ReactNode;
  nav: React.ReactNode;
}

export const Footer: React.FC<FooterProps> = ({
  logo, rights, links, nav
}) => (
  <FooterStyled>
    <FooterContainer>
      <FooterContent>
        <FooterInfo>
          {logo}
          {rights}
          {links}
        </FooterInfo>
        {nav}
      </FooterContent>
    </FooterContainer>
  </FooterStyled>
);

export * from './nav';
export * from './styled';
