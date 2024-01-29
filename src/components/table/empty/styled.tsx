import { css, styled } from 'styled-components';
import { SearchIcon } from '@/icons';
import { Typography } from '@/components/typography';
import { adaptive } from '@/adaptive';

export const TableEmptyStyled = styled.div`
  display: flex;
  width: 100%;
`;

export interface TableEmptyContainerProps {
  $fullWidth: boolean;
}

export const TableEmptyContainer = styled.div<TableEmptyContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: ${({ theme, $fullWidth }) => (
    $fullWidth && theme.table.maxWidth
  )};
  ${adaptive({
    desktop: css`
      min-height: 500px;
    `,
    tablet: css`
      min-height: 300px;
    `,
    mobile: css`
      min-height: 200px;
    `
  })}
`;

export const TableEmptyContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const TableEmptyIcon = styled(SearchIcon).attrs({ size: 60 })``;

export const TableEmptyTitle = styled(Typography).attrs({ component: 'h3', variant: 'body-xl-semibold' })`
  text-align: center;
  margin-top: 12px;
`;

export const TableEmptyText = styled(Typography).attrs({ component: 'p', variant: 'body-m-regular' })`
  color: ${({ theme }) => theme.colors.grayScale[400]};
  margin-top: 12px;
  text-align: center;
  ${adaptive({
    mobile: css`
      max-width: 343px;
    `
  })}
`;
