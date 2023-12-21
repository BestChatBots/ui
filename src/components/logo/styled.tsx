import { styled, css } from 'styled-components';

export const LogoStyled = styled.svg`
  display: inline-flex;
  ${({ width }) => width && css`
    width: ${parseInt(width.toString())}px;
  `}
  ${({ height }) => height && css`
    height: ${parseInt(height.toString())}px;
  `}
`;
