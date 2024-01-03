import { styled, css } from 'styled-components';
import { Typography } from '@/components/typography';
import { adaptive } from '@/adaptive';

export const FooterNavLinkStyled = styled(Typography).attrs({ variant: 'body-m-regular' })`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  &:hover {
    color: ${({ theme }) => theme.colors.accent.primary};
  }
  ${adaptive({
    mobile: css`
      justify-content: center;
    `
  })}
`;
