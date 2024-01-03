import { styled, css } from 'styled-components';
import { Button } from '@/components/button';
import { adaptive } from '@/adaptive';

export interface HeaderButtonsStyledProps {
  $inMenu: boolean;
}

export const HeaderButtonsStyled = styled.div<HeaderButtonsStyledProps>`
  ${({ $inMenu }) => {
    if ($inMenu) {
      const adaptiveStyle = adaptive({
        mobile: css`
          gap: 16px;
        `
      });

      return css`
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;
        margin-top: 24px;
        ${adaptiveStyle}
      `;
    }

    const adaptiveStyle = adaptive({
      merge: true,
      tablet: css`
        display: none;
      `
    });

    return css`
      display: flex;
      gap: 20px;
      flex-shrink: 0;
      margin-right: 20px;
      ${adaptiveStyle}
    `;
  }}
`;

export const HeaderButton = styled(Button)``;
