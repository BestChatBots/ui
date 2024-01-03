import { css, styled } from 'styled-components';
import { Container } from '@/components/container';
import { Button } from '@/components/button';
import { adaptive } from '@/adaptive';

export const HeaderStyled = styled.header`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const HeaderOffset = styled.div`
  display: flex;
  width: 100%;
  ${adaptive(({ theme }) => ({
    desktop: css`
      height: ${theme.header.height};
    `,
    tablet: css`
      height: ${theme.header.tablet.height};
    `,
    mobile: css`
      height: ${theme.header.mobile.height};
    `
  }))}
`;

export const HeaderContent = styled(HeaderOffset)`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: ${({ theme }) => theme.zIndex.header};
  background: ${({ theme }) => theme.colors.grayScale[800]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayScale[700]};
`;

export const HeaderContainer = styled(Container)``;

export const HeaderContainerContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderAddProjectButton = styled(Button)``;
