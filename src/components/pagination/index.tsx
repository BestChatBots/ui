import React from 'react';
import ReactPaginate from 'react-paginate';
import { PaginationArrowLeftIcon, PaginationArrowRightIcon, PaginationStyled } from './styled';
import { useTheme } from '@/theme';
import { IconProvider } from '@/components/icon';

export interface PaginationProps extends React.ComponentProps<'div'> {
  page: number;
  pageCount: number;
  pageRangeDisplayed?: number;
  marginPagesDisplayed?: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  page, pageCount, pageRangeDisplayed, marginPagesDisplayed, ...props
}) => {
  const theme = useTheme();

  if (pageCount <= 1) {
    return null;
  }

  return (
    <IconProvider
      size={18}
      fill={theme.colors.grayScale[500]}
    >
      <PaginationStyled 
        {...props}
      >
        <ReactPaginate
          initialPage={page - 1}
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
        />
      </PaginationStyled>
    </IconProvider>
  );
};
