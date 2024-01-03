import { styled } from 'styled-components';
import { Logo } from '@/components/logo';
import { Typography } from '@/components/typography';

export const SectionInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: inherit;
`;

export const SectionLogo = styled(Logo).attrs({ width: 458, height: 72 })``;

export const SectionText = styled(Typography)`
  font-family: ${({ theme }) => theme.fonts.rubik.regular};
  font-size: 34px;
  font-style: normal;
  line-height: normal;
  text-align: center;
  margin-top: 20px;
`;
