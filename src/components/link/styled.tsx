import { styled, css } from 'styled-components';
import { Typography } from '@/components/typography';

export const LinkStyled = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  text-decoration: none;
  ${({ theme }) => css`
    &:hover {
      ${LinkText} {
        color: ${theme.colors.accent.primary};
      }
      svg path {
        fill: ${theme.colors.accent.primary};
      }
    }
  `}
`;

export const LinkText = styled(Typography).attrs({ variant: 'body-s-regular' })`
  user-select: none;
`;
