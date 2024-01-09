import { css, styled } from 'styled-components';
import { Image } from '@/components/image';

export interface IconImageStyledProps {
  $round: boolean;
}

export const IconImageStyled = styled(Image)<IconImageStyledProps>`
  ${({ $round }) => $round && css`
    overflow: hidden;
    border-radius: 50%;
  `}
`;
