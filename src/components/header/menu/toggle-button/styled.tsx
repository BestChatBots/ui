import { css, styled } from 'styled-components';
import { Button } from '@/components/button';
import { adaptive } from '@/adaptive';

export const HeaderMenuToggleButtonStyled = styled(Button).attrs(() => ({ 
  variant: 'text', 
  iconSize: 20
}))`
  margin-left: 20px;
  svg path {
    stroke: ${({ theme }) => theme.colors.accent.primary};
  }
  &:hover {
    svg path {
      stroke: ${({ theme }) => theme.colors.accent.strong};
    }
  }
  ${adaptive({
    desktop: css`
      display: none;
    `
  })}
`;
