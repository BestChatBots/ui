import { css, styled } from 'styled-components';
import { Scrollbar, ScrollbarShadow } from '@/components/scrollbar';
import { Typography } from '@/components/typography';
import { adaptive } from '@/adaptive';

export interface BlockStyledProps {
  $inline: boolean;
  $scrollbar: boolean;
}

export const BlockStyled = styled.div<BlockStyledProps>`
  display: ${({ $inline }) => ($inline ? 'inline-flex' : 'flex')};
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  transition: background 0.3s;
  background: ${({ theme }) => theme.colors.grayScale[800]};
  border-radius: 12px;
  ${({ $inline }) => !$inline && css`
    width: 100%;
    height: 100%;
  `}
  ${({ $scrollbar }) => $scrollbar && css`
    overflow: hidden;
    max-height: 100vh;
  `}
`;

export const BlockHead = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${adaptive({
    desktop: css`
      padding: 20px;
    `,
    tablet: css`
      padding: 20px;
    `,
    mobile: css`
      padding: 20px 16px;
    `
  })}
  padding-bottom: 0px !important;
`;

export const BlockTitle = styled(Typography).attrs({ component: 'h2', variant: 'h2' })``;

export const BlockDivider = styled.div`
  display: flex;
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.grayScale[600]};
  ${adaptive({
    desktop: css`
      margin-top: 20px;
    `,
    tablet: css`
      margin-top: 20px;
    `,
    mobile: css`
      margin-top: 20px;
    `
  })}
`;

export interface BlockBodyProps {
  $head: boolean;
}

export const BlockBody = styled.div<BlockBodyProps>`
  display: flex;
  overflow: hidden;
  width: 100%;
  flex-grow: 1;
  ${adaptive({
    desktop: css`
      padding: 20px 0px;
    `,
    tablet: css`
      padding: 20px 0px;
    `,
    mobile: css`
      padding: 20px 0px;
    `
  })}
  ${({ $head }) => $head && css`
    padding-top: 0px !important;
  `}
  position: relative;
`;

export const BlockBodyScrollbarWrapper = styled(Scrollbar).attrs({
  variant: 'secondary',
  scrollShadows: {
    size: 140,
    top: <ScrollbarShadow side="top" />,
    bottom: <ScrollbarShadow side="bottom" />
  }
})`
  height: 100%;
  overflow: auto;
`;

export interface BlockBodyContentProps {
  $head: boolean;
  $fullHeight: boolean;
}

export const BlockBodyContent = styled.div<BlockBodyContentProps>`
  ${adaptive({
    desktop: css`
      padding: 0px 20px;
    `,
    tablet: css`
      padding: 0px 20px;
    `,
    mobile: css`
      padding: 0px 16px;
    `
  })}
  ${({ $head }) => $head && adaptive({
    desktop: css`
      padding-top: 20px !important;
    `,
    tablet: css`
      padding-top: 20px !important;
    `,
    mobile: css`
      padding-top: 20px !important;
    `
  })}
  ${({ $fullHeight }) => $fullHeight && css`
    height: 100%;
  `}
`;
