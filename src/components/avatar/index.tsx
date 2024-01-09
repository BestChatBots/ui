import React from 'react';
import {
  AvatarImage, AvatarObject, AvatarStyled 
} from './styled';
import defaultAvatar from './assets/default-avatar.png';

export interface AvatarProps extends React.ComponentProps<'img'> {
  type?: string;
  size?: number;
}

export const Avatar: React.FC<AvatarProps> = ({
  className, style, type = 'image/jpeg', size = 40, src, alt, children, ...props
}) => {
  const isSkeleton = React.isValidElement(children) && (children.type as React.FC).displayName === 'Skeleton';

  return (
    <AvatarStyled
      {...props}
      $size={size}
      className={className}
      style={style}
    >
      {!isSkeleton && (
        <>
          {typeof src === 'string' && (
            <AvatarObject
              data={src}
              width={size}
              height={size}
              type={type}
            >
              <AvatarImage
                src={defaultAvatar}
                width={size}
                height={size}
                alt={alt}
              />
            </AvatarObject>
          )}
          {typeof src !== 'string' && (
            <AvatarObject
              data={defaultAvatar}
              width={size}
              height={size}
            />
          )}
        </>
      )}
      {isSkeleton && children}
    </AvatarStyled>
  );
};
