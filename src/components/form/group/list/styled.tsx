import { styled, css } from 'styled-components';

export const FormGroupsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export interface FormGroupListProps {
  $spacing?: number;
  $width?: number;
}

export const FormGroupList = styled.div<FormGroupListProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  ${({ $width }) => $width && css`
    max-width: ${$width}px;
  `}
  gap: ${({ $spacing }) => {
    if (typeof $spacing === 'number') {
      return `${$spacing}px`;
    }

    return '24px';
  }};
`;
