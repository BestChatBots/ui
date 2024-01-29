import React from 'react';
import { ReviewVariant } from './types';
import {
  ReviewBadIcon,
  ReviewBody,
  ReviewDateCreated,
  ReviewGoodIcon,
  ReviewHead, 
  ReviewHeadSide, 
  ReviewStyled, 
  ReviewText, 
  ReviewTextSkeleton, 
  Reviewer, 
  ReviewerAvatar, 
  ReviewerName 
} from './styled';
import { Skeleton } from '@/components/skeleton';

export interface ReviewProps extends React.ComponentProps<'div'> {
  variant: ReviewVariant;
  avatar?: React.ReactNode;
  name?: React.ReactNode;
  stars?: React.ReactNode;
  dateCreated?: React.ReactNode;
}

export const Review: React.FC<ReviewProps> = ({
  variant, avatar, name, stars, dateCreated, children, ...props
}) => (
  <ReviewStyled
    $variant={variant}
    {...props}
  >
    <ReviewHead>
      <ReviewHeadSide>
        <Reviewer>
          {variant === 'skeleton' && (
            <ReviewerAvatar>
              <Skeleton />
            </ReviewerAvatar>
          )}
          {variant !== 'skeleton' && avatar}
          {variant === 'skeleton' && (
            <Skeleton
              width={125}
              height={20}
            />
          )}
          {typeof name === 'string' && (
            <ReviewerName>
              {name}
            </ReviewerName>
          )}
          {typeof name !== 'string' && name}
        </Reviewer>
        {variant === 'skeleton' && (
          <Skeleton
            width={114}
            height={18}
          />
        )}
        {stars}
      </ReviewHeadSide>
      <ReviewHeadSide>
        {variant === 'skeleton' && (
          <Skeleton
            width={158}
            height={20}
          />
        )}
        {typeof dateCreated === 'string' && (
          <ReviewDateCreated>
            {dateCreated}
          </ReviewDateCreated>
        )}
        {typeof dateCreated !== 'string' && dateCreated}
        {variant === 'skeleton' && (
          <Skeleton
            width={18}
            height={18}
          />
        )}
        {variant === 'good' && (
          <ReviewGoodIcon />
        )}
        {variant === 'bad' && (
          <ReviewBadIcon />
        )}
      </ReviewHeadSide>
    </ReviewHead>
    <ReviewBody>
      {variant === 'skeleton' && (
        <ReviewTextSkeleton>
          {[...Array(3)].map((_, index) => (
            <Skeleton 
              key={index}
            />
          ))}
        </ReviewTextSkeleton>
      )}
      {typeof children === 'string' && (
        <ReviewText>
          {children}
        </ReviewText>
      )}
      {typeof children !== 'string' && children}
    </ReviewBody>
  </ReviewStyled>
);

export * from './types';
export * from './styled';
export * from './list';
export * from './child';
