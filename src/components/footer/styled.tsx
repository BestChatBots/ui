import { styled, css } from 'styled-components';
import { Container } from '@/components/container';
import { Typography } from '@/components/typography';
import { adaptive } from '@/adaptive';

export const FooterStyled = styled.footer`
  background: ${({ theme }) => theme.colors.grayScale[800]};
  border-top: 1px solid ${({ theme }) => theme.colors.grayScale[700]};
`;

export const FooterContainer = styled(Container)``;

export const FooterContent = styled.div`
  display: flex;
  padding: 30px 0px;
  width: 100%;
  ${adaptive({
    merge: true,
    desktop: css`
      justify-content: space-between;
      align-items: center;
    `,
    tablet: css`
      flex-direction: column;
      align-items: center;
    `
  })}
`;

export const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  ${adaptive({
    merge: true,
    desktop: css`
      align-items: flex-start;
    `,
    tablet: css`
      align-items: center;
    `
  })}
`;

export const FooterLogoLink = styled.a`
  display: inline-flex;
`;

export const FooterRights = styled(Typography).attrs({ variant: 'body-s-regular' })`
  color: ${({ theme }) => theme.colors.grayScale[500]};
  margin-top: 10px;
  ${adaptive({
    merge: true,
    tablet: css`
      text-align: center;
    `
  })}
`;

export const FooterLinks = styled.div`
  display: flex;
  margin-top: 10px;
  ${adaptive({
    mobile: css`
      flex-direction: column;
      align-items: center;
      gap: 10px;
    `
  })}
`;

export const FooterLink = styled(Typography).attrs({ variant: 'body-s-regular' })`
  cursor: pointer;
  white-space: nowrap;
  ${adaptive({
    desktop: css`
      padding: 0px 10px;
      &:first-child {
        padding-left: 0px;
      }
      &:last-child {
        padding-right: 0px;
      }
      &:not(:first-child) {
        border-left: 1px solid ${({ theme }) => theme.colors.grayScale[600]};
      }
    `,
    tablet: css`
      padding: 0px 10px;
      &:first-child {
        padding-left: 0px;
      }
      &:last-child {
        padding-right: 0px;
      }
      &:not(:first-child) {
        border-left: 1px solid ${({ theme }) => theme.colors.grayScale[600]};
      }
    `,
    mobile: css`
      text-align: center;
    `
  })}
  &:hover {
    color: ${({ theme }) => theme.colors.accent.primary};
  }
`;

export const FooterNav = styled.nav`
  display: flex;
  gap: 30px;
  align-items: center;
  ${adaptive({
    merge: true,
    tablet: css`
      margin-top: 30px;
    `,
    mobile: css`
      flex-direction: column;
    `
  })}
`;
