import { styled, css } from 'styled-components';
import lines from './assets/lines.png';
import { BackgroundVariant } from './types';

export interface BackgroundStyledProps {
  $variant: BackgroundVariant;
}

export const BackgroundStyled = styled.div<BackgroundStyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  pointer-events: none;
  ${({ $variant }) => {
    switch ($variant) {
      case 'lines': {
        return css`
          background: url(${JSON.stringify(lines)});
          background-position: center;
          background-repeat: no-repeat;
          background-size: 1440px 1123px;
          background-position: top center;
        `;
      }
      default:
        return css``;
    }
  }}
`;
