import { css, styled } from 'styled-components';
import { adaptive } from '@/adaptive';

export interface ContainerStyledProps {
  $disabled: boolean;
}

export const ContainerStyled = styled.div<ContainerStyledProps>`
  ${({ $disabled }) => {
    if ($disabled) {
      return css``;
    }

    const adaptiveStyle = adaptive({
      desktop: css`
        padding: 0px 40px;
      `,
      tablet: css`
        padding: 0px 20px;
      `,
      mobile: css`
        padding: 0px 16px;
      `
    });

    return css`
      width: 100%;
      max-width: 1370px;
      margin: auto;
      ${adaptiveStyle}
    `;
  }}
`;
