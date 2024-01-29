import React from 'react';
import { 
  ReviewChildBody,
  ReviewChildDateCreated,
  ReviewChildHead,
  ReviewChildStyled, 
  ReviewChildText, 
  ReviewerChild,
  ReviewerChildName
} from './styled';

export interface ReviewChildProps extends React.ComponentProps<'div'> {
  avatar?: React.ReactNode;
  name?: React.ReactNode;
  dateCreated?: React.ReactNode;
}

export const ReviewChild: React.FC<ReviewChildProps> = ({
  avatar, name, dateCreated, children
}) => (
  <ReviewChildStyled>
    <ReviewChildHead>
      <ReviewerChild>
        {avatar}
        {typeof name === 'string' && (
          <ReviewerChildName>
            {name}
          </ReviewerChildName>
        )}
        {typeof name !== 'string' && name}
      </ReviewerChild>
      {typeof dateCreated === 'string' && (
        <ReviewChildDateCreated>
          {dateCreated}
        </ReviewChildDateCreated>
      )}
      {typeof dateCreated !== 'string' && dateCreated}
    </ReviewChildHead>
    <ReviewChildBody>
      {typeof children === 'string' && (
        <ReviewChildText>
          {children}
        </ReviewChildText>
      )}
      {typeof children !== 'string' && children}
    </ReviewChildBody>
  </ReviewChildStyled>
);

export * from './styled';
