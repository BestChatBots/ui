import React, { useCallback } from 'react';
import reactPaginateModule, { ReactPaginateProps } from 'react-paginate';
import { PaginationArrowLeftIcon, PaginationArrowRightIcon, PaginationStyled } from './styled';
import { useTheme } from '@/theme';
import { IconProvider } from '@/components/icon';
import { interopDefaultCJSImport } from '@/utils';

export const ReactPaginate = interopDefaultCJSImport(reactPaginateModule);

export type PaginationChangeEventHandler = (page: number) => unknown;

export interface PaginationProps extends Omit<React.ComponentProps<'div'>, 'onChange'> {
  page: number;
  pageCount: number;
  pageRangeDisplayed?: number;
  marginPagesDisplayed?: number;
  onChange?: PaginationChangeEventHandler;
}

export const Pagination: React.FC<PaginationProps> = ({
  page, pageCount, pageRangeDisplayed, marginPagesDisplayed, 
  onChange,
  ...props
}) => {
  const theme = useTheme();

  const handleChange = useCallback<Exclude<ReactPaginateProps['onPageChange'], undefined>>(({ selected }) => {
    onChange?.(selected + 1);
  }, [onChange]);

  return (
    <IconProvider
      size={18}
      fill={theme.colors.grayScale[500]}
    >
      <PaginationStyled 
        {...props}
      >
        <ReactPaginate
          forcePage={page - 1}
          pageCount={pageCount}
          pageRangeDisplayed={pageRangeDisplayed}
          marginPagesDisplayed={marginPagesDisplayed}
          containerClassName="container"
          pageClassName="page"
          pageLinkClassName="link"
          activeClassName="active"
          previousClassName="action prev"
          previousLinkClassName="link"
          nextClassName="action next"
          nextLinkClassName="link"
          disabledClassName="disabled"
          breakClassName="break"
          breakLinkClassName="link"
          breakLabel="..."
          previousLabel={<PaginationArrowLeftIcon />}
          nextLabel={<PaginationArrowRightIcon />}
          onPageChange={handleChange}
        />
      </PaginationStyled>
    </IconProvider>
  );
};
