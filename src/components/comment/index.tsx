import React from 'react';
import { CommentVariant } from './types';
import {
  CommentBadIcon,
  CommentBody,
  CommentDateCreated,
  CommentGoodIcon,
  CommentHead, 
  CommentHeadSide, 
  CommentStyled, 
  CommentText, 
  CommentTextSkeleton, 
  Commentator, 
  CommentatorAvatar, 
  CommentatorName 
} from './styled';
import { Skeleton } from '@/components/skeleton';

export interface CommentProps extends React.ComponentProps<'div'> {
  variant: CommentVariant;
  avatar?: React.ReactNode;
  name?: React.ReactNode;
  stars?: React.ReactNode;
  dateCreated?: React.ReactNode;
}

export const Comment: React.FC<CommentProps> = ({
  variant, avatar, name, stars, dateCreated, children, ...props
}) => (
  <CommentStyled
    $variant={variant}
    {...props}
  >
    <CommentHead>
      <CommentHeadSide>
        <Commentator>
          {variant === 'skeleton' && (
            <CommentatorAvatar>
              <Skeleton />
            </CommentatorAvatar>
          )}
          {variant !== 'skeleton' && avatar}
          {variant === 'skeleton' && (
            <Skeleton
              width={125}
              height={20}
            />
          )}
          {typeof name === 'string' && (
            <CommentatorName>
              {name}
            </CommentatorName>
          )}
          {typeof name !== 'string' && name}
        </Commentator>
        {variant === 'skeleton' && (
          <Skeleton
            width={114}
            height={18}
          />
        )}
        {stars}
      </CommentHeadSide>
      <CommentHeadSide>
        {variant === 'skeleton' && (
          <Skeleton
            width={158}
            height={20}
          />
        )}
        {typeof dateCreated === 'string' && (
          <CommentDateCreated>
            {dateCreated}
          </CommentDateCreated>
        )}
        {typeof dateCreated !== 'string' && dateCreated}
        {variant === 'skeleton' && (
          <Skeleton
            width={18}
            height={18}
          />
        )}
        {variant === 'good' && (
          <CommentGoodIcon />
        )}
        {variant === 'bad' && (
          <CommentBadIcon />
        )}
      </CommentHeadSide>
    </CommentHead>
    <CommentBody>
      {variant === 'skeleton' && (
        <CommentTextSkeleton>
          {[...Array(3)].map((_, index) => (
            <Skeleton 
              key={index}
            />
          ))}
        </CommentTextSkeleton>
      )}
      {typeof children === 'string' && (
        <CommentText>
          {children}
        </CommentText>
      )}
      {typeof children !== 'string' && children}
    </CommentBody>
  </CommentStyled>
);

export * from './types';
export * from './styled';
export * from './list';
export * from './child';
