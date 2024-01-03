import { styled, css } from 'styled-components';
import { LinkOutIcon } from '@/icons';
import { Typography } from '@/components/typography';

export const ExternalLinkStyled = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  text-decoration: none;
  ${({ theme }) => css`
    &:hover {
      ${ExternalLinkText} {
        color: ${theme.colors.accent.primary};
      }
      ${ExternalLinkIcon} path {
        fill: ${theme.colors.accent.primary};
      }
    }
  `}
`;

export const ExternalLinkText = styled(Typography).attrs({ variant: 'body-s-regular' })`
  user-select: none;
`;

export const ExternalLinkIcon = styled(LinkOutIcon).attrs({ size: 18 })``;
