import { styled } from 'styled-components';

export interface AvatarStyledProps {
  $size: number;
}

export const AvatarStyled = styled.span<AvatarStyledProps>`
  display: inline-flex;
  flex-shrink: 0;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  overflow: hidden;
  border-radius: 50%;
  user-select: none;
`;

export const AvatarObject = styled.object`
  display: inline-flex;
  width: inherit;
  height: inherit;
`;

export const AvatarImage = styled.img`
  display: inline-flex;
  width: inherit;
  height: inherit;
`;
