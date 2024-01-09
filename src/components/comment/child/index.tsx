import React from 'react';
import { 
  CommentChildBody,
  CommentChildDateCreated,
  CommentChildHead,
  CommentChildStyled, 
  CommentChildText, 
  CommentatorChild,
  CommentatorChildName
} from './styled';

export interface CommentChildProps extends React.ComponentProps<'div'> {
  avatar?: React.ReactNode;
  name?: React.ReactNode;
  dateCreated?: React.ReactNode;
}

export const CommentChild: React.FC<CommentChildProps> = ({
  avatar, name, dateCreated, children
}) => (
  <CommentChildStyled>
    <CommentChildHead>
      <CommentatorChild>
        {avatar}
        {typeof name === 'string' && (
          <CommentatorChildName>
            {name}
          </CommentatorChildName>
        )}
        {typeof name !== 'string' && name}
      </CommentatorChild>
      {typeof dateCreated === 'string' && (
        <CommentChildDateCreated>
          {dateCreated}
        </CommentChildDateCreated>
      )}
      {typeof dateCreated !== 'string' && dateCreated}
    </CommentChildHead>
    <CommentChildBody>
      {typeof children === 'string' && (
        <CommentChildText>
          {children}
        </CommentChildText>
      )}
      {typeof children !== 'string' && children}
    </CommentChildBody>
  </CommentChildStyled>
);

export * from './styled';
