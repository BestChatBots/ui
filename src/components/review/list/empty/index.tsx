import React from 'react';
import { ReviewsEmptyIcon, ReviewsEmptyStyled, ReviewsText } from './styled';

export type ReviewsEmptyProps = React.PropsWithChildren;

export const ReviewsEmpty: React.FC<ReviewsEmptyProps> = ({
  children
}) => (
  <ReviewsEmptyStyled>
    <ReviewsEmptyIcon />
    {typeof children === 'string' && (
      <ReviewsText>
        {children}
      </ReviewsText>
    )}
    {typeof children !== 'string' && children}
  </ReviewsEmptyStyled>
);
