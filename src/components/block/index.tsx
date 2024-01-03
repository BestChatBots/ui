import React from 'react';
import {
  BlockBody, 
  BlockBodyContent, 
  BlockBodyScrollbarWrapper,
  BlockDivider, 
  BlockHead, 
  BlockStyled, 
  BlockTitle 
} from './styled';

export interface BlockProps extends React.PropsWithChildren {
  className?: string;
  title?: string;
  background?: React.ReactNode;
  fullHeight?: boolean;
  inline?: boolean;
  scrollbar?: boolean;
}

export const Block: React.FC<BlockProps> = ({ 
  className, title, background, fullHeight = false, inline = false, scrollbar = false, children 
}) => {
  const isHead = !!title;

  const contentNode: React.ReactNode = (
    <BlockBodyContent
      $head={isHead}
      $fullHeight={fullHeight}
    >
      {children}
    </BlockBodyContent>
  );
  
  let scrollbarNode: React.ReactNode;
  if (scrollbar) {
    scrollbarNode = (
      <BlockBodyScrollbarWrapper
        disabled={inline}
      >
        {contentNode}
      </BlockBodyScrollbarWrapper>
    );
  } else {
    scrollbarNode = contentNode;
  }

  const bodyNode: React.ReactNode = (
    <BlockBody
      $head={isHead}
    >
      {background}
      {scrollbarNode}
    </BlockBody>
  );

  return (
    <BlockStyled
      $inline={inline}
      $scrollbar={scrollbar}
      className={className}
    >
      {isHead && (
        <BlockHead>
          <BlockTitle>
            {title}
          </BlockTitle>
          <BlockDivider />
        </BlockHead>
      )}
      {bodyNode}
    </BlockStyled>
  );
};

export * from './styled';
