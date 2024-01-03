import { styled, css } from 'styled-components';
import { TypographyAlign, TypographyVariant } from './types';
import { adaptive } from '@/adaptive';

export interface TypographyStyledProps {
  $variant: TypographyVariant;
  $align: TypographyAlign;
  $fullWidth: boolean;
}

export const TypographyStyled = styled.span<TypographyStyledProps>`
  margin: 0px;
  color: ${({ theme }) => theme.colors.base.white};
  font-weight: normal;
  text-decoration: none;
  text-align: ${({ $align }) => $align};
  --bestchatbots-skeleton-width: 200px;
  &::selection {
    color: ${({ theme }) => theme.colors.base.white};
    background: ${({ theme }) => theme.colors.accent.primary};
  }
  ${({ $fullWidth }) => $fullWidth && css`
    width: 100%;
  `}
  ${({ theme, $variant }) => {
    switch ($variant) {
      case 'h1':
        return adaptive({
          merge: true,
          desktop: css`
            font-family: ${theme.fonts.rubik.semiBold};
            font-size: 38px;
            line-height: 48px;
            --bestchatbots-skeleton-height: 48px;
          `,
          tablet: css`
            font-size: 32px;
            line-height: 40px;
            --bestchatbots-skeleton-height: 40px;
          `,
          mobile: css`
            font-size: 26px;
            line-height: 34px;
            --bestchatbots-skeleton-height: 34px;
          `
        });
      case 'h2':
        return adaptive({
          merge: true,
          desktop: css`
            font-family: ${theme.fonts.rubik.semiBold};
            font-size: 32px;
            line-height: 40px;
            --bestchatbots-skeleton-height: 40px;
          `,
          tablet: css`
            font-size: 28px;
            line-height: 34px;
            --bestchatbots-skeleton-height: 34px;
          `,
          mobile: css`
            font-size: 22px;
            line-height: 26px;
            --bestchatbots-skeleton-height: 26px;
          `
        });
      case 'h3':
        return adaptive({
          merge: true,
          desktop: css`
            font-family: ${theme.fonts.rubik.semiBold};
            font-size: 26px;
            line-height: 34px;
            --bestchatbots-skeleton-height: 34px;
          `,
          tablet: css`
            font-size: 24px;
            line-height: 28px;
            --bestchatbots-skeleton-height: 28px;
          `,
          mobile: css`
            font-size: 20px;
            line-height: 24px;
            --bestchatbots-skeleton-height: 24px;
          `
        });
      case 'h4':
        return adaptive({
          merge: true,
          desktop: css`
            font-family: ${theme.fonts.rubik.semiBold};
            font-size: 22px;
            line-height: 26px;
            --bestchatbots-skeleton-height: 26px;
          `,
          tablet: css`
            font-size: 20px;
            line-height: 24px;
            --bestchatbots-skeleton-height: 24px;
          `,
          mobile: css`
            font-size: 18px;
            line-height: 22px;
            --bestchatbots-skeleton-height: 22px;
          `
        });
      case 'body-xl-semibold':
        return adaptive({
          merge: true,
          desktop: css`
            font-family: ${theme.fonts.rubik.semiBold};
            font-size: 22px;
            line-height: 26px;
            --bestchatbots-skeleton-height: 26px;
          `,
          tablet: css`
            font-size: 20px;
            line-height: 24px;
            --bestchatbots-skeleton-height: 24px;
          `,
          mobile: css`
            font-size: 18px;
            line-height: 22px;
            --bestchatbots-skeleton-height: 22px;
          `
        });
      case 'body-l-semibold':
        return adaptive({
          merge: true,
          desktop: css`
            font-family: ${theme.fonts.rubik.semiBold};
            font-size: 18px;
            line-height: 22px;
            --bestchatbots-skeleton-height: 22px;
          `,
          tablet: css`
            font-size: 18px;
            line-height: 22px;
            --bestchatbots-skeleton-height: 22px;
          `,
          mobile: css`
            font-size: 16px;
            line-height: 20px;
            --bestchatbots-skeleton-height: 20px;
          `
        });
      case 'body-l-regular':
        return adaptive({
          merge: true,
          desktop: css`
            font-family: ${theme.fonts.rubik.regular};
            font-size: 18px;
            line-height: 22px;
            --bestchatbots-skeleton-height: 22px;
          `,
          tablet: css`
            font-size: 18px;
            line-height: 22px;
            --bestchatbots-skeleton-height: 22px;
          `,
          mobile: css`
            font-size: 16px;
            line-height: 20px;
            --bestchatbots-skeleton-height: 20px;
          `
        });
      case 'body-m-medium':
        return adaptive({
          merge: true,
          desktop: css`
            font-family: ${theme.fonts.rubik.medium};
            font-size: 16px;
            line-height: 20px;
            --bestchatbots-skeleton-height: 20px;
          `,
          tablet: css`
            font-size: 16px;
            line-height: 20px;
            --bestchatbots-skeleton-height: 20px;
          `,
          mobile: css`
            font-size: 15px;
            line-height: 18px;
            --bestchatbots-skeleton-height: 18px;
          `
        });
      case 'body-m-regular':
        return adaptive({
          merge: true,
          desktop: css`
            font-family: ${theme.fonts.rubik.regular};
            font-size: 16px;
            line-height: 20px;
            --bestchatbots-skeleton-height: 20px;
          `,
          tablet: css`
            font-size: 16px;
            line-height: 20px;
            --bestchatbots-skeleton-height: 20px;
          `,
          mobile: css`
            font-size: 15px;
            line-height: 18px;
            --bestchatbots-skeleton-height: 18px;
          `
        });
      case 'body-s-medium':
        return adaptive({
          merge: true,
          desktop: css`
            font-family: ${theme.fonts.rubik.medium};
            font-size: 14px;
            line-height: 18px;
            --bestchatbots-skeleton-height: 18px;
          `,
          tablet: css`
            font-size: 14px;
            line-height: 18px;
            --bestchatbots-skeleton-height: 18px;
          `,
          mobile: css`
            font-size: 14px;
            line-height: 18px;
            --bestchatbots-skeleton-height: 18px;
          `
        });
      case 'body-s-regular':
        return adaptive({
          merge: true,
          desktop: css`
            font-family: ${theme.fonts.rubik.regular};
            font-size: 14px;
            line-height: 18px;
            --bestchatbots-skeleton-height: 18px;
          `,
          tablet: css`
            font-size: 14px;
            line-height: 18px;
            --bestchatbots-skeleton-height: 18px;
          `,
          mobile: css`
            font-size: 14px;
            line-height: 18px;
            --bestchatbots-skeleton-height: 18px;
          `
        });
      case 'button-md':
        return css`
          font-family: ${theme.fonts.rubik.medium};
          font-size: 16px;
          line-height: 20px;
          --bestchatbots-skeleton-height: 20px;
        `;
      case 'button-sm':
        return css`
          font-family: ${theme.fonts.rubik.medium};
          font-size: 14px;
          line-height: 18px;
          --bestchatbots-skeleton-height: 18px;
        `;
    }
  }}
`;
