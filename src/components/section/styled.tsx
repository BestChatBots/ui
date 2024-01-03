import { css, styled } from 'styled-components';
import { Container } from '@/components/container';
import { adaptive } from '@/adaptive';

export interface SectionStyledProps {
  $bg: boolean;
  $fullHeight: boolean;
}

export const SectionStyled = styled.section<SectionStyledProps>`
  background: ${({ theme }) => theme.colors.base.black};
  ${({ $bg }) => $bg && css`
    position: relative;
    overflow: hidden;
  `}
  ${({ theme, $fullHeight }) => $fullHeight && adaptive({
    desktop: css`
      min-height: calc(100vh - ${theme.header.height});
    `,
    tablet: css`
      min-height: calc(100vh - ${theme.header.tablet.height});
    `,
    mobile: css`
      min-height: calc(100vh - ${theme.header.mobile.height});
    `
  })}
`;

export interface SectionContentProps {
  $fullHeight: boolean;
}

export const SectionContent = styled.div<SectionContentProps>`
  position: relative;
  ${({ $fullHeight }) => $fullHeight && css`
    min-height: inherit;
  `}
`;

export interface SectionContainerProps {
  $fullHeight: boolean;
}

export const SectionContainer = styled(Container)<SectionContainerProps>`
  ${({ $fullHeight }) => $fullHeight && css`
    min-height: inherit;
  `}
`;
