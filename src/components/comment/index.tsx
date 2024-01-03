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
  Commentator, 
  CommentatorName 
} from './styled';

export interface CommentProps extends React.ComponentProps<'div'> {
  variant: CommentVariant;
  avatar: React.ReactNode;
  name: React.ReactNode;
  stars: React.ReactNode;
  dateCreated: React.ReactNode;
  children: React.ReactNode;
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
          {avatar}
          {typeof name === 'string' && (
            <CommentatorName>
              {name}
            </CommentatorName>
          )}
          {typeof name !== 'string' && children}
        </Commentator>
        {stars}
      </CommentHeadSide>
      <CommentHeadSide>
        {typeof dateCreated === 'string' && (
          <CommentDateCreated>
            {dateCreated}
          </CommentDateCreated>
        )}
        {typeof dateCreated !== 'string' && dateCreated}
        {variant === 'good' && (
          <CommentGoodIcon />
        )}
        {variant === 'bad' && (
          <CommentBadIcon />
        )}
      </CommentHeadSide>
    </CommentHead>
    <CommentBody>
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
